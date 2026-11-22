import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.status.$get>>,
) {
  return ['api', '/api/users/status', toValue(args)] as const
}

export function getApiUsersStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.users.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.users.status.$get>>>
            >
          >,
          ReturnType<typeof getApiUsersStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPlayerQueryKey() {
  return ['api', '/api/player'] as const
}

export function getApiPlayerQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPlayerQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.player.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPlayer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.player.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.player.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.player.$get>>>>
          >,
          ReturnType<typeof getApiPlayerQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.player.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPlayerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPlayerQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.player.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPlayerTopNbPerfTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>
  >,
) {
  return ['api', '/api/player/top/:nb/:perfType', toValue(args)] as const
}

export function getApiPlayerTopNbPerfTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPlayerTopNbPerfTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.player.top[':nb'][':perfType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPlayerTopNbPerfTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.api.player.top)[':nb'][':perfType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPlayerTopNbPerfTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPlayerTopNbPerfTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.player.top[':nb'][':perfType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.user)[':username']['$get']>>,
) {
  return ['api', '/api/user/:username', toValue(args)] as const
}

export function getApiUserUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.user)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.user)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.user)[':username']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.user)[':username']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUserUsernameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserUsernameRatingHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['rating-history']['$get']>
  >,
) {
  return ['api', '/api/user/:username/rating-history', toValue(args)] as const
}

export function getApiUserUsernameRatingHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['rating-history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserUsernameRatingHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user[':username']['rating-history'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['rating-history']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.user)[':username']['rating-history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUserUsernameRatingHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.api.user)[':username']['rating-history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUsernameRatingHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserUsernameRatingHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user[':username']['rating-history'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserUsernamePerfPerfQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>
  >,
) {
  return ['api', '/api/user/:username/perf/:perf', toValue(args)] as const
}

export function getApiUserUsernamePerfPerfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserUsernamePerfPerfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user[':username'].perf[':perf'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUserUsernamePerfPerfQueryKey>
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
          Awaited<ReturnType<(typeof client.api.user)[':username']['perf'][':perf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUsernamePerfPerfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserUsernamePerfPerfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user[':username'].perf[':perf'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserUsernameActivityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['activity']['$get']>
  >,
) {
  return ['api', '/api/user/:username/activity', toValue(args)] as const
}

export function getApiUserUsernameActivityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['activity']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserUsernameActivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user[':username'].activity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['activity']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.user)[':username']['activity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUserUsernameActivityQueryKey>
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
          Awaited<ReturnType<(typeof client.api.user)[':username']['activity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUsernameActivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserUsernameActivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user[':username'].activity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPuzzleDailyQueryKey() {
  return ['api', '/api/puzzle/daily'] as const
}

export function getApiPuzzleDailyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPuzzleDailyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.puzzle.daily.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPuzzleDaily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.daily.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.daily.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.daily.$get>>>
            >
          >,
          ReturnType<typeof getApiPuzzleDailyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.daily.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPuzzleDailyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPuzzleDailyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.puzzle.daily.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPuzzleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.puzzle)[':id']['$get']>>,
) {
  return ['api', '/api/puzzle/:id', toValue(args)] as const
}

export function getApiPuzzleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.puzzle)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPuzzleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.puzzle[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPuzzleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.puzzle)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiPuzzleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPuzzleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPuzzleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.puzzle[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPuzzleNextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.puzzle.next.$get>>,
) {
  return ['api', '/api/puzzle/next', toValue(args)] as const
}

export function getApiPuzzleNextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.puzzle.next.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPuzzleNextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.puzzle.next.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPuzzleNext<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.next.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.puzzle.next.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.next.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.next.$get>>>
            >
          >,
          ReturnType<typeof getApiPuzzleNextQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.next.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPuzzleNextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPuzzleNextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.puzzle.next.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPuzzleBatchAngleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$get']>>,
) {
  return ['api', '/api/puzzle/batch/:angle', toValue(args)] as const
}

export function getApiPuzzleBatchAngleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPuzzleBatchAngleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.puzzle.batch[':angle'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPuzzleBatchAngle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.puzzle.batch)[':angle']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.puzzle.batch)[':angle']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.puzzle.batch)[':angle']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPuzzleBatchAngleQueryKey>
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
          Awaited<ReturnType<(typeof client.api.puzzle.batch)[':angle']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPuzzleBatchAngleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPuzzleBatchAngleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.puzzle.batch[':angle'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.puzzle.activity.$get>>,
) {
  return ['api', '/api/puzzle/activity', toValue(args)] as const
}

export function getApiPuzzleActivityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.puzzle.activity.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPuzzleActivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.puzzle.activity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPuzzleActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.puzzle.activity.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.activity.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.activity.$get>>>
            >
          >,
          ReturnType<typeof getApiPuzzleActivityQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.puzzle.activity.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPuzzleActivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPuzzleActivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.puzzle.activity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPuzzleReplayDaysThemeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>
  >,
) {
  return ['api', '/api/puzzle/replay/:days/:theme', toValue(args)] as const
}

export function getApiPuzzleReplayDaysThemeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPuzzleReplayDaysThemeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.puzzle.replay[':days'][':theme'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPuzzleReplayDaysThemeQueryKey>
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
          Awaited<ReturnType<(typeof client.api.puzzle.replay)[':days'][':theme']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPuzzleReplayDaysThemeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPuzzleReplayDaysThemeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.puzzle.replay[':days'][':theme'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPuzzleDashboardDaysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.puzzle.dashboard)[':days']['$get']>>,
) {
  return ['api', '/api/puzzle/dashboard/:days', toValue(args)] as const
}

export function getApiPuzzleDashboardDaysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.puzzle.dashboard)[':days']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPuzzleDashboardDaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.puzzle.dashboard[':days'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.puzzle.dashboard)[':days']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.puzzle.dashboard)[':days']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPuzzleDashboardDaysQueryKey>
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
          Awaited<ReturnType<(typeof client.api.puzzle.dashboard)[':days']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPuzzleDashboardDaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPuzzleDashboardDaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.puzzle.dashboard[':days'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiStormDashboardUsernameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.storm.dashboard)[':username']['$get']>
  >,
) {
  return ['api', '/api/storm/dashboard/:username', toValue(args)] as const
}

export function getApiStormDashboardUsernameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.storm.dashboard)[':username']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStormDashboardUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.storm.dashboard[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.storm.dashboard)[':username']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.storm.dashboard)[':username']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiStormDashboardUsernameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.storm.dashboard)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStormDashboardUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStormDashboardUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.storm.dashboard[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.racer.$post>>>>
          >,
          TError,
          void,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.racer)[':id']['$get']>>,
) {
  return ['api', '/api/racer/:id', toValue(args)] as const
}

export function getApiRacerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.racer)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRacerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.racer[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRacerId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.racer)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.racer)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.racer)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.racer)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiRacerIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.racer)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRacerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRacerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.racer[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.users.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getApiAccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.$get>>>>
          >,
          ReturnType<typeof getApiAccountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAccountEmailQueryKey() {
  return ['api', '/api/account/email'] as const
}

export function getApiAccountEmailQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAccountEmailQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.account.email.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAccountEmail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.email.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.account.email.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.account.email.$get>>>
            >
          >,
          ReturnType<typeof getApiAccountEmailQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.email.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAccountEmailQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.account.email.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAccountPreferencesQueryKey() {
  return ['api', '/api/account/preferences'] as const
}

export function getApiAccountPreferencesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAccountPreferencesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.account.preferences.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.account.preferences.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.account.preferences.$get>>>
            >
          >,
          ReturnType<typeof getApiAccountPreferencesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.account.preferences.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountPreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAccountPreferencesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.account.preferences.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAccountKidQueryKey() {
  return ['api', '/api/account/kid'] as const
}

export function getApiAccountKidQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAccountKidQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.account.kid.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiAccountKid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$get>>>
            >
          >,
          ReturnType<typeof getApiAccountKidQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountKidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAccountKidQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.account.kid.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.account.kid.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.account.kid.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.game.export)[':gameId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['game', '/game/export/:gameId', keyArgs] as const
}

export function getGameExportGameIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.game.export)[':gameId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGameExportGameIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.game.export[':gameId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGameExportGameId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.game.export)[':gameId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.game.export)[':gameId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.game.export)[':gameId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGameExportGameIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.game.export)[':gameId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGameExportGameIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGameExportGameIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.game.export[':gameId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiGameGameIdChatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.game)[':gameId']['chat']['$get']>>,
) {
  return ['api', '/api/game/:gameId/chat', toValue(args)] as const
}

export function getApiGameGameIdChatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.game)[':gameId']['chat']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGameGameIdChatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.game[':gameId'].chat.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGameGameIdChat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.game)[':gameId']['chat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.game)[':gameId']['chat']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.game)[':gameId']['chat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiGameGameIdChatQueryKey>
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
          Awaited<ReturnType<(typeof client.api.game)[':gameId']['chat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGameGameIdChatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGameGameIdChatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.game[':gameId'].chat.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserUsernameCurrentGameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['current-game']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/user/:username/current-game', keyArgs] as const
}

export function getApiUserUsernameCurrentGameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['current-game']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserUsernameCurrentGameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user[':username']['current-game'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['current-game']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.user)[':username']['current-game']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUserUsernameCurrentGameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.user)[':username']['current-game']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUsernameCurrentGameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserUsernameCurrentGameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user[':username']['current-game'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiGamesUserUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.games.user)[':username']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/games/user/:username', keyArgs] as const
}

export function getApiGamesUserUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.games.user)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGamesUserUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.games.user[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGamesUserUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.games.user)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.games.user)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.games.user)[':username']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiGamesUserUsernameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.games.user)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGamesUserUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGamesUserUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.games.user[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.account.playing.$get>>,
) {
  return ['api', '/api/account/playing', toValue(args)] as const
}

export function getApiAccountPlayingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.account.playing.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAccountPlayingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.account.playing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAccountPlaying<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.playing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.account.playing.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.account.playing.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.account.playing.$get>>>
            >
          >,
          ReturnType<typeof getApiAccountPlayingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.account.playing.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountPlayingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAccountPlayingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.account.playing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiStreamGameIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.stream.game)[':id']['$get']>>,
) {
  return ['api', '/api/stream/game/:id', toValue(args)] as const
}

export function getApiStreamGameIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.stream.game)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStreamGameIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.stream.game[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiStreamGameId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.stream.game)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.stream.game)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.stream.game)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiStreamGameIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.stream.game)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStreamGameIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStreamGameIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.stream.game[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.import.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.import.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getApiGamesExportImportsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiGamesExportImportsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.games.export.imports.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.imports.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.imports.$get>>>
            >
          >,
          ReturnType<typeof getApiGamesExportImportsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.imports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGamesExportImportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiGamesExportImportsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.games.export.imports.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiGamesExportBookmarksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.games.export.bookmarks.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/games/export/bookmarks', keyArgs] as const
}

export function getApiGamesExportBookmarksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.games.export.bookmarks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGamesExportBookmarksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.games.export.bookmarks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGamesExportBookmarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.bookmarks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.games.export.bookmarks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.games.export.bookmarks.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.games.export.bookmarks.$get>>
              >
            >
          >,
          ReturnType<typeof getApiGamesExportBookmarksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.games.export.bookmarks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGamesExportBookmarksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGamesExportBookmarksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.games.export.bookmarks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
          >,
          ReturnType<typeof getApiVersionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTvChannelsQueryKey() {
  return ['api', '/api/tv/channels'] as const
}

export function getApiTvChannelsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiTvChannelsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tv.channels.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTvChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.channels.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.channels.$get>>>
            >
          >,
          ReturnType<typeof getApiTvChannelsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.channels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTvChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiTvChannelsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tv.channels.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTvFeedQueryKey() {
  return ['api', '/api/tv/feed'] as const
}

export function getApiTvFeedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiTvFeedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tv.feed.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTvFeed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.feed.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.feed.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.feed.$get>>>>
          >,
          ReturnType<typeof getApiTvFeedQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tv.feed.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTvFeedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiTvFeedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tv.feed.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTvChannelFeedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tv)[':channel']['feed']['$get']>>,
) {
  return ['api', '/api/tv/:channel/feed', toValue(args)] as const
}

export function getApiTvChannelFeedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tv)[':channel']['feed']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTvChannelFeedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tv[':channel'].feed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTvChannelFeed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['feed']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tv)[':channel']['feed']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tv)[':channel']['feed']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTvChannelFeedQueryKey>
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
          Awaited<ReturnType<(typeof client.api.tv)[':channel']['feed']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTvChannelFeedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTvChannelFeedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tv[':channel'].feed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTvChannelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tv)[':channel']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/tv/:channel', keyArgs] as const
}

export function getApiTvChannelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tv)[':channel']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTvChannelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tv[':channel'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTvChannel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tv)[':channel']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['$get']>>>
            >
          >,
          ReturnType<typeof getApiTvChannelQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tv)[':channel']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTvChannelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTvChannelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tv[':channel'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTournamentQueryKey() {
  return ['api', '/api/tournament'] as const
}

export function getApiTournamentQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiTournamentQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tournament.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTournament<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$get>>>>
          >,
          ReturnType<typeof getApiTournamentQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTournamentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiTournamentQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tournament.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.tournament.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.tournament.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tournament)[':id']['$get']>>,
) {
  return ['api', '/api/tournament/:id', toValue(args)] as const
}

export function getApiTournamentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tournament)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTournamentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tournament[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTournamentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tournament)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tournament)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tournament)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tournament)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTournamentIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tournament)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTournamentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTournamentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tournament[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tournament)[':id']['games']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/tournament/:id/games', keyArgs] as const
}

export function getApiTournamentIdGamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tournament)[':id']['games']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTournamentIdGamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tournament[':id'].games.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tournament)[':id']['games']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tournament)[':id']['games']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTournamentIdGamesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.tournament)[':id']['games']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTournamentIdGamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTournamentIdGamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tournament[':id'].games.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTournamentIdResultsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.tournament)[':id']['results']['$get']>
  >,
) {
  return ['api', '/api/tournament/:id/results', toValue(args)] as const
}

export function getApiTournamentIdResultsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.tournament)[':id']['results']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTournamentIdResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tournament[':id'].results.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.tournament)[':id']['results']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tournament)[':id']['results']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTournamentIdResultsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.tournament)[':id']['results']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTournamentIdResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTournamentIdResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tournament[':id'].results.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTournamentIdTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tournament)[':id']['teams']['$get']>>,
) {
  return ['api', '/api/tournament/:id/teams', toValue(args)] as const
}

export function getApiTournamentIdTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tournament)[':id']['teams']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTournamentIdTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tournament[':id'].teams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tournament)[':id']['teams']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tournament)[':id']['teams']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTournamentIdTeamsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.tournament)[':id']['teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTournamentIdTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTournamentIdTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tournament[':id'].teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserUsernameTournamentCreatedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['tournament']['created']['$get']>
  >,
) {
  return ['api', '/api/user/:username/tournament/created', toValue(args)] as const
}

export function getApiUserUsernameTournamentCreatedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['tournament']['created']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserUsernameTournamentCreatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user[':username'].tournament.created.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['tournament']['created']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.user)[':username']['tournament']['created']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiUserUsernameTournamentCreatedQueryKey>
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
            ReturnType<(typeof client.api.user)[':username']['tournament']['created']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUsernameTournamentCreatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserUsernameTournamentCreatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user[':username'].tournament.created.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserUsernameTournamentPlayedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['tournament']['played']['$get']>
  >,
) {
  return ['api', '/api/user/:username/tournament/played', toValue(args)] as const
}

export function getApiUserUsernameTournamentPlayedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['tournament']['played']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserUsernameTournamentPlayedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user[':username'].tournament.played.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user)[':username']['tournament']['played']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.user)[':username']['tournament']['played']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiUserUsernameTournamentPlayedQueryKey>
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
          Awaited<ReturnType<(typeof client.api.user)[':username']['tournament']['played']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUsernameTournamentPlayedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserUsernameTournamentPlayedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user[':username'].tournament.played.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.swiss)[':id']['$get']>>,
) {
  return ['api', '/api/swiss/:id', toValue(args)] as const
}

export function getApiSwissIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.swiss)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSwissIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.swiss[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSwissId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.swiss)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiSwissIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSwissIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSwissIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.swiss[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.swiss)[':id.trf']['$get']>>,
) {
  return ['swiss', '/swiss/:id.trf', toValue(args)] as const
}

export function getSwissIdTrfQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.swiss)[':id.trf']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSwissIdTrfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.swiss[':id.trf'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSwissIdTrf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.swiss)[':id.trf']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.swiss)[':id.trf']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.swiss)[':id.trf']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.swiss)[':id.trf']['$get']>>>
            >
          >,
          ReturnType<typeof getSwissIdTrfQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.swiss)[':id.trf']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSwissIdTrfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSwissIdTrfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.swiss[':id.trf'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSwissIdGamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.swiss)[':id']['games']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/swiss/:id/games', keyArgs] as const
}

export function getApiSwissIdGamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.swiss)[':id']['games']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSwissIdGamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.swiss[':id'].games.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSwissIdGames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['games']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.swiss)[':id']['games']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.swiss)[':id']['games']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSwissIdGamesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['games']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSwissIdGamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSwissIdGamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.swiss[':id'].games.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSwissIdResultsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.swiss)[':id']['results']['$get']>>,
) {
  return ['api', '/api/swiss/:id/results', toValue(args)] as const
}

export function getApiSwissIdResultsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.swiss)[':id']['results']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSwissIdResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.swiss[':id'].results.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSwissIdResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.swiss)[':id']['results']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.swiss)[':id']['results']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.swiss)[':id']['results']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSwissIdResultsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.swiss)[':id']['results']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSwissIdResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSwissIdResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.swiss[':id'].results.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTeamTeamIdSwissQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team)[':teamId']['swiss']['$get']>>,
) {
  return ['api', '/api/team/:teamId/swiss', toValue(args)] as const
}

export function getApiTeamTeamIdSwissQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team)[':teamId']['swiss']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTeamTeamIdSwissQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.team[':teamId'].swiss.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team)[':teamId']['swiss']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.team)[':teamId']['swiss']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTeamTeamIdSwissQueryKey>
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
          Awaited<ReturnType<(typeof client.api.team)[':teamId']['swiss']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamTeamIdSwissQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTeamTeamIdSwissQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.team[':teamId'].swiss.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiStudyStudyIdChapterIdPgnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>
  >,
) {
  return ['api', '/api/study/:studyId/:chapterId.pgn', toValue(args)] as const
}

export function getApiStudyStudyIdChapterIdPgnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStudyStudyIdChapterIdPgnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.study[':studyId'][':chapterId.pgn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiStudyStudyIdChapterIdPgnQueryKey>
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
          Awaited<ReturnType<(typeof client.api.study)[':studyId'][':chapterId.pgn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStudyStudyIdChapterIdPgnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStudyStudyIdChapterIdPgnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.study[':studyId'][':chapterId.pgn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiStudyStudyIdPgnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.study)[':studyId.pgn']['$get']>>,
) {
  return ['api', '/api/study/:studyId.pgn', toValue(args)] as const
}

export function getApiStudyStudyIdPgnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.study)[':studyId.pgn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStudyStudyIdPgnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.study[':studyId.pgn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiStudyStudyIdPgn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.study)[':studyId.pgn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.study)[':studyId.pgn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.study)[':studyId.pgn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiStudyStudyIdPgnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.study)[':studyId.pgn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStudyStudyIdPgnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStudyStudyIdPgnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.study[':studyId.pgn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.study.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.study.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.study)[':studyId'][':chapterId']['moves']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['moves']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>
  >,
) {
  return ['api', '/api/study/by/:username/export.pgn', toValue(args)] as const
}

export function getApiStudyByUsernameExportPgnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStudyByUsernameExportPgnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.study.by[':username']['export.pgn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiStudyByUsernameExportPgnQueryKey>
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
          Awaited<ReturnType<(typeof client.api.study.by)[':username']['export.pgn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStudyByUsernameExportPgnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStudyByUsernameExportPgnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.study.by[':username']['export.pgn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiStudyByUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.study.by)[':username']['$get']>>,
) {
  return ['api', '/api/study/by/:username', toValue(args)] as const
}

export function getApiStudyByUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.study.by)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStudyByUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.study.by[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiStudyByUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.study.by)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.study.by)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.study.by)[':username']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiStudyByUsernameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.study.by)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStudyByUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStudyByUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.study.by[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.study)[':studyId'][':chapterId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.study)[':studyId'][':chapterId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getApiBroadcastQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.broadcast.$get>>,
) {
  return ['api', '/api/broadcast', toValue(args)] as const
}

export function getApiBroadcastQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.broadcast.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBroadcastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.broadcast.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBroadcast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.broadcast.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.$get>>>>
          >,
          ReturnType<typeof getApiBroadcastQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiBroadcastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBroadcastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.broadcast.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBroadcastTopQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.broadcast.top.$get>>,
) {
  return ['api', '/api/broadcast/top', toValue(args)] as const
}

export function getApiBroadcastTopQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.broadcast.top.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBroadcastTopQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.broadcast.top.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBroadcastTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.top.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.broadcast.top.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.top.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.top.$get>>>
            >
          >,
          ReturnType<typeof getApiBroadcastTopQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.top.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiBroadcastTopQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBroadcastTopQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.broadcast.top.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBroadcastByUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.broadcast.by)[':username']['$get']>>,
) {
  return ['api', '/api/broadcast/by/:username', toValue(args)] as const
}

export function getApiBroadcastByUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.broadcast.by)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBroadcastByUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.broadcast.by[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.broadcast.by)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.broadcast.by)[':username']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBroadcastByUsernameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.broadcast.by)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBroadcastByUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBroadcastByUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.broadcast.by[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBroadcastSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.broadcast.search.$get>>,
) {
  return ['api', '/api/broadcast/search', toValue(args)] as const
}

export function getApiBroadcastSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.broadcast.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBroadcastSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.broadcast.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBroadcastSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.broadcast.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.search.$get>>>
            >
          >,
          ReturnType<typeof getApiBroadcastSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.broadcast.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiBroadcastSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBroadcastSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.broadcast.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcast.new.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.broadcast.new.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>
  >,
) {
  return ['api', '/api/broadcast/:broadcastTournamentId', toValue(args)] as const
}

export function getApiBroadcastBroadcastTournamentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBroadcastBroadcastTournamentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.broadcast[':broadcastTournamentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBroadcastBroadcastTournamentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBroadcastBroadcastTournamentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBroadcastBroadcastTournamentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.broadcast[':broadcastTournamentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBroadcastBroadcastTournamentIdPlayersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>
  >,
) {
  return ['broadcast', '/broadcast/:broadcastTournamentId/players', toValue(args)] as const
}

export function getBroadcastBroadcastTournamentIdPlayersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBroadcastBroadcastTournamentIdPlayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.broadcast[':broadcastTournamentId'].players.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBroadcastBroadcastTournamentIdPlayersQueryKey>
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
            ReturnType<(typeof client.broadcast)[':broadcastTournamentId']['players']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBroadcastBroadcastTournamentIdPlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBroadcastBroadcastTournamentIdPlayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.broadcast[':broadcastTournamentId'].players.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBroadcastBroadcastTournamentIdPlayersPlayerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
    >
  >,
) {
  return [
    'broadcast',
    '/broadcast/:broadcastTournamentId/players/:playerId',
    toValue(args),
  ] as const
}

export function getBroadcastBroadcastTournamentIdPlayersPlayerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBroadcastBroadcastTournamentIdPlayersPlayerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.broadcast[':broadcastTournamentId'].players[':playerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
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
                    (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
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
                    (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBroadcastBroadcastTournamentIdPlayersPlayerIdQueryKey>
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
              (typeof client.broadcast)[':broadcastTournamentId']['players'][':playerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBroadcastBroadcastTournamentIdPlayersPlayerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBroadcastBroadcastTournamentIdPlayersPlayerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.broadcast[':broadcastTournamentId'].players[':playerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBroadcastBroadcastTournamentIdTeamsStandingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
    >
  >,
) {
  return ['broadcast', '/broadcast/:broadcastTournamentId/teams/standings', toValue(args)] as const
}

export function getBroadcastBroadcastTournamentIdTeamsStandingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBroadcastBroadcastTournamentIdTeamsStandingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.broadcast[':broadcastTournamentId'].teams.standings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
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
                    (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
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
                    (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBroadcastBroadcastTournamentIdTeamsStandingsQueryKey>
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
              (typeof client.broadcast)[':broadcastTournamentId']['teams']['standings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBroadcastBroadcastTournamentIdTeamsStandingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBroadcastBroadcastTournamentIdTeamsStandingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.broadcast[':broadcastTournamentId'].teams.standings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.broadcast)[':broadcastTournamentSlug'][':broadcastRoundSlug'][':broadcastRoundId']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/broadcast/:broadcastTournamentSlug/:broadcastRoundSlug/:broadcastRoundId',
    toValue(args),
  ] as const
}

export function getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.broadcast)[':broadcastTournamentSlug'][':broadcastRoundSlug'][':broadcastRoundId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.broadcast[':broadcastTournamentSlug'][':broadcastRoundSlug'][
          ':broadcastRoundId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.broadcast)[':broadcastTournamentSlug'][':broadcastRoundSlug'][':broadcastRoundId']['$get']
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
                    (typeof client.api.broadcast)[':broadcastTournamentSlug'][':broadcastRoundSlug'][':broadcastRoundId']['$get']
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
                    (typeof client.api.broadcast)[':broadcastTournamentSlug'][':broadcastRoundSlug'][':broadcastRoundId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.broadcast[':broadcastTournamentSlug'][':broadcastRoundSlug'][
            ':broadcastRoundId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.api.broadcast.round)[':broadcastRoundId']['push']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']>
  >,
) {
  return ['api', '/api/stream/broadcast/round/:broadcastRoundId.pgn', toValue(args)] as const
}

export function getApiStreamBroadcastRoundBroadcastRoundIdPgnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStreamBroadcastRoundBroadcastRoundIdPgnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.stream.broadcast.round[':broadcastRoundId.pgn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']>
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
                    (typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']
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
                    (typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiStreamBroadcastRoundBroadcastRoundIdPgnQueryKey>
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
            ReturnType<(typeof client.api.stream.broadcast.round)[':broadcastRoundId.pgn']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStreamBroadcastRoundBroadcastRoundIdPgnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStreamBroadcastRoundBroadcastRoundIdPgnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.stream.broadcast.round[':broadcastRoundId.pgn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiStreamBroadcastTourBroadcastTourIdPgnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>
  >,
) {
  return ['api', '/api/stream/broadcast/tour/:broadcastTourId.pgn', toValue(args)] as const
}

export function getApiStreamBroadcastTourBroadcastTourIdPgnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStreamBroadcastTourBroadcastTourIdPgnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.stream.broadcast.tour[':broadcastTourId.pgn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>
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
                    (typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']
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
                    (typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiStreamBroadcastTourBroadcastTourIdPgnQueryKey>
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
            ReturnType<(typeof client.api.stream.broadcast.tour)[':broadcastTourId.pgn']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStreamBroadcastTourBroadcastTourIdPgnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStreamBroadcastTourBroadcastTourIdPgnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.stream.broadcast.tour[':broadcastTourId.pgn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiStreamBroadcastGroupBroadcastGroupIdPgnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']>
  >,
) {
  return ['api', '/api/stream/broadcast/group/:broadcastGroupId.pgn', toValue(args)] as const
}

export function getApiStreamBroadcastGroupBroadcastGroupIdPgnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStreamBroadcastGroupBroadcastGroupIdPgnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.stream.broadcast.group[':broadcastGroupId.pgn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']>
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
                    (typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']
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
                    (typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiStreamBroadcastGroupBroadcastGroupIdPgnQueryKey>
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
            ReturnType<(typeof client.api.stream.broadcast.group)[':broadcastGroupId.pgn']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStreamBroadcastGroupBroadcastGroupIdPgnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStreamBroadcastGroupBroadcastGroupIdPgnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.stream.broadcast.group[':broadcastGroupId.pgn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBroadcastRoundBroadcastRoundIdPgnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>
  >,
) {
  return ['api', '/api/broadcast/round/:broadcastRoundId.pgn', toValue(args)] as const
}

export function getApiBroadcastRoundBroadcastRoundIdPgnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBroadcastRoundBroadcastRoundIdPgnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.broadcast.round[':broadcastRoundId.pgn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiBroadcastRoundBroadcastRoundIdPgnQueryKey>
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
          Awaited<ReturnType<(typeof client.api.broadcast.round)[':broadcastRoundId.pgn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBroadcastRoundBroadcastRoundIdPgnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBroadcastRoundBroadcastRoundIdPgnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.broadcast.round[':broadcastRoundId.pgn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBroadcastBroadcastTournamentIdPgnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>
  >,
) {
  return ['api', '/api/broadcast/:broadcastTournamentId.pgn', toValue(args)] as const
}

export function getApiBroadcastBroadcastTournamentIdPgnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBroadcastBroadcastTournamentIdPgnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.broadcast[':broadcastTournamentId.pgn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiBroadcastBroadcastTournamentIdPgnQueryKey>
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
          Awaited<ReturnType<(typeof client.api.broadcast)[':broadcastTournamentId.pgn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBroadcastBroadcastTournamentIdPgnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBroadcastBroadcastTournamentIdPgnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.broadcast[':broadcastTournamentId.pgn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBroadcastMyRoundsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.broadcast)['my-rounds']['$get']>>,
) {
  return ['api', '/api/broadcast/my-rounds', toValue(args)] as const
}

export function getApiBroadcastMyRoundsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.broadcast)['my-rounds']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBroadcastMyRoundsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.broadcast['my-rounds'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBroadcastMyRounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.broadcast)['my-rounds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.broadcast)['my-rounds']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.broadcast)['my-rounds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBroadcastMyRoundsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.broadcast)['my-rounds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBroadcastMyRoundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBroadcastMyRoundsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.broadcast['my-rounds'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFidePlayerPlayerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.fide.player)[':playerId']['$get']>>,
) {
  return ['api', '/api/fide/player/:playerId', toValue(args)] as const
}

export function getApiFidePlayerPlayerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.fide.player)[':playerId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFidePlayerPlayerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.fide.player[':playerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.fide.player)[':playerId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFidePlayerPlayerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFidePlayerPlayerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFidePlayerPlayerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.fide.player[':playerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFidePlayerPlayerIdRatingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>
  >,
) {
  return ['api', '/api/fide/player/:playerId/ratings', toValue(args)] as const
}

export function getApiFidePlayerPlayerIdRatingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFidePlayerPlayerIdRatingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.fide.player[':playerId'].ratings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFidePlayerPlayerIdRatingsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.fide.player)[':playerId']['ratings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFidePlayerPlayerIdRatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFidePlayerPlayerIdRatingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.fide.player[':playerId'].ratings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFidePlayerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.fide.player.$get>>,
) {
  return ['api', '/api/fide/player', toValue(args)] as const
}

export function getApiFidePlayerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.fide.player.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFidePlayerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.fide.player.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFidePlayer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fide.player.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.fide.player.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.fide.player.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.fide.player.$get>>>
            >
          >,
          ReturnType<typeof getApiFidePlayerQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fide.player.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiFidePlayerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFidePlayerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.fide.player.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSimulQueryKey() {
  return ['api', '/api/simul'] as const
}

export function getApiSimulQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSimulQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.simul.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiSimul<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.simul.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.simul.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.simul.$get>>>>
          >,
          ReturnType<typeof getApiSimulQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.simul.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSimulQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSimulQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.simul.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTeamTeamIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team)[':teamId']['$get']>>,
) {
  return ['api', '/api/team/:teamId', toValue(args)] as const
}

export function getApiTeamTeamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team)[':teamId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTeamTeamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.team[':teamId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTeamTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.team)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team)[':teamId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.team)[':teamId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.team)[':teamId']['$get']>>>
            >
          >,
          ReturnType<typeof getApiTeamTeamIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.team)[':teamId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamTeamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTeamTeamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.team[':teamId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTeamAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.team.all.$get>>,
) {
  return ['api', '/api/team/all', toValue(args)] as const
}

export function getApiTeamAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.team.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTeamAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.team.all.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTeamAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.team.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.all.$get>>>>
          >,
          ReturnType<typeof getApiTeamAllQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTeamAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTeamAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.team.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTeamOfUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team.of)[':username']['$get']>>,
) {
  return ['api', '/api/team/of/:username', toValue(args)] as const
}

export function getApiTeamOfUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team.of)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTeamOfUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.team.of[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTeamOfUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.team.of)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team.of)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.team.of)[':username']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTeamOfUsernameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.team.of)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamOfUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTeamOfUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.team.of[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTeamSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.team.search.$get>>,
) {
  return ['api', '/api/team/search', toValue(args)] as const
}

export function getApiTeamSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.team.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTeamSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.team.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTeamSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.team.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.team.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.team.search.$get>>>
            >
          >,
          ReturnType<typeof getApiTeamSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.team.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTeamSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.team.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTeamTeamIdUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team)[':teamId']['users']['$get']>>,
) {
  return ['api', '/api/team/:teamId/users', toValue(args)] as const
}

export function getApiTeamTeamIdUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team)[':teamId']['users']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTeamTeamIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.team[':teamId'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team)[':teamId']['users']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.team)[':teamId']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTeamTeamIdUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.api.team)[':teamId']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamTeamIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTeamTeamIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.team[':teamId'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTeamTeamIdArenaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team)[':teamId']['arena']['$get']>>,
) {
  return ['api', '/api/team/:teamId/arena', toValue(args)] as const
}

export function getApiTeamTeamIdArenaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team)[':teamId']['arena']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTeamTeamIdArenaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.team[':teamId'].arena.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team)[':teamId']['arena']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.team)[':teamId']['arena']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTeamTeamIdArenaQueryKey>
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
          Awaited<ReturnType<(typeof client.api.team)[':teamId']['arena']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamTeamIdArenaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTeamTeamIdArenaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.team[':teamId'].arena.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team)[':teamId']['requests']['$get']>>,
) {
  return ['api', '/api/team/:teamId/requests', toValue(args)] as const
}

export function getApiTeamTeamIdRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team)[':teamId']['requests']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTeamTeamIdRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.team[':teamId'].requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.team)[':teamId']['requests']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.team)[':teamId']['requests']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTeamTeamIdRequestsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.team)[':teamId']['requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTeamTeamIdRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTeamTeamIdRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.team[':teamId'].requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getTeamUpdatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.team.updates.$get>>,
) {
  return ['team', '/team/updates', toValue(args)] as const
}

export function getTeamUpdatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.team.updates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamUpdatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team.updates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeamUpdates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.updates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.team.updates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.updates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.updates.$get>>>>
          >,
          ReturnType<typeof getTeamUpdatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.updates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamUpdatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamUpdatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team.updates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamUpdatesTeamIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team.updates)[':teamId']['$get']>>,
) {
  return ['team', '/team/updates/:teamId', toValue(args)] as const
}

export function getTeamUpdatesTeamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team.updates)[':teamId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamUpdatesTeamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team.updates[':teamId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamUpdatesTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team.updates)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team.updates)[':teamId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team.updates)[':teamId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamUpdatesTeamIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.team.updates)[':teamId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamUpdatesTeamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamUpdatesTeamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team.updates[':teamId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiStreamerLiveQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiStreamerLiveQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.streamer.live.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiStreamerLive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.streamer.live.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.streamer.live.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.streamer.live.$get>>>
            >
          >,
          ReturnType<typeof getApiStreamerLiveQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.streamer.live.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiStreamerLiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiStreamerLiveQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.streamer.live.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCrosstableUser1User2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>
  >,
) {
  return ['api', '/api/crosstable/:user1/:user2', toValue(args)] as const
}

export function getApiCrosstableUser1User2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCrosstableUser1User2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.crosstable[':user1'][':user2'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCrosstableUser1User2QueryKey>
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
          Awaited<ReturnType<(typeof client.api.crosstable)[':user1'][':user2']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCrosstableUser1User2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCrosstableUser1User2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.crosstable[':user1'][':user2'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPlayerAutocompleteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.player.autocomplete.$get>>,
) {
  return ['api', '/api/player/autocomplete', toValue(args)] as const
}

export function getApiPlayerAutocompleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.player.autocomplete.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPlayerAutocompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.player.autocomplete.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPlayerAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.player.autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.player.autocomplete.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.player.autocomplete.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.player.autocomplete.$get>>>
            >
          >,
          ReturnType<typeof getApiPlayerAutocompleteQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.player.autocomplete.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPlayerAutocompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPlayerAutocompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.player.autocomplete.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserUsernameNoteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.user)[':username']['note']['$get']>>,
) {
  return ['api', '/api/user/:username/note', toValue(args)] as const
}

export function getApiUserUsernameNoteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.user)[':username']['note']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserUsernameNoteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user[':username'].note.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.user)[':username']['note']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.user)[':username']['note']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUserUsernameNoteQueryKey>
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
          Awaited<ReturnType<(typeof client.api.user)[':username']['note']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserUsernameNoteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserUsernameNoteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user[':username'].note.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiRelFollowingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiRelFollowingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.rel.following.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRelFollowing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rel.following.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.rel.following.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.rel.following.$get>>>
            >
          >,
          ReturnType<typeof getApiRelFollowingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rel.following.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiRelFollowingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiRelFollowingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.rel.following.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiStreamEventQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiStreamEventQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.stream.event.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiStreamEvent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.stream.event.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.stream.event.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.stream.event.$get>>>
            >
          >,
          ReturnType<typeof getApiStreamEventQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.stream.event.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiStreamEventQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiStreamEventQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.stream.event.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.board.seek.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.board.seek.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.board.game.stream)[':gameId']['$get']>
  >,
) {
  return ['api', '/api/board/game/stream/:gameId', toValue(args)] as const
}

export function getApiBoardGameStreamGameIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.board.game.stream)[':gameId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBoardGameStreamGameIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.board.game.stream[':gameId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.board.game.stream)[':gameId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.board.game.stream)[':gameId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBoardGameStreamGameIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.board.game.stream)[':gameId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBoardGameStreamGameIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBoardGameStreamGameIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.board.game.stream[':gameId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$get']>
  >,
) {
  return ['api', '/api/board/game/:gameId/chat', toValue(args)] as const
}

export function getApiBoardGameGameIdChatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBoardGameGameIdChatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.board.game[':gameId'].chat.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.board.game)[':gameId']['chat']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['chat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBoardGameGameIdChatQueryKey>
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
          Awaited<ReturnType<(typeof client.api.board.game)[':gameId']['chat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBoardGameGameIdChatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBoardGameGameIdChatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.board.game[':gameId'].chat.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.api.board.game)[':gameId']['takeback'][':accept']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.board.game)[':gameId']['claim-draw']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.board.game)[':gameId']['claim-draw']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiBotOnlineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.bot.online.$get>>,
) {
  return ['api', '/api/bot/online', toValue(args)] as const
}

export function getApiBotOnlineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.bot.online.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBotOnlineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.bot.online.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBotOnline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.online.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.bot.online.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.online.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.online.$get>>>>
          >,
          ReturnType<typeof getApiBotOnlineQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bot.online.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiBotOnlineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBotOnlineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.bot.online.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.bot.game.stream)[':gameId']['$get']>>,
) {
  return ['api', '/api/bot/game/stream/:gameId', toValue(args)] as const
}

export function getApiBotGameStreamGameIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.bot.game.stream)[':gameId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBotGameStreamGameIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.bot.game.stream[':gameId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.bot.game.stream)[':gameId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.bot.game.stream)[':gameId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBotGameStreamGameIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.bot.game.stream)[':gameId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBotGameStreamGameIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBotGameStreamGameIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.bot.game.stream[':gameId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.bot.game)[':gameId']['move'][':move']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.bot.game)[':gameId']['move'][':move']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>>,
) {
  return ['api', '/api/bot/game/:gameId/chat', toValue(args)] as const
}

export function getApiBotGameGameIdChatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBotGameGameIdChatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.bot.game[':gameId'].chat.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBotGameGameIdChatQueryKey>
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
          Awaited<ReturnType<(typeof client.api.bot.game)[':gameId']['chat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBotGameGameIdChatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBotGameGameIdChatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.bot.game[':gameId'].chat.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.bot.game)[':gameId']['takeback'][':accept']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.bot.game)[':gameId']['takeback'][':accept']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.bot.game)[':gameId']['claim-victory']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.bot.game)[':gameId']['claim-victory']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiChallengeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiChallengeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.challenge.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiChallenge<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.$get>>>>
          >,
          ReturnType<typeof getApiChallengeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.challenge.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiChallengeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiChallengeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.challenge.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.challenge)[':challengeId']['show']['$get']>
  >,
) {
  return ['api', '/api/challenge/:challengeId/show', toValue(args)] as const
}

export function getApiChallengeChallengeIdShowQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.challenge)[':challengeId']['show']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiChallengeChallengeIdShowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.challenge[':challengeId'].show.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.challenge)[':challengeId']['show']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['show']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiChallengeChallengeIdShowQueryKey>
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
          Awaited<ReturnType<(typeof client.api.challenge)[':challengeId']['show']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiChallengeChallengeIdShowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiChallengeChallengeIdShowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.challenge[':challengeId'].show.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.challenge)[':challengeId']['accept']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.challenge)[':challengeId']['accept']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.challenge)[':challengeId']['decline']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.challenge)[':challengeId']['decline']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.challenge)[':challengeId']['cancel']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.challenge)[':challengeId']['cancel']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.challenge)[':gameId']['start-clocks']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.challenge)[':gameId']['start-clocks']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getApiBulkPairingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiBulkPairingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['bulk-pairing'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$get']>>>
            >
          >,
          ReturnType<typeof getApiBulkPairingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBulkPairingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiBulkPairingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api['bulk-pairing'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['bulk-pairing']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['bulk-pairing']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$get']>>,
) {
  return ['api', '/api/bulk-pairing/:id', toValue(args)] as const
}

export function getApiBulkPairingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBulkPairingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['bulk-pairing'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBulkPairingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['bulk-pairing'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBulkPairingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBulkPairingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBulkPairingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['bulk-pairing'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/bulk-pairing/:id/games', keyArgs] as const
}

export function getApiBulkPairingIdGamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBulkPairingIdGamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['bulk-pairing'][':id'].games.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBulkPairingIdGamesQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['bulk-pairing'][':id']['games']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBulkPairingIdGamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBulkPairingIdGamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['bulk-pairing'][':id'].games.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['cloud-eval']['$get']>>,
) {
  return ['api', '/api/cloud-eval', toValue(args)] as const
}

export function getApiCloudEvalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['cloud-eval']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCloudEvalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['cloud-eval'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCloudEval<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['cloud-eval']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['cloud-eval']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['cloud-eval']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['cloud-eval']['$get']>>>
            >
          >,
          ReturnType<typeof getApiCloudEvalQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['cloud-eval']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCloudEvalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCloudEvalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['cloud-eval'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiExternalEngineQueryKey() {
  return ['api', '/api/external-engine'] as const
}

export function getApiExternalEngineQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiExternalEngineQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['external-engine'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['external-engine']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiExternalEngineQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['external-engine']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiExternalEngineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiExternalEngineQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api['external-engine'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['external-engine'][':id']['$get']>>,
) {
  return ['api', '/api/external-engine/:id', toValue(args)] as const
}

export function getApiExternalEngineIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['external-engine'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiExternalEngineIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['external-engine'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['external-engine'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiExternalEngineIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['external-engine'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiExternalEngineIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiExternalEngineIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['external-engine'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['external-engine'][':id']['analyse']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['external-engine'][':id']['analyse']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getOauthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.$get>>,
) {
  return ['oauth', '/oauth', toValue(args)] as const
}

export function getOauthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOauth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.$get>>>>>,
          ReturnType<typeof getOauthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOauthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.token.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.token.$delete>>>>
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.token.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.token.test.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getMastersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masters.$get>>,
) {
  return ['masters', '/masters', toValue(args)] as const
}

export function getMastersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMastersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masters.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMasters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masters.$get>>>>
          >,
          ReturnType<typeof getMastersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMastersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMastersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLichessQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lichess.$get>>,
) {
  return ['lichess', '/lichess', toValue(args)] as const
}

export function getLichessQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lichess.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLichessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lichess.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLichess<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lichess.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lichess.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lichess.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lichess.$get>>>>
          >,
          ReturnType<typeof getLichessQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lichess.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLichessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLichessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lichess.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.player.$get>>,
) {
  return ['player', '/player', toValue(args)] as const
}

export function getPlayerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.player.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.player.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlayer<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.player.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.$get>>>>>,
          ReturnType<typeof getPlayerQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlayerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.player.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMastersPgnGameIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.masters.pgn)[':gameId']['$get']>>,
) {
  return ['masters', '/masters/pgn/:gameId', toValue(args)] as const
}

export function getMastersPgnGameIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.masters.pgn)[':gameId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMastersPgnGameIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masters.pgn[':gameId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMastersPgnGameId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.masters.pgn)[':gameId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.masters.pgn)[':gameId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masters.pgn)[':gameId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMastersPgnGameIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.masters.pgn)[':gameId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMastersPgnGameIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMastersPgnGameIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masters.pgn[':gameId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStandardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.standard.$get>>,
) {
  return ['standard', '/standard', toValue(args)] as const
}

export function getStandardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.standard.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStandardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.standard.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStandard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.standard.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standard.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standard.$get>>>>
          >,
          ReturnType<typeof getStandardQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standard.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStandardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStandardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.standard.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAtomicQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.atomic.$get>>,
) {
  return ['atomic', '/atomic', toValue(args)] as const
}

export function getAtomicQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.atomic.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAtomicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.atomic.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAtomic<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atomic.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.atomic.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atomic.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atomic.$get>>>>>,
          ReturnType<typeof getAtomicQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atomic.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAtomicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAtomicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.atomic.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAntichessQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.antichess.$get>>,
) {
  return ['antichess', '/antichess', toValue(args)] as const
}

export function getAntichessQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.antichess.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAntichessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.antichess.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAntichess<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.antichess.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.antichess.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.antichess.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.antichess.$get>>>>
          >,
          ReturnType<typeof getAntichessQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.antichess.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAntichessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAntichessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.antichess.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
