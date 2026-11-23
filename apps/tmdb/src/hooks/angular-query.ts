import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_3Key() {
  return ['3'] as const
}

export function get3AuthenticationQueryKey() {
  return ['3', '/3/authentication'] as const
}

export function get3AuthenticationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['authentication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['authentication']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3AuthenticationQueryKey>
  >({
    queryKey: get3AuthenticationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].authentication.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3Authentication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['authentication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['authentication']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3AuthenticationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3AuthenticationQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function get3AccountAccountIdQueryKey(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['$get']>,
) {
  return ['3', '/3/account/:account_id', args] as const
}

export function get3AccountAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3AccountAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].account[':account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3AccountAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['account'][':account_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3AccountAccountIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPost3AccountAccountIdFavorite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost3AccountAccountIdFavoriteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPost3AccountAccountIdWatchlist<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost3AccountAccountIdWatchlistMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get3AccountAccountIdFavoriteMoviesQueryKey(
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['favorite']['movies']['$get']
  >,
) {
  return ['3', '/3/account/:account_id/favorite/movies', args] as const
}

export function get3AccountAccountIdFavoriteMoviesQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['favorite']['movies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3AccountAccountIdFavoriteMoviesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].account[':account_id'].favorite.movies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3AccountAccountIdFavoriteMovies<
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
  args: () => InferRequestType<
    (typeof client)['3']['account'][':account_id']['favorite']['movies']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3AccountAccountIdFavoriteMoviesQueryKey>
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
      ...get3AccountAccountIdFavoriteMoviesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3AccountAccountIdFavoriteTvQueryKey(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']>,
) {
  return ['3', '/3/account/:account_id/favorite/tv', args] as const
}

export function get3AccountAccountIdFavoriteTvQueryOptions<
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
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3AccountAccountIdFavoriteTvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].account[':account_id'].favorite.tv.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3AccountAccountIdFavoriteTv<
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
  args: () => InferRequestType<
    (typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3AccountAccountIdFavoriteTvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3AccountAccountIdListsQueryKey(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['lists']['$get']>,
) {
  return ['3', '/3/account/:account_id/lists', args] as const
}

export function get3AccountAccountIdListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3AccountAccountIdListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].account[':account_id'].lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3AccountAccountIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['account'][':account_id']['lists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3AccountAccountIdListsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3AccountAccountIdRatedMoviesQueryKey(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['movies']['$get']>,
) {
  return ['3', '/3/account/:account_id/rated/movies', args] as const
}

export function get3AccountAccountIdRatedMoviesQueryOptions<
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
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['movies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3AccountAccountIdRatedMoviesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].account[':account_id'].rated.movies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3AccountAccountIdRatedMovies<
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
  args: () => InferRequestType<
    (typeof client)['3']['account'][':account_id']['rated']['movies']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3AccountAccountIdRatedMoviesQueryKey>
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
      ...get3AccountAccountIdRatedMoviesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3AccountAccountIdRatedTvQueryKey(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>,
) {
  return ['3', '/3/account/:account_id/rated/tv', args] as const
}

export function get3AccountAccountIdRatedTvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3AccountAccountIdRatedTvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].account[':account_id'].rated.tv.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3AccountAccountIdRatedTv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['3']['account'][':account_id']['rated']['tv']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3AccountAccountIdRatedTvQueryKey>
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
      ...get3AccountAccountIdRatedTvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3AccountAccountIdRatedTvEpisodesQueryKey(
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['rated']['tv']['episodes']['$get']
  >,
) {
  return ['3', '/3/account/:account_id/rated/tv/episodes', args] as const
}

export function get3AccountAccountIdRatedTvEpisodesQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['rated']['tv']['episodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3AccountAccountIdRatedTvEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].account[':account_id'].rated.tv.episodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3AccountAccountIdRatedTvEpisodes<
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
  args: () => InferRequestType<
    (typeof client)['3']['account'][':account_id']['rated']['tv']['episodes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3AccountAccountIdRatedTvEpisodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3AccountAccountIdWatchlistMoviesQueryKey(
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['watchlist']['movies']['$get']
  >,
) {
  return ['3', '/3/account/:account_id/watchlist/movies', args] as const
}

export function get3AccountAccountIdWatchlistMoviesQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['watchlist']['movies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3AccountAccountIdWatchlistMoviesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].account[':account_id'].watchlist.movies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3AccountAccountIdWatchlistMovies<
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
  args: () => InferRequestType<
    (typeof client)['3']['account'][':account_id']['watchlist']['movies']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3AccountAccountIdWatchlistMoviesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3AccountAccountIdWatchlistTvQueryKey(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']>,
) {
  return ['3', '/3/account/:account_id/watchlist/tv', args] as const
}

export function get3AccountAccountIdWatchlistTvQueryOptions<
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
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3AccountAccountIdWatchlistTvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].account[':account_id'].watchlist.tv.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3AccountAccountIdWatchlistTv<
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
  args: () => InferRequestType<
    (typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3AccountAccountIdWatchlistTvQueryKey>
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
      ...get3AccountAccountIdWatchlistTvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3AuthenticationGuestSessionNewQueryKey() {
  return ['3', '/3/authentication/guest_session/new'] as const
}

export function get3AuthenticationGuestSessionNewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['authentication']['guest_session']['new']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: get3AuthenticationGuestSessionNewQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].authentication.guest_session.new.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3AuthenticationGuestSessionNew<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['authentication']['guest_session']['new']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3AuthenticationGuestSessionNewQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3AuthenticationTokenNewQueryKey() {
  return ['3', '/3/authentication/token/new'] as const
}

export function get3AuthenticationTokenNewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['authentication']['token']['new']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: get3AuthenticationTokenNewQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].authentication.token.new.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3AuthenticationTokenNew<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['authentication']['token']['new']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3AuthenticationTokenNewQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPost3AuthenticationSessionNew<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost3AuthenticationSessionNewMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPost3AuthenticationSessionConvert4<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost3AuthenticationSessionConvert4MutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPost3AuthenticationTokenValidateWithLogin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost3AuthenticationTokenValidateWithLoginMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDelete3AuthenticationSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete3AuthenticationSessionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get3CertificationMovieListQueryKey() {
  return ['3', '/3/certification/movie/list'] as const
}

export function get3CertificationMovieListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['certification']['movie']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: get3CertificationMovieListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].certification.movie.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3CertificationMovieList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['certification']['movie']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3CertificationMovieListQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function get3CertificationTvListQueryKey() {
  return ['3', '/3/certification/tv/list'] as const
}

export function get3CertificationTvListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['certification']['tv']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: get3CertificationTvListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].certification.tv.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3CertificationTvList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['certification']['tv']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3CertificationTvListQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function get3MovieChangesQueryKey(
  args: InferRequestType<(typeof client)['3']['movie']['changes']['$get']>,
) {
  return ['3', '/3/movie/changes', args] as const
}

export function get3MovieChangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['changes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['changes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieChangesQueryKey>
  >({
    queryKey: get3MovieChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie.changes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3MovieChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['changes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie']['changes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['movie']['changes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3MovieChangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3MovieChangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3PersonChangesQueryKey(
  args: InferRequestType<(typeof client)['3']['person']['changes']['$get']>,
) {
  return ['3', '/3/person/changes', args] as const
}

export function get3PersonChangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['changes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['person']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['changes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3PersonChangesQueryKey>
  >({
    queryKey: get3PersonChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].person.changes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3PersonChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['changes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['person']['changes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['person']['changes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3PersonChangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3PersonChangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3TvChangesQueryKey(
  args: InferRequestType<(typeof client)['3']['tv']['changes']['$get']>,
) {
  return ['3', '/3/tv/changes', args] as const
}

export function get3TvChangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['changes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['changes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvChangesQueryKey>
  >({
    queryKey: get3TvChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv.changes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3TvChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['changes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv']['changes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['changes']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3TvChangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3TvChangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3CollectionCollectionIdQueryKey(
  args: InferRequestType<(typeof client)['3']['collection'][':collection_id']['$get']>,
) {
  return ['3', '/3/collection/:collection_id', args] as const
}

export function get3CollectionCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['collection'][':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['collection'][':collection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3CollectionCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].collection[':collection_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3CollectionCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['collection'][':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['collection'][':collection_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3CollectionCollectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3CollectionCollectionIdImagesQueryKey(
  args: InferRequestType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>,
) {
  return ['3', '/3/collection/:collection_id/images', args] as const
}

export function get3CollectionCollectionIdImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3CollectionCollectionIdImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].collection[':collection_id'].images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3CollectionCollectionIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['3']['collection'][':collection_id']['images']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3CollectionCollectionIdImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3CollectionCollectionIdTranslationsQueryKey(
  args: InferRequestType<
    (typeof client)['3']['collection'][':collection_id']['translations']['$get']
  >,
) {
  return ['3', '/3/collection/:collection_id/translations', args] as const
}

export function get3CollectionCollectionIdTranslationsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['collection'][':collection_id']['translations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3CollectionCollectionIdTranslationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].collection[':collection_id'].translations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3CollectionCollectionIdTranslations<
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
  args: () => InferRequestType<
    (typeof client)['3']['collection'][':collection_id']['translations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3CollectionCollectionIdTranslationsQueryKey>
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
      ...get3CollectionCollectionIdTranslationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3CompanyCompanyIdQueryKey(
  args: InferRequestType<(typeof client)['3']['company'][':company_id']['$get']>,
) {
  return ['3', '/3/company/:company_id', args] as const
}

export function get3CompanyCompanyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['company'][':company_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3CompanyCompanyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].company[':company_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3CompanyCompanyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['company'][':company_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3CompanyCompanyIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3CompanyCompanyIdAlternativeNamesQueryKey(
  args: InferRequestType<
    (typeof client)['3']['company'][':company_id']['alternative_names']['$get']
  >,
) {
  return ['3', '/3/company/:company_id/alternative_names', args] as const
}

export function get3CompanyCompanyIdAlternativeNamesQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['company'][':company_id']['alternative_names']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3CompanyCompanyIdAlternativeNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].company[':company_id'].alternative_names.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3CompanyCompanyIdAlternativeNames<
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
  args: () => InferRequestType<
    (typeof client)['3']['company'][':company_id']['alternative_names']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3CompanyCompanyIdAlternativeNamesQueryKey>
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
      ...get3CompanyCompanyIdAlternativeNamesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3CompanyCompanyIdImagesQueryKey(
  args: InferRequestType<(typeof client)['3']['company'][':company_id']['images']['$get']>,
) {
  return ['3', '/3/company/:company_id/images', args] as const
}

export function get3CompanyCompanyIdImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['company'][':company_id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3CompanyCompanyIdImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].company[':company_id'].images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3CompanyCompanyIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['company'][':company_id']['images']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3CompanyCompanyIdImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3ConfigurationQueryKey() {
  return ['3', '/3/configuration'] as const
}

export function get3ConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['configuration']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['configuration']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3ConfigurationQueryKey>
  >({
    queryKey: get3ConfigurationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].configuration.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3Configuration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['configuration']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['configuration']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3ConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3ConfigurationQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function get3ConfigurationCountriesQueryKey(
  args: InferRequestType<(typeof client)['3']['configuration']['countries']['$get']>,
) {
  return ['3', '/3/configuration/countries', args] as const
}

export function get3ConfigurationCountriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['configuration']['countries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['configuration']['countries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3ConfigurationCountriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].configuration.countries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3ConfigurationCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['configuration']['countries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['configuration']['countries']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3ConfigurationCountriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3ConfigurationJobsQueryKey() {
  return ['3', '/3/configuration/jobs'] as const
}

export function get3ConfigurationJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['configuration']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: get3ConfigurationJobsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].configuration.jobs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3ConfigurationJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['configuration']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3ConfigurationJobsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function get3ConfigurationLanguagesQueryKey() {
  return ['3', '/3/configuration/languages'] as const
}

export function get3ConfigurationLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['configuration']['languages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: get3ConfigurationLanguagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].configuration.languages.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3ConfigurationLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['configuration']['languages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3ConfigurationLanguagesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function get3ConfigurationPrimaryTranslationsQueryKey() {
  return ['3', '/3/configuration/primary_translations'] as const
}

export function get3ConfigurationPrimaryTranslationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['configuration']['primary_translations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: get3ConfigurationPrimaryTranslationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].configuration.primary_translations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3ConfigurationPrimaryTranslations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['configuration']['primary_translations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3ConfigurationPrimaryTranslationsQueryKey>
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
      ...get3ConfigurationPrimaryTranslationsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3ConfigurationTimezonesQueryKey() {
  return ['3', '/3/configuration/timezones'] as const
}

export function get3ConfigurationTimezonesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['configuration']['timezones']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: get3ConfigurationTimezonesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].configuration.timezones.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3ConfigurationTimezones<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['configuration']['timezones']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3ConfigurationTimezonesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function get3CreditCreditIdQueryKey(
  args: InferRequestType<(typeof client)['3']['credit'][':credit_id']['$get']>,
) {
  return ['3', '/3/credit/:credit_id', args] as const
}

export function get3CreditCreditIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['credit'][':credit_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['credit'][':credit_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3CreditCreditIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].credit[':credit_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3CreditCreditId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['credit'][':credit_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['credit'][':credit_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3CreditCreditIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3DiscoverMovieQueryKey(
  args: InferRequestType<(typeof client)['3']['discover']['movie']['$get']>,
) {
  return ['3', '/3/discover/movie', args] as const
}

export function get3DiscoverMovieQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['discover']['movie']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['discover']['movie']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['discover']['movie']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3DiscoverMovieQueryKey>
  >({
    queryKey: get3DiscoverMovieQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].discover.movie.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3DiscoverMovie<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['discover']['movie']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['discover']['movie']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['discover']['movie']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3DiscoverMovieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3DiscoverMovieQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3DiscoverTvQueryKey(
  args: InferRequestType<(typeof client)['3']['discover']['tv']['$get']>,
) {
  return ['3', '/3/discover/tv', args] as const
}

export function get3DiscoverTvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['discover']['tv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['discover']['tv']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['discover']['tv']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3DiscoverTvQueryKey>
  >({
    queryKey: get3DiscoverTvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].discover.tv.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3DiscoverTv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['discover']['tv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['discover']['tv']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['discover']['tv']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3DiscoverTvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3DiscoverTvQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3FindExternalIdQueryKey(
  args: InferRequestType<(typeof client)['3']['find'][':external_id']['$get']>,
) {
  return ['3', '/3/find/:external_id', args] as const
}

export function get3FindExternalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['find'][':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['find'][':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3FindExternalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].find[':external_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3FindExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['find'][':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['find'][':external_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3FindExternalIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3GenreMovieListQueryKey(
  args: InferRequestType<(typeof client)['3']['genre']['movie']['list']['$get']>,
) {
  return ['3', '/3/genre/movie/list', args] as const
}

export function get3GenreMovieListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['genre']['movie']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['genre']['movie']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3GenreMovieListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].genre.movie.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3GenreMovieList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['genre']['movie']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['genre']['movie']['list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3GenreMovieListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3GenreTvListQueryKey(
  args: InferRequestType<(typeof client)['3']['genre']['tv']['list']['$get']>,
) {
  return ['3', '/3/genre/tv/list', args] as const
}

export function get3GenreTvListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['genre']['tv']['list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['genre']['tv']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3GenreTvListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].genre.tv.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3GenreTvList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['genre']['tv']['list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['genre']['tv']['list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3GenreTvListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3GuestSessionGuestSessionIdRatedMoviesQueryKey(
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['movies']['$get']
  >,
) {
  return ['3', '/3/guest_session/:guest_session_id/rated/movies', args] as const
}

export function get3GuestSessionGuestSessionIdRatedMoviesQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['movies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3GuestSessionGuestSessionIdRatedMoviesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].guest_session[':guest_session_id'].rated.movies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3GuestSessionGuestSessionIdRatedMovies<
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
  args: () => InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['movies']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3GuestSessionGuestSessionIdRatedMoviesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function get3GuestSessionGuestSessionIdRatedTvQueryKey(
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['$get']
  >,
) {
  return ['3', '/3/guest_session/:guest_session_id/rated/tv', args] as const
}

export function get3GuestSessionGuestSessionIdRatedTvQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3GuestSessionGuestSessionIdRatedTvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].guest_session[':guest_session_id'].rated.tv.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3GuestSessionGuestSessionIdRatedTv<
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
  args: () => InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3GuestSessionGuestSessionIdRatedTvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3GuestSessionGuestSessionIdRatedTvEpisodesQueryKey(
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['episodes']['$get']
  >,
) {
  return ['3', '/3/guest_session/:guest_session_id/rated/tv/episodes', args] as const
}

export function get3GuestSessionGuestSessionIdRatedTvEpisodesQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['episodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3GuestSessionGuestSessionIdRatedTvEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].guest_session[':guest_session_id'].rated.tv.episodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3GuestSessionGuestSessionIdRatedTvEpisodes<
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
  args: () => InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['episodes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3GuestSessionGuestSessionIdRatedTvEpisodesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function get3KeywordKeywordIdQueryKey(
  args: InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['$get']>,
) {
  return ['3', '/3/keyword/:keyword_id', args] as const
}

export function get3KeywordKeywordIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3KeywordKeywordIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].keyword[':keyword_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3KeywordKeywordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3KeywordKeywordIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3KeywordKeywordIdMoviesQueryKey(
  args: InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>,
) {
  return ['3', '/3/keyword/:keyword_id/movies', args] as const
}

export function get3KeywordKeywordIdMoviesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3KeywordKeywordIdMoviesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].keyword[':keyword_id'].movies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3KeywordKeywordIdMovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3KeywordKeywordIdMoviesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPost3ListListIdAddItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost3ListListIdAddItemMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get3ListListIdItemStatusQueryKey(
  args: InferRequestType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>,
) {
  return ['3', '/3/list/:list_id/item_status', args] as const
}

export function get3ListListIdItemStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3ListListIdItemStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].list[':list_id'].item_status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3ListListIdItemStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3ListListIdItemStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPost3ListListIdClear<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost3ListListIdClearMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPost3List<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['3']['list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost3ListMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get3ListListIdQueryKey(
  args: InferRequestType<(typeof client)['3']['list'][':list_id']['$get']>,
) {
  return ['3', '/3/list/:list_id', args] as const
}

export function get3ListListIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['list'][':list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3ListListIdQueryKey>
  >({
    queryKey: get3ListListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].list[':list_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3ListListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['list'][':list_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3ListListIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3ListListIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDelete3ListListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete3ListListIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPost3ListListIdRemoveItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost3ListListIdRemoveItemMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get3MovieNowPlayingQueryKey(
  args: InferRequestType<(typeof client)['3']['movie']['now_playing']['$get']>,
) {
  return ['3', '/3/movie/now_playing', args] as const
}

export function get3MovieNowPlayingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie']['now_playing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie']['now_playing']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieNowPlayingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie.now_playing.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieNowPlaying<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie']['now_playing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie']['now_playing']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3MovieNowPlayingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3MoviePopularQueryKey(
  args: InferRequestType<(typeof client)['3']['movie']['popular']['$get']>,
) {
  return ['3', '/3/movie/popular', args] as const
}

export function get3MoviePopularQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['popular']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie']['popular']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['popular']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MoviePopularQueryKey>
  >({
    queryKey: get3MoviePopularQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie.popular.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3MoviePopular<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['popular']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie']['popular']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['movie']['popular']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3MoviePopularQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3MoviePopularQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3MovieTopRatedQueryKey(
  args: InferRequestType<(typeof client)['3']['movie']['top_rated']['$get']>,
) {
  return ['3', '/3/movie/top_rated', args] as const
}

export function get3MovieTopRatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['top_rated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie']['top_rated']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieTopRatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie.top_rated.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3MovieTopRated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['top_rated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie']['top_rated']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3MovieTopRatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3MovieUpcomingQueryKey(
  args: InferRequestType<(typeof client)['3']['movie']['upcoming']['$get']>,
) {
  return ['3', '/3/movie/upcoming', args] as const
}

export function get3MovieUpcomingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['upcoming']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie']['upcoming']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['upcoming']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieUpcomingQueryKey>
  >({
    queryKey: get3MovieUpcomingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie.upcoming.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3MovieUpcoming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['upcoming']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie']['upcoming']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['movie']['upcoming']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3MovieUpcomingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3MovieUpcomingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3MovieMovieIdQueryKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['$get']>,
) {
  return ['3', '/3/movie/:movie_id', args] as const
}

export function get3MovieMovieIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieMovieIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie[':movie_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieMovieId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie'][':movie_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3MovieMovieIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3MovieMovieIdAccountStatesQueryKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/account_states', args] as const
}

export function get3MovieMovieIdAccountStatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieMovieIdAccountStatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie[':movie_id'].account_states.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieMovieIdAccountStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['3']['movie'][':movie_id']['account_states']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3MovieMovieIdAccountStatesQueryKey>
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
      ...get3MovieMovieIdAccountStatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3MovieMovieIdAlternativeTitlesQueryKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/alternative_titles', args] as const
}

export function get3MovieMovieIdAlternativeTitlesQueryOptions<
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
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieMovieIdAlternativeTitlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie[':movie_id'].alternative_titles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieMovieIdAlternativeTitles<
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
  args: () => InferRequestType<
    (typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3MovieMovieIdAlternativeTitlesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3MovieMovieIdChangesQueryKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/changes', args] as const
}

export function get3MovieMovieIdChangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieMovieIdChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie[':movie_id'].changes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieMovieIdChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3MovieMovieIdChangesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3MovieMovieIdCreditsQueryKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/credits', args] as const
}

export function get3MovieMovieIdCreditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieMovieIdCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie[':movie_id'].credits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieMovieIdCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3MovieMovieIdCreditsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3MovieMovieIdExternalIdsQueryKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/external_ids', args] as const
}

export function get3MovieMovieIdExternalIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieMovieIdExternalIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie[':movie_id'].external_ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieMovieIdExternalIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3MovieMovieIdExternalIdsQueryKey>
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
      ...get3MovieMovieIdExternalIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3MovieMovieIdImagesQueryKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/images', args] as const
}

export function get3MovieMovieIdImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieMovieIdImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie[':movie_id'].images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieMovieIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3MovieMovieIdImagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3MovieMovieIdKeywordsQueryKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/keywords', args] as const
}

export function get3MovieMovieIdKeywordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieMovieIdKeywordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie[':movie_id'].keywords.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieMovieIdKeywords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3MovieMovieIdKeywordsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3MovieLatestQueryKey() {
  return ['3', '/3/movie/latest'] as const
}

export function get3MovieLatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['latest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['latest']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3MovieLatestQueryKey>
  >({
    queryKey: get3MovieLatestQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie.latest.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['latest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['movie']['latest']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3MovieLatestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3MovieLatestQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function get3MovieMovieIdListsQueryKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/lists', args] as const
}

export function get3MovieMovieIdListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieMovieIdListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie[':movie_id'].lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieMovieIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3MovieMovieIdListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3MovieMovieIdRecommendationsQueryKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/recommendations', args] as const
}

export function get3MovieMovieIdRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieMovieIdRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie[':movie_id'].recommendations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieMovieIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['3']['movie'][':movie_id']['recommendations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3MovieMovieIdRecommendationsQueryKey>
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
      ...get3MovieMovieIdRecommendationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3MovieMovieIdReleaseDatesQueryKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/release_dates', args] as const
}

export function get3MovieMovieIdReleaseDatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieMovieIdReleaseDatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie[':movie_id'].release_dates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieMovieIdReleaseDates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3MovieMovieIdReleaseDatesQueryKey>
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
      ...get3MovieMovieIdReleaseDatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3MovieMovieIdReviewsQueryKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/reviews', args] as const
}

export function get3MovieMovieIdReviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieMovieIdReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie[':movie_id'].reviews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieMovieIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3MovieMovieIdReviewsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3MovieMovieIdSimilarQueryKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/similar', args] as const
}

export function get3MovieMovieIdSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieMovieIdSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie[':movie_id'].similar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieMovieIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3MovieMovieIdSimilarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3MovieMovieIdTranslationsQueryKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/translations', args] as const
}

export function get3MovieMovieIdTranslationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieMovieIdTranslationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie[':movie_id'].translations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieMovieIdTranslations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3MovieMovieIdTranslationsQueryKey>
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
      ...get3MovieMovieIdTranslationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3MovieMovieIdVideosQueryKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/videos', args] as const
}

export function get3MovieMovieIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieMovieIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie[':movie_id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieMovieIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3MovieMovieIdVideosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3MovieMovieIdWatchProvidersQueryKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/watch/providers', args] as const
}

export function get3MovieMovieIdWatchProvidersQueryOptions<
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
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3MovieMovieIdWatchProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].movie[':movie_id'].watch.providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3MovieMovieIdWatchProviders<
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
  args: () => InferRequestType<
    (typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3MovieMovieIdWatchProvidersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPost3MovieMovieIdRating<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost3MovieMovieIdRatingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDelete3MovieMovieIdRating<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete3MovieMovieIdRatingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get3NetworkNetworkIdQueryKey(
  args: InferRequestType<(typeof client)['3']['network'][':network_id']['$get']>,
) {
  return ['3', '/3/network/:network_id', args] as const
}

export function get3NetworkNetworkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['network'][':network_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3NetworkNetworkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].network[':network_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3NetworkNetworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['network'][':network_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3NetworkNetworkIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3NetworkNetworkIdAlternativeNamesQueryKey(
  args: InferRequestType<
    (typeof client)['3']['network'][':network_id']['alternative_names']['$get']
  >,
) {
  return ['3', '/3/network/:network_id/alternative_names', args] as const
}

export function get3NetworkNetworkIdAlternativeNamesQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['network'][':network_id']['alternative_names']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3NetworkNetworkIdAlternativeNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].network[':network_id'].alternative_names.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3NetworkNetworkIdAlternativeNames<
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
  args: () => InferRequestType<
    (typeof client)['3']['network'][':network_id']['alternative_names']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3NetworkNetworkIdAlternativeNamesQueryKey>
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
      ...get3NetworkNetworkIdAlternativeNamesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3NetworkNetworkIdImagesQueryKey(
  args: InferRequestType<(typeof client)['3']['network'][':network_id']['images']['$get']>,
) {
  return ['3', '/3/network/:network_id/images', args] as const
}

export function get3NetworkNetworkIdImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['network'][':network_id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3NetworkNetworkIdImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].network[':network_id'].images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3NetworkNetworkIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['network'][':network_id']['images']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3NetworkNetworkIdImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3PersonPopularQueryKey(
  args: InferRequestType<(typeof client)['3']['person']['popular']['$get']>,
) {
  return ['3', '/3/person/popular', args] as const
}

export function get3PersonPopularQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['popular']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['person']['popular']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['popular']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3PersonPopularQueryKey>
  >({
    queryKey: get3PersonPopularQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].person.popular.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3PersonPopular<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['popular']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['person']['popular']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['person']['popular']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3PersonPopularQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3PersonPopularQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3PersonPersonIdQueryKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['$get']>,
) {
  return ['3', '/3/person/:person_id', args] as const
}

export function get3PersonPersonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3PersonPersonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].person[':person_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3PersonPersonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['person'][':person_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3PersonPersonIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3PersonPersonIdChangesQueryKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['changes']['$get']>,
) {
  return ['3', '/3/person/:person_id/changes', args] as const
}

export function get3PersonPersonIdChangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3PersonPersonIdChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].person[':person_id'].changes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3PersonPersonIdChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['person'][':person_id']['changes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3PersonPersonIdChangesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3PersonPersonIdCombinedCreditsQueryKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['combined_credits']['$get']>,
) {
  return ['3', '/3/person/:person_id/combined_credits', args] as const
}

export function get3PersonPersonIdCombinedCreditsQueryOptions<
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
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['combined_credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3PersonPersonIdCombinedCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].person[':person_id'].combined_credits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3PersonPersonIdCombinedCredits<
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
  args: () => InferRequestType<
    (typeof client)['3']['person'][':person_id']['combined_credits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3PersonPersonIdCombinedCreditsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3PersonPersonIdExternalIdsQueryKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>,
) {
  return ['3', '/3/person/:person_id/external_ids', args] as const
}

export function get3PersonPersonIdExternalIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3PersonPersonIdExternalIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].person[':person_id'].external_ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3PersonPersonIdExternalIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['3']['person'][':person_id']['external_ids']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3PersonPersonIdExternalIdsQueryKey>
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
      ...get3PersonPersonIdExternalIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3PersonPersonIdImagesQueryKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['images']['$get']>,
) {
  return ['3', '/3/person/:person_id/images', args] as const
}

export function get3PersonPersonIdImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3PersonPersonIdImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].person[':person_id'].images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3PersonPersonIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['person'][':person_id']['images']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3PersonPersonIdImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3PersonLatestQueryKey() {
  return ['3', '/3/person/latest'] as const
}

export function get3PersonLatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['latest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['latest']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3PersonLatestQueryKey>
  >({
    queryKey: get3PersonLatestQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].person.latest.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3PersonLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['latest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['person']['latest']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3PersonLatestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3PersonLatestQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function get3PersonPersonIdMovieCreditsQueryKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>,
) {
  return ['3', '/3/person/:person_id/movie_credits', args] as const
}

export function get3PersonPersonIdMovieCreditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3PersonPersonIdMovieCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].person[':person_id'].movie_credits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3PersonPersonIdMovieCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['3']['person'][':person_id']['movie_credits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3PersonPersonIdMovieCreditsQueryKey>
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
      ...get3PersonPersonIdMovieCreditsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3PersonPersonIdTvCreditsQueryKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>,
) {
  return ['3', '/3/person/:person_id/tv_credits', args] as const
}

export function get3PersonPersonIdTvCreditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3PersonPersonIdTvCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].person[':person_id'].tv_credits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3PersonPersonIdTvCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3PersonPersonIdTvCreditsQueryKey>
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
      ...get3PersonPersonIdTvCreditsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3PersonPersonIdTaggedImagesQueryKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>,
) {
  return ['3', '/3/person/:person_id/tagged_images', args] as const
}

export function get3PersonPersonIdTaggedImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3PersonPersonIdTaggedImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].person[':person_id'].tagged_images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3PersonPersonIdTaggedImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['3']['person'][':person_id']['tagged_images']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3PersonPersonIdTaggedImagesQueryKey>
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
      ...get3PersonPersonIdTaggedImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3PersonPersonIdTranslationsQueryKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['translations']['$get']>,
) {
  return ['3', '/3/person/:person_id/translations', args] as const
}

export function get3PersonPersonIdTranslationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['translations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['translations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3PersonPersonIdTranslationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].person[':person_id'].translations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3PersonPersonIdTranslations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['translations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['3']['person'][':person_id']['translations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3PersonPersonIdTranslationsQueryKey>
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
      ...get3PersonPersonIdTranslationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3ReviewReviewIdQueryKey(
  args: InferRequestType<(typeof client)['3']['review'][':review_id']['$get']>,
) {
  return ['3', '/3/review/:review_id', args] as const
}

export function get3ReviewReviewIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['review'][':review_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['review'][':review_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3ReviewReviewIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].review[':review_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3ReviewReviewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['review'][':review_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['review'][':review_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3ReviewReviewIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3SearchCollectionQueryKey(
  args: InferRequestType<(typeof client)['3']['search']['collection']['$get']>,
) {
  return ['3', '/3/search/collection', args] as const
}

export function get3SearchCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['search']['collection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['search']['collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3SearchCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].search.collection.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3SearchCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['search']['collection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['search']['collection']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3SearchCollectionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3SearchCompanyQueryKey(
  args: InferRequestType<(typeof client)['3']['search']['company']['$get']>,
) {
  return ['3', '/3/search/company', args] as const
}

export function get3SearchCompanyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['company']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['search']['company']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['company']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3SearchCompanyQueryKey>
  >({
    queryKey: get3SearchCompanyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].search.company.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3SearchCompany<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['company']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['search']['company']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['search']['company']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3SearchCompanyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3SearchCompanyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3SearchKeywordQueryKey(
  args: InferRequestType<(typeof client)['3']['search']['keyword']['$get']>,
) {
  return ['3', '/3/search/keyword', args] as const
}

export function get3SearchKeywordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['keyword']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['search']['keyword']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['keyword']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3SearchKeywordQueryKey>
  >({
    queryKey: get3SearchKeywordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].search.keyword.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3SearchKeyword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['keyword']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['search']['keyword']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['search']['keyword']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3SearchKeywordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3SearchKeywordQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3SearchMovieQueryKey(
  args: InferRequestType<(typeof client)['3']['search']['movie']['$get']>,
) {
  return ['3', '/3/search/movie', args] as const
}

export function get3SearchMovieQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['movie']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['search']['movie']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['movie']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3SearchMovieQueryKey>
  >({
    queryKey: get3SearchMovieQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].search.movie.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3SearchMovie<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['movie']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['search']['movie']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['search']['movie']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3SearchMovieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3SearchMovieQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3SearchMultiQueryKey(
  args: InferRequestType<(typeof client)['3']['search']['multi']['$get']>,
) {
  return ['3', '/3/search/multi', args] as const
}

export function get3SearchMultiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['multi']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['search']['multi']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['multi']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3SearchMultiQueryKey>
  >({
    queryKey: get3SearchMultiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].search.multi.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3SearchMulti<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['multi']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['search']['multi']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['search']['multi']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3SearchMultiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3SearchMultiQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3SearchPersonQueryKey(
  args: InferRequestType<(typeof client)['3']['search']['person']['$get']>,
) {
  return ['3', '/3/search/person', args] as const
}

export function get3SearchPersonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['person']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['search']['person']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['person']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3SearchPersonQueryKey>
  >({
    queryKey: get3SearchPersonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].search.person.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3SearchPerson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['person']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['search']['person']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['search']['person']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3SearchPersonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3SearchPersonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3SearchTvQueryKey(
  args: InferRequestType<(typeof client)['3']['search']['tv']['$get']>,
) {
  return ['3', '/3/search/tv', args] as const
}

export function get3SearchTvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['tv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['search']['tv']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['tv']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3SearchTvQueryKey>
  >({
    queryKey: get3SearchTvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].search.tv.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3SearchTv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['tv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['search']['tv']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['tv']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3SearchTvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3SearchTvQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3TrendingAllTimeWindowQueryKey(
  args: InferRequestType<(typeof client)['3']['trending']['all'][':time_window']['$get']>,
) {
  return ['3', '/3/trending/all/:time_window', args] as const
}

export function get3TrendingAllTimeWindowQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['trending']['all'][':time_window']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['trending']['all'][':time_window']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TrendingAllTimeWindowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].trending.all[':time_window'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TrendingAllTimeWindow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['trending']['all'][':time_window']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['trending']['all'][':time_window']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TrendingAllTimeWindowQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TrendingMovieTimeWindowQueryKey(
  args: InferRequestType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>,
) {
  return ['3', '/3/trending/movie/:time_window', args] as const
}

export function get3TrendingMovieTimeWindowQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TrendingMovieTimeWindowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].trending.movie[':time_window'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TrendingMovieTimeWindow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TrendingMovieTimeWindowQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TrendingPersonTimeWindowQueryKey(
  args: InferRequestType<(typeof client)['3']['trending']['person'][':time_window']['$get']>,
) {
  return ['3', '/3/trending/person/:time_window', args] as const
}

export function get3TrendingPersonTimeWindowQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['trending']['person'][':time_window']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['trending']['person'][':time_window']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TrendingPersonTimeWindowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].trending.person[':time_window'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TrendingPersonTimeWindow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['trending']['person'][':time_window']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['trending']['person'][':time_window']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3TrendingPersonTimeWindowQueryKey>
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
      ...get3TrendingPersonTimeWindowQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TrendingTvTimeWindowQueryKey(
  args: InferRequestType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>,
) {
  return ['3', '/3/trending/tv/:time_window', args] as const
}

export function get3TrendingTvTimeWindowQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TrendingTvTimeWindowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].trending.tv[':time_window'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TrendingTvTimeWindow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TrendingTvTimeWindowQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvAiringTodayQueryKey(
  args: InferRequestType<(typeof client)['3']['tv']['airing_today']['$get']>,
) {
  return ['3', '/3/tv/airing_today', args] as const
}

export function get3TvAiringTodayQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['airing_today']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv']['airing_today']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvAiringTodayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv.airing_today.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3TvAiringToday<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['airing_today']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv']['airing_today']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3TvAiringTodayQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3TvOnTheAirQueryKey(
  args: InferRequestType<(typeof client)['3']['tv']['on_the_air']['$get']>,
) {
  return ['3', '/3/tv/on_the_air', args] as const
}

export function get3TvOnTheAirQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['on_the_air']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv']['on_the_air']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['on_the_air']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvOnTheAirQueryKey>
  >({
    queryKey: get3TvOnTheAirQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv.on_the_air.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3TvOnTheAir<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['on_the_air']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv']['on_the_air']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['tv']['on_the_air']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3TvOnTheAirQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3TvOnTheAirQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3TvPopularQueryKey(
  args: InferRequestType<(typeof client)['3']['tv']['popular']['$get']>,
) {
  return ['3', '/3/tv/popular', args] as const
}

export function get3TvPopularQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['popular']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv']['popular']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['popular']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvPopularQueryKey>
  >({
    queryKey: get3TvPopularQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv.popular.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3TvPopular<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['popular']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv']['popular']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['popular']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3TvPopularQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3TvPopularQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3TvTopRatedQueryKey(
  args: InferRequestType<(typeof client)['3']['tv']['top_rated']['$get']>,
) {
  return ['3', '/3/tv/top_rated', args] as const
}

export function get3TvTopRatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['top_rated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv']['top_rated']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['top_rated']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvTopRatedQueryKey>
  >({
    queryKey: get3TvTopRatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv.top_rated.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3TvTopRated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['top_rated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv']['top_rated']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['tv']['top_rated']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3TvTopRatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3TvTopRatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3TvSeriesIdQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['$get']>,
) {
  return ['3', '/3/tv/:series_id', args] as const
}

export function get3TvSeriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvSeriesIdQueryKey>
  >({
    queryKey: get3TvSeriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3TvSeriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv'][':series_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3TvSeriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3TvSeriesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3TvSeriesIdAccountStatesQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>,
) {
  return ['3', '/3/tv/:series_id/account_states', args] as const
}

export function get3TvSeriesIdAccountStatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdAccountStatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].account_states.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdAccountStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3TvSeriesIdAccountStatesQueryKey>
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
      ...get3TvSeriesIdAccountStatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdAggregateCreditsQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>,
) {
  return ['3', '/3/tv/:series_id/aggregate_credits', args] as const
}

export function get3TvSeriesIdAggregateCreditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdAggregateCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].aggregate_credits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdAggregateCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3TvSeriesIdAggregateCreditsQueryKey>
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
      ...get3TvSeriesIdAggregateCreditsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdAlternativeTitlesQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>,
) {
  return ['3', '/3/tv/:series_id/alternative_titles', args] as const
}

export function get3TvSeriesIdAlternativeTitlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdAlternativeTitlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].alternative_titles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdAlternativeTitles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdAlternativeTitlesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdChangesQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>,
) {
  return ['3', '/3/tv/:series_id/changes', args] as const
}

export function get3TvSeriesIdChangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].changes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3TvSeriesIdChangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3TvSeriesIdContentRatingsQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>,
) {
  return ['3', '/3/tv/:series_id/content_ratings', args] as const
}

export function get3TvSeriesIdContentRatingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdContentRatingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].content_ratings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdContentRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3TvSeriesIdContentRatingsQueryKey>
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
      ...get3TvSeriesIdContentRatingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdCreditsQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>,
) {
  return ['3', '/3/tv/:series_id/credits', args] as const
}

export function get3TvSeriesIdCreditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].credits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3TvSeriesIdCreditsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3TvSeriesIdEpisodeGroupsQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>,
) {
  return ['3', '/3/tv/:series_id/episode_groups', args] as const
}

export function get3TvSeriesIdEpisodeGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdEpisodeGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].episode_groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdEpisodeGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3TvSeriesIdEpisodeGroupsQueryKey>
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
      ...get3TvSeriesIdEpisodeGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdExternalIdsQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>,
) {
  return ['3', '/3/tv/:series_id/external_ids', args] as const
}

export function get3TvSeriesIdExternalIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdExternalIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].external_ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdExternalIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdExternalIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdImagesQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['images']['$get']>,
) {
  return ['3', '/3/tv/:series_id/images', args] as const
}

export function get3TvSeriesIdImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv'][':series_id']['images']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3TvSeriesIdImagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3TvSeriesIdKeywordsQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>,
) {
  return ['3', '/3/tv/:series_id/keywords', args] as const
}

export function get3TvSeriesIdKeywordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdKeywordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].keywords.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdKeywords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3TvSeriesIdKeywordsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3TvLatestQueryKey() {
  return ['3', '/3/tv/latest'] as const
}

export function get3TvLatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['latest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['latest']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3TvLatestQueryKey>
  >({
    queryKey: get3TvLatestQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv.latest.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3TvLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['latest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['latest']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get3TvLatestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3TvLatestQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function get3TvSeriesIdListsQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>,
) {
  return ['3', '/3/tv/:series_id/lists', args] as const
}

export function get3TvSeriesIdListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3TvSeriesIdListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3TvSeriesIdRecommendationsQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>,
) {
  return ['3', '/3/tv/:series_id/recommendations', args] as const
}

export function get3TvSeriesIdRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].recommendations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3TvSeriesIdRecommendationsQueryKey>
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
      ...get3TvSeriesIdRecommendationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdReviewsQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>,
) {
  return ['3', '/3/tv/:series_id/reviews', args] as const
}

export function get3TvSeriesIdReviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].reviews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3TvSeriesIdReviewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3TvSeriesIdScreenedTheatricallyQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']>,
) {
  return ['3', '/3/tv/:series_id/screened_theatrically', args] as const
}

export function get3TvSeriesIdScreenedTheatricallyQueryOptions<
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
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdScreenedTheatricallyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].screened_theatrically.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdScreenedTheatrically<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3TvSeriesIdScreenedTheatricallyQueryKey>
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
      ...get3TvSeriesIdScreenedTheatricallyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSimilarQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>,
) {
  return ['3', '/3/tv/:series_id/similar', args] as const
}

export function get3TvSeriesIdSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].similar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3TvSeriesIdSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3TvSeriesIdTranslationsQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>,
) {
  return ['3', '/3/tv/:series_id/translations', args] as const
}

export function get3TvSeriesIdTranslationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdTranslationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].translations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdTranslations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdTranslationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdVideosQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>,
) {
  return ['3', '/3/tv/:series_id/videos', args] as const
}

export function get3TvSeriesIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3TvSeriesIdVideosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get3TvSeriesIdWatchProvidersQueryKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>,
) {
  return ['3', '/3/tv/:series_id/watch/providers', args] as const
}

export function get3TvSeriesIdWatchProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdWatchProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].watch.providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdWatchProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdWatchProvidersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPost3TvSeriesIdRating<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost3TvSeriesIdRatingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDelete3TvSeriesIdRating<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete3TvSeriesIdRatingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSeasonSeasonNumberQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number', args] as const
}

export function get3TvSeriesIdSeasonSeasonNumberQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSeasonSeasonNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdSeasonSeasonNumber<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3TvSeriesIdSeasonSeasonNumberQueryKey>
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
      ...get3TvSeriesIdSeasonSeasonNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSeasonSeasonNumberAccountStatesQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['account_states']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/account_states', args] as const
}

export function get3TvSeriesIdSeasonSeasonNumberAccountStatesQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['account_states']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSeasonSeasonNumberAccountStatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].account_states.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdSeasonSeasonNumberAccountStates<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['account_states']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdSeasonSeasonNumberAccountStatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSeasonSeasonNumberAggregateCreditsQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['aggregate_credits']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/aggregate_credits', args] as const
}

export function get3TvSeriesIdSeasonSeasonNumberAggregateCreditsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['aggregate_credits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSeasonSeasonNumberAggregateCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].aggregate_credits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdSeasonSeasonNumberAggregateCredits<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['aggregate_credits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdSeasonSeasonNumberAggregateCreditsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeasonSeasonIdChangesQueryKey(
  args: InferRequestType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>,
) {
  return ['3', '/3/tv/season/:season_id/changes', args] as const
}

export function get3TvSeasonSeasonIdChangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeasonSeasonIdChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv.season[':season_id'].changes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeasonSeasonIdChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['3']['tv']['season'][':season_id']['changes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3TvSeasonSeasonIdChangesQueryKey>
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
      ...get3TvSeasonSeasonIdChangesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSeasonSeasonNumberCreditsQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['credits']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/credits', args] as const
}

export function get3TvSeriesIdSeasonSeasonNumberCreditsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['credits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSeasonSeasonNumberCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].credits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdSeasonSeasonNumberCredits<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['credits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdSeasonSeasonNumberCreditsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSeasonSeasonNumberExternalIdsQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['external_ids']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/external_ids', args] as const
}

export function get3TvSeriesIdSeasonSeasonNumberExternalIdsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['external_ids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSeasonSeasonNumberExternalIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].external_ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdSeasonSeasonNumberExternalIds<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['external_ids']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdSeasonSeasonNumberExternalIdsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSeasonSeasonNumberImagesQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['images']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/images', args] as const
}

export function get3TvSeriesIdSeasonSeasonNumberImagesQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['images']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSeasonSeasonNumberImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdSeasonSeasonNumberImages<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['images']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdSeasonSeasonNumberImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSeasonSeasonNumberTranslationsQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['translations']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/translations', args] as const
}

export function get3TvSeriesIdSeasonSeasonNumberTranslationsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['translations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSeasonSeasonNumberTranslationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].translations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdSeasonSeasonNumberTranslations<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['translations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdSeasonSeasonNumberTranslationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSeasonSeasonNumberVideosQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['videos']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/videos', args] as const
}

export function get3TvSeriesIdSeasonSeasonNumberVideosQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSeasonSeasonNumberVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdSeasonSeasonNumberVideos<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['videos']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdSeasonSeasonNumberVideosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSeasonSeasonNumberWatchProvidersQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['watch']['providers']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/watch/providers', args] as const
}

export function get3TvSeriesIdSeasonSeasonNumberWatchProvidersQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['watch']['providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSeasonSeasonNumberWatchProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].watch.providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvSeriesIdSeasonSeasonNumberWatchProviders<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['watch']['providers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdSeasonSeasonNumberWatchProvidersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/episode/:episode_number', args] as const
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].episode[':episode_number'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function inject3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumber<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['account_states']['$get']
  >,
) {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/account_states',
    args,
  ] as const
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['account_states']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].episode[
          ':episode_number'
        ].account_states.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStates<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['account_states']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvEpisodeEpisodeIdChangesQueryKey(
  args: InferRequestType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>,
) {
  return ['3', '/3/tv/episode/:episode_id/changes', args] as const
}

export function get3TvEpisodeEpisodeIdChangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvEpisodeEpisodeIdChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv.episode[':episode_id'].changes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvEpisodeEpisodeIdChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvEpisodeEpisodeIdChangesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['credits']['$get']
  >,
) {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/credits',
    args,
  ] as const
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['credits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].episode[
          ':episode_number'
        ].credits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCredits<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['credits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['external_ids']['$get']
  >,
) {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/external_ids',
    args,
  ] as const
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['external_ids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].episode[
          ':episode_number'
        ].external_ids.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIds<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['external_ids']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['images']['$get']
  >,
) {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/images',
    args,
  ] as const
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['images']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].episode[
          ':episode_number'
        ].images.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImages<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['images']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['translations']['$get']
  >,
) {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/translations',
    args,
  ] as const
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['translations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].episode[
          ':episode_number'
        ].translations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslations<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['translations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['videos']['$get']
  >,
) {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/videos',
    args,
  ] as const
}

export function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv[':series_id'].season[':season_number'].episode[
          ':episode_number'
        ].videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideos<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['videos']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPost3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRating<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPost3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDelete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRating<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDelete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get3TvEpisodeGroupTvEpisodeGroupIdQueryKey(
  args: InferRequestType<
    (typeof client)['3']['tv']['episode_group'][':tv_episode_group_id']['$get']
  >,
) {
  return ['3', '/3/tv/episode_group/:tv_episode_group_id', args] as const
}

export function get3TvEpisodeGroupTvEpisodeGroupIdQueryOptions<
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
  args: InferRequestType<
    (typeof client)['3']['tv']['episode_group'][':tv_episode_group_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3TvEpisodeGroupTvEpisodeGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].tv.episode_group[':tv_episode_group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3TvEpisodeGroupTvEpisodeGroupId<
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
  args: () => InferRequestType<
    (typeof client)['3']['tv']['episode_group'][':tv_episode_group_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get3TvEpisodeGroupTvEpisodeGroupIdQueryKey>
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
      ...get3TvEpisodeGroupTvEpisodeGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3WatchProvidersRegionsQueryKey(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['regions']['$get']>,
) {
  return ['3', '/3/watch/providers/regions', args] as const
}

export function get3WatchProvidersRegionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['watch']['providers']['regions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3WatchProvidersRegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].watch.providers.regions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3WatchProvidersRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['watch']['providers']['regions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['watch']['providers']['regions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3WatchProvidersRegionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3WatchProvidersMovieQueryKey(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['movie']['$get']>,
) {
  return ['3', '/3/watch/providers/movie', args] as const
}

export function get3WatchProvidersMovieQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['watch']['providers']['movie']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['movie']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3WatchProvidersMovieQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].watch.providers.movie.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3WatchProvidersMovie<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['watch']['providers']['movie']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['watch']['providers']['movie']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...get3WatchProvidersMovieQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get3WatchProvidersTvQueryKey(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['tv']['$get']>,
) {
  return ['3', '/3/watch/providers/tv', args] as const
}

export function get3WatchProvidersTvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['watch']['providers']['tv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['tv']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get3WatchProvidersTvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3'].watch.providers.tv.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject3WatchProvidersTv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['3']['watch']['providers']['tv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3']['watch']['providers']['tv']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get3WatchProvidersTvQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
