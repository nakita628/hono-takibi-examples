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

export function get_3Key() {
  return ['3'] as const
}

export function get3AuthenticationQueryKey() {
  return ['3', '/3/authentication'] as const
}

export function get3AuthenticationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get3AuthenticationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].authentication.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3Authentication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['authentication']['$get']>>>
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
                Awaited<ReturnType<(typeof client)['3']['authentication']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['authentication']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3AuthenticationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['authentication']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3AuthenticationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get3AuthenticationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].authentication.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3AccountAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['account'][':account_id']['$get']>>,
) {
  return ['3', '/3/account/:account_id', toValue(args)] as const
}

export function get3AccountAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['account'][':account_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3AccountAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].account[':account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3AccountAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['account'][':account_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3AccountAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3AccountAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3AccountAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].account[':account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost3AccountAccountIdFavoriteMutationKey() {
  return ['3', '/3/account/:account_id/favorite', 'POST'] as const
}

export function getPost3AccountAccountIdFavoriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['favorite']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost3AccountAccountIdFavoriteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['$post']>,
    ) {
      return parseResponse(client['3'].account[':account_id'].favorite.$post(args, options))
    },
  })
}

export function usePost3AccountAccountIdFavorite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['account'][':account_id']['favorite']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['$post']>,
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
  const mutationDefaults = getPost3AccountAccountIdFavoriteMutationOptions<TError, TOnMutateResult>(
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

export function getPost3AccountAccountIdWatchlistMutationKey() {
  return ['3', '/3/account/:account_id/watchlist', 'POST'] as const
}

export function getPost3AccountAccountIdWatchlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['watchlist']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost3AccountAccountIdWatchlistMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['$post']>,
    ) {
      return parseResponse(client['3'].account[':account_id'].watchlist.$post(args, options))
    },
  })
}

export function usePost3AccountAccountIdWatchlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['account'][':account_id']['watchlist']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['$post']>,
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
  const mutationDefaults = getPost3AccountAccountIdWatchlistMutationOptions<
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

export function get3AccountAccountIdFavoriteMoviesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['movies']['$get']>
  >,
) {
  return ['3', '/3/account/:account_id/favorite/movies', toValue(args)] as const
}

export function get3AccountAccountIdFavoriteMoviesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['movies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3AccountAccountIdFavoriteMoviesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].account[':account_id'].favorite.movies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3AccountAccountIdFavoriteMovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['3']['account'][':account_id']['favorite']['movies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['movies']['$get']>
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
                    (typeof client)['3']['account'][':account_id']['favorite']['movies']['$get']
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
                    (typeof client)['3']['account'][':account_id']['favorite']['movies']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3AccountAccountIdFavoriteMoviesQueryKey>
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
            ReturnType<(typeof client)['3']['account'][':account_id']['favorite']['movies']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3AccountAccountIdFavoriteMoviesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3AccountAccountIdFavoriteMoviesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].account[':account_id'].favorite.movies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3AccountAccountIdFavoriteTvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']>
  >,
) {
  return ['3', '/3/account/:account_id/favorite/tv', toValue(args)] as const
}

export function get3AccountAccountIdFavoriteTvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3AccountAccountIdFavoriteTvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].account[':account_id'].favorite.tv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3AccountAccountIdFavoriteTv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']>
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
                    (typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']
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
                    (typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3AccountAccountIdFavoriteTvQueryKey>
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
            ReturnType<(typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3AccountAccountIdFavoriteTvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3AccountAccountIdFavoriteTvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].account[':account_id'].favorite.tv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3AccountAccountIdListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['lists']['$get']>
  >,
) {
  return ['3', '/3/account/:account_id/lists', toValue(args)] as const
}

export function get3AccountAccountIdListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['lists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3AccountAccountIdListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].account[':account_id'].lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3AccountAccountIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['lists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3AccountAccountIdListsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3AccountAccountIdListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3AccountAccountIdListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].account[':account_id'].lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3AccountAccountIdRatedMoviesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['movies']['$get']>
  >,
) {
  return ['3', '/3/account/:account_id/rated/movies', toValue(args)] as const
}

export function get3AccountAccountIdRatedMoviesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['movies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3AccountAccountIdRatedMoviesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].account[':account_id'].rated.movies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3AccountAccountIdRatedMovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['3']['account'][':account_id']['rated']['movies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['movies']['$get']>
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
                    (typeof client)['3']['account'][':account_id']['rated']['movies']['$get']
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
                    (typeof client)['3']['account'][':account_id']['rated']['movies']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3AccountAccountIdRatedMoviesQueryKey>
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
            ReturnType<(typeof client)['3']['account'][':account_id']['rated']['movies']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3AccountAccountIdRatedMoviesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3AccountAccountIdRatedMoviesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].account[':account_id'].rated.movies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3AccountAccountIdRatedTvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>
  >,
) {
  return ['3', '/3/account/:account_id/rated/tv', toValue(args)] as const
}

export function get3AccountAccountIdRatedTvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3AccountAccountIdRatedTvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].account[':account_id'].rated.tv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3AccountAccountIdRatedTv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>
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
                  ReturnType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3AccountAccountIdRatedTvQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3AccountAccountIdRatedTvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3AccountAccountIdRatedTvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].account[':account_id'].rated.tv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3AccountAccountIdRatedTvEpisodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['account'][':account_id']['rated']['tv']['episodes']['$get']
    >
  >,
) {
  return ['3', '/3/account/:account_id/rated/tv/episodes', toValue(args)] as const
}

export function get3AccountAccountIdRatedTvEpisodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['account'][':account_id']['rated']['tv']['episodes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3AccountAccountIdRatedTvEpisodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].account[':account_id'].rated.tv.episodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3AccountAccountIdRatedTvEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['account'][':account_id']['rated']['tv']['episodes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['account'][':account_id']['rated']['tv']['episodes']['$get']
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
                    (typeof client)['3']['account'][':account_id']['rated']['tv']['episodes']['$get']
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
                    (typeof client)['3']['account'][':account_id']['rated']['tv']['episodes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3AccountAccountIdRatedTvEpisodesQueryKey>
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
              (typeof client)['3']['account'][':account_id']['rated']['tv']['episodes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3AccountAccountIdRatedTvEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3AccountAccountIdRatedTvEpisodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].account[':account_id'].rated.tv.episodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3AccountAccountIdWatchlistMoviesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['movies']['$get']>
  >,
) {
  return ['3', '/3/account/:account_id/watchlist/movies', toValue(args)] as const
}

export function get3AccountAccountIdWatchlistMoviesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['movies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3AccountAccountIdWatchlistMoviesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].account[':account_id'].watchlist.movies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3AccountAccountIdWatchlistMovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['3']['account'][':account_id']['watchlist']['movies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['movies']['$get']>
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
                    (typeof client)['3']['account'][':account_id']['watchlist']['movies']['$get']
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
                    (typeof client)['3']['account'][':account_id']['watchlist']['movies']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3AccountAccountIdWatchlistMoviesQueryKey>
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
              (typeof client)['3']['account'][':account_id']['watchlist']['movies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3AccountAccountIdWatchlistMoviesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3AccountAccountIdWatchlistMoviesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].account[':account_id'].watchlist.movies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3AccountAccountIdWatchlistTvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']>
  >,
) {
  return ['3', '/3/account/:account_id/watchlist/tv', toValue(args)] as const
}

export function get3AccountAccountIdWatchlistTvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3AccountAccountIdWatchlistTvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].account[':account_id'].watchlist.tv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3AccountAccountIdWatchlistTv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']>
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
                    (typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']
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
                    (typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3AccountAccountIdWatchlistTvQueryKey>
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
            ReturnType<(typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3AccountAccountIdWatchlistTvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3AccountAccountIdWatchlistTvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].account[':account_id'].watchlist.tv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3AuthenticationGuestSessionNewQueryKey() {
  return ['3', '/3/authentication/guest_session/new'] as const
}

export function get3AuthenticationGuestSessionNewQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get3AuthenticationGuestSessionNewQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].authentication.guest_session.new.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3AuthenticationGuestSessionNew<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['authentication']['guest_session']['new']['$get']>>
      >
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
                Awaited<
                  ReturnType<(typeof client)['3']['authentication']['guest_session']['new']['$get']>
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
                  ReturnType<(typeof client)['3']['authentication']['guest_session']['new']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3AuthenticationGuestSessionNewQueryKey>
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
            ReturnType<(typeof client)['3']['authentication']['guest_session']['new']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3AuthenticationGuestSessionNewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get3AuthenticationGuestSessionNewQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].authentication.guest_session.new.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3AuthenticationTokenNewQueryKey() {
  return ['3', '/3/authentication/token/new'] as const
}

export function get3AuthenticationTokenNewQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get3AuthenticationTokenNewQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].authentication.token.new.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3AuthenticationTokenNew<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['authentication']['token']['new']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['3']['authentication']['token']['new']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['authentication']['token']['new']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3AuthenticationTokenNewQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['authentication']['token']['new']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3AuthenticationTokenNewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get3AuthenticationTokenNewQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].authentication.token.new.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost3AuthenticationSessionNewMutationKey() {
  return ['3', '/3/authentication/session/new', 'POST'] as const
}

export function getPost3AuthenticationSessionNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['authentication']['session']['new']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['3']['authentication']['session']['new']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost3AuthenticationSessionNewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['3']['authentication']['session']['new']['$post']>,
    ) {
      return parseResponse(client['3'].authentication.session.new.$post(args, options))
    },
  })
}

export function usePost3AuthenticationSessionNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['authentication']['session']['new']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['3']['authentication']['session']['new']['$post']>,
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
  const mutationDefaults = getPost3AuthenticationSessionNewMutationOptions<TError, TOnMutateResult>(
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

export function getPost3AuthenticationSessionConvert4MutationKey() {
  return ['3', '/3/authentication/session/convert/4', 'POST'] as const
}

export function getPost3AuthenticationSessionConvert4MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['3']['authentication']['session']['convert']['4']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['3']['authentication']['session']['convert']['4']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost3AuthenticationSessionConvert4MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['3']['authentication']['session']['convert']['4']['$post']
      >,
    ) {
      return parseResponse(client['3'].authentication.session.convert['4'].$post(args, options))
    },
  })
}

export function usePost3AuthenticationSessionConvert4<
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
                    (typeof client)['3']['authentication']['session']['convert']['4']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['3']['authentication']['session']['convert']['4']['$post']
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
  const mutationDefaults = getPost3AuthenticationSessionConvert4MutationOptions<
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

export function getPost3AuthenticationTokenValidateWithLoginMutationKey() {
  return ['3', '/3/authentication/token/validate_with_login', 'POST'] as const
}

export function getPost3AuthenticationTokenValidateWithLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['3']['authentication']['token']['validate_with_login']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['3']['authentication']['token']['validate_with_login']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost3AuthenticationTokenValidateWithLoginMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['3']['authentication']['token']['validate_with_login']['$post']
      >,
    ) {
      return parseResponse(
        client['3'].authentication.token.validate_with_login.$post(args, options),
      )
    },
  })
}

export function usePost3AuthenticationTokenValidateWithLogin<
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
                    (typeof client)['3']['authentication']['token']['validate_with_login']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['3']['authentication']['token']['validate_with_login']['$post']
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
  const mutationDefaults = getPost3AuthenticationTokenValidateWithLoginMutationOptions<
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

export function getDelete3AuthenticationSessionMutationKey() {
  return ['3', '/3/authentication/session', 'DELETE'] as const
}

export function getDelete3AuthenticationSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['authentication']['session']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['3']['authentication']['session']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete3AuthenticationSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['3']['authentication']['session']['$delete']>,
    ) {
      return parseResponse(client['3'].authentication.session.$delete(args, options))
    },
  })
}

export function useDelete3AuthenticationSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['authentication']['session']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['3']['authentication']['session']['$delete']>,
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
  const mutationDefaults = getDelete3AuthenticationSessionMutationOptions<TError, TOnMutateResult>(
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

export function get3CertificationMovieListQueryKey() {
  return ['3', '/3/certification/movie/list'] as const
}

export function get3CertificationMovieListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get3CertificationMovieListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].certification.movie.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3CertificationMovieList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['certification']['movie']['list']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['3']['certification']['movie']['list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['certification']['movie']['list']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3CertificationMovieListQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['certification']['movie']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3CertificationMovieListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get3CertificationMovieListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].certification.movie.list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3CertificationTvListQueryKey() {
  return ['3', '/3/certification/tv/list'] as const
}

export function get3CertificationTvListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get3CertificationTvListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].certification.tv.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3CertificationTvList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['certification']['tv']['list']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['3']['certification']['tv']['list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['certification']['tv']['list']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3CertificationTvListQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['certification']['tv']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3CertificationTvListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get3CertificationTvListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].certification.tv.list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieChangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie']['changes']['$get']>>,
) {
  return ['3', '/3/movie/changes', toValue(args)] as const
}

export function get3MovieChangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie']['changes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie.changes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['changes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie']['changes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie']['changes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie']['changes']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3MovieChangesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['changes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie.changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3PersonChangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['person']['changes']['$get']>>,
) {
  return ['3', '/3/person/changes', toValue(args)] as const
}

export function get3PersonChangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['person']['changes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3PersonChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].person.changes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3PersonChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['changes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['person']['changes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['person']['changes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['person']['changes']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3PersonChangesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['changes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3PersonChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3PersonChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].person.changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvChangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv']['changes']['$get']>>,
) {
  return ['3', '/3/tv/changes', toValue(args)] as const
}

export function get3TvChangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv']['changes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv.changes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['changes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv']['changes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv']['changes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv']['changes']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TvChangesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['changes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv.changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3CollectionCollectionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['collection'][':collection_id']['$get']>
  >,
) {
  return ['3', '/3/collection/:collection_id', toValue(args)] as const
}

export function get3CollectionCollectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['collection'][':collection_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3CollectionCollectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].collection[':collection_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3CollectionCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['collection'][':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['collection'][':collection_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['collection'][':collection_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['collection'][':collection_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3CollectionCollectionIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['collection'][':collection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3CollectionCollectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3CollectionCollectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].collection[':collection_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3CollectionCollectionIdImagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>
  >,
) {
  return ['3', '/3/collection/:collection_id/images', toValue(args)] as const
}

export function get3CollectionCollectionIdImagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3CollectionCollectionIdImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].collection[':collection_id'].images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3CollectionCollectionIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>
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
                  ReturnType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3CollectionCollectionIdImagesQueryKey>
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
            ReturnType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3CollectionCollectionIdImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3CollectionCollectionIdImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].collection[':collection_id'].images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3CollectionCollectionIdTranslationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['collection'][':collection_id']['translations']['$get']>
  >,
) {
  return ['3', '/3/collection/:collection_id/translations', toValue(args)] as const
}

export function get3CollectionCollectionIdTranslationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['collection'][':collection_id']['translations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3CollectionCollectionIdTranslationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].collection[':collection_id'].translations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3CollectionCollectionIdTranslations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['3']['collection'][':collection_id']['translations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['collection'][':collection_id']['translations']['$get']>
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
                    (typeof client)['3']['collection'][':collection_id']['translations']['$get']
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
                    (typeof client)['3']['collection'][':collection_id']['translations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3CollectionCollectionIdTranslationsQueryKey>
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
            ReturnType<(typeof client)['3']['collection'][':collection_id']['translations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3CollectionCollectionIdTranslationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3CollectionCollectionIdTranslationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].collection[':collection_id'].translations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3CompanyCompanyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['company'][':company_id']['$get']>>,
) {
  return ['3', '/3/company/:company_id', toValue(args)] as const
}

export function get3CompanyCompanyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['company'][':company_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3CompanyCompanyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].company[':company_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3CompanyCompanyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['company'][':company_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3CompanyCompanyIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3CompanyCompanyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3CompanyCompanyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].company[':company_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3CompanyCompanyIdAlternativeNamesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['company'][':company_id']['alternative_names']['$get']>
  >,
) {
  return ['3', '/3/company/:company_id/alternative_names', toValue(args)] as const
}

export function get3CompanyCompanyIdAlternativeNamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['company'][':company_id']['alternative_names']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3CompanyCompanyIdAlternativeNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].company[':company_id'].alternative_names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3CompanyCompanyIdAlternativeNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['3']['company'][':company_id']['alternative_names']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['company'][':company_id']['alternative_names']['$get']>
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
                    (typeof client)['3']['company'][':company_id']['alternative_names']['$get']
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
                    (typeof client)['3']['company'][':company_id']['alternative_names']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3CompanyCompanyIdAlternativeNamesQueryKey>
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
            ReturnType<(typeof client)['3']['company'][':company_id']['alternative_names']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3CompanyCompanyIdAlternativeNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3CompanyCompanyIdAlternativeNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].company[':company_id'].alternative_names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3CompanyCompanyIdImagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['company'][':company_id']['images']['$get']>
  >,
) {
  return ['3', '/3/company/:company_id/images', toValue(args)] as const
}

export function get3CompanyCompanyIdImagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['company'][':company_id']['images']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3CompanyCompanyIdImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].company[':company_id'].images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3CompanyCompanyIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['company'][':company_id']['images']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['company'][':company_id']['images']['$get']>
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
                  ReturnType<(typeof client)['3']['company'][':company_id']['images']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3CompanyCompanyIdImagesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['images']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3CompanyCompanyIdImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3CompanyCompanyIdImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].company[':company_id'].images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3ConfigurationQueryKey() {
  return ['3', '/3/configuration'] as const
}

export function get3ConfigurationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get3ConfigurationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].configuration.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3Configuration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['configuration']['$get']>>>
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
                Awaited<ReturnType<(typeof client)['3']['configuration']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['configuration']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3ConfigurationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['configuration']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3ConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get3ConfigurationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].configuration.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3ConfigurationCountriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['configuration']['countries']['$get']>
  >,
) {
  return ['3', '/3/configuration/countries', toValue(args)] as const
}

export function get3ConfigurationCountriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['configuration']['countries']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3ConfigurationCountriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].configuration.countries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3ConfigurationCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['configuration']['countries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['configuration']['countries']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['configuration']['countries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['configuration']['countries']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3ConfigurationCountriesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['configuration']['countries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3ConfigurationCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3ConfigurationCountriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].configuration.countries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3ConfigurationJobsQueryKey() {
  return ['3', '/3/configuration/jobs'] as const
}

export function get3ConfigurationJobsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get3ConfigurationJobsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].configuration.jobs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3ConfigurationJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['configuration']['jobs']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['3']['configuration']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['configuration']['jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3ConfigurationJobsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['configuration']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3ConfigurationJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get3ConfigurationJobsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].configuration.jobs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3ConfigurationLanguagesQueryKey() {
  return ['3', '/3/configuration/languages'] as const
}

export function get3ConfigurationLanguagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get3ConfigurationLanguagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].configuration.languages.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3ConfigurationLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['configuration']['languages']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['3']['configuration']['languages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['configuration']['languages']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3ConfigurationLanguagesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['configuration']['languages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3ConfigurationLanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get3ConfigurationLanguagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].configuration.languages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3ConfigurationPrimaryTranslationsQueryKey() {
  return ['3', '/3/configuration/primary_translations'] as const
}

export function get3ConfigurationPrimaryTranslationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get3ConfigurationPrimaryTranslationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].configuration.primary_translations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3ConfigurationPrimaryTranslations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['configuration']['primary_translations']['$get']>>
      >
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
                Awaited<
                  ReturnType<(typeof client)['3']['configuration']['primary_translations']['$get']>
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
                  ReturnType<(typeof client)['3']['configuration']['primary_translations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3ConfigurationPrimaryTranslationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['configuration']['primary_translations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3ConfigurationPrimaryTranslationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get3ConfigurationPrimaryTranslationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].configuration.primary_translations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3ConfigurationTimezonesQueryKey() {
  return ['3', '/3/configuration/timezones'] as const
}

export function get3ConfigurationTimezonesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get3ConfigurationTimezonesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].configuration.timezones.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3ConfigurationTimezones<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['configuration']['timezones']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['3']['configuration']['timezones']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['configuration']['timezones']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3ConfigurationTimezonesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['configuration']['timezones']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3ConfigurationTimezonesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get3ConfigurationTimezonesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].configuration.timezones.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3CreditCreditIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['credit'][':credit_id']['$get']>>,
) {
  return ['3', '/3/credit/:credit_id', toValue(args)] as const
}

export function get3CreditCreditIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['credit'][':credit_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3CreditCreditIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].credit[':credit_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3CreditCreditId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['credit'][':credit_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['credit'][':credit_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['credit'][':credit_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['credit'][':credit_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3CreditCreditIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['credit'][':credit_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3CreditCreditIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3CreditCreditIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].credit[':credit_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3DiscoverMovieQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['discover']['movie']['$get']>>,
) {
  return ['3', '/3/discover/movie', toValue(args)] as const
}

export function get3DiscoverMovieQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['discover']['movie']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3DiscoverMovieQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].discover.movie.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3DiscoverMovie<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['discover']['movie']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['discover']['movie']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['discover']['movie']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['discover']['movie']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3DiscoverMovieQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['discover']['movie']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3DiscoverMovieQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3DiscoverMovieQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].discover.movie.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3DiscoverTvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['discover']['tv']['$get']>>,
) {
  return ['3', '/3/discover/tv', toValue(args)] as const
}

export function get3DiscoverTvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['discover']['tv']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3DiscoverTvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].discover.tv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3DiscoverTv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['discover']['tv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['discover']['tv']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['discover']['tv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['discover']['tv']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3DiscoverTvQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['discover']['tv']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3DiscoverTvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3DiscoverTvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].discover.tv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3FindExternalIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['find'][':external_id']['$get']>>,
) {
  return ['3', '/3/find/:external_id', toValue(args)] as const
}

export function get3FindExternalIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['find'][':external_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3FindExternalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].find[':external_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3FindExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['find'][':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['find'][':external_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['find'][':external_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['find'][':external_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3FindExternalIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['find'][':external_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3FindExternalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3FindExternalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].find[':external_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3GenreMovieListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['genre']['movie']['list']['$get']>>,
) {
  return ['3', '/3/genre/movie/list', toValue(args)] as const
}

export function get3GenreMovieListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['genre']['movie']['list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3GenreMovieListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].genre.movie.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3GenreMovieList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['genre']['movie']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['genre']['movie']['list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['genre']['movie']['list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['genre']['movie']['list']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3GenreMovieListQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['genre']['movie']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3GenreMovieListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3GenreMovieListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].genre.movie.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3GenreTvListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['genre']['tv']['list']['$get']>>,
) {
  return ['3', '/3/genre/tv/list', toValue(args)] as const
}

export function get3GenreTvListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['genre']['tv']['list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3GenreTvListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].genre.tv.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3GenreTvList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['genre']['tv']['list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['genre']['tv']['list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['genre']['tv']['list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['genre']['tv']['list']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3GenreTvListQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['genre']['tv']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3GenreTvListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3GenreTvListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].genre.tv.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3GuestSessionGuestSessionIdRatedMoviesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['guest_session'][':guest_session_id']['rated']['movies']['$get']
    >
  >,
) {
  return ['3', '/3/guest_session/:guest_session_id/rated/movies', toValue(args)] as const
}

export function get3GuestSessionGuestSessionIdRatedMoviesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['guest_session'][':guest_session_id']['rated']['movies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3GuestSessionGuestSessionIdRatedMoviesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].guest_session[':guest_session_id'].rated.movies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3GuestSessionGuestSessionIdRatedMovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['guest_session'][':guest_session_id']['rated']['movies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['guest_session'][':guest_session_id']['rated']['movies']['$get']
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
                    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['movies']['$get']
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
                    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['movies']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3GuestSessionGuestSessionIdRatedMoviesQueryKey>
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
              (typeof client)['3']['guest_session'][':guest_session_id']['rated']['movies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3GuestSessionGuestSessionIdRatedMoviesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3GuestSessionGuestSessionIdRatedMoviesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].guest_session[':guest_session_id'].rated.movies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3GuestSessionGuestSessionIdRatedTvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['$get']
    >
  >,
) {
  return ['3', '/3/guest_session/:guest_session_id/rated/tv', toValue(args)] as const
}

export function get3GuestSessionGuestSessionIdRatedTvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3GuestSessionGuestSessionIdRatedTvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].guest_session[':guest_session_id'].rated.tv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3GuestSessionGuestSessionIdRatedTv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['$get']
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
                    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['$get']
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
                    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3GuestSessionGuestSessionIdRatedTvQueryKey>
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
              (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3GuestSessionGuestSessionIdRatedTvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3GuestSessionGuestSessionIdRatedTvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].guest_session[':guest_session_id'].rated.tv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3GuestSessionGuestSessionIdRatedTvEpisodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['episodes']['$get']
    >
  >,
) {
  return ['3', '/3/guest_session/:guest_session_id/rated/tv/episodes', toValue(args)] as const
}

export function get3GuestSessionGuestSessionIdRatedTvEpisodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['episodes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3GuestSessionGuestSessionIdRatedTvEpisodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].guest_session[':guest_session_id'].rated.tv.episodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3GuestSessionGuestSessionIdRatedTvEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['episodes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['episodes']['$get']
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
                    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['episodes']['$get']
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
                    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['episodes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3GuestSessionGuestSessionIdRatedTvEpisodesQueryKey>
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
              (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['episodes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3GuestSessionGuestSessionIdRatedTvEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3GuestSessionGuestSessionIdRatedTvEpisodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].guest_session[':guest_session_id'].rated.tv.episodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3KeywordKeywordIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['$get']>>,
) {
  return ['3', '/3/keyword/:keyword_id', toValue(args)] as const
}

export function get3KeywordKeywordIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3KeywordKeywordIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].keyword[':keyword_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3KeywordKeywordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3KeywordKeywordIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3KeywordKeywordIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3KeywordKeywordIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].keyword[':keyword_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3KeywordKeywordIdMoviesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>
  >,
) {
  return ['3', '/3/keyword/:keyword_id/movies', toValue(args)] as const
}

export function get3KeywordKeywordIdMoviesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3KeywordKeywordIdMoviesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].keyword[':keyword_id'].movies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3KeywordKeywordIdMovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>
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
                  ReturnType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3KeywordKeywordIdMoviesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3KeywordKeywordIdMoviesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3KeywordKeywordIdMoviesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].keyword[':keyword_id'].movies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost3ListListIdAddItemMutationKey() {
  return ['3', '/3/list/:list_id/add_item', 'POST'] as const
}

export function getPost3ListListIdAddItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['add_item']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['3']['list'][':list_id']['add_item']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost3ListListIdAddItemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['3']['list'][':list_id']['add_item']['$post']>,
    ) {
      return parseResponse(client['3'].list[':list_id'].add_item.$post(args, options))
    },
  })
}

export function usePost3ListListIdAddItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['add_item']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['3']['list'][':list_id']['add_item']['$post']>,
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
  const mutationDefaults = getPost3ListListIdAddItemMutationOptions<TError, TOnMutateResult>(
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

export function get3ListListIdItemStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>
  >,
) {
  return ['3', '/3/list/:list_id/item_status', toValue(args)] as const
}

export function get3ListListIdItemStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3ListListIdItemStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].list[':list_id'].item_status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3ListListIdItemStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3ListListIdItemStatusQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3ListListIdItemStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3ListListIdItemStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].list[':list_id'].item_status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost3ListListIdClearMutationKey() {
  return ['3', '/3/list/:list_id/clear', 'POST'] as const
}

export function getPost3ListListIdClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['clear']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['3']['list'][':list_id']['clear']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost3ListListIdClearMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['3']['list'][':list_id']['clear']['$post']>,
    ) {
      return parseResponse(client['3'].list[':list_id'].clear.$post(args, options))
    },
  })
}

export function usePost3ListListIdClear<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['clear']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['3']['list'][':list_id']['clear']['$post']>,
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
  const mutationDefaults = getPost3ListListIdClearMutationOptions<TError, TOnMutateResult>(
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

export function getPost3ListMutationKey() {
  return ['3', '/3/list', 'POST'] as const
}

export function getPost3ListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['list']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['3']['list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost3ListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['3']['list']['$post']>) {
      return parseResponse(client['3'].list.$post(args, options))
    },
  })
}

export function usePost3List<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['list']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['3']['list']['$post']>,
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
  const mutationDefaults = getPost3ListMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get3ListListIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['list'][':list_id']['$get']>>,
) {
  return ['3', '/3/list/:list_id', toValue(args)] as const
}

export function get3ListListIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['list'][':list_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3ListListIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].list[':list_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3ListListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['list'][':list_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3ListListIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3ListListIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3ListListIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].list[':list_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDelete3ListListIdMutationKey() {
  return ['3', '/3/list/:list_id', 'DELETE'] as const
}

export function getDelete3ListListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['3']['list'][':list_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete3ListListIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['3']['list'][':list_id']['$delete']>) {
      return parseResponse(client['3'].list[':list_id'].$delete(args, options))
    },
  })
}

export function useDelete3ListListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['3']['list'][':list_id']['$delete']>,
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
  const mutationDefaults = getDelete3ListListIdMutationOptions<TError, TOnMutateResult>(
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

export function getPost3ListListIdRemoveItemMutationKey() {
  return ['3', '/3/list/:list_id/remove_item', 'POST'] as const
}

export function getPost3ListListIdRemoveItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['remove_item']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['3']['list'][':list_id']['remove_item']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost3ListListIdRemoveItemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['3']['list'][':list_id']['remove_item']['$post']>,
    ) {
      return parseResponse(client['3'].list[':list_id'].remove_item.$post(args, options))
    },
  })
}

export function usePost3ListListIdRemoveItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['list'][':list_id']['remove_item']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['3']['list'][':list_id']['remove_item']['$post']>,
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
  const mutationDefaults = getPost3ListListIdRemoveItemMutationOptions<TError, TOnMutateResult>(
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

export function get3MovieNowPlayingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie']['now_playing']['$get']>>,
) {
  return ['3', '/3/movie/now_playing', toValue(args)] as const
}

export function get3MovieNowPlayingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie']['now_playing']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieNowPlayingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie.now_playing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieNowPlaying<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie']['now_playing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie']['now_playing']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie']['now_playing']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie']['now_playing']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3MovieNowPlayingQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['movie']['now_playing']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieNowPlayingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieNowPlayingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie.now_playing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MoviePopularQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie']['popular']['$get']>>,
) {
  return ['3', '/3/movie/popular', toValue(args)] as const
}

export function get3MoviePopularQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie']['popular']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MoviePopularQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie.popular.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MoviePopular<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['popular']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie']['popular']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie']['popular']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie']['popular']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3MoviePopularQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['popular']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MoviePopularQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MoviePopularQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie.popular.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieTopRatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie']['top_rated']['$get']>>,
) {
  return ['3', '/3/movie/top_rated', toValue(args)] as const
}

export function get3MovieTopRatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie']['top_rated']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieTopRatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie.top_rated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieTopRated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['top_rated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie']['top_rated']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie']['top_rated']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie']['top_rated']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3MovieTopRatedQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['movie']['top_rated']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieTopRatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieTopRatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie.top_rated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieUpcomingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie']['upcoming']['$get']>>,
) {
  return ['3', '/3/movie/upcoming', toValue(args)] as const
}

export function get3MovieUpcomingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie']['upcoming']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieUpcomingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie.upcoming.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieUpcoming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['upcoming']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie']['upcoming']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie']['upcoming']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie']['upcoming']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3MovieUpcomingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['upcoming']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieUpcomingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieUpcomingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie.upcoming.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieMovieIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie'][':movie_id']['$get']>>,
) {
  return ['3', '/3/movie/:movie_id', toValue(args)] as const
}

export function get3MovieMovieIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie'][':movie_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieMovieIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie[':movie_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieMovieId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['movie'][':movie_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3MovieMovieIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieMovieIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieMovieIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie[':movie_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieMovieIdAccountStatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>
  >,
) {
  return ['3', '/3/movie/:movie_id/account_states', toValue(args)] as const
}

export function get3MovieMovieIdAccountStatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieMovieIdAccountStatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie[':movie_id'].account_states.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieMovieIdAccountStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>
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
                  ReturnType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3MovieMovieIdAccountStatesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieMovieIdAccountStatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieMovieIdAccountStatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie[':movie_id'].account_states.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieMovieIdAlternativeTitlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']>
  >,
) {
  return ['3', '/3/movie/:movie_id/alternative_titles', toValue(args)] as const
}

export function get3MovieMovieIdAlternativeTitlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieMovieIdAlternativeTitlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie[':movie_id'].alternative_titles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieMovieIdAlternativeTitles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']>
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
                    (typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']
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
                    (typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3MovieMovieIdAlternativeTitlesQueryKey>
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
            ReturnType<(typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieMovieIdAlternativeTitlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieMovieIdAlternativeTitlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie[':movie_id'].alternative_titles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieMovieIdChangesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>
  >,
) {
  return ['3', '/3/movie/:movie_id/changes', toValue(args)] as const
}

export function get3MovieMovieIdChangesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieMovieIdChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie[':movie_id'].changes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieMovieIdChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3MovieMovieIdChangesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieMovieIdChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieMovieIdChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie[':movie_id'].changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieMovieIdCreditsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>
  >,
) {
  return ['3', '/3/movie/:movie_id/credits', toValue(args)] as const
}

export function get3MovieMovieIdCreditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieMovieIdCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie[':movie_id'].credits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieMovieIdCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3MovieMovieIdCreditsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieMovieIdCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieMovieIdCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie[':movie_id'].credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieMovieIdExternalIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>
  >,
) {
  return ['3', '/3/movie/:movie_id/external_ids', toValue(args)] as const
}

export function get3MovieMovieIdExternalIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieMovieIdExternalIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie[':movie_id'].external_ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieMovieIdExternalIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>
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
                  ReturnType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3MovieMovieIdExternalIdsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieMovieIdExternalIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieMovieIdExternalIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie[':movie_id'].external_ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieMovieIdImagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>
  >,
) {
  return ['3', '/3/movie/:movie_id/images', toValue(args)] as const
}

export function get3MovieMovieIdImagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieMovieIdImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie[':movie_id'].images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieMovieIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3MovieMovieIdImagesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieMovieIdImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieMovieIdImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie[':movie_id'].images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieMovieIdKeywordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>
  >,
) {
  return ['3', '/3/movie/:movie_id/keywords', toValue(args)] as const
}

export function get3MovieMovieIdKeywordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieMovieIdKeywordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie[':movie_id'].keywords.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieMovieIdKeywords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3MovieMovieIdKeywordsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieMovieIdKeywordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieMovieIdKeywordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie[':movie_id'].keywords.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieLatestQueryKey() {
  return ['3', '/3/movie/latest'] as const
}

export function get3MovieLatestQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get3MovieLatestQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie.latest.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['latest']['$get']>>>
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
                Awaited<ReturnType<(typeof client)['3']['movie']['latest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie']['latest']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3MovieLatestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['latest']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get3MovieLatestQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie.latest.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieMovieIdListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>
  >,
) {
  return ['3', '/3/movie/:movie_id/lists', toValue(args)] as const
}

export function get3MovieMovieIdListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieMovieIdListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie[':movie_id'].lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieMovieIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3MovieMovieIdListsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieMovieIdListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieMovieIdListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie[':movie_id'].lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieMovieIdRecommendationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>
  >,
) {
  return ['3', '/3/movie/:movie_id/recommendations', toValue(args)] as const
}

export function get3MovieMovieIdRecommendationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieMovieIdRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie[':movie_id'].recommendations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieMovieIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>
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
                  ReturnType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3MovieMovieIdRecommendationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieMovieIdRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieMovieIdRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie[':movie_id'].recommendations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieMovieIdReleaseDatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>
  >,
) {
  return ['3', '/3/movie/:movie_id/release_dates', toValue(args)] as const
}

export function get3MovieMovieIdReleaseDatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieMovieIdReleaseDatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie[':movie_id'].release_dates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieMovieIdReleaseDates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>
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
                  ReturnType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3MovieMovieIdReleaseDatesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieMovieIdReleaseDatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieMovieIdReleaseDatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie[':movie_id'].release_dates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieMovieIdReviewsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>
  >,
) {
  return ['3', '/3/movie/:movie_id/reviews', toValue(args)] as const
}

export function get3MovieMovieIdReviewsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieMovieIdReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie[':movie_id'].reviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieMovieIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3MovieMovieIdReviewsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieMovieIdReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieMovieIdReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie[':movie_id'].reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieMovieIdSimilarQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>
  >,
) {
  return ['3', '/3/movie/:movie_id/similar', toValue(args)] as const
}

export function get3MovieMovieIdSimilarQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieMovieIdSimilarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie[':movie_id'].similar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieMovieIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3MovieMovieIdSimilarQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieMovieIdSimilarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieMovieIdSimilarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie[':movie_id'].similar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieMovieIdTranslationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>
  >,
) {
  return ['3', '/3/movie/:movie_id/translations', toValue(args)] as const
}

export function get3MovieMovieIdTranslationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieMovieIdTranslationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie[':movie_id'].translations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieMovieIdTranslations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>
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
                  ReturnType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3MovieMovieIdTranslationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieMovieIdTranslationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieMovieIdTranslationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie[':movie_id'].translations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieMovieIdVideosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>
  >,
) {
  return ['3', '/3/movie/:movie_id/videos', toValue(args)] as const
}

export function get3MovieMovieIdVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieMovieIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie[':movie_id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieMovieIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3MovieMovieIdVideosQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieMovieIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieMovieIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie[':movie_id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3MovieMovieIdWatchProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']>
  >,
) {
  return ['3', '/3/movie/:movie_id/watch/providers', toValue(args)] as const
}

export function get3MovieMovieIdWatchProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3MovieMovieIdWatchProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].movie[':movie_id'].watch.providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3MovieMovieIdWatchProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']>
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
                    (typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']
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
                    (typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3MovieMovieIdWatchProvidersQueryKey>
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
            ReturnType<(typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieMovieIdWatchProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3MovieMovieIdWatchProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].movie[':movie_id'].watch.providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost3MovieMovieIdRatingMutationKey() {
  return ['3', '/3/movie/:movie_id/rating', 'POST'] as const
}

export function getPost3MovieMovieIdRatingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['rating']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['rating']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost3MovieMovieIdRatingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['rating']['$post']>,
    ) {
      return parseResponse(client['3'].movie[':movie_id'].rating.$post(args, options))
    },
  })
}

export function usePost3MovieMovieIdRating<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['rating']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['3']['movie'][':movie_id']['rating']['$post']>,
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
  const mutationDefaults = getPost3MovieMovieIdRatingMutationOptions<TError, TOnMutateResult>(
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

export function getDelete3MovieMovieIdRatingMutationKey() {
  return ['3', '/3/movie/:movie_id/rating', 'DELETE'] as const
}

export function getDelete3MovieMovieIdRatingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['rating']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['rating']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete3MovieMovieIdRatingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['rating']['$delete']>,
    ) {
      return parseResponse(client['3'].movie[':movie_id'].rating.$delete(args, options))
    },
  })
}

export function useDelete3MovieMovieIdRating<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['rating']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['3']['movie'][':movie_id']['rating']['$delete']>,
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
  const mutationDefaults = getDelete3MovieMovieIdRatingMutationOptions<TError, TOnMutateResult>(
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

export function get3NetworkNetworkIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['network'][':network_id']['$get']>>,
) {
  return ['3', '/3/network/:network_id', toValue(args)] as const
}

export function get3NetworkNetworkIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['network'][':network_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3NetworkNetworkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].network[':network_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3NetworkNetworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['network'][':network_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3NetworkNetworkIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3NetworkNetworkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3NetworkNetworkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].network[':network_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3NetworkNetworkIdAlternativeNamesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['network'][':network_id']['alternative_names']['$get']>
  >,
) {
  return ['3', '/3/network/:network_id/alternative_names', toValue(args)] as const
}

export function get3NetworkNetworkIdAlternativeNamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['network'][':network_id']['alternative_names']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3NetworkNetworkIdAlternativeNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].network[':network_id'].alternative_names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3NetworkNetworkIdAlternativeNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['3']['network'][':network_id']['alternative_names']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['network'][':network_id']['alternative_names']['$get']>
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
                    (typeof client)['3']['network'][':network_id']['alternative_names']['$get']
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
                    (typeof client)['3']['network'][':network_id']['alternative_names']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3NetworkNetworkIdAlternativeNamesQueryKey>
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
            ReturnType<(typeof client)['3']['network'][':network_id']['alternative_names']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3NetworkNetworkIdAlternativeNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3NetworkNetworkIdAlternativeNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].network[':network_id'].alternative_names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3NetworkNetworkIdImagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['network'][':network_id']['images']['$get']>
  >,
) {
  return ['3', '/3/network/:network_id/images', toValue(args)] as const
}

export function get3NetworkNetworkIdImagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['network'][':network_id']['images']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3NetworkNetworkIdImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].network[':network_id'].images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3NetworkNetworkIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['network'][':network_id']['images']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['network'][':network_id']['images']['$get']>
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
                  ReturnType<(typeof client)['3']['network'][':network_id']['images']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3NetworkNetworkIdImagesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['images']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3NetworkNetworkIdImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3NetworkNetworkIdImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].network[':network_id'].images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3PersonPopularQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['person']['popular']['$get']>>,
) {
  return ['3', '/3/person/popular', toValue(args)] as const
}

export function get3PersonPopularQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['person']['popular']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3PersonPopularQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].person.popular.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3PersonPopular<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['popular']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['person']['popular']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['person']['popular']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['person']['popular']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3PersonPopularQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['popular']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3PersonPopularQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3PersonPopularQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].person.popular.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3PersonPersonIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['person'][':person_id']['$get']>>,
) {
  return ['3', '/3/person/:person_id', toValue(args)] as const
}

export function get3PersonPersonIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['person'][':person_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3PersonPersonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].person[':person_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3PersonPersonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['person'][':person_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3PersonPersonIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3PersonPersonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3PersonPersonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].person[':person_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3PersonPersonIdChangesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['changes']['$get']>
  >,
) {
  return ['3', '/3/person/:person_id/changes', toValue(args)] as const
}

export function get3PersonPersonIdChangesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['changes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3PersonPersonIdChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].person[':person_id'].changes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3PersonPersonIdChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['changes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['changes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['changes']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3PersonPersonIdChangesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['changes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3PersonPersonIdChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3PersonPersonIdChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].person[':person_id'].changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3PersonPersonIdCombinedCreditsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['combined_credits']['$get']>
  >,
) {
  return ['3', '/3/person/:person_id/combined_credits', toValue(args)] as const
}

export function get3PersonPersonIdCombinedCreditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['combined_credits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3PersonPersonIdCombinedCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].person[':person_id'].combined_credits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3PersonPersonIdCombinedCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['3']['person'][':person_id']['combined_credits']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['combined_credits']['$get']>
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
                    (typeof client)['3']['person'][':person_id']['combined_credits']['$get']
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
                    (typeof client)['3']['person'][':person_id']['combined_credits']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3PersonPersonIdCombinedCreditsQueryKey>
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
            ReturnType<(typeof client)['3']['person'][':person_id']['combined_credits']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3PersonPersonIdCombinedCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3PersonPersonIdCombinedCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].person[':person_id'].combined_credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3PersonPersonIdExternalIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>
  >,
) {
  return ['3', '/3/person/:person_id/external_ids', toValue(args)] as const
}

export function get3PersonPersonIdExternalIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3PersonPersonIdExternalIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].person[':person_id'].external_ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3PersonPersonIdExternalIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>
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
                  ReturnType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3PersonPersonIdExternalIdsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3PersonPersonIdExternalIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3PersonPersonIdExternalIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].person[':person_id'].external_ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3PersonPersonIdImagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['images']['$get']>
  >,
) {
  return ['3', '/3/person/:person_id/images', toValue(args)] as const
}

export function get3PersonPersonIdImagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['images']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3PersonPersonIdImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].person[':person_id'].images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3PersonPersonIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['images']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['images']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['images']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3PersonPersonIdImagesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['images']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3PersonPersonIdImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3PersonPersonIdImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].person[':person_id'].images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3PersonLatestQueryKey() {
  return ['3', '/3/person/latest'] as const
}

export function get3PersonLatestQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get3PersonLatestQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].person.latest.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3PersonLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['latest']['$get']>>>
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
                Awaited<ReturnType<(typeof client)['3']['person']['latest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['person']['latest']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3PersonLatestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['latest']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3PersonLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get3PersonLatestQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].person.latest.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3PersonPersonIdMovieCreditsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>
  >,
) {
  return ['3', '/3/person/:person_id/movie_credits', toValue(args)] as const
}

export function get3PersonPersonIdMovieCreditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3PersonPersonIdMovieCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].person[':person_id'].movie_credits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3PersonPersonIdMovieCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>
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
                  ReturnType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3PersonPersonIdMovieCreditsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3PersonPersonIdMovieCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3PersonPersonIdMovieCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].person[':person_id'].movie_credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3PersonPersonIdTvCreditsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>
  >,
) {
  return ['3', '/3/person/:person_id/tv_credits', toValue(args)] as const
}

export function get3PersonPersonIdTvCreditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3PersonPersonIdTvCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].person[':person_id'].tv_credits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3PersonPersonIdTvCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>
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
                  ReturnType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3PersonPersonIdTvCreditsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3PersonPersonIdTvCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3PersonPersonIdTvCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].person[':person_id'].tv_credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3PersonPersonIdTaggedImagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>
  >,
) {
  return ['3', '/3/person/:person_id/tagged_images', toValue(args)] as const
}

export function get3PersonPersonIdTaggedImagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3PersonPersonIdTaggedImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].person[':person_id'].tagged_images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3PersonPersonIdTaggedImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>
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
                  ReturnType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3PersonPersonIdTaggedImagesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3PersonPersonIdTaggedImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3PersonPersonIdTaggedImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].person[':person_id'].tagged_images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3PersonPersonIdTranslationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['translations']['$get']>
  >,
) {
  return ['3', '/3/person/:person_id/translations', toValue(args)] as const
}

export function get3PersonPersonIdTranslationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['translations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3PersonPersonIdTranslationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].person[':person_id'].translations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3PersonPersonIdTranslations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['translations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['person'][':person_id']['translations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['person'][':person_id']['translations']['$get']>
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
                  ReturnType<(typeof client)['3']['person'][':person_id']['translations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3PersonPersonIdTranslationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['translations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3PersonPersonIdTranslationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3PersonPersonIdTranslationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].person[':person_id'].translations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3ReviewReviewIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['review'][':review_id']['$get']>>,
) {
  return ['3', '/3/review/:review_id', toValue(args)] as const
}

export function get3ReviewReviewIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['review'][':review_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3ReviewReviewIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].review[':review_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3ReviewReviewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['review'][':review_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['review'][':review_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['review'][':review_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['review'][':review_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3ReviewReviewIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['review'][':review_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3ReviewReviewIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3ReviewReviewIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].review[':review_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3SearchCollectionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['collection']['$get']>>,
) {
  return ['3', '/3/search/collection', toValue(args)] as const
}

export function get3SearchCollectionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['collection']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3SearchCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].search.collection.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3SearchCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['search']['collection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['collection']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['search']['collection']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['search']['collection']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3SearchCollectionQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['search']['collection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3SearchCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3SearchCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].search.collection.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3SearchCompanyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['company']['$get']>>,
) {
  return ['3', '/3/search/company', toValue(args)] as const
}

export function get3SearchCompanyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['company']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3SearchCompanyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].search.company.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3SearchCompany<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['company']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['company']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['search']['company']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['search']['company']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3SearchCompanyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['company']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3SearchCompanyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3SearchCompanyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].search.company.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3SearchKeywordQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['keyword']['$get']>>,
) {
  return ['3', '/3/search/keyword', toValue(args)] as const
}

export function get3SearchKeywordQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['keyword']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3SearchKeywordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].search.keyword.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3SearchKeyword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['keyword']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['keyword']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['search']['keyword']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['search']['keyword']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3SearchKeywordQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['keyword']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3SearchKeywordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3SearchKeywordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].search.keyword.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3SearchMovieQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['movie']['$get']>>,
) {
  return ['3', '/3/search/movie', toValue(args)] as const
}

export function get3SearchMovieQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['movie']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3SearchMovieQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].search.movie.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3SearchMovie<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['movie']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['movie']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['search']['movie']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['search']['movie']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3SearchMovieQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['movie']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3SearchMovieQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3SearchMovieQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].search.movie.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3SearchMultiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['multi']['$get']>>,
) {
  return ['3', '/3/search/multi', toValue(args)] as const
}

export function get3SearchMultiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['multi']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3SearchMultiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].search.multi.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3SearchMulti<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['multi']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['multi']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['search']['multi']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['search']['multi']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3SearchMultiQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['multi']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3SearchMultiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3SearchMultiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].search.multi.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3SearchPersonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['person']['$get']>>,
) {
  return ['3', '/3/search/person', toValue(args)] as const
}

export function get3SearchPersonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['person']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3SearchPersonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].search.person.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3SearchPerson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['person']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['person']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['search']['person']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['search']['person']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3SearchPersonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['person']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3SearchPersonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3SearchPersonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].search.person.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3SearchTvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['tv']['$get']>>,
) {
  return ['3', '/3/search/tv', toValue(args)] as const
}

export function get3SearchTvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['tv']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3SearchTvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].search.tv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3SearchTv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['tv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['search']['tv']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['search']['tv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['search']['tv']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3SearchTvQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['tv']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3SearchTvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3SearchTvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].search.tv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TrendingAllTimeWindowQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['trending']['all'][':time_window']['$get']>
  >,
) {
  return ['3', '/3/trending/all/:time_window', toValue(args)] as const
}

export function get3TrendingAllTimeWindowQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['trending']['all'][':time_window']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TrendingAllTimeWindowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].trending.all[':time_window'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TrendingAllTimeWindow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['trending']['all'][':time_window']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['trending']['all'][':time_window']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['trending']['all'][':time_window']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['trending']['all'][':time_window']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TrendingAllTimeWindowQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['trending']['all'][':time_window']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TrendingAllTimeWindowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TrendingAllTimeWindowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].trending.all[':time_window'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TrendingMovieTimeWindowQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>
  >,
) {
  return ['3', '/3/trending/movie/:time_window', toValue(args)] as const
}

export function get3TrendingMovieTimeWindowQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TrendingMovieTimeWindowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].trending.movie[':time_window'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TrendingMovieTimeWindow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>
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
                  ReturnType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3TrendingMovieTimeWindowQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TrendingMovieTimeWindowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TrendingMovieTimeWindowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].trending.movie[':time_window'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TrendingPersonTimeWindowQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['trending']['person'][':time_window']['$get']>
  >,
) {
  return ['3', '/3/trending/person/:time_window', toValue(args)] as const
}

export function get3TrendingPersonTimeWindowQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['trending']['person'][':time_window']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TrendingPersonTimeWindowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].trending.person[':time_window'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TrendingPersonTimeWindow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['trending']['person'][':time_window']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['trending']['person'][':time_window']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['trending']['person'][':time_window']['$get']>
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
                  ReturnType<(typeof client)['3']['trending']['person'][':time_window']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3TrendingPersonTimeWindowQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['trending']['person'][':time_window']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TrendingPersonTimeWindowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TrendingPersonTimeWindowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].trending.person[':time_window'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TrendingTvTimeWindowQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>
  >,
) {
  return ['3', '/3/trending/tv/:time_window', toValue(args)] as const
}

export function get3TrendingTvTimeWindowQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TrendingTvTimeWindowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].trending.tv[':time_window'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TrendingTvTimeWindow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TrendingTvTimeWindowQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TrendingTvTimeWindowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TrendingTvTimeWindowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].trending.tv[':time_window'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvAiringTodayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv']['airing_today']['$get']>>,
) {
  return ['3', '/3/tv/airing_today', toValue(args)] as const
}

export function get3TvAiringTodayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv']['airing_today']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvAiringTodayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv.airing_today.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvAiringToday<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['airing_today']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv']['airing_today']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv']['airing_today']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv']['airing_today']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TvAiringTodayQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv']['airing_today']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvAiringTodayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvAiringTodayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv.airing_today.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvOnTheAirQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv']['on_the_air']['$get']>>,
) {
  return ['3', '/3/tv/on_the_air', toValue(args)] as const
}

export function get3TvOnTheAirQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv']['on_the_air']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvOnTheAirQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv.on_the_air.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvOnTheAir<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['on_the_air']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv']['on_the_air']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv']['on_the_air']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv']['on_the_air']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TvOnTheAirQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['on_the_air']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvOnTheAirQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvOnTheAirQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv.on_the_air.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvPopularQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv']['popular']['$get']>>,
) {
  return ['3', '/3/tv/popular', toValue(args)] as const
}

export function get3TvPopularQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv']['popular']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvPopularQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv.popular.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvPopular<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['popular']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv']['popular']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv']['popular']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv']['popular']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TvPopularQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['popular']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvPopularQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvPopularQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv.popular.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvTopRatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv']['top_rated']['$get']>>,
) {
  return ['3', '/3/tv/top_rated', toValue(args)] as const
}

export function get3TvTopRatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv']['top_rated']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvTopRatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv.top_rated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvTopRated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['top_rated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv']['top_rated']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv']['top_rated']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv']['top_rated']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TvTopRatedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['top_rated']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvTopRatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvTopRatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv.top_rated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv'][':series_id']['$get']>>,
) {
  return ['3', '/3/tv/:series_id', toValue(args)] as const
}

export function get3TvSeriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv'][':series_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3']['tv'][':series_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdAccountStatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/account_states', toValue(args)] as const
}

export function get3TvSeriesIdAccountStatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdAccountStatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].account_states.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdAccountStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>
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
                  ReturnType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdAccountStatesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdAccountStatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdAccountStatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].account_states.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdAggregateCreditsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/aggregate_credits', toValue(args)] as const
}

export function get3TvSeriesIdAggregateCreditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdAggregateCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].aggregate_credits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdAggregateCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>
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
                  ReturnType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdAggregateCreditsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdAggregateCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdAggregateCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].aggregate_credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdAlternativeTitlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/alternative_titles', toValue(args)] as const
}

export function get3TvSeriesIdAlternativeTitlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdAlternativeTitlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].alternative_titles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdAlternativeTitles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>
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
                  ReturnType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdAlternativeTitlesQueryKey>
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
            ReturnType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdAlternativeTitlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdAlternativeTitlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].alternative_titles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdChangesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/changes', toValue(args)] as const
}

export function get3TvSeriesIdChangesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].changes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdChangesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdContentRatingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/content_ratings', toValue(args)] as const
}

export function get3TvSeriesIdContentRatingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdContentRatingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].content_ratings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdContentRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>
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
                  ReturnType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdContentRatingsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdContentRatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdContentRatingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].content_ratings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdCreditsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/credits', toValue(args)] as const
}

export function get3TvSeriesIdCreditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].credits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdCreditsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdEpisodeGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/episode_groups', toValue(args)] as const
}

export function get3TvSeriesIdEpisodeGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdEpisodeGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].episode_groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdEpisodeGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>
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
                  ReturnType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdEpisodeGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdEpisodeGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdEpisodeGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].episode_groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdExternalIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/external_ids', toValue(args)] as const
}

export function get3TvSeriesIdExternalIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdExternalIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].external_ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdExternalIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>
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
                  ReturnType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdExternalIdsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdExternalIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdExternalIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].external_ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdImagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['images']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/images', toValue(args)] as const
}

export function get3TvSeriesIdImagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['images']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['images']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['images']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['images']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdImagesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['images']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdKeywordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/keywords', toValue(args)] as const
}

export function get3TvSeriesIdKeywordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdKeywordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].keywords.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdKeywords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdKeywordsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdKeywordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdKeywordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].keywords.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvLatestQueryKey() {
  return ['3', '/3/tv/latest'] as const
}

export function get3TvLatestQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get3TvLatestQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv.latest.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use3TvLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['latest']['$get']>>>
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
                Awaited<ReturnType<(typeof client)['3']['tv']['latest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv']['latest']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TvLatestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['latest']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get3TvLatestQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv.latest.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/lists', toValue(args)] as const
}

export function get3TvSeriesIdListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdListsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdRecommendationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/recommendations', toValue(args)] as const
}

export function get3TvSeriesIdRecommendationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].recommendations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>
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
                  ReturnType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdRecommendationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].recommendations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdReviewsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/reviews', toValue(args)] as const
}

export function get3TvSeriesIdReviewsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].reviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdReviewsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdScreenedTheatricallyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/screened_theatrically', toValue(args)] as const
}

export function get3TvSeriesIdScreenedTheatricallyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdScreenedTheatricallyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].screened_theatrically.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdScreenedTheatrically<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']>
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
                    (typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdScreenedTheatricallyQueryKey>
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
            ReturnType<(typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdScreenedTheatricallyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdScreenedTheatricallyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].screened_theatrically.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdSimilarQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/similar', toValue(args)] as const
}

export function get3TvSeriesIdSimilarQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdSimilarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].similar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdSimilarQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSimilarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdSimilarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].similar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdTranslationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/translations', toValue(args)] as const
}

export function get3TvSeriesIdTranslationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdTranslationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].translations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdTranslations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>
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
                  ReturnType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdTranslationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdTranslationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdTranslationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].translations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdVideosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/videos', toValue(args)] as const
}

export function get3TvSeriesIdVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdVideosQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdWatchProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/watch/providers', toValue(args)] as const
}

export function get3TvSeriesIdWatchProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdWatchProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].watch.providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdWatchProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>
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
                  ReturnType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdWatchProvidersQueryKey>
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
            ReturnType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdWatchProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdWatchProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].watch.providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost3TvSeriesIdRatingMutationKey() {
  return ['3', '/3/tv/:series_id/rating', 'POST'] as const
}

export function getPost3TvSeriesIdRatingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['rating']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['3']['tv'][':series_id']['rating']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost3TvSeriesIdRatingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['3']['tv'][':series_id']['rating']['$post']>,
    ) {
      return parseResponse(client['3'].tv[':series_id'].rating.$post(args, options))
    },
  })
}

export function usePost3TvSeriesIdRating<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['rating']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['3']['tv'][':series_id']['rating']['$post']>,
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
  const mutationDefaults = getPost3TvSeriesIdRatingMutationOptions<TError, TOnMutateResult>(
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

export function getDelete3TvSeriesIdRatingMutationKey() {
  return ['3', '/3/tv/:series_id/rating', 'DELETE'] as const
}

export function getDelete3TvSeriesIdRatingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['rating']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['3']['tv'][':series_id']['rating']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete3TvSeriesIdRatingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['3']['tv'][':series_id']['rating']['$delete']>,
    ) {
      return parseResponse(client['3'].tv[':series_id'].rating.$delete(args, options))
    },
  })
}

export function useDelete3TvSeriesIdRating<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['rating']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['3']['tv'][':series_id']['rating']['$delete']>,
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
  const mutationDefaults = getDelete3TvSeriesIdRatingMutationOptions<TError, TOnMutateResult>(
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

export function get3TvSeriesIdSeasonSeasonNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['season'][':season_number']['$get']>
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number', toValue(args)] as const
}

export function get3TvSeriesIdSeasonSeasonNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['season'][':season_number']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdSeasonSeasonNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['3']['tv'][':series_id']['season'][':season_number']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv'][':series_id']['season'][':season_number']['$get']>
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberQueryKey>
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
            ReturnType<(typeof client)['3']['tv'][':series_id']['season'][':season_number']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdSeasonSeasonNumberAccountStatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['account_states']['$get']
    >
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/account_states', toValue(args)] as const
}

export function get3TvSeriesIdSeasonSeasonNumberAccountStatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['account_states']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberAccountStatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].account_states.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdSeasonSeasonNumberAccountStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['account_states']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['account_states']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['account_states']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['account_states']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberAccountStatesQueryKey>
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
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['account_states']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberAccountStatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberAccountStatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].account_states.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdSeasonSeasonNumberAggregateCreditsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['aggregate_credits']['$get']
    >
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/aggregate_credits', toValue(args)] as const
}

export function get3TvSeriesIdSeasonSeasonNumberAggregateCreditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['aggregate_credits']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberAggregateCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].aggregate_credits.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use3TvSeriesIdSeasonSeasonNumberAggregateCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['aggregate_credits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['aggregate_credits']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['aggregate_credits']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['aggregate_credits']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberAggregateCreditsQueryKey>
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
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['aggregate_credits']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberAggregateCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberAggregateCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].aggregate_credits.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeasonSeasonIdChangesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>
  >,
) {
  return ['3', '/3/tv/season/:season_id/changes', toValue(args)] as const
}

export function get3TvSeasonSeasonIdChangesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeasonSeasonIdChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv.season[':season_id'].changes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeasonSeasonIdChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>
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
                  ReturnType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeasonSeasonIdChangesQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeasonSeasonIdChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeasonSeasonIdChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv.season[':season_id'].changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdSeasonSeasonNumberCreditsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['credits']['$get']
    >
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/credits', toValue(args)] as const
}

export function get3TvSeriesIdSeasonSeasonNumberCreditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['credits']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].credits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdSeasonSeasonNumberCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['credits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['credits']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['credits']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['credits']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberCreditsQueryKey>
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
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['credits']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdSeasonSeasonNumberExternalIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['external_ids']['$get']
    >
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/external_ids', toValue(args)] as const
}

export function get3TvSeriesIdSeasonSeasonNumberExternalIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['external_ids']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberExternalIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].external_ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdSeasonSeasonNumberExternalIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['external_ids']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['external_ids']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['external_ids']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['external_ids']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberExternalIdsQueryKey>
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
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['external_ids']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberExternalIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberExternalIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].external_ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdSeasonSeasonNumberImagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['images']['$get']
    >
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/images', toValue(args)] as const
}

export function get3TvSeriesIdSeasonSeasonNumberImagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['images']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdSeasonSeasonNumberImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['images']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['images']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['images']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['images']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberImagesQueryKey>
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
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['images']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdSeasonSeasonNumberTranslationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['translations']['$get']
    >
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/translations', toValue(args)] as const
}

export function get3TvSeriesIdSeasonSeasonNumberTranslationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['translations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberTranslationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].translations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdSeasonSeasonNumberTranslations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['translations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['translations']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['translations']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['translations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberTranslationsQueryKey>
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
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['translations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberTranslationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberTranslationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].translations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdSeasonSeasonNumberVideosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['videos']['$get']
    >
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/videos', toValue(args)] as const
}

export function get3TvSeriesIdSeasonSeasonNumberVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['videos']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdSeasonSeasonNumberVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['videos']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['videos']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['videos']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['videos']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberVideosQueryKey>
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
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['videos']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdSeasonSeasonNumberWatchProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['watch']['providers']['$get']
    >
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/watch/providers', toValue(args)] as const
}

export function get3TvSeriesIdSeasonSeasonNumberWatchProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['watch']['providers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberWatchProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].watch.providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvSeriesIdSeasonSeasonNumberWatchProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['watch']['providers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['watch']['providers']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['watch']['providers']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['watch']['providers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberWatchProvidersQueryKey>
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
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['watch']['providers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberWatchProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberWatchProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].watch.providers.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['$get']
    >
  >,
) {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number',
    toValue(args),
  ] as const
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].episode[':episode_number'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberQueryKey>
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
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].episode[':episode_number'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['account_states']['$get']
    >
  >,
) {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/account_states',
    toValue(args),
  ] as const
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['account_states']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].episode[
          ':episode_number'
        ].account_states.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['account_states']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['account_states']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['account_states']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['account_states']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesQueryKey
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
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['account_states']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].account_states.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvEpisodeEpisodeIdChangesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>
  >,
) {
  return ['3', '/3/tv/episode/:episode_id/changes', toValue(args)] as const
}

export function get3TvEpisodeEpisodeIdChangesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvEpisodeEpisodeIdChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv.episode[':episode_id'].changes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvEpisodeEpisodeIdChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>
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
                    (typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']
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
                    (typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvEpisodeEpisodeIdChangesQueryKey>
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
            ReturnType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvEpisodeEpisodeIdChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvEpisodeEpisodeIdChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv.episode[':episode_id'].changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['credits']['$get']
    >
  >,
) {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/credits',
    toValue(args),
  ] as const
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['credits']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].episode[
          ':episode_number'
        ].credits.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['credits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['credits']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['credits']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['credits']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsQueryKey>
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
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['credits']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['external_ids']['$get']
    >
  >,
) {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/external_ids',
    toValue(args),
  ] as const
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['external_ids']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].episode[
          ':episode_number'
        ].external_ids.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['external_ids']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['external_ids']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['external_ids']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['external_ids']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsQueryKey>
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
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['external_ids']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].external_ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['images']['$get']
    >
  >,
) {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/images',
    toValue(args),
  ] as const
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['images']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].episode[
          ':episode_number'
        ].images.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['images']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['images']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['images']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['images']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesQueryKey>
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
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['images']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['translations']['$get']
    >
  >,
) {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/translations',
    toValue(args),
  ] as const
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['translations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].episode[
          ':episode_number'
        ].translations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['translations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['translations']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['translations']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['translations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsQueryKey
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
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['translations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].translations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['videos']['$get']
    >
  >,
) {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/videos',
    toValue(args),
  ] as const
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['videos']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].episode[
          ':episode_number'
        ].videos.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['videos']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['videos']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['videos']['$get']
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['videos']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosQueryKey>
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
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['videos']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingMutationKey() {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/rating',
    'POST',
  ] as const
}

export function getPost3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['rating']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['rating']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['rating']['$post']
      >,
    ) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].episode[
          ':episode_number'
        ].rating.$post(args, options),
      )
    },
  })
}

export function usePost3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRating<
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['rating']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['rating']['$post']
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
  const mutationDefaults =
    getPost3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingMutationOptions<
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

export function getDelete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingMutationKey() {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/rating',
    'DELETE',
  ] as const
}

export function getDelete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['rating']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['rating']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['rating']['$delete']
      >,
    ) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].episode[
          ':episode_number'
        ].rating.$delete(args, options),
      )
    },
  })
}

export function useDelete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRating<
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
                    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['rating']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['rating']['$delete']
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
  const mutationDefaults =
    getDelete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingMutationOptions<
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

export function get3TvEpisodeGroupTvEpisodeGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv']['episode_group'][':tv_episode_group_id']['$get']>
  >,
) {
  return ['3', '/3/tv/episode_group/:tv_episode_group_id', toValue(args)] as const
}

export function get3TvEpisodeGroupTvEpisodeGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv']['episode_group'][':tv_episode_group_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3TvEpisodeGroupTvEpisodeGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].tv.episode_group[':tv_episode_group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3TvEpisodeGroupTvEpisodeGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['3']['tv']['episode_group'][':tv_episode_group_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['tv']['episode_group'][':tv_episode_group_id']['$get']>
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
                    (typeof client)['3']['tv']['episode_group'][':tv_episode_group_id']['$get']
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
                    (typeof client)['3']['tv']['episode_group'][':tv_episode_group_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get3TvEpisodeGroupTvEpisodeGroupIdQueryKey>
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
            ReturnType<(typeof client)['3']['tv']['episode_group'][':tv_episode_group_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvEpisodeGroupTvEpisodeGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3TvEpisodeGroupTvEpisodeGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].tv.episode_group[':tv_episode_group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3WatchProvidersRegionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['watch']['providers']['regions']['$get']>
  >,
) {
  return ['3', '/3/watch/providers/regions', toValue(args)] as const
}

export function get3WatchProvidersRegionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['watch']['providers']['regions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3WatchProvidersRegionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].watch.providers.regions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3WatchProvidersRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['watch']['providers']['regions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['watch']['providers']['regions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['watch']['providers']['regions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['watch']['providers']['regions']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3WatchProvidersRegionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['watch']['providers']['regions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3WatchProvidersRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3WatchProvidersRegionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].watch.providers.regions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3WatchProvidersMovieQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['watch']['providers']['movie']['$get']>
  >,
) {
  return ['3', '/3/watch/providers/movie', toValue(args)] as const
}

export function get3WatchProvidersMovieQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['watch']['providers']['movie']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3WatchProvidersMovieQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].watch.providers.movie.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3WatchProvidersMovie<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['watch']['providers']['movie']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['watch']['providers']['movie']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['watch']['providers']['movie']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['watch']['providers']['movie']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3WatchProvidersMovieQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['watch']['providers']['movie']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3WatchProvidersMovieQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3WatchProvidersMovieQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].watch.providers.movie.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get3WatchProvidersTvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['watch']['providers']['tv']['$get']>
  >,
) {
  return ['3', '/3/watch/providers/tv', toValue(args)] as const
}

export function get3WatchProvidersTvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['watch']['providers']['tv']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3WatchProvidersTvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3'].watch.providers.tv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3WatchProvidersTv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['watch']['providers']['tv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['3']['watch']['providers']['tv']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['watch']['providers']['tv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['3']['watch']['providers']['tv']['$get']>>
              >
            >
          >,
          ReturnType<typeof get3WatchProvidersTvQueryKey>
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
          Awaited<ReturnType<(typeof client)['3']['watch']['providers']['tv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3WatchProvidersTvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3WatchProvidersTvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3'].watch.providers.tv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
