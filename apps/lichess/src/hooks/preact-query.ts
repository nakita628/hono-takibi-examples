import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function getApiUsersStatusQueryKey(
  args: InferRequestType<typeof client.api.users.status.$get>,
) {
  return ['api', '/api/users/status', args] as const
}

export function getApiUsersStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.users.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersStatusQueryKey>
  >({
    queryKey: getApiUsersStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiUsersStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.users.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUsersStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUsersStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.users.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUsersStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPlayerQueryKey() {
  return ['api', '/api/player'] as const
}

export function getApiPlayerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.player.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.player.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPlayerQueryKey>
  >({
    queryKey: getApiPlayerQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.player.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPlayer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.player.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.player.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPlayerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPlayerQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPlayer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.player.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.player.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPlayerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPlayerQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPlayerTopNbPerfTypeQueryKey(
  args: InferRequestType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>,
) {
  return ['api', '/api/player/top/:nb/:perfType', args] as const
}

export function getApiPlayerTopNbPerfTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPlayerTopNbPerfTypeQueryKey>
  >({
    queryKey: getApiPlayerTopNbPerfTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.player.top[':nb'][':perfType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPlayerTopNbPerfType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPlayerTopNbPerfTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiPlayerTopNbPerfTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPlayerTopNbPerfType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPlayerTopNbPerfTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiPlayerTopNbPerfTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiUserUsernameQueryKey(
  args: InferRequestType<(typeof client.api.user)[':username']['$get']>,
) {
  return ['api', '/api/user/:username', args] as const
}

export function getApiUserUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUsernameQueryKey>
  >({
    queryKey: getApiUserUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user[':username'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiUserUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':username']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUserUsernameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUserUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':username']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUserUsernameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiUserUsernameRatingHistoryQueryKey(
  args: InferRequestType<(typeof client.api.user)[':username']['rating-history']['$get']>,
) {
  return ['api', '/api/user/:username/rating-history', args] as const
}

export function getApiUserUsernameRatingHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['rating-history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['rating-history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)[':username']['rating-history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUsernameRatingHistoryQueryKey>
  >({
    queryKey: getApiUserUsernameRatingHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user[':username']['rating-history'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserUsernameRatingHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['rating-history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['rating-history']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)[':username']['rating-history']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUsernameRatingHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiUserUsernameRatingHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUserUsernameRatingHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['rating-history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['rating-history']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)[':username']['rating-history']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUsernameRatingHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiUserUsernameRatingHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiUserUsernamePerfPerfQueryKey(
  args: InferRequestType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>,
) {
  return ['api', '/api/user/:username/perf/:perf', args] as const
}

export function getApiUserUsernamePerfPerfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUsernamePerfPerfQueryKey>
  >({
    queryKey: getApiUserUsernamePerfPerfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user[':username'].perf[':perf'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserUsernamePerfPerf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUsernamePerfPerfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiUserUsernamePerfPerfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUserUsernamePerfPerf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUsernamePerfPerfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiUserUsernamePerfPerfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiUserUsernameActivityQueryKey(
  args: InferRequestType<(typeof client.api.user)[':username']['activity']['$get']>,
) {
  return ['api', '/api/user/:username/activity', args] as const
}

export function getApiUserUsernameActivityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['activity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['activity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)[':username']['activity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUsernameActivityQueryKey>
  >({
    queryKey: getApiUserUsernameActivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user[':username'].activity.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserUsernameActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['activity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['activity']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)[':username']['activity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUsernameActivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiUserUsernameActivityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUserUsernameActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['activity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['activity']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)[':username']['activity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUsernameActivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiUserUsernameActivityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPuzzleDailyQueryKey() {
  return ['api', '/api/puzzle/daily'] as const
}

export function getApiPuzzleDailyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.daily.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.daily.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPuzzleDailyQueryKey>
  >({
    queryKey: getApiPuzzleDailyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.puzzle.daily.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPuzzleDaily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.daily.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.daily.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPuzzleDailyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPuzzleDailyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPuzzleDaily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.daily.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.daily.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPuzzleDailyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPuzzleDailyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPuzzleIdQueryKey(
  args: InferRequestType<(typeof client.api.puzzle)[':id']['$get']>,
) {
  return ['api', '/api/puzzle/:id', args] as const
}

export function getApiPuzzleIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.puzzle)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPuzzleIdQueryKey>
  >({
    queryKey: getApiPuzzleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.puzzle[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPuzzleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.puzzle)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPuzzleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPuzzleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPuzzleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.puzzle)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPuzzleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPuzzleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPuzzleNextQueryKey(
  args: InferRequestType<typeof client.api.puzzle.next.$get>,
) {
  return ['api', '/api/puzzle/next', args] as const
}

export function getApiPuzzleNextQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.next.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.puzzle.next.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.next.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPuzzleNextQueryKey>
  >({
    queryKey: getApiPuzzleNextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.puzzle.next.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPuzzleNext<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.next.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.puzzle.next.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.next.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPuzzleNextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPuzzleNextQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPuzzleNext<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.next.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.puzzle.next.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.next.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPuzzleNextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPuzzleNextQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPuzzleBatchAngleQueryKey(
  args: InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$get']>,
) {
  return ['api', '/api/puzzle/batch/:angle', args] as const
}

export function getApiPuzzleBatchAngleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle.batch)[':angle']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.puzzle.batch)[':angle']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPuzzleBatchAngleQueryKey>
  >({
    queryKey: getApiPuzzleBatchAngleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.puzzle.batch[':angle'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPuzzleBatchAngle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle.batch)[':angle']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.puzzle.batch)[':angle']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPuzzleBatchAngleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPuzzleBatchAngleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPuzzleBatchAngle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle.batch)[':angle']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.puzzle.batch)[':angle']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPuzzleBatchAngleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPuzzleBatchAngleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiPuzzleBatchAngleMutationKey() {
  return ['api', '/api/puzzle/batch/:angle', 'POST'] as const
}

export function getPostApiPuzzleBatchAngleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.puzzle.batch)[':angle']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPuzzleBatchAngleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$post']>) {
      return parseResponse(client.api.puzzle.batch[':angle'].$post(args, options))
    },
  })
}

export function usePostApiPuzzleBatchAngle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.puzzle.batch)[':angle']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPuzzleBatchAngleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiPuzzleActivityQueryKey(
  args: InferRequestType<typeof client.api.puzzle.activity.$get>,
) {
  return ['api', '/api/puzzle/activity', args] as const
}

export function getApiPuzzleActivityQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.activity.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.puzzle.activity.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.activity.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPuzzleActivityQueryKey>
  >({
    queryKey: getApiPuzzleActivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.puzzle.activity.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPuzzleActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.puzzle.activity.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.activity.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPuzzleActivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPuzzleActivityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPuzzleActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.puzzle.activity.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.activity.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPuzzleActivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPuzzleActivityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPuzzleReplayDaysThemeQueryKey(
  args: InferRequestType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>,
) {
  return ['api', '/api/puzzle/replay/:days/:theme', args] as const
}

export function getApiPuzzleReplayDaysThemeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPuzzleReplayDaysThemeQueryKey>
  >({
    queryKey: getApiPuzzleReplayDaysThemeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.puzzle.replay[':days'][':theme'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPuzzleReplayDaysTheme<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPuzzleReplayDaysThemeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiPuzzleReplayDaysThemeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPuzzleReplayDaysTheme<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPuzzleReplayDaysThemeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiPuzzleReplayDaysThemeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPuzzleDashboardDaysQueryKey(
  args: InferRequestType<(typeof client.api.puzzle.dashboard)[':days']['$get']>,
) {
  return ['api', '/api/puzzle/dashboard/:days', args] as const
}

export function getApiPuzzleDashboardDaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.puzzle.dashboard)[':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.puzzle.dashboard)[':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.puzzle.dashboard)[':days']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPuzzleDashboardDaysQueryKey>
  >({
    queryKey: getApiPuzzleDashboardDaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.puzzle.dashboard[':days'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPuzzleDashboardDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.puzzle.dashboard)[':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.puzzle.dashboard)[':days']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.puzzle.dashboard)[':days']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPuzzleDashboardDaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiPuzzleDashboardDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPuzzleDashboardDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.puzzle.dashboard)[':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.puzzle.dashboard)[':days']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.puzzle.dashboard)[':days']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPuzzleDashboardDaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiPuzzleDashboardDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiStormDashboardUsernameQueryKey(
  args: InferRequestType<(typeof client.api.storm.dashboard)[':username']['$get']>,
) {
  return ['api', '/api/storm/dashboard/:username', args] as const
}

export function getApiStormDashboardUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.storm.dashboard)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.storm.dashboard)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.storm.dashboard)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStormDashboardUsernameQueryKey>
  >({
    queryKey: getApiStormDashboardUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.storm.dashboard[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiStormDashboardUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.storm.dashboard)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.storm.dashboard)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.storm.dashboard)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStormDashboardUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiStormDashboardUsernameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiStormDashboardUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.storm.dashboard)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.storm.dashboard)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.storm.dashboard)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStormDashboardUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiStormDashboardUsernameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiRacerMutationKey() {
  return ['api', '/api/racer', 'POST'] as const
}

export function getPostApiRacerMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.racer.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiRacerMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.racer.$post(undefined, options))
    },
  })
}

export function usePostApiRacer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.racer.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRacerMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiRacerIdQueryKey(
  args: InferRequestType<(typeof client.api.racer)[':id']['$get']>,
) {
  return ['api', '/api/racer/:id', args] as const
}

export function getApiRacerIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.racer)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.racer)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.racer)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRacerIdQueryKey>
  >({
    queryKey: getApiRacerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.racer[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiRacerId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.racer)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.racer)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.racer)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRacerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiRacerIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiRacerId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.racer)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.racer)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.racer)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRacerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiRacerIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiUsersMutationKey() {
  return ['api', '/api/users', 'POST'] as const
}

export function getPostApiUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.users.$post>) {
      return parseResponse(client.api.users.$post(args, options))
    },
  })
}

export function usePostApiUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiAccountQueryKey() {
  return ['api', '/api/account'] as const
}

export function getApiAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiAccountQueryKey>
  >({
    queryKey: getApiAccountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAccountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAccountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAccountEmailQueryKey() {
  return ['api', '/api/account/email'] as const
}

export function getApiAccountEmailQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.email.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.email.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountEmailQueryKey>
  >({
    queryKey: getApiAccountEmailQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.account.email.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAccountEmail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.email.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.account.email.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAccountEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAccountEmailQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAccountEmail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.email.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.account.email.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAccountEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAccountEmailQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAccountPreferencesQueryKey() {
  return ['api', '/api/account/preferences'] as const
}

export function getApiAccountPreferencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.account.preferences.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.account.preferences.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountPreferencesQueryKey>
  >({
    queryKey: getApiAccountPreferencesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.account.preferences.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAccountPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.account.preferences.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.account.preferences.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAccountPreferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAccountPreferencesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAccountPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.account.preferences.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.account.preferences.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAccountPreferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAccountPreferencesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAccountKidQueryKey() {
  return ['api', '/api/account/kid'] as const
}

export function getApiAccountKidQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountKidQueryKey>
  >({
    queryKey: getApiAccountKidQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.account.kid.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiAccountKid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAccountKidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAccountKidQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAccountKid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAccountKidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAccountKidQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAccountKidMutationKey() {
  return ['api', '/api/account/kid', 'POST'] as const
}

export function getPostApiAccountKidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.account.kid.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAccountKidMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.account.kid.$post>) {
      return parseResponse(client.api.account.kid.$post(args, options))
    },
  })
}

export function usePostApiAccountKid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.account.kid.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAccountKidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGameExportGameIdQueryKey(
  args: InferRequestType<(typeof client.game.export)[':gameId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['game', '/game/export/:gameId', keyArgs] as const
}

export function getGameExportGameIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.game.export)[':gameId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.game.export)[':gameId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.game.export)[':gameId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGameExportGameIdQueryKey>
  >({
    queryKey: getGameExportGameIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.game.export[':gameId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGameExportGameId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.game.export)[':gameId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.game.export)[':gameId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.game.export)[':gameId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGameExportGameIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGameExportGameIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGameExportGameId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.game.export)[':gameId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.game.export)[':gameId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.game.export)[':gameId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGameExportGameIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGameExportGameIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiGameGameIdChatQueryKey(
  args: InferRequestType<(typeof client.api.game)[':gameId']['chat']['$get']>,
) {
  return ['api', '/api/game/:gameId/chat', args] as const
}

export function getApiGameGameIdChatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.game)[':gameId']['chat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.game)[':gameId']['chat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.game)[':gameId']['chat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGameGameIdChatQueryKey>
  >({
    queryKey: getApiGameGameIdChatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.game[':gameId'].chat.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiGameGameIdChat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.game)[':gameId']['chat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.game)[':gameId']['chat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.game)[':gameId']['chat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGameGameIdChatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiGameGameIdChatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiGameGameIdChat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.game)[':gameId']['chat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.game)[':gameId']['chat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.game)[':gameId']['chat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGameGameIdChatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiGameGameIdChatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiUserUsernameCurrentGameQueryKey(
  args: InferRequestType<(typeof client.api.user)[':username']['current-game']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user/:username/current-game', keyArgs] as const
}

export function getApiUserUsernameCurrentGameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['current-game']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['current-game']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)[':username']['current-game']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUsernameCurrentGameQueryKey>
  >({
    queryKey: getApiUserUsernameCurrentGameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user[':username']['current-game'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserUsernameCurrentGame<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['current-game']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['current-game']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)[':username']['current-game']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUsernameCurrentGameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiUserUsernameCurrentGameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUserUsernameCurrentGame<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['current-game']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['current-game']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)[':username']['current-game']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUsernameCurrentGameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiUserUsernameCurrentGameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiGamesUserUsernameQueryKey(
  args: InferRequestType<(typeof client.api.games.user)[':username']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/games/user/:username', keyArgs] as const
}

export function getApiGamesUserUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.games.user)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.games.user)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.games.user)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGamesUserUsernameQueryKey>
  >({
    queryKey: getApiGamesUserUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.games.user[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiGamesUserUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.games.user)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.games.user)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.games.user)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGamesUserUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiGamesUserUsernameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiGamesUserUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.games.user)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.games.user)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.games.user)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGamesUserUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiGamesUserUsernameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiGamesExportIdsMutationKey() {
  return ['api', '/api/games/export/_ids', 'POST'] as const
}

export function getPostApiGamesExportIdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export._ids.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.games.export._ids.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiGamesExportIdsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.games.export._ids.$post>) {
      return parseResponse(client.api.games.export._ids.$post(args, options))
    },
  })
}

export function usePostApiGamesExportIds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export._ids.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.games.export._ids.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiGamesExportIdsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiStreamGamesByUsersMutationKey() {
  return ['api', '/api/stream/games-by-users', 'POST'] as const
}

export function getPostApiStreamGamesByUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.stream)['games-by-users']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.stream)['games-by-users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiStreamGamesByUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.stream)['games-by-users']['$post']>,
    ) {
      return parseResponse(client.api.stream['games-by-users'].$post(args, options))
    },
  })
}

export function usePostApiStreamGamesByUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.stream)['games-by-users']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.stream)['games-by-users']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiStreamGamesByUsersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiStreamGamesStreamIdMutationKey() {
  return ['api', '/api/stream/games/:streamId', 'POST'] as const
}

export function getPostApiStreamGamesStreamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.stream.games)[':streamId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.stream.games)[':streamId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiStreamGamesStreamIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.stream.games)[':streamId']['$post']>,
    ) {
      return parseResponse(client.api.stream.games[':streamId'].$post(args, options))
    },
  })
}

export function usePostApiStreamGamesStreamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.stream.games)[':streamId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.stream.games)[':streamId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiStreamGamesStreamIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiStreamGamesStreamIdAddMutationKey() {
  return ['api', '/api/stream/games/:streamId/add', 'POST'] as const
}

export function getPostApiStreamGamesStreamIdAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.stream.games)[':streamId']['add']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.stream.games)[':streamId']['add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiStreamGamesStreamIdAddMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.stream.games)[':streamId']['add']['$post']>,
    ) {
      return parseResponse(client.api.stream.games[':streamId'].add.$post(args, options))
    },
  })
}

export function usePostApiStreamGamesStreamIdAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.stream.games)[':streamId']['add']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.stream.games)[':streamId']['add']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiStreamGamesStreamIdAddMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiAccountPlayingQueryKey(
  args: InferRequestType<typeof client.api.account.playing.$get>,
) {
  return ['api', '/api/account/playing', args] as const
}

export function getApiAccountPlayingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.playing.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.account.playing.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.playing.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountPlayingQueryKey>
  >({
    queryKey: getApiAccountPlayingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.account.playing.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiAccountPlaying<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.playing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.account.playing.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.account.playing.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAccountPlayingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAccountPlayingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAccountPlaying<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.playing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.account.playing.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.account.playing.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAccountPlayingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAccountPlayingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiStreamGameIdQueryKey(
  args: InferRequestType<(typeof client.api.stream.game)[':id']['$get']>,
) {
  return ['api', '/api/stream/game/:id', args] as const
}

export function getApiStreamGameIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.stream.game)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.stream.game)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.stream.game)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStreamGameIdQueryKey>
  >({
    queryKey: getApiStreamGameIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.stream.game[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiStreamGameId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.stream.game)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.stream.game)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.stream.game)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStreamGameIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiStreamGameIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiStreamGameId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.stream.game)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.stream.game)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.stream.game)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStreamGameIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiStreamGameIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiImportMutationKey() {
  return ['api', '/api/import', 'POST'] as const
}

export function getPostApiImportMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.import.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.import.$post>) {
      return parseResponse(client.api.import.$post(args, options))
    },
  })
}

export function usePostApiImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.import.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.import.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiImportMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiGamesExportImportsQueryKey() {
  return ['api', '/api/games/export/imports'] as const
}

export function getApiGamesExportImportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.imports.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.imports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGamesExportImportsQueryKey>
  >({
    queryKey: getApiGamesExportImportsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.games.export.imports.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiGamesExportImports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.imports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.imports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGamesExportImportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiGamesExportImportsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiGamesExportImports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.imports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.imports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGamesExportImportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiGamesExportImportsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiGamesExportBookmarksQueryKey(
  args: InferRequestType<typeof client.api.games.export.bookmarks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/games/export/bookmarks', keyArgs] as const
}

export function getApiGamesExportBookmarksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.bookmarks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.games.export.bookmarks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.bookmarks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGamesExportBookmarksQueryKey>
  >({
    queryKey: getApiGamesExportBookmarksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.games.export.bookmarks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiGamesExportBookmarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.bookmarks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.games.export.bookmarks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.bookmarks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGamesExportBookmarksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiGamesExportBookmarksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiGamesExportBookmarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.bookmarks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.games.export.bookmarks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.bookmarks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGamesExportBookmarksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiGamesExportBookmarksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBookmarkGameIdMutationKey() {
  return ['bookmark', '/bookmark/:gameId', 'POST'] as const
}

export function getPostBookmarkGameIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bookmark)[':gameId']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.bookmark)[':gameId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBookmarkGameIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bookmark)[':gameId']['$post']>) {
      return parseResponse(client.bookmark[':gameId'].$post(args, options))
    },
  })
}

export function usePostBookmarkGameId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmark)[':gameId']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.bookmark)[':gameId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBookmarkGameIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiVersionQueryKey() {
  return ['api', '/api/version'] as const
}

export function getApiVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiVersionQueryKey>
  >({
    queryKey: getApiVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTvChannelsQueryKey() {
  return ['api', '/api/tv/channels'] as const
}

export function getApiTvChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.channels.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.channels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTvChannelsQueryKey>
  >({
    queryKey: getApiTvChannelsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tv.channels.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTvChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.channels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTvChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTvChannelsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTvChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.channels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTvChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTvChannelsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTvFeedQueryKey() {
  return ['api', '/api/tv/feed'] as const
}

export function getApiTvFeedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.feed.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.feed.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTvFeedQueryKey>
  >({
    queryKey: getApiTvFeedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tv.feed.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTvFeed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.feed.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.feed.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTvFeedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTvFeedQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTvFeed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.feed.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.feed.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTvFeedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTvFeedQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTvChannelFeedQueryKey(
  args: InferRequestType<(typeof client.api.tv)[':channel']['feed']['$get']>,
) {
  return ['api', '/api/tv/:channel/feed', args] as const
}

export function getApiTvChannelFeedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['feed']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tv)[':channel']['feed']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tv)[':channel']['feed']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTvChannelFeedQueryKey>
  >({
    queryKey: getApiTvChannelFeedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tv[':channel'].feed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiTvChannelFeed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['feed']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tv)[':channel']['feed']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tv)[':channel']['feed']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTvChannelFeedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTvChannelFeedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTvChannelFeed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['feed']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tv)[':channel']['feed']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tv)[':channel']['feed']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTvChannelFeedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTvChannelFeedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTvChannelQueryKey(
  args: InferRequestType<(typeof client.api.tv)[':channel']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/tv/:channel', keyArgs] as const
}

export function getApiTvChannelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tv)[':channel']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTvChannelQueryKey>
  >({
    queryKey: getApiTvChannelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tv[':channel'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTvChannel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tv)[':channel']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTvChannelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTvChannelQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTvChannel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tv)[':channel']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTvChannelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTvChannelQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTournamentQueryKey() {
  return ['api', '/api/tournament'] as const
}

export function getApiTournamentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTournamentQueryKey>
  >({
    queryKey: getApiTournamentQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tournament.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTournament<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTournamentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTournamentQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTournament<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTournamentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTournamentQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiTournamentMutationKey() {
  return ['api', '/api/tournament', 'POST'] as const
}

export function getPostApiTournamentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.tournament.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTournamentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.tournament.$post>) {
      return parseResponse(client.api.tournament.$post(args, options))
    },
  })
}

export function usePostApiTournament<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.tournament.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTournamentMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTournamentIdQueryKey(
  args: InferRequestType<(typeof client.api.tournament)[':id']['$get']>,
) {
  return ['api', '/api/tournament/:id', args] as const
}

export function getApiTournamentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tournament)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tournament)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTournamentIdQueryKey>
  >({
    queryKey: getApiTournamentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tournament[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTournamentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tournament)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.tournament)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTournamentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTournamentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTournamentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tournament)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.tournament)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTournamentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTournamentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiTournamentIdMutationKey() {
  return ['api', '/api/tournament/:id', 'POST'] as const
}

export function getPostApiTournamentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tournament)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tournament)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTournamentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.tournament)[':id']['$post']>) {
      return parseResponse(client.api.tournament[':id'].$post(args, options))
    },
  })
}

export function usePostApiTournamentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tournament)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tournament)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTournamentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiTournamentIdJoinMutationKey() {
  return ['api', '/api/tournament/:id/join', 'POST'] as const
}

export function getPostApiTournamentIdJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tournament)[':id']['join']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tournament)[':id']['join']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTournamentIdJoinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tournament)[':id']['join']['$post']>,
    ) {
      return parseResponse(client.api.tournament[':id'].join.$post(args, options))
    },
  })
}

export function usePostApiTournamentIdJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tournament)[':id']['join']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tournament)[':id']['join']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTournamentIdJoinMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiTournamentIdWithdrawMutationKey() {
  return ['api', '/api/tournament/:id/withdraw', 'POST'] as const
}

export function getPostApiTournamentIdWithdrawMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tournament)[':id']['withdraw']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tournament)[':id']['withdraw']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTournamentIdWithdrawMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tournament)[':id']['withdraw']['$post']>,
    ) {
      return parseResponse(client.api.tournament[':id'].withdraw.$post(args, options))
    },
  })
}

export function usePostApiTournamentIdWithdraw<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tournament)[':id']['withdraw']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tournament)[':id']['withdraw']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTournamentIdWithdrawMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiTournamentIdTerminateMutationKey() {
  return ['api', '/api/tournament/:id/terminate', 'POST'] as const
}

export function getPostApiTournamentIdTerminateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tournament)[':id']['terminate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tournament)[':id']['terminate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTournamentIdTerminateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tournament)[':id']['terminate']['$post']>,
    ) {
      return parseResponse(client.api.tournament[':id'].terminate.$post(args, options))
    },
  })
}

export function usePostApiTournamentIdTerminate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tournament)[':id']['terminate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tournament)[':id']['terminate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTournamentIdTerminateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiTournamentTeamBattleIdMutationKey() {
  return ['api', '/api/tournament/team-battle/:id', 'POST'] as const
}

export function getPostApiTournamentTeamBattleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tournament)['team-battle'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tournament)['team-battle'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTournamentTeamBattleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tournament)['team-battle'][':id']['$post']>,
    ) {
      return parseResponse(client.api.tournament['team-battle'][':id'].$post(args, options))
    },
  })
}

export function usePostApiTournamentTeamBattleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tournament)['team-battle'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tournament)['team-battle'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTournamentTeamBattleIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTournamentIdGamesQueryKey(
  args: InferRequestType<(typeof client.api.tournament)[':id']['games']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/tournament/:id/games', keyArgs] as const
}

export function getApiTournamentIdGamesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tournament)[':id']['games']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['games']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tournament)[':id']['games']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTournamentIdGamesQueryKey>
  >({
    queryKey: getApiTournamentIdGamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tournament[':id'].games.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiTournamentIdGames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tournament)[':id']['games']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['games']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tournament)[':id']['games']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTournamentIdGamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTournamentIdGamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTournamentIdGames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tournament)[':id']['games']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['games']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tournament)[':id']['games']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTournamentIdGamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTournamentIdGamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTournamentIdResultsQueryKey(
  args: InferRequestType<(typeof client.api.tournament)[':id']['results']['$get']>,
) {
  return ['api', '/api/tournament/:id/results', args] as const
}

export function getApiTournamentIdResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tournament)[':id']['results']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tournament)[':id']['results']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTournamentIdResultsQueryKey>
  >({
    queryKey: getApiTournamentIdResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tournament[':id'].results.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiTournamentIdResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tournament)[':id']['results']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['results']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tournament)[':id']['results']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTournamentIdResultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiTournamentIdResultsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiTournamentIdResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tournament)[':id']['results']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['results']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tournament)[':id']['results']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTournamentIdResultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiTournamentIdResultsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiTournamentIdTeamsQueryKey(
  args: InferRequestType<(typeof client.api.tournament)[':id']['teams']['$get']>,
) {
  return ['api', '/api/tournament/:id/teams', args] as const
}

export function getApiTournamentIdTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tournament)[':id']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tournament)[':id']['teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTournamentIdTeamsQueryKey>
  >({
    queryKey: getApiTournamentIdTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tournament[':id'].teams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiTournamentIdTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tournament)[':id']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['teams']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tournament)[':id']['teams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTournamentIdTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTournamentIdTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTournamentIdTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tournament)[':id']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tournament)[':id']['teams']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tournament)[':id']['teams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTournamentIdTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTournamentIdTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiUserUsernameTournamentCreatedQueryKey(
  args: InferRequestType<(typeof client.api.user)[':username']['tournament']['created']['$get']>,
) {
  return ['api', '/api/user/:username/tournament/created', args] as const
}

export function getApiUserUsernameTournamentCreatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['tournament']['created']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['tournament']['created']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.user)[':username']['tournament']['created']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUsernameTournamentCreatedQueryKey>
  >({
    queryKey: getApiUserUsernameTournamentCreatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user[':username'].tournament.created.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserUsernameTournamentCreated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['tournament']['created']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['tournament']['created']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.user)[':username']['tournament']['created']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUsernameTournamentCreatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiUserUsernameTournamentCreatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUserUsernameTournamentCreated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['tournament']['created']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['tournament']['created']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.user)[':username']['tournament']['created']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUsernameTournamentCreatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiUserUsernameTournamentCreatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiUserUsernameTournamentPlayedQueryKey(
  args: InferRequestType<(typeof client.api.user)[':username']['tournament']['played']['$get']>,
) {
  return ['api', '/api/user/:username/tournament/played', args] as const
}

export function getApiUserUsernameTournamentPlayedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['tournament']['played']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['tournament']['played']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)[':username']['tournament']['played']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUsernameTournamentPlayedQueryKey>
  >({
    queryKey: getApiUserUsernameTournamentPlayedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user[':username'].tournament.played.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserUsernameTournamentPlayed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['tournament']['played']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['tournament']['played']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.user)[':username']['tournament']['played']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUsernameTournamentPlayedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiUserUsernameTournamentPlayedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUserUsernameTournamentPlayed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['tournament']['played']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['tournament']['played']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.user)[':username']['tournament']['played']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUsernameTournamentPlayedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiUserUsernameTournamentPlayedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiSwissNewTeamIdMutationKey() {
  return ['api', '/api/swiss/new/:teamId', 'POST'] as const
}

export function getPostApiSwissNewTeamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss.new)[':teamId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.swiss.new)[':teamId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSwissNewTeamIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.swiss.new)[':teamId']['$post']>) {
      return parseResponse(client.api.swiss.new[':teamId'].$post(args, options))
    },
  })
}

export function usePostApiSwissNewTeamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.swiss.new)[':teamId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.swiss.new)[':teamId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSwissNewTeamIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiSwissIdQueryKey(
  args: InferRequestType<(typeof client.api.swiss)[':id']['$get']>,
) {
  return ['api', '/api/swiss/:id', args] as const
}

export function getApiSwissIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.swiss)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSwissIdQueryKey>
  >({
    queryKey: getApiSwissIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.swiss[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiSwissId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.swiss)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSwissIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSwissIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSwissId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.swiss)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSwissIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSwissIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiSwissIdEditMutationKey() {
  return ['api', '/api/swiss/:id/edit', 'POST'] as const
}

export function getPostApiSwissIdEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['edit']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.swiss)[':id']['edit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSwissIdEditMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.swiss)[':id']['edit']['$post']>) {
      return parseResponse(client.api.swiss[':id'].edit.$post(args, options))
    },
  })
}

export function usePostApiSwissIdEdit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.swiss)[':id']['edit']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.swiss)[':id']['edit']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSwissIdEditMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiSwissIdScheduleNextRoundMutationKey() {
  return ['api', '/api/swiss/:id/schedule-next-round', 'POST'] as const
}

export function getPostApiSwissIdScheduleNextRoundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.swiss)[':id']['schedule-next-round']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.swiss)[':id']['schedule-next-round']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSwissIdScheduleNextRoundMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.swiss)[':id']['schedule-next-round']['$post']>,
    ) {
      return parseResponse(client.api.swiss[':id']['schedule-next-round'].$post(args, options))
    },
  })
}

export function usePostApiSwissIdScheduleNextRound<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.swiss)[':id']['schedule-next-round']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.swiss)[':id']['schedule-next-round']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSwissIdScheduleNextRoundMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiSwissIdJoinMutationKey() {
  return ['api', '/api/swiss/:id/join', 'POST'] as const
}

export function getPostApiSwissIdJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['join']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.swiss)[':id']['join']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSwissIdJoinMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.swiss)[':id']['join']['$post']>) {
      return parseResponse(client.api.swiss[':id'].join.$post(args, options))
    },
  })
}

export function usePostApiSwissIdJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.swiss)[':id']['join']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.swiss)[':id']['join']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSwissIdJoinMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiSwissIdWithdrawMutationKey() {
  return ['api', '/api/swiss/:id/withdraw', 'POST'] as const
}

export function getPostApiSwissIdWithdrawMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.swiss)[':id']['withdraw']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.swiss)[':id']['withdraw']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSwissIdWithdrawMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.swiss)[':id']['withdraw']['$post']>,
    ) {
      return parseResponse(client.api.swiss[':id'].withdraw.$post(args, options))
    },
  })
}

export function usePostApiSwissIdWithdraw<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.swiss)[':id']['withdraw']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.swiss)[':id']['withdraw']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSwissIdWithdrawMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiSwissIdTerminateMutationKey() {
  return ['api', '/api/swiss/:id/terminate', 'POST'] as const
}

export function getPostApiSwissIdTerminateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.swiss)[':id']['terminate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.swiss)[':id']['terminate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSwissIdTerminateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.swiss)[':id']['terminate']['$post']>,
    ) {
      return parseResponse(client.api.swiss[':id'].terminate.$post(args, options))
    },
  })
}

export function usePostApiSwissIdTerminate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.swiss)[':id']['terminate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.swiss)[':id']['terminate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSwissIdTerminateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSwissIdTrfQueryKey(
  args: InferRequestType<(typeof client.swiss)[':id.trf']['$get']>,
) {
  return ['swiss', '/swiss/:id.trf', args] as const
}

export function getSwissIdTrfQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.swiss)[':id.trf']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.swiss)[':id.trf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.swiss)[':id.trf']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSwissIdTrfQueryKey>
  >({
    queryKey: getSwissIdTrfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.swiss[':id.trf'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSwissIdTrf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.swiss)[':id.trf']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.swiss)[':id.trf']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.swiss)[':id.trf']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSwissIdTrfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSwissIdTrfQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSwissIdTrf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.swiss)[':id.trf']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.swiss)[':id.trf']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.swiss)[':id.trf']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSwissIdTrfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSwissIdTrfQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSwissIdGamesQueryKey(
  args: InferRequestType<(typeof client.api.swiss)[':id']['games']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/swiss/:id/games', keyArgs] as const
}

export function getApiSwissIdGamesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['games']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.swiss)[':id']['games']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['games']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSwissIdGamesQueryKey>
  >({
    queryKey: getApiSwissIdGamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.swiss[':id'].games.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSwissIdGames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['games']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.swiss)[':id']['games']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.swiss)[':id']['games']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSwissIdGamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSwissIdGamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSwissIdGames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['games']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.swiss)[':id']['games']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.swiss)[':id']['games']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSwissIdGamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSwissIdGamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSwissIdResultsQueryKey(
  args: InferRequestType<(typeof client.api.swiss)[':id']['results']['$get']>,
) {
  return ['api', '/api/swiss/:id/results', args] as const
}

export function getApiSwissIdResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['results']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.swiss)[':id']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.swiss)[':id']['results']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSwissIdResultsQueryKey>
  >({
    queryKey: getApiSwissIdResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.swiss[':id'].results.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSwissIdResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['results']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.swiss)[':id']['results']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.swiss)[':id']['results']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSwissIdResultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSwissIdResultsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSwissIdResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['results']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.swiss)[':id']['results']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.swiss)[':id']['results']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSwissIdResultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSwissIdResultsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTeamTeamIdSwissQueryKey(
  args: InferRequestType<(typeof client.api.team)[':teamId']['swiss']['$get']>,
) {
  return ['api', '/api/team/:teamId/swiss', args] as const
}

export function getApiTeamTeamIdSwissQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.team)[':teamId']['swiss']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['swiss']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.team)[':teamId']['swiss']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamTeamIdSwissQueryKey>
  >({
    queryKey: getApiTeamTeamIdSwissQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.team[':teamId'].swiss.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiTeamTeamIdSwiss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.team)[':teamId']['swiss']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['swiss']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.team)[':teamId']['swiss']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTeamTeamIdSwissQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTeamTeamIdSwissQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTeamTeamIdSwiss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.team)[':teamId']['swiss']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['swiss']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.team)[':teamId']['swiss']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTeamTeamIdSwissQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTeamTeamIdSwissQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiStudyStudyIdChapterIdPgnQueryKey(
  args: InferRequestType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>,
) {
  return ['api', '/api/study/:studyId/:chapterId.pgn', args] as const
}

export function getApiStudyStudyIdChapterIdPgnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStudyStudyIdChapterIdPgnQueryKey>
  >({
    queryKey: getApiStudyStudyIdChapterIdPgnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.study[':studyId'][':chapterId.pgn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiStudyStudyIdChapterIdPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStudyStudyIdChapterIdPgnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiStudyStudyIdChapterIdPgnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiStudyStudyIdChapterIdPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStudyStudyIdChapterIdPgnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiStudyStudyIdChapterIdPgnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiStudyStudyIdPgnQueryKey(
  args: InferRequestType<(typeof client.api.study)[':studyId.pgn']['$get']>,
) {
  return ['api', '/api/study/:studyId.pgn', args] as const
}

export function getApiStudyStudyIdPgnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.study)[':studyId.pgn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.study)[':studyId.pgn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.study)[':studyId.pgn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStudyStudyIdPgnQueryKey>
  >({
    queryKey: getApiStudyStudyIdPgnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.study[':studyId.pgn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiStudyStudyIdPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.study)[':studyId.pgn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.study)[':studyId.pgn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.study)[':studyId.pgn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStudyStudyIdPgnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiStudyStudyIdPgnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiStudyStudyIdPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.study)[':studyId.pgn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.study)[':studyId.pgn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.study)[':studyId.pgn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStudyStudyIdPgnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiStudyStudyIdPgnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHeadApiStudyStudyIdPgnMutationKey() {
  return ['api', '/api/study/:studyId.pgn', 'HEAD'] as const
}

export function getHeadApiStudyStudyIdPgnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study)[':studyId.pgn']['$head']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.study)[':studyId.pgn']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadApiStudyStudyIdPgnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.study)[':studyId.pgn']['$head']>) {
      return parseResponse(client.api.study[':studyId.pgn'].$head(args, options))
    },
  })
}

export function useHeadApiStudyStudyIdPgn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.study)[':studyId.pgn']['$head']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.study)[':studyId.pgn']['$head']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getHeadApiStudyStudyIdPgnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiStudyMutationKey() {
  return ['api', '/api/study', 'POST'] as const
}

export function getPostApiStudyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.study.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.study.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiStudyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.study.$post>) {
      return parseResponse(client.api.study.$post(args, options))
    },
  })
}

export function usePostApiStudy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.study.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.study.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiStudyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiStudyStudyIdImportPgnMutationKey() {
  return ['api', '/api/study/:studyId/import-pgn', 'POST'] as const
}

export function getPostApiStudyStudyIdImportPgnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.study)[':studyId']['import-pgn']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.study)[':studyId']['import-pgn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiStudyStudyIdImportPgnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.study)[':studyId']['import-pgn']['$post']>,
    ) {
      return parseResponse(client.api.study[':studyId']['import-pgn'].$post(args, options))
    },
  })
}

export function usePostApiStudyStudyIdImportPgn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.study)[':studyId']['import-pgn']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.study)[':studyId']['import-pgn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiStudyStudyIdImportPgnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiStudyStudyIdChapterIdTagsMutationKey() {
  return ['api', '/api/study/:studyId/:chapterId/tags', 'POST'] as const
}

export function getPostApiStudyStudyIdChapterIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiStudyStudyIdChapterIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['tags']['$post']>,
    ) {
      return parseResponse(client.api.study[':studyId'][':chapterId'].tags.$post(args, options))
    },
  })
}

export function usePostApiStudyStudyIdChapterIdTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiStudyStudyIdChapterIdTagsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiStudyStudyIdChapterIdMovesMutationKey() {
  return ['api', '/api/study/:studyId/:chapterId/moves', 'POST'] as const
}

export function getPostApiStudyStudyIdChapterIdMovesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['moves']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiStudyStudyIdChapterIdMovesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['moves']['$post']>,
    ) {
      return parseResponse(client.api.study[':studyId'][':chapterId'].moves.$post(args, options))
    },
  })
}

export function usePostApiStudyStudyIdChapterIdMoves<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['moves']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiStudyStudyIdChapterIdMovesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiStudyByUsernameExportPgnQueryKey(
  args: InferRequestType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>,
) {
  return ['api', '/api/study/by/:username/export.pgn', args] as const
}

export function getApiStudyByUsernameExportPgnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStudyByUsernameExportPgnQueryKey>
  >({
    queryKey: getApiStudyByUsernameExportPgnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.study.by[':username']['export.pgn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiStudyByUsernameExportPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStudyByUsernameExportPgnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiStudyByUsernameExportPgnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiStudyByUsernameExportPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStudyByUsernameExportPgnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiStudyByUsernameExportPgnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiStudyByUsernameQueryKey(
  args: InferRequestType<(typeof client.api.study.by)[':username']['$get']>,
) {
  return ['api', '/api/study/by/:username', args] as const
}

export function getApiStudyByUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.study.by)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.study.by)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.study.by)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStudyByUsernameQueryKey>
  >({
    queryKey: getApiStudyByUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.study.by[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiStudyByUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.study.by)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.study.by)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.study.by)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStudyByUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiStudyByUsernameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiStudyByUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.study.by)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.study.by)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.study.by)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStudyByUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiStudyByUsernameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiStudyStudyIdChapterIdMutationKey() {
  return ['api', '/api/study/:studyId/:chapterId', 'DELETE'] as const
}

export function getDeleteApiStudyStudyIdChapterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.study)[':studyId'][':chapterId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiStudyStudyIdChapterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['$delete']>,
    ) {
      return parseResponse(client.api.study[':studyId'][':chapterId'].$delete(args, options))
    },
  })
}

export function useDeleteApiStudyStudyIdChapterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.study)[':studyId'][':chapterId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiStudyStudyIdChapterIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiBroadcastQueryKey(args: InferRequestType<typeof client.api.broadcast.$get>) {
  return ['api', '/api/broadcast', args] as const
}

export function getApiBroadcastQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.broadcast.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiBroadcastQueryKey>
  >({
    queryKey: getApiBroadcastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.broadcast.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiBroadcast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.broadcast.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiBroadcastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiBroadcastQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiBroadcast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.broadcast.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiBroadcastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiBroadcastQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiBroadcastTopQueryKey(
  args: InferRequestType<typeof client.api.broadcast.top.$get>,
) {
  return ['api', '/api/broadcast/top', args] as const
}

export function getApiBroadcastTopQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.top.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.broadcast.top.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.top.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiBroadcastTopQueryKey>
  >({
    queryKey: getApiBroadcastTopQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.broadcast.top.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiBroadcastTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.top.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.broadcast.top.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.top.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBroadcastTopQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiBroadcastTopQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiBroadcastTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.top.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.broadcast.top.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.top.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBroadcastTopQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiBroadcastTopQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiBroadcastByUsernameQueryKey(
  args: InferRequestType<(typeof client.api.broadcast.by)[':username']['$get']>,
) {
  return ['api', '/api/broadcast/by/:username', args] as const
}

export function getApiBroadcastByUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.broadcast.by)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.broadcast.by)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.broadcast.by)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBroadcastByUsernameQueryKey>
  >({
    queryKey: getApiBroadcastByUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.broadcast.by[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiBroadcastByUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.broadcast.by)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.broadcast.by)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.broadcast.by)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBroadcastByUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiBroadcastByUsernameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiBroadcastByUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.broadcast.by)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.broadcast.by)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.broadcast.by)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBroadcastByUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiBroadcastByUsernameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiBroadcastSearchQueryKey(
  args: InferRequestType<typeof client.api.broadcast.search.$get>,
) {
  return ['api', '/api/broadcast/search', args] as const
}

export function getApiBroadcastSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.broadcast.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiBroadcastSearchQueryKey>
  >({
    queryKey: getApiBroadcastSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.broadcast.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiBroadcastSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.broadcast.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBroadcastSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiBroadcastSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiBroadcastSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.broadcast.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBroadcastSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiBroadcastSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostBroadcastNewMutationKey() {
  return ['broadcast', '/broadcast/new', 'POST'] as const
}

export function getPostBroadcastNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcast.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.broadcast.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBroadcastNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.broadcast.new.$post>) {
      return parseResponse(client.broadcast.new.$post(args, options))
    },
  })
}

export function usePostBroadcastNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcast.new.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.broadcast.new.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBroadcastNewMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiBroadcastBroadcastTournamentIdQueryKey(
  args: InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>,
) {
  return ['api', '/api/broadcast/:broadcastTournamentId', args] as const
}

export function getApiBroadcastBroadcastTournamentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBroadcastBroadcastTournamentIdQueryKey>
  >({
    queryKey: getApiBroadcastBroadcastTournamentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.broadcast[':broadcastTournamentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiBroadcastBroadcastTournamentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBroadcastBroadcastTournamentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiBroadcastBroadcastTournamentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiBroadcastBroadcastTournamentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBroadcastBroadcastTournamentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiBroadcastBroadcastTournamentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBroadcastBroadcastTournamentIdPlayersQueryKey(
  args: InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>,
) {
  return ['broadcast', '/broadcast/:broadcastTournamentId/players', args] as const
}

export function getBroadcastBroadcastTournamentIdPlayersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBroadcastBroadcastTournamentIdPlayersQueryKey>
  >({
    queryKey: getBroadcastBroadcastTournamentIdPlayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.broadcast[':broadcastTournamentId'].players.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBroadcastBroadcastTournamentIdPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBroadcastBroadcastTournamentIdPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBroadcastBroadcastTournamentIdPlayersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBroadcastBroadcastTournamentIdPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBroadcastBroadcastTournamentIdPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBroadcastBroadcastTournamentIdPlayersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBroadcastBroadcastTournamentIdPlayersPlayerIdQueryKey(
  args: InferRequestType<
    (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
  >,
) {
  return ['broadcast', '/broadcast/:broadcastTournamentId/players/:playerId', args] as const
}

export function getBroadcastBroadcastTournamentIdPlayersPlayerIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBroadcastBroadcastTournamentIdPlayersPlayerIdQueryKey>
  >({
    queryKey: getBroadcastBroadcastTournamentIdPlayersPlayerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.broadcast[':broadcastTournamentId'].players[':playerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBroadcastBroadcastTournamentIdPlayersPlayerId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBroadcastBroadcastTournamentIdPlayersPlayerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBroadcastBroadcastTournamentIdPlayersPlayerIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBroadcastBroadcastTournamentIdPlayersPlayerId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBroadcastBroadcastTournamentIdPlayersPlayerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBroadcastBroadcastTournamentIdPlayersPlayerIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBroadcastBroadcastTournamentIdTeamsStandingsQueryKey(
  args: InferRequestType<
    (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
  >,
) {
  return ['broadcast', '/broadcast/:broadcastTournamentId/teams/standings', args] as const
}

export function getBroadcastBroadcastTournamentIdTeamsStandingsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBroadcastBroadcastTournamentIdTeamsStandingsQueryKey>
  >({
    queryKey: getBroadcastBroadcastTournamentIdTeamsStandingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.broadcast[':broadcastTournamentId'].teams.standings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBroadcastBroadcastTournamentIdTeamsStandings<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBroadcastBroadcastTournamentIdTeamsStandingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBroadcastBroadcastTournamentIdTeamsStandingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBroadcastBroadcastTournamentIdTeamsStandings<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getBroadcastBroadcastTournamentIdTeamsStandingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBroadcastBroadcastTournamentIdTeamsStandingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBroadcastBroadcastTournamentIdEditMutationKey() {
  return ['broadcast', '/broadcast/:broadcastTournamentId/edit', 'POST'] as const
}

export function getPostBroadcastBroadcastTournamentIdEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['edit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['edit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBroadcastBroadcastTournamentIdEditMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['edit']['$post']>,
    ) {
      return parseResponse(client.broadcast[':broadcastTournamentId'].edit.$post(args, options))
    },
  })
}

export function usePostBroadcastBroadcastTournamentIdEdit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['edit']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['edit']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBroadcastBroadcastTournamentIdEditMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBroadcastBroadcastTournamentIdNewMutationKey() {
  return ['broadcast', '/broadcast/:broadcastTournamentId/new', 'POST'] as const
}

export function getPostBroadcastBroadcastTournamentIdNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['new']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['new']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBroadcastBroadcastTournamentIdNewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['new']['$post']>,
    ) {
      return parseResponse(client.broadcast[':broadcastTournamentId'].new.$post(args, options))
    },
  })
}

export function usePostBroadcastBroadcastTournamentIdNew<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['new']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['new']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBroadcastBroadcastTournamentIdNewMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdQueryKey(
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

export function getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.broadcast)[':broadcastTournamentSlug'][':broadcastRoundSlug'][':broadcastRoundId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdQueryKey
    >
  >({
    queryKey:
      getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.broadcast[':broadcastTournamentSlug'][':broadcastRoundSlug'][
          ':broadcastRoundId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.broadcast)[':broadcastTournamentSlug'][':broadcastRoundSlug'][':broadcastRoundId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.broadcast)[':broadcastTournamentSlug'][':broadcastRoundSlug'][':broadcastRoundId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBroadcastRoundBroadcastRoundIdEditMutationKey() {
  return ['broadcast', '/broadcast/round/:broadcastRoundId/edit', 'POST'] as const
}

export function getPostBroadcastRoundBroadcastRoundIdEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.broadcast.round)[':broadcastRoundId']['edit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.broadcast.round)[':broadcastRoundId']['edit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBroadcastRoundBroadcastRoundIdEditMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.broadcast.round)[':broadcastRoundId']['edit']['$post']>,
    ) {
      return parseResponse(client.broadcast.round[':broadcastRoundId'].edit.$post(args, options))
    },
  })
}

export function usePostBroadcastRoundBroadcastRoundIdEdit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.broadcast.round)[':broadcastRoundId']['edit']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.broadcast.round)[':broadcastRoundId']['edit']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBroadcastRoundBroadcastRoundIdEditMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBroadcastRoundBroadcastRoundIdResetMutationKey() {
  return ['api', '/api/broadcast/round/:broadcastRoundId/reset', 'POST'] as const
}

export function getPostApiBroadcastRoundBroadcastRoundIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId']['reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBroadcastRoundBroadcastRoundIdResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.broadcast.round)[':broadcastRoundId']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.api.broadcast.round[':broadcastRoundId'].reset.$post(args, options),
      )
    },
  })
}

export function usePostApiBroadcastRoundBroadcastRoundIdReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.broadcast.round)[':broadcastRoundId']['reset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.broadcast.round)[':broadcastRoundId']['reset']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBroadcastRoundBroadcastRoundIdResetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBroadcastRoundBroadcastRoundIdPushMutationKey() {
  return ['api', '/api/broadcast/round/:broadcastRoundId/push', 'POST'] as const
}

export function getPostApiBroadcastRoundBroadcastRoundIdPushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId']['push']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBroadcastRoundBroadcastRoundIdPushMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.broadcast.round)[':broadcastRoundId']['push']['$post']
      >,
    ) {
      return parseResponse(
        client.api.broadcast.round[':broadcastRoundId'].push.$post(args, options),
      )
    },
  })
}

export function usePostApiBroadcastRoundBroadcastRoundIdPush<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.broadcast.round)[':broadcastRoundId']['push']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId']['push']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBroadcastRoundBroadcastRoundIdPushMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiStreamBroadcastRoundBroadcastRoundIdPgnQueryKey(
  args: InferRequestType<
    (typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']
  >,
) {
  return ['api', '/api/stream/broadcast/round/:broadcastRoundId.pgn', args] as const
}

export function getApiStreamBroadcastRoundBroadcastRoundIdPgnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStreamBroadcastRoundBroadcastRoundIdPgnQueryKey>
  >({
    queryKey: getApiStreamBroadcastRoundBroadcastRoundIdPgnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.stream.broadcast.round[':broadcastRoundId.pgn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiStreamBroadcastRoundBroadcastRoundIdPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiStreamBroadcastRoundBroadcastRoundIdPgnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiStreamBroadcastRoundBroadcastRoundIdPgnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiStreamBroadcastRoundBroadcastRoundIdPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiStreamBroadcastRoundBroadcastRoundIdPgnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiStreamBroadcastRoundBroadcastRoundIdPgnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiStreamBroadcastTourBroadcastTourIdPgnQueryKey(
  args: InferRequestType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>,
) {
  return ['api', '/api/stream/broadcast/tour/:broadcastTourId.pgn', args] as const
}

export function getApiStreamBroadcastTourBroadcastTourIdPgnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStreamBroadcastTourBroadcastTourIdPgnQueryKey>
  >({
    queryKey: getApiStreamBroadcastTourBroadcastTourIdPgnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.stream.broadcast.tour[':broadcastTourId.pgn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiStreamBroadcastTourBroadcastTourIdPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStreamBroadcastTourBroadcastTourIdPgnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiStreamBroadcastTourBroadcastTourIdPgnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiStreamBroadcastTourBroadcastTourIdPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStreamBroadcastTourBroadcastTourIdPgnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiStreamBroadcastTourBroadcastTourIdPgnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiStreamBroadcastGroupBroadcastGroupIdPgnQueryKey(
  args: InferRequestType<
    (typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']
  >,
) {
  return ['api', '/api/stream/broadcast/group/:broadcastGroupId.pgn', args] as const
}

export function getApiStreamBroadcastGroupBroadcastGroupIdPgnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStreamBroadcastGroupBroadcastGroupIdPgnQueryKey>
  >({
    queryKey: getApiStreamBroadcastGroupBroadcastGroupIdPgnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.stream.broadcast.group[':broadcastGroupId.pgn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiStreamBroadcastGroupBroadcastGroupIdPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiStreamBroadcastGroupBroadcastGroupIdPgnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiStreamBroadcastGroupBroadcastGroupIdPgnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiStreamBroadcastGroupBroadcastGroupIdPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiStreamBroadcastGroupBroadcastGroupIdPgnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiStreamBroadcastGroupBroadcastGroupIdPgnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiBroadcastRoundBroadcastRoundIdPgnQueryKey(
  args: InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>,
) {
  return ['api', '/api/broadcast/round/:broadcastRoundId.pgn', args] as const
}

export function getApiBroadcastRoundBroadcastRoundIdPgnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBroadcastRoundBroadcastRoundIdPgnQueryKey>
  >({
    queryKey: getApiBroadcastRoundBroadcastRoundIdPgnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.broadcast.round[':broadcastRoundId.pgn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiBroadcastRoundBroadcastRoundIdPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBroadcastRoundBroadcastRoundIdPgnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiBroadcastRoundBroadcastRoundIdPgnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiBroadcastRoundBroadcastRoundIdPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBroadcastRoundBroadcastRoundIdPgnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiBroadcastRoundBroadcastRoundIdPgnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiBroadcastBroadcastTournamentIdPgnQueryKey(
  args: InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>,
) {
  return ['api', '/api/broadcast/:broadcastTournamentId.pgn', args] as const
}

export function getApiBroadcastBroadcastTournamentIdPgnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBroadcastBroadcastTournamentIdPgnQueryKey>
  >({
    queryKey: getApiBroadcastBroadcastTournamentIdPgnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.broadcast[':broadcastTournamentId.pgn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiBroadcastBroadcastTournamentIdPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBroadcastBroadcastTournamentIdPgnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiBroadcastBroadcastTournamentIdPgnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiBroadcastBroadcastTournamentIdPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBroadcastBroadcastTournamentIdPgnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiBroadcastBroadcastTournamentIdPgnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiBroadcastMyRoundsQueryKey(
  args: InferRequestType<(typeof client.api.broadcast)['my-rounds']['$get']>,
) {
  return ['api', '/api/broadcast/my-rounds', args] as const
}

export function getApiBroadcastMyRoundsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.broadcast)['my-rounds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.broadcast)['my-rounds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.broadcast)['my-rounds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBroadcastMyRoundsQueryKey>
  >({
    queryKey: getApiBroadcastMyRoundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.broadcast['my-rounds'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiBroadcastMyRounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.broadcast)['my-rounds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.broadcast)['my-rounds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.broadcast)['my-rounds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBroadcastMyRoundsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiBroadcastMyRoundsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiBroadcastMyRounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.broadcast)['my-rounds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.broadcast)['my-rounds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.broadcast)['my-rounds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBroadcastMyRoundsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiBroadcastMyRoundsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiFidePlayerPlayerIdQueryKey(
  args: InferRequestType<(typeof client.api.fide.player)[':playerId']['$get']>,
) {
  return ['api', '/api/fide/player/:playerId', args] as const
}

export function getApiFidePlayerPlayerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.fide.player)[':playerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFidePlayerPlayerIdQueryKey>
  >({
    queryKey: getApiFidePlayerPlayerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.fide.player[':playerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFidePlayerPlayerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.fide.player)[':playerId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFidePlayerPlayerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiFidePlayerPlayerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFidePlayerPlayerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.fide.player)[':playerId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFidePlayerPlayerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiFidePlayerPlayerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiFidePlayerPlayerIdRatingsQueryKey(
  args: InferRequestType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>,
) {
  return ['api', '/api/fide/player/:playerId/ratings', args] as const
}

export function getApiFidePlayerPlayerIdRatingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFidePlayerPlayerIdRatingsQueryKey>
  >({
    queryKey: getApiFidePlayerPlayerIdRatingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.fide.player[':playerId'].ratings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFidePlayerPlayerIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFidePlayerPlayerIdRatingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiFidePlayerPlayerIdRatingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFidePlayerPlayerIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFidePlayerPlayerIdRatingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiFidePlayerPlayerIdRatingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiFidePlayerQueryKey(
  args: InferRequestType<typeof client.api.fide.player.$get>,
) {
  return ['api', '/api/fide/player', args] as const
}

export function getApiFidePlayerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fide.player.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.fide.player.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fide.player.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiFidePlayerQueryKey>
  >({
    queryKey: getApiFidePlayerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.fide.player.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiFidePlayer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fide.player.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.fide.player.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fide.player.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiFidePlayerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFidePlayerQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFidePlayer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fide.player.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.fide.player.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fide.player.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiFidePlayerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFidePlayerQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSimulQueryKey() {
  return ['api', '/api/simul'] as const
}

export function getApiSimulQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.simul.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.simul.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSimulQueryKey>
  >({
    queryKey: getApiSimulQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.simul.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiSimul<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.simul.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.simul.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSimulQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSimulQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSimul<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.simul.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.simul.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSimulQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSimulQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTeamTeamIdQueryKey(
  args: InferRequestType<(typeof client.api.team)[':teamId']['$get']>,
) {
  return ['api', '/api/team/:teamId', args] as const
}

export function getApiTeamTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.team)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.team)[':teamId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamTeamIdQueryKey>
  >({
    queryKey: getApiTeamTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.team[':teamId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTeamTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.team)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.team)[':teamId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTeamTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTeamTeamIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTeamTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.team)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.team)[':teamId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTeamTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTeamTeamIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTeamAllQueryKey(args: InferRequestType<typeof client.api.team.all.$get>) {
  return ['api', '/api/team/all', args] as const
}

export function getApiTeamAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.team.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTeamAllQueryKey>
  >({
    queryKey: getApiTeamAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.team.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTeamAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.team.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTeamAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTeamAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTeamAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.team.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTeamAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTeamAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTeamOfUsernameQueryKey(
  args: InferRequestType<(typeof client.api.team.of)[':username']['$get']>,
) {
  return ['api', '/api/team/of/:username', args] as const
}

export function getApiTeamOfUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.team.of)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team.of)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.team.of)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamOfUsernameQueryKey>
  >({
    queryKey: getApiTeamOfUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.team.of[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiTeamOfUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.team.of)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team.of)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.team.of)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTeamOfUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTeamOfUsernameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTeamOfUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.team.of)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team.of)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.team.of)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTeamOfUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTeamOfUsernameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTeamSearchQueryKey(
  args: InferRequestType<typeof client.api.team.search.$get>,
) {
  return ['api', '/api/team/search', args] as const
}

export function getApiTeamSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.team.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamSearchQueryKey>
  >({
    queryKey: getApiTeamSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.team.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTeamSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.team.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTeamSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTeamSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTeamSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.team.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTeamSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTeamSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTeamTeamIdUsersQueryKey(
  args: InferRequestType<(typeof client.api.team)[':teamId']['users']['$get']>,
) {
  return ['api', '/api/team/:teamId/users', args] as const
}

export function getApiTeamTeamIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.team)[':teamId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.team)[':teamId']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamTeamIdUsersQueryKey>
  >({
    queryKey: getApiTeamTeamIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.team[':teamId'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiTeamTeamIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.team)[':teamId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['users']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.team)[':teamId']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTeamTeamIdUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTeamTeamIdUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTeamTeamIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.team)[':teamId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['users']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.team)[':teamId']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTeamTeamIdUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTeamTeamIdUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTeamTeamIdArenaQueryKey(
  args: InferRequestType<(typeof client.api.team)[':teamId']['arena']['$get']>,
) {
  return ['api', '/api/team/:teamId/arena', args] as const
}

export function getApiTeamTeamIdArenaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.team)[':teamId']['arena']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['arena']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.team)[':teamId']['arena']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamTeamIdArenaQueryKey>
  >({
    queryKey: getApiTeamTeamIdArenaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.team[':teamId'].arena.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiTeamTeamIdArena<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.team)[':teamId']['arena']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['arena']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.team)[':teamId']['arena']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTeamTeamIdArenaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTeamTeamIdArenaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTeamTeamIdArena<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.team)[':teamId']['arena']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['arena']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.team)[':teamId']['arena']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTeamTeamIdArenaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTeamTeamIdArenaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTeamTeamIdJoinMutationKey() {
  return ['team', '/team/:teamId/join', 'POST'] as const
}

export function getPostTeamTeamIdJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamId']['join']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.team)[':teamId']['join']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamTeamIdJoinMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.team)[':teamId']['join']['$post']>) {
      return parseResponse(client.team[':teamId'].join.$post(args, options))
    },
  })
}

export function usePostTeamTeamIdJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':teamId']['join']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.team)[':teamId']['join']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTeamTeamIdJoinMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTeamTeamIdQuitMutationKey() {
  return ['team', '/team/:teamId/quit', 'POST'] as const
}

export function getPostTeamTeamIdQuitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)[':teamId']['quit']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.team)[':teamId']['quit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamTeamIdQuitMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.team)[':teamId']['quit']['$post']>) {
      return parseResponse(client.team[':teamId'].quit.$post(args, options))
    },
  })
}

export function usePostTeamTeamIdQuit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':teamId']['quit']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.team)[':teamId']['quit']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTeamTeamIdQuitMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTeamTeamIdRequestsQueryKey(
  args: InferRequestType<(typeof client.api.team)[':teamId']['requests']['$get']>,
) {
  return ['api', '/api/team/:teamId/requests', args] as const
}

export function getApiTeamTeamIdRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.team)[':teamId']['requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.team)[':teamId']['requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamTeamIdRequestsQueryKey>
  >({
    queryKey: getApiTeamTeamIdRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.team[':teamId'].requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiTeamTeamIdRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.team)[':teamId']['requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['requests']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.team)[':teamId']['requests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTeamTeamIdRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiTeamTeamIdRequestsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiTeamTeamIdRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.team)[':teamId']['requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.team)[':teamId']['requests']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.team)[':teamId']['requests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTeamTeamIdRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiTeamTeamIdRequestsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiTeamTeamIdRequestUserIdAcceptMutationKey() {
  return ['api', '/api/team/:teamId/request/:userId/accept', 'POST'] as const
}

export function getPostApiTeamTeamIdRequestUserIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.team)[':teamId']['request'][':userId']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTeamTeamIdRequestUserIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.team)[':teamId']['request'][':userId']['accept']['$post']
      >,
    ) {
      return parseResponse(
        client.api.team[':teamId'].request[':userId'].accept.$post(args, options),
      )
    },
  })
}

export function usePostApiTeamTeamIdRequestUserIdAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.team)[':teamId']['request'][':userId']['accept']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.team)[':teamId']['request'][':userId']['accept']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTeamTeamIdRequestUserIdAcceptMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiTeamTeamIdRequestUserIdDeclineMutationKey() {
  return ['api', '/api/team/:teamId/request/:userId/decline', 'POST'] as const
}

export function getPostApiTeamTeamIdRequestUserIdDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.team)[':teamId']['request'][':userId']['decline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTeamTeamIdRequestUserIdDeclineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.team)[':teamId']['request'][':userId']['decline']['$post']
      >,
    ) {
      return parseResponse(
        client.api.team[':teamId'].request[':userId'].decline.$post(args, options),
      )
    },
  })
}

export function usePostApiTeamTeamIdRequestUserIdDecline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.api.team)[':teamId']['request'][':userId']['decline']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTeamTeamIdRequestUserIdDeclineMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiTeamTeamIdKickUserIdMutationKey() {
  return ['api', '/api/team/:teamId/kick/:userId', 'POST'] as const
}

export function getPostApiTeamTeamIdKickUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.team)[':teamId']['kick'][':userId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.team)[':teamId']['kick'][':userId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTeamTeamIdKickUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.team)[':teamId']['kick'][':userId']['$post']>,
    ) {
      return parseResponse(client.api.team[':teamId'].kick[':userId'].$post(args, options))
    },
  })
}

export function usePostApiTeamTeamIdKickUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.team)[':teamId']['kick'][':userId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.team)[':teamId']['kick'][':userId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTeamTeamIdKickUserIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTeamUpdatesQueryKey(args: InferRequestType<typeof client.team.updates.$get>) {
  return ['team', '/team/updates', args] as const
}

export function getTeamUpdatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.updates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.team.updates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.updates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamUpdatesQueryKey>
  >({
    queryKey: getTeamUpdatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team.updates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTeamUpdates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.updates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.team.updates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.updates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeamUpdatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamUpdatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamUpdates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.updates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.team.updates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.updates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeamUpdatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamUpdatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamUpdatesTeamIdQueryKey(
  args: InferRequestType<(typeof client.team.updates)[':teamId']['$get']>,
) {
  return ['team', '/team/updates/:teamId', args] as const
}

export function getTeamUpdatesTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team.updates)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team.updates)[':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team.updates)[':teamId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamUpdatesTeamIdQueryKey>
  >({
    queryKey: getTeamUpdatesTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team.updates[':teamId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamUpdatesTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team.updates)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team.updates)[':teamId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team.updates)[':teamId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamUpdatesTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamUpdatesTeamIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamUpdatesTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team.updates)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team.updates)[':teamId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team.updates)[':teamId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamUpdatesTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamUpdatesTeamIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTeamTeamIdPmAllMutationKey() {
  return ['team', '/team/:teamId/pm-all', 'POST'] as const
}

export function getPostTeamTeamIdPmAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)[':teamId']['pm-all']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.team)[':teamId']['pm-all']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamTeamIdPmAllMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.team)[':teamId']['pm-all']['$post']>) {
      return parseResponse(client.team[':teamId']['pm-all'].$post(args, options))
    },
  })
}

export function usePostTeamTeamIdPmAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)[':teamId']['pm-all']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.team)[':teamId']['pm-all']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTeamTeamIdPmAllMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiStreamerLiveQueryKey() {
  return ['api', '/api/streamer/live'] as const
}

export function getApiStreamerLiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.streamer.live.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.streamer.live.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiStreamerLiveQueryKey>
  >({
    queryKey: getApiStreamerLiveQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.streamer.live.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiStreamerLive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.streamer.live.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.streamer.live.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStreamerLiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiStreamerLiveQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiStreamerLive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.streamer.live.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.streamer.live.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStreamerLiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiStreamerLiveQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiCrosstableUser1User2QueryKey(
  args: InferRequestType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>,
) {
  return ['api', '/api/crosstable/:user1/:user2', args] as const
}

export function getApiCrosstableUser1User2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCrosstableUser1User2QueryKey>
  >({
    queryKey: getApiCrosstableUser1User2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.crosstable[':user1'][':user2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCrosstableUser1User2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCrosstableUser1User2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiCrosstableUser1User2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCrosstableUser1User2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCrosstableUser1User2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiCrosstableUser1User2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPlayerAutocompleteQueryKey(
  args: InferRequestType<typeof client.api.player.autocomplete.$get>,
) {
  return ['api', '/api/player/autocomplete', args] as const
}

export function getApiPlayerAutocompleteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.player.autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.player.autocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.player.autocomplete.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPlayerAutocompleteQueryKey>
  >({
    queryKey: getApiPlayerAutocompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.player.autocomplete.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPlayerAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.player.autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.player.autocomplete.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.player.autocomplete.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPlayerAutocompleteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiPlayerAutocompleteQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPlayerAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.player.autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.player.autocomplete.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.player.autocomplete.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPlayerAutocompleteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiPlayerAutocompleteQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiUserUsernameNoteQueryKey(
  args: InferRequestType<(typeof client.api.user)[':username']['note']['$get']>,
) {
  return ['api', '/api/user/:username/note', args] as const
}

export function getApiUserUsernameNoteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['note']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['note']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)[':username']['note']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUsernameNoteQueryKey>
  >({
    queryKey: getApiUserUsernameNoteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user[':username'].note.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiUserUsernameNote<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['note']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['note']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)[':username']['note']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUsernameNoteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUserUsernameNoteQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUserUsernameNote<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user)[':username']['note']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user)[':username']['note']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)[':username']['note']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserUsernameNoteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUserUsernameNoteQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiUserUsernameNoteMutationKey() {
  return ['api', '/api/user/:username/note', 'POST'] as const
}

export function getPostApiUserUsernameNoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)[':username']['note']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user)[':username']['note']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserUsernameNoteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user)[':username']['note']['$post']>,
    ) {
      return parseResponse(client.api.user[':username'].note.$post(args, options))
    },
  })
}

export function usePostApiUserUsernameNote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user)[':username']['note']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user)[':username']['note']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserUsernameNoteMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiRelFollowingQueryKey() {
  return ['api', '/api/rel/following'] as const
}

export function getApiRelFollowingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rel.following.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rel.following.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiRelFollowingQueryKey>
  >({
    queryKey: getApiRelFollowingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rel.following.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiRelFollowing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rel.following.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.rel.following.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRelFollowingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiRelFollowingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiRelFollowing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rel.following.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.rel.following.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRelFollowingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiRelFollowingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiRelFollowUsernameMutationKey() {
  return ['api', '/api/rel/follow/:username', 'POST'] as const
}

export function getPostApiRelFollowUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rel.follow)[':username']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.rel.follow)[':username']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRelFollowUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.rel.follow)[':username']['$post']>) {
      return parseResponse(client.api.rel.follow[':username'].$post(args, options))
    },
  })
}

export function usePostApiRelFollowUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.rel.follow)[':username']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.rel.follow)[':username']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRelFollowUsernameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiRelUnfollowUsernameMutationKey() {
  return ['api', '/api/rel/unfollow/:username', 'POST'] as const
}

export function getPostApiRelUnfollowUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rel.unfollow)[':username']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.rel.unfollow)[':username']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRelUnfollowUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.rel.unfollow)[':username']['$post']>,
    ) {
      return parseResponse(client.api.rel.unfollow[':username'].$post(args, options))
    },
  })
}

export function usePostApiRelUnfollowUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.rel.unfollow)[':username']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.rel.unfollow)[':username']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRelUnfollowUsernameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiRelBlockUsernameMutationKey() {
  return ['api', '/api/rel/block/:username', 'POST'] as const
}

export function getPostApiRelBlockUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rel.block)[':username']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.rel.block)[':username']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRelBlockUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.rel.block)[':username']['$post']>) {
      return parseResponse(client.api.rel.block[':username'].$post(args, options))
    },
  })
}

export function usePostApiRelBlockUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.rel.block)[':username']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.rel.block)[':username']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRelBlockUsernameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiRelUnblockUsernameMutationKey() {
  return ['api', '/api/rel/unblock/:username', 'POST'] as const
}

export function getPostApiRelUnblockUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rel.unblock)[':username']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.rel.unblock)[':username']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRelUnblockUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.rel.unblock)[':username']['$post']>,
    ) {
      return parseResponse(client.api.rel.unblock[':username'].$post(args, options))
    },
  })
}

export function usePostApiRelUnblockUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.rel.unblock)[':username']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.rel.unblock)[':username']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRelUnblockUsernameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiStreamEventQueryKey() {
  return ['api', '/api/stream/event'] as const
}

export function getApiStreamEventQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.stream.event.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.stream.event.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiStreamEventQueryKey>
  >({
    queryKey: getApiStreamEventQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.stream.event.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiStreamEvent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.stream.event.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.stream.event.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiStreamEventQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiStreamEventQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiStreamEvent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.stream.event.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.stream.event.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiStreamEventQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiStreamEventQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiBoardSeekMutationKey() {
  return ['api', '/api/board/seek', 'POST'] as const
}

export function getPostApiBoardSeekMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.board.seek.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.board.seek.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBoardSeekMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.board.seek.$post>) {
      return parseResponse(client.api.board.seek.$post(args, options))
    },
  })
}

export function usePostApiBoardSeek<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.board.seek.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.board.seek.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBoardSeekMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiBoardGameStreamGameIdQueryKey(
  args: InferRequestType<(typeof client.api.board.game.stream)[':gameId']['$get']>,
) {
  return ['api', '/api/board/game/stream/:gameId', args] as const
}

export function getApiBoardGameStreamGameIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.board.game.stream)[':gameId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.board.game.stream)[':gameId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game.stream)[':gameId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBoardGameStreamGameIdQueryKey>
  >({
    queryKey: getApiBoardGameStreamGameIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.board.game.stream[':gameId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiBoardGameStreamGameId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.board.game.stream)[':gameId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.board.game.stream)[':gameId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.board.game.stream)[':gameId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBoardGameStreamGameIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiBoardGameStreamGameIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiBoardGameStreamGameId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.board.game.stream)[':gameId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.board.game.stream)[':gameId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.board.game.stream)[':gameId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBoardGameStreamGameIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiBoardGameStreamGameIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiBoardGameGameIdMoveMoveMutationKey() {
  return ['api', '/api/board/game/:gameId/move/:move', 'POST'] as const
}

export function getPostApiBoardGameGameIdMoveMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['move'][':move']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.board.game)[':gameId']['move'][':move']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBoardGameGameIdMoveMoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.board.game)[':gameId']['move'][':move']['$post']>,
    ) {
      return parseResponse(client.api.board.game[':gameId'].move[':move'].$post(args, options))
    },
  })
}

export function usePostApiBoardGameGameIdMoveMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.board.game)[':gameId']['move'][':move']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.board.game)[':gameId']['move'][':move']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBoardGameGameIdMoveMoveMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiBoardGameGameIdChatQueryKey(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$get']>,
) {
  return ['api', '/api/board/game/:gameId/chat', args] as const
}

export function getApiBoardGameGameIdChatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['chat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBoardGameGameIdChatQueryKey>
  >({
    queryKey: getApiBoardGameGameIdChatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.board.game[':gameId'].chat.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiBoardGameGameIdChat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['chat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBoardGameGameIdChatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiBoardGameGameIdChatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiBoardGameGameIdChat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['chat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBoardGameGameIdChatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiBoardGameGameIdChatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiBoardGameGameIdChatMutationKey() {
  return ['api', '/api/board/game/:gameId/chat', 'POST'] as const
}

export function getPostApiBoardGameGameIdChatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['chat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBoardGameGameIdChatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$post']>,
    ) {
      return parseResponse(client.api.board.game[':gameId'].chat.$post(args, options))
    },
  })
}

export function usePostApiBoardGameGameIdChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['chat']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBoardGameGameIdChatMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBoardGameGameIdAbortMutationKey() {
  return ['api', '/api/board/game/:gameId/abort', 'POST'] as const
}

export function getPostApiBoardGameGameIdAbortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['abort']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.board.game)[':gameId']['abort']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBoardGameGameIdAbortMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.board.game)[':gameId']['abort']['$post']>,
    ) {
      return parseResponse(client.api.board.game[':gameId'].abort.$post(args, options))
    },
  })
}

export function usePostApiBoardGameGameIdAbort<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['abort']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.board.game)[':gameId']['abort']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBoardGameGameIdAbortMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBoardGameGameIdResignMutationKey() {
  return ['api', '/api/board/game/:gameId/resign', 'POST'] as const
}

export function getPostApiBoardGameGameIdResignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['resign']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.board.game)[':gameId']['resign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBoardGameGameIdResignMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.board.game)[':gameId']['resign']['$post']>,
    ) {
      return parseResponse(client.api.board.game[':gameId'].resign.$post(args, options))
    },
  })
}

export function usePostApiBoardGameGameIdResign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['resign']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.board.game)[':gameId']['resign']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBoardGameGameIdResignMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBoardGameGameIdDrawAcceptMutationKey() {
  return ['api', '/api/board/game/:gameId/draw/:accept', 'POST'] as const
}

export function getPostApiBoardGameGameIdDrawAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['draw'][':accept']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.board.game)[':gameId']['draw'][':accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBoardGameGameIdDrawAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.board.game)[':gameId']['draw'][':accept']['$post']>,
    ) {
      return parseResponse(client.api.board.game[':gameId'].draw[':accept'].$post(args, options))
    },
  })
}

export function usePostApiBoardGameGameIdDrawAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.board.game)[':gameId']['draw'][':accept']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.board.game)[':gameId']['draw'][':accept']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBoardGameGameIdDrawAcceptMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBoardGameGameIdTakebackAcceptMutationKey() {
  return ['api', '/api/board/game/:gameId/takeback/:accept', 'POST'] as const
}

export function getPostApiBoardGameGameIdTakebackAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.board.game)[':gameId']['takeback'][':accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBoardGameGameIdTakebackAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.board.game)[':gameId']['takeback'][':accept']['$post']
      >,
    ) {
      return parseResponse(
        client.api.board.game[':gameId'].takeback[':accept'].$post(args, options),
      )
    },
  })
}

export function usePostApiBoardGameGameIdTakebackAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.board.game)[':gameId']['takeback'][':accept']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.board.game)[':gameId']['takeback'][':accept']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBoardGameGameIdTakebackAcceptMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBoardGameGameIdClaimVictoryMutationKey() {
  return ['api', '/api/board/game/:gameId/claim-victory', 'POST'] as const
}

export function getPostApiBoardGameGameIdClaimVictoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['claim-victory']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.board.game)[':gameId']['claim-victory']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBoardGameGameIdClaimVictoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.board.game)[':gameId']['claim-victory']['$post']>,
    ) {
      return parseResponse(client.api.board.game[':gameId']['claim-victory'].$post(args, options))
    },
  })
}

export function usePostApiBoardGameGameIdClaimVictory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.board.game)[':gameId']['claim-victory']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.board.game)[':gameId']['claim-victory']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBoardGameGameIdClaimVictoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBoardGameGameIdClaimDrawMutationKey() {
  return ['api', '/api/board/game/:gameId/claim-draw', 'POST'] as const
}

export function getPostApiBoardGameGameIdClaimDrawMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['claim-draw']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.board.game)[':gameId']['claim-draw']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBoardGameGameIdClaimDrawMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.board.game)[':gameId']['claim-draw']['$post']>,
    ) {
      return parseResponse(client.api.board.game[':gameId']['claim-draw'].$post(args, options))
    },
  })
}

export function usePostApiBoardGameGameIdClaimDraw<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['claim-draw']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.board.game)[':gameId']['claim-draw']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBoardGameGameIdClaimDrawMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBoardGameGameIdBerserkMutationKey() {
  return ['api', '/api/board/game/:gameId/berserk', 'POST'] as const
}

export function getPostApiBoardGameGameIdBerserkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['berserk']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.board.game)[':gameId']['berserk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBoardGameGameIdBerserkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.board.game)[':gameId']['berserk']['$post']>,
    ) {
      return parseResponse(client.api.board.game[':gameId'].berserk.$post(args, options))
    },
  })
}

export function usePostApiBoardGameGameIdBerserk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['berserk']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.board.game)[':gameId']['berserk']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBoardGameGameIdBerserkMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiBotOnlineQueryKey(args: InferRequestType<typeof client.api.bot.online.$get>) {
  return ['api', '/api/bot/online', args] as const
}

export function getApiBotOnlineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.online.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.bot.online.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.online.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiBotOnlineQueryKey>
  >({
    queryKey: getApiBotOnlineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.bot.online.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiBotOnline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.online.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.bot.online.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.online.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiBotOnlineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiBotOnlineQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiBotOnline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.online.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.bot.online.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.online.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiBotOnlineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiBotOnlineQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiBotAccountUpgradeMutationKey() {
  return ['api', '/api/bot/account/upgrade', 'POST'] as const
}

export function getPostApiBotAccountUpgradeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.account.upgrade.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiBotAccountUpgradeMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.bot.account.upgrade.$post(undefined, options))
    },
  })
}

export function usePostApiBotAccountUpgrade<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.account.upgrade.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBotAccountUpgradeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiBotGameStreamGameIdQueryKey(
  args: InferRequestType<(typeof client.api.bot.game.stream)[':gameId']['$get']>,
) {
  return ['api', '/api/bot/game/stream/:gameId', args] as const
}

export function getApiBotGameStreamGameIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.bot.game.stream)[':gameId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.bot.game.stream)[':gameId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.bot.game.stream)[':gameId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBotGameStreamGameIdQueryKey>
  >({
    queryKey: getApiBotGameStreamGameIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.bot.game.stream[':gameId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiBotGameStreamGameId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.bot.game.stream)[':gameId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.bot.game.stream)[':gameId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.bot.game.stream)[':gameId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBotGameStreamGameIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiBotGameStreamGameIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiBotGameStreamGameId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.bot.game.stream)[':gameId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.bot.game.stream)[':gameId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.bot.game.stream)[':gameId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBotGameStreamGameIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiBotGameStreamGameIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiBotGameGameIdMoveMoveMutationKey() {
  return ['api', '/api/bot/game/:gameId/move/:move', 'POST'] as const
}

export function getPostApiBotGameGameIdMoveMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['move'][':move']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.bot.game)[':gameId']['move'][':move']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBotGameGameIdMoveMoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.bot.game)[':gameId']['move'][':move']['$post']>,
    ) {
      return parseResponse(client.api.bot.game[':gameId'].move[':move'].$post(args, options))
    },
  })
}

export function usePostApiBotGameGameIdMoveMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['move'][':move']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.bot.game)[':gameId']['move'][':move']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBotGameGameIdMoveMoveMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiBotGameGameIdChatQueryKey(
  args: InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>,
) {
  return ['api', '/api/bot/game/:gameId/chat', args] as const
}

export function getApiBotGameGameIdChatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBotGameGameIdChatQueryKey>
  >({
    queryKey: getApiBotGameGameIdChatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.bot.game[':gameId'].chat.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiBotGameGameIdChat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBotGameGameIdChatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiBotGameGameIdChatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiBotGameGameIdChat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBotGameGameIdChatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiBotGameGameIdChatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiBotGameGameIdChatMutationKey() {
  return ['api', '/api/bot/game/:gameId/chat', 'POST'] as const
}

export function getPostApiBotGameGameIdChatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['chat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBotGameGameIdChatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$post']>,
    ) {
      return parseResponse(client.api.bot.game[':gameId'].chat.$post(args, options))
    },
  })
}

export function usePostApiBotGameGameIdChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['chat']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBotGameGameIdChatMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBotGameGameIdAbortMutationKey() {
  return ['api', '/api/bot/game/:gameId/abort', 'POST'] as const
}

export function getPostApiBotGameGameIdAbortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['abort']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.bot.game)[':gameId']['abort']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBotGameGameIdAbortMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.bot.game)[':gameId']['abort']['$post']>,
    ) {
      return parseResponse(client.api.bot.game[':gameId'].abort.$post(args, options))
    },
  })
}

export function usePostApiBotGameGameIdAbort<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['abort']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.bot.game)[':gameId']['abort']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBotGameGameIdAbortMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBotGameGameIdResignMutationKey() {
  return ['api', '/api/bot/game/:gameId/resign', 'POST'] as const
}

export function getPostApiBotGameGameIdResignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['resign']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.bot.game)[':gameId']['resign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBotGameGameIdResignMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.bot.game)[':gameId']['resign']['$post']>,
    ) {
      return parseResponse(client.api.bot.game[':gameId'].resign.$post(args, options))
    },
  })
}

export function usePostApiBotGameGameIdResign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['resign']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.bot.game)[':gameId']['resign']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBotGameGameIdResignMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBotGameGameIdDrawAcceptMutationKey() {
  return ['api', '/api/bot/game/:gameId/draw/:accept', 'POST'] as const
}

export function getPostApiBotGameGameIdDrawAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['draw'][':accept']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.bot.game)[':gameId']['draw'][':accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBotGameGameIdDrawAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.bot.game)[':gameId']['draw'][':accept']['$post']>,
    ) {
      return parseResponse(client.api.bot.game[':gameId'].draw[':accept'].$post(args, options))
    },
  })
}

export function usePostApiBotGameGameIdDrawAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.bot.game)[':gameId']['draw'][':accept']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.bot.game)[':gameId']['draw'][':accept']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBotGameGameIdDrawAcceptMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBotGameGameIdTakebackAcceptMutationKey() {
  return ['api', '/api/bot/game/:gameId/takeback/:accept', 'POST'] as const
}

export function getPostApiBotGameGameIdTakebackAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.bot.game)[':gameId']['takeback'][':accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBotGameGameIdTakebackAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.bot.game)[':gameId']['takeback'][':accept']['$post']
      >,
    ) {
      return parseResponse(client.api.bot.game[':gameId'].takeback[':accept'].$post(args, options))
    },
  })
}

export function usePostApiBotGameGameIdTakebackAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.api.bot.game)[':gameId']['takeback'][':accept']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBotGameGameIdTakebackAcceptMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBotGameGameIdClaimVictoryMutationKey() {
  return ['api', '/api/bot/game/:gameId/claim-victory', 'POST'] as const
}

export function getPostApiBotGameGameIdClaimVictoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['claim-victory']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.bot.game)[':gameId']['claim-victory']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBotGameGameIdClaimVictoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.bot.game)[':gameId']['claim-victory']['$post']>,
    ) {
      return parseResponse(client.api.bot.game[':gameId']['claim-victory'].$post(args, options))
    },
  })
}

export function usePostApiBotGameGameIdClaimVictory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['claim-victory']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.bot.game)[':gameId']['claim-victory']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBotGameGameIdClaimVictoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBotGameGameIdClaimDrawMutationKey() {
  return ['api', '/api/bot/game/:gameId/claim-draw', 'POST'] as const
}

export function getPostApiBotGameGameIdClaimDrawMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['claim-draw']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.bot.game)[':gameId']['claim-draw']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBotGameGameIdClaimDrawMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.bot.game)[':gameId']['claim-draw']['$post']>,
    ) {
      return parseResponse(client.api.bot.game[':gameId']['claim-draw'].$post(args, options))
    },
  })
}

export function usePostApiBotGameGameIdClaimDraw<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['claim-draw']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.bot.game)[':gameId']['claim-draw']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBotGameGameIdClaimDrawMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiChallengeQueryKey() {
  return ['api', '/api/challenge'] as const
}

export function getApiChallengeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiChallengeQueryKey>
  >({
    queryKey: getApiChallengeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.challenge.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiChallenge<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiChallengeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiChallengeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiChallenge<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiChallengeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiChallengeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiChallengeUsernameMutationKey() {
  return ['api', '/api/challenge/:username', 'POST'] as const
}

export function getPostApiChallengeUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.challenge)[':username']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.challenge)[':username']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiChallengeUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.challenge)[':username']['$post']>) {
      return parseResponse(client.api.challenge[':username'].$post(args, options))
    },
  })
}

export function usePostApiChallengeUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.challenge)[':username']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.challenge)[':username']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiChallengeUsernameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiChallengeChallengeIdShowQueryKey(
  args: InferRequestType<(typeof client.api.challenge)[':challengeId']['show']['$get']>,
) {
  return ['api', '/api/challenge/:challengeId/show', args] as const
}

export function getApiChallengeChallengeIdShowQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['show']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.challenge)[':challengeId']['show']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['show']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiChallengeChallengeIdShowQueryKey>
  >({
    queryKey: getApiChallengeChallengeIdShowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.challenge[':challengeId'].show.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiChallengeChallengeIdShow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['show']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.challenge)[':challengeId']['show']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['show']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiChallengeChallengeIdShowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiChallengeChallengeIdShowQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiChallengeChallengeIdShow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['show']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.challenge)[':challengeId']['show']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['show']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiChallengeChallengeIdShowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiChallengeChallengeIdShowQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiChallengeChallengeIdAcceptMutationKey() {
  return ['api', '/api/challenge/:challengeId/accept', 'POST'] as const
}

export function getPostApiChallengeChallengeIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['accept']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.challenge)[':challengeId']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiChallengeChallengeIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.challenge)[':challengeId']['accept']['$post']>,
    ) {
      return parseResponse(client.api.challenge[':challengeId'].accept.$post(args, options))
    },
  })
}

export function usePostApiChallengeChallengeIdAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['accept']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.challenge)[':challengeId']['accept']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiChallengeChallengeIdAcceptMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiChallengeChallengeIdDeclineMutationKey() {
  return ['api', '/api/challenge/:challengeId/decline', 'POST'] as const
}

export function getPostApiChallengeChallengeIdDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['decline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.challenge)[':challengeId']['decline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiChallengeChallengeIdDeclineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.challenge)[':challengeId']['decline']['$post']>,
    ) {
      return parseResponse(client.api.challenge[':challengeId'].decline.$post(args, options))
    },
  })
}

export function usePostApiChallengeChallengeIdDecline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['decline']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.challenge)[':challengeId']['decline']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiChallengeChallengeIdDeclineMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiChallengeChallengeIdCancelMutationKey() {
  return ['api', '/api/challenge/:challengeId/cancel', 'POST'] as const
}

export function getPostApiChallengeChallengeIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.challenge)[':challengeId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiChallengeChallengeIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.challenge)[':challengeId']['cancel']['$post']>,
    ) {
      return parseResponse(client.api.challenge[':challengeId'].cancel.$post(args, options))
    },
  })
}

export function usePostApiChallengeChallengeIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.challenge)[':challengeId']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiChallengeChallengeIdCancelMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiChallengeAiMutationKey() {
  return ['api', '/api/challenge/ai', 'POST'] as const
}

export function getPostApiChallengeAiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.ai.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.challenge.ai.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiChallengeAiMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.challenge.ai.$post>) {
      return parseResponse(client.api.challenge.ai.$post(args, options))
    },
  })
}

export function usePostApiChallengeAi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.ai.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.challenge.ai.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiChallengeAiMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiChallengeOpenMutationKey() {
  return ['api', '/api/challenge/open', 'POST'] as const
}

export function getPostApiChallengeOpenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.open.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.challenge.open.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiChallengeOpenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.challenge.open.$post>) {
      return parseResponse(client.api.challenge.open.$post(args, options))
    },
  })
}

export function usePostApiChallengeOpen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.open.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.challenge.open.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiChallengeOpenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiChallengeGameIdStartClocksMutationKey() {
  return ['api', '/api/challenge/:gameId/start-clocks', 'POST'] as const
}

export function getPostApiChallengeGameIdStartClocksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.challenge)[':gameId']['start-clocks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.challenge)[':gameId']['start-clocks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiChallengeGameIdStartClocksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.challenge)[':gameId']['start-clocks']['$post']>,
    ) {
      return parseResponse(client.api.challenge[':gameId']['start-clocks'].$post(args, options))
    },
  })
}

export function usePostApiChallengeGameIdStartClocks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.challenge)[':gameId']['start-clocks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.challenge)[':gameId']['start-clocks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiChallengeGameIdStartClocksMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiBulkPairingQueryKey() {
  return ['api', '/api/bulk-pairing'] as const
}

export function getApiBulkPairingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBulkPairingQueryKey>
  >({
    queryKey: getApiBulkPairingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api['bulk-pairing'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiBulkPairing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBulkPairingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiBulkPairingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiBulkPairing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBulkPairingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiBulkPairingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiBulkPairingMutationKey() {
  return ['api', '/api/bulk-pairing', 'POST'] as const
}

export function getPostApiBulkPairingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['bulk-pairing']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBulkPairingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['bulk-pairing']['$post']>) {
      return parseResponse(client.api['bulk-pairing'].$post(args, options))
    },
  })
}

export function usePostApiBulkPairing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['bulk-pairing']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBulkPairingMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiBulkPairingIdStartClocksMutationKey() {
  return ['api', '/api/bulk-pairing/:id/start-clocks', 'POST'] as const
}

export function getPostApiBulkPairingIdStartClocksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['start-clocks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['bulk-pairing'][':id']['start-clocks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBulkPairingIdStartClocksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['start-clocks']['$post']>,
    ) {
      return parseResponse(client.api['bulk-pairing'][':id']['start-clocks'].$post(args, options))
    },
  })
}

export function usePostApiBulkPairingIdStartClocks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['bulk-pairing'][':id']['start-clocks']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['bulk-pairing'][':id']['start-clocks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBulkPairingIdStartClocksMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiBulkPairingIdQueryKey(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$get']>,
) {
  return ['api', '/api/bulk-pairing/:id', args] as const
}

export function getApiBulkPairingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBulkPairingIdQueryKey>
  >({
    queryKey: getApiBulkPairingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['bulk-pairing'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiBulkPairingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBulkPairingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiBulkPairingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiBulkPairingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBulkPairingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiBulkPairingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiBulkPairingIdMutationKey() {
  return ['api', '/api/bulk-pairing/:id', 'DELETE'] as const
}

export function getDeleteApiBulkPairingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiBulkPairingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['bulk-pairing'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiBulkPairingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiBulkPairingIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiBulkPairingIdGamesQueryKey(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/bulk-pairing/:id/games', keyArgs] as const
}

export function getApiBulkPairingIdGamesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBulkPairingIdGamesQueryKey>
  >({
    queryKey: getApiBulkPairingIdGamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['bulk-pairing'][':id'].games.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiBulkPairingIdGames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBulkPairingIdGamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiBulkPairingIdGamesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiBulkPairingIdGames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBulkPairingIdGamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiBulkPairingIdGamesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiRoundGameIdAddTimeSecondsMutationKey() {
  return ['api', '/api/round/:gameId/add-time/:seconds', 'POST'] as const
}

export function getPostApiRoundGameIdAddTimeSecondsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.round)[':gameId']['add-time'][':seconds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.round)[':gameId']['add-time'][':seconds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRoundGameIdAddTimeSecondsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.round)[':gameId']['add-time'][':seconds']['$post']>,
    ) {
      return parseResponse(client.api.round[':gameId']['add-time'][':seconds'].$post(args, options))
    },
  })
}

export function usePostApiRoundGameIdAddTimeSeconds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.round)[':gameId']['add-time'][':seconds']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.round)[':gameId']['add-time'][':seconds']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRoundGameIdAddTimeSecondsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiTokenAdminChallengeMutationKey() {
  return ['api', '/api/token/admin-challenge', 'POST'] as const
}

export function getPostApiTokenAdminChallengeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.token)['admin-challenge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.token)['admin-challenge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTokenAdminChallengeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.token)['admin-challenge']['$post']>,
    ) {
      return parseResponse(client.api.token['admin-challenge'].$post(args, options))
    },
  })
}

export function usePostApiTokenAdminChallenge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.token)['admin-challenge']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.token)['admin-challenge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTokenAdminChallengeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInboxUsernameMutationKey() {
  return ['inbox', '/inbox/:username', 'POST'] as const
}

export function getPostInboxUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbox)[':username']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.inbox)[':username']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInboxUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inbox)[':username']['$post']>) {
      return parseResponse(client.inbox[':username'].$post(args, options))
    },
  })
}

export function usePostInboxUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.inbox)[':username']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.inbox)[':username']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInboxUsernameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiCloudEvalQueryKey(
  args: InferRequestType<(typeof client.api)['cloud-eval']['$get']>,
) {
  return ['api', '/api/cloud-eval', args] as const
}

export function getApiCloudEvalQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['cloud-eval']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['cloud-eval']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['cloud-eval']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCloudEvalQueryKey>
  >({
    queryKey: getApiCloudEvalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['cloud-eval'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiCloudEval<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['cloud-eval']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['cloud-eval']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['cloud-eval']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCloudEvalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiCloudEvalQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiCloudEval<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['cloud-eval']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['cloud-eval']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['cloud-eval']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCloudEvalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiCloudEvalQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiExternalEngineQueryKey() {
  return ['api', '/api/external-engine'] as const
}

export function getApiExternalEngineQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['external-engine']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['external-engine']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiExternalEngineQueryKey>
  >({
    queryKey: getApiExternalEngineQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api['external-engine'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiExternalEngine<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['external-engine']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['external-engine']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiExternalEngineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiExternalEngineQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiExternalEngine<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['external-engine']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['external-engine']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiExternalEngineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiExternalEngineQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiExternalEngineMutationKey() {
  return ['api', '/api/external-engine', 'POST'] as const
}

export function getPostApiExternalEngineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['external-engine']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['external-engine']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiExternalEngineMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['external-engine']['$post']>) {
      return parseResponse(client.api['external-engine'].$post(args, options))
    },
  })
}

export function usePostApiExternalEngine<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['external-engine']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['external-engine']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiExternalEngineMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiExternalEngineIdQueryKey(
  args: InferRequestType<(typeof client.api)['external-engine'][':id']['$get']>,
) {
  return ['api', '/api/external-engine/:id', args] as const
}

export function getApiExternalEngineIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['external-engine'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiExternalEngineIdQueryKey>
  >({
    queryKey: getApiExternalEngineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['external-engine'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiExternalEngineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['external-engine'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiExternalEngineIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiExternalEngineIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiExternalEngineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['external-engine'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiExternalEngineIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiExternalEngineIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiExternalEngineIdMutationKey() {
  return ['api', '/api/external-engine/:id', 'PUT'] as const
}

export function getPutApiExternalEngineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['external-engine'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiExternalEngineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['external-engine'][':id']['$put']>,
    ) {
      return parseResponse(client.api['external-engine'][':id'].$put(args, options))
    },
  })
}

export function usePutApiExternalEngineId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['external-engine'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiExternalEngineIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiExternalEngineIdMutationKey() {
  return ['api', '/api/external-engine/:id', 'DELETE'] as const
}

export function getDeleteApiExternalEngineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['external-engine'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiExternalEngineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['external-engine'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['external-engine'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiExternalEngineId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['external-engine'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiExternalEngineIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiExternalEngineIdAnalyseMutationKey() {
  return ['api', '/api/external-engine/:id/analyse', 'POST'] as const
}

export function getPostApiExternalEngineIdAnalyseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['analyse']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['external-engine'][':id']['analyse']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiExternalEngineIdAnalyseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['external-engine'][':id']['analyse']['$post']>,
    ) {
      return parseResponse(client.api['external-engine'][':id'].analyse.$post(args, options))
    },
  })
}

export function usePostApiExternalEngineIdAnalyse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['analyse']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['external-engine'][':id']['analyse']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiExternalEngineIdAnalyseMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiExternalEngineWorkMutationKey() {
  return ['api', '/api/external-engine/work', 'POST'] as const
}

export function getPostApiExternalEngineWorkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['external-engine']['work']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['external-engine']['work']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiExternalEngineWorkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['external-engine']['work']['$post']>,
    ) {
      return parseResponse(client.api['external-engine'].work.$post(args, options))
    },
  })
}

export function usePostApiExternalEngineWork<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['external-engine']['work']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['external-engine']['work']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiExternalEngineWorkMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiExternalEngineWorkIdMutationKey() {
  return ['api', '/api/external-engine/work/:id', 'POST'] as const
}

export function getPostApiExternalEngineWorkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['external-engine']['work'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['external-engine']['work'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiExternalEngineWorkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['external-engine']['work'][':id']['$post']>,
    ) {
      return parseResponse(client.api['external-engine'].work[':id'].$post(args, options))
    },
  })
}

export function usePostApiExternalEngineWorkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['external-engine']['work'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['external-engine']['work'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiExternalEngineWorkIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOauthQueryKey(args: InferRequestType<typeof client.oauth.$get>) {
  return ['oauth', '/oauth', args] as const
}

export function getOauthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.oauth.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOauthQueryKey>
  >({
    queryKey: getOauthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOauth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOauthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauthQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOauthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauthQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiTokenMutationKey() {
  return ['api', '/api/token', 'POST'] as const
}

export function getPostApiTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.token.$post>) {
      return parseResponse(client.api.token.$post(args, options))
    },
  })
}

export function usePostApiToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiTokenMutationKey() {
  return ['api', '/api/token', 'DELETE'] as const
}

export function getDeleteApiTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.token.$delete>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTokenMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.token.$delete(undefined, options))
    },
  })
}

export function useDeleteApiToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.token.$delete>>>>
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiTokenTestMutationKey() {
  return ['api', '/api/token/test', 'POST'] as const
}

export function getPostApiTokenTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.token.test.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.token.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTokenTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.token.test.$post>) {
      return parseResponse(client.api.token.test.$post(args, options))
    },
  })
}

export function usePostApiTokenTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.token.test.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.token.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiTokenTestMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMastersQueryKey(args: InferRequestType<typeof client.masters.$get>) {
  return ['masters', '/masters', args] as const
}

export function getMastersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.masters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMastersQueryKey>
  >({
    queryKey: getMastersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMasters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masters.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masters.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMastersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMastersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMasters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masters.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masters.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMastersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMastersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLichessQueryKey(args: InferRequestType<typeof client.lichess.$get>) {
  return ['lichess', '/lichess', args] as const
}

export function getLichessQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lichess.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.lichess.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lichess.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLichessQueryKey>
  >({
    queryKey: getLichessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lichess.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLichess<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lichess.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.lichess.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lichess.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLichessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLichessQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLichess<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lichess.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.lichess.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lichess.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLichessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLichessQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlayerQueryKey(args: InferRequestType<typeof client.player.$get>) {
  return ['player', '/player', args] as const
}

export function getPlayerQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.player.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlayerQueryKey>
  >({
    queryKey: getPlayerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.player.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlayer<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.player.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPlayerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlayerQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlayer<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.player.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPlayerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlayerQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMastersPgnGameIdQueryKey(
  args: InferRequestType<(typeof client.masters.pgn)[':gameId']['$get']>,
) {
  return ['masters', '/masters/pgn/:gameId', args] as const
}

export function getMastersPgnGameIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.masters.pgn)[':gameId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masters.pgn)[':gameId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.masters.pgn)[':gameId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMastersPgnGameIdQueryKey>
  >({
    queryKey: getMastersPgnGameIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masters.pgn[':gameId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMastersPgnGameId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.masters.pgn)[':gameId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masters.pgn)[':gameId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.masters.pgn)[':gameId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMastersPgnGameIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMastersPgnGameIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMastersPgnGameId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.masters.pgn)[':gameId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masters.pgn)[':gameId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.masters.pgn)[':gameId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMastersPgnGameIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMastersPgnGameIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStandardQueryKey(args: InferRequestType<typeof client.standard.$get>) {
  return ['standard', '/standard', args] as const
}

export function getStandardQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standard.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.standard.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standard.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStandardQueryKey>
  >({
    queryKey: getStandardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.standard.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStandard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.standard.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standard.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStandardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStandardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStandard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.standard.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standard.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStandardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStandardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAtomicQueryKey(args: InferRequestType<typeof client.atomic.$get>) {
  return ['atomic', '/atomic', args] as const
}

export function getAtomicQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atomic.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.atomic.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atomic.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAtomicQueryKey>
  >({
    queryKey: getAtomicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.atomic.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAtomic<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atomic.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.atomic.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atomic.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAtomicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAtomicQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAtomic<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atomic.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.atomic.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atomic.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAtomicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAtomicQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAntichessQueryKey(args: InferRequestType<typeof client.antichess.$get>) {
  return ['antichess', '/antichess', args] as const
}

export function getAntichessQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.antichess.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.antichess.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.antichess.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAntichessQueryKey>
  >({
    queryKey: getAntichessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.antichess.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAntichess<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.antichess.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.antichess.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.antichess.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAntichessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAntichessQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAntichess<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.antichess.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.antichess.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.antichess.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAntichessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAntichessQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
