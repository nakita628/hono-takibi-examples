import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_3Key() {
  return ['3'] as const
}

export function getGet3AuthenticationKey() {
  return ['3', '/3/authentication'] as const
}

export function useGet3Authentication<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['authentication']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet3AuthenticationKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['authentication']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].authentication.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3Authentication<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['authentication']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet3AuthenticationKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['authentication']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].authentication.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3AccountAccountIdKey(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['$get']>,
) {
  return ['3', '/3/account/:account_id', args] as const
}

export function useGet3AccountAccountId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['$get']>>
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
        ? getGet3AccountAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].account[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3AccountAccountId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['$get']>>
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
        ? getGet3AccountAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].account[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost3AccountAccountIdFavoriteKey() {
  return ['3', '/3/account/:account_id/favorite', 'POST'] as const
}

export function usePost3AccountAccountIdFavorite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['favorite']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost3AccountAccountIdFavoriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['$post']>
        },
      ) => parseResponse(client['3'].account[':account_id'].favorite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost3AccountAccountIdWatchlistKey() {
  return ['3', '/3/account/:account_id/watchlist', 'POST'] as const
}

export function usePost3AccountAccountIdWatchlist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['watchlist']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost3AccountAccountIdWatchlistKey()
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
            (typeof client)['3']['account'][':account_id']['watchlist']['$post']
          >
        },
      ) => parseResponse(client['3'].account[':account_id'].watchlist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet3AccountAccountIdFavoriteMoviesKey(
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['favorite']['movies']['$get']
  >,
) {
  return ['3', '/3/account/:account_id/favorite/movies', args] as const
}

export function useGet3AccountAccountIdFavoriteMovies<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['favorite']['movies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3AccountAccountIdFavoriteMoviesKey(args)
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
                (typeof client)['3']['account'][':account_id']['favorite']['movies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].account[':account_id'].favorite.movies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3AccountAccountIdFavoriteMovies<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['favorite']['movies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3AccountAccountIdFavoriteMoviesKey(args)
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
                (typeof client)['3']['account'][':account_id']['favorite']['movies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].account[':account_id'].favorite.movies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3AccountAccountIdFavoriteTvKey(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']>,
) {
  return ['3', '/3/account/:account_id/favorite/tv', args] as const
}

export function useGet3AccountAccountIdFavoriteTv<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']>
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
        ? getGet3AccountAccountIdFavoriteTvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].account[':account_id'].favorite.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3AccountAccountIdFavoriteTv<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']>
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
        ? getGet3AccountAccountIdFavoriteTvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].account[':account_id'].favorite.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3AccountAccountIdListsKey(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['lists']['$get']>,
) {
  return ['3', '/3/account/:account_id/lists', args] as const
}

export function useGet3AccountAccountIdLists<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['lists']['$get']>>
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
        ? getGet3AccountAccountIdListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].account[':account_id'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3AccountAccountIdLists<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['lists']['$get']>>
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
        ? getGet3AccountAccountIdListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['account'][':account_id']['lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].account[':account_id'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3AccountAccountIdRatedMoviesKey(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['movies']['$get']>,
) {
  return ['3', '/3/account/:account_id/rated/movies', args] as const
}

export function useGet3AccountAccountIdRatedMovies<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['movies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['account'][':account_id']['rated']['movies']['$get']>
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
        ? getGet3AccountAccountIdRatedMoviesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['account'][':account_id']['rated']['movies']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].account[':account_id'].rated.movies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3AccountAccountIdRatedMovies<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['movies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['account'][':account_id']['rated']['movies']['$get']>
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
        ? getGet3AccountAccountIdRatedMoviesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['account'][':account_id']['rated']['movies']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].account[':account_id'].rated.movies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3AccountAccountIdRatedTvKey(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>,
) {
  return ['3', '/3/account/:account_id/rated/tv', args] as const
}

export function useGet3AccountAccountIdRatedTv<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>
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
        ? getGet3AccountAccountIdRatedTvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].account[':account_id'].rated.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3AccountAccountIdRatedTv<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>
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
        ? getGet3AccountAccountIdRatedTvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].account[':account_id'].rated.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3AccountAccountIdRatedTvEpisodesKey(
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['rated']['tv']['episodes']['$get']
  >,
) {
  return ['3', '/3/account/:account_id/rated/tv/episodes', args] as const
}

export function useGet3AccountAccountIdRatedTvEpisodes<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['rated']['tv']['episodes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3AccountAccountIdRatedTvEpisodesKey(args)
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
                (typeof client)['3']['account'][':account_id']['rated']['tv']['episodes']['$get']
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
          client['3'].account[':account_id'].rated.tv.episodes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3AccountAccountIdRatedTvEpisodes<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['rated']['tv']['episodes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3AccountAccountIdRatedTvEpisodesKey(args)
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
                (typeof client)['3']['account'][':account_id']['rated']['tv']['episodes']['$get']
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
          client['3'].account[':account_id'].rated.tv.episodes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3AccountAccountIdWatchlistMoviesKey(
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['watchlist']['movies']['$get']
  >,
) {
  return ['3', '/3/account/:account_id/watchlist/movies', args] as const
}

export function useGet3AccountAccountIdWatchlistMovies<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['watchlist']['movies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3AccountAccountIdWatchlistMoviesKey(args)
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
                (typeof client)['3']['account'][':account_id']['watchlist']['movies']['$get']
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
          client['3'].account[':account_id'].watchlist.movies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3AccountAccountIdWatchlistMovies<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['watchlist']['movies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3AccountAccountIdWatchlistMoviesKey(args)
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
                (typeof client)['3']['account'][':account_id']['watchlist']['movies']['$get']
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
          client['3'].account[':account_id'].watchlist.movies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3AccountAccountIdWatchlistTvKey(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']>,
) {
  return ['3', '/3/account/:account_id/watchlist/tv', args] as const
}

export function useGet3AccountAccountIdWatchlistTv<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']>
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
        ? getGet3AccountAccountIdWatchlistTvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].account[':account_id'].watchlist.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3AccountAccountIdWatchlistTv<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']>
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
        ? getGet3AccountAccountIdWatchlistTvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].account[':account_id'].watchlist.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3AuthenticationGuestSessionNewKey() {
  return ['3', '/3/authentication/guest_session/new'] as const
}

export function useGet3AuthenticationGuestSessionNew<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['3']['authentication']['guest_session']['new']['$get']>
          >
        >
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
        ? getGet3AuthenticationGuestSessionNewKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['authentication']['guest_session']['new']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].authentication.guest_session.new.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3AuthenticationGuestSessionNew<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['3']['authentication']['guest_session']['new']['$get']>
          >
        >
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
        ? getGet3AuthenticationGuestSessionNewKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['authentication']['guest_session']['new']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].authentication.guest_session.new.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3AuthenticationTokenNewKey() {
  return ['3', '/3/authentication/token/new'] as const
}

export function useGet3AuthenticationTokenNew<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['authentication']['token']['new']['$get']>>
        >
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
        ? getGet3AuthenticationTokenNewKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['authentication']['token']['new']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].authentication.token.new.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3AuthenticationTokenNew<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['authentication']['token']['new']['$get']>>
        >
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
        ? getGet3AuthenticationTokenNewKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['authentication']['token']['new']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].authentication.token.new.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost3AuthenticationSessionNewKey() {
  return ['3', '/3/authentication/session/new', 'POST'] as const
}

export function usePost3AuthenticationSessionNew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['authentication']['session']['new']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['3']['authentication']['session']['new']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost3AuthenticationSessionNewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['3']['authentication']['session']['new']['$post']>
        },
      ) => parseResponse(client['3'].authentication.session.new.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost3AuthenticationSessionConvert4Key() {
  return ['3', '/3/authentication/session/convert/4', 'POST'] as const
}

export function usePost3AuthenticationSessionConvert4<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['3']['authentication']['session']['convert']['4']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost3AuthenticationSessionConvert4Key()
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
            (typeof client)['3']['authentication']['session']['convert']['4']['$post']
          >
        },
      ) => parseResponse(client['3'].authentication.session.convert['4'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost3AuthenticationTokenValidateWithLoginKey() {
  return ['3', '/3/authentication/token/validate_with_login', 'POST'] as const
}

export function usePost3AuthenticationTokenValidateWithLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['3']['authentication']['token']['validate_with_login']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost3AuthenticationTokenValidateWithLoginKey()
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
            (typeof client)['3']['authentication']['token']['validate_with_login']['$post']
          >
        },
      ) =>
        parseResponse(
          client['3'].authentication.token.validate_with_login.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete3AuthenticationSessionKey() {
  return ['3', '/3/authentication/session', 'DELETE'] as const
}

export function useDelete3AuthenticationSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['authentication']['session']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['3']['authentication']['session']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete3AuthenticationSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['3']['authentication']['session']['$delete']> },
      ) => parseResponse(client['3'].authentication.session.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet3CertificationMovieListKey() {
  return ['3', '/3/certification/movie/list'] as const
}

export function useGet3CertificationMovieList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['certification']['movie']['list']['$get']>>
        >
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
        ? getGet3CertificationMovieListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['certification']['movie']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].certification.movie.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3CertificationMovieList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['certification']['movie']['list']['$get']>>
        >
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
        ? getGet3CertificationMovieListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['certification']['movie']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].certification.movie.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3CertificationTvListKey() {
  return ['3', '/3/certification/tv/list'] as const
}

export function useGet3CertificationTvList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['certification']['tv']['list']['$get']>>
        >
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
        ? getGet3CertificationTvListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['certification']['tv']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].certification.tv.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3CertificationTvList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['certification']['tv']['list']['$get']>>
        >
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
        ? getGet3CertificationTvListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['certification']['tv']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].certification.tv.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieChangesKey(
  args: InferRequestType<(typeof client)['3']['movie']['changes']['$get']>,
) {
  return ['3', '/3/movie/changes', args] as const
}

export function useGet3MovieChanges<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['changes']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3MovieChangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['changes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie.changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieChanges<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['changes']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3MovieChangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['changes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie.changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3PersonChangesKey(
  args: InferRequestType<(typeof client)['3']['person']['changes']['$get']>,
) {
  return ['3', '/3/person/changes', args] as const
}

export function useGet3PersonChanges<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person']['changes']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3PersonChangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person']['changes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].person.changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3PersonChanges<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person']['changes']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3PersonChangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person']['changes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].person.changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvChangesKey(
  args: InferRequestType<(typeof client)['3']['tv']['changes']['$get']>,
) {
  return ['3', '/3/tv/changes', args] as const
}

export function useGet3TvChanges<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['changes']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet3TvChangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['changes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv.changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvChanges<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['changes']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet3TvChangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['changes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv.changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3CollectionCollectionIdKey(
  args: InferRequestType<(typeof client)['3']['collection'][':collection_id']['$get']>,
) {
  return ['3', '/3/collection/:collection_id', args] as const
}

export function useGet3CollectionCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['collection'][':collection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['collection'][':collection_id']['$get']>>
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
        ? getGet3CollectionCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['collection'][':collection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].collection[':collection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3CollectionCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['collection'][':collection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['collection'][':collection_id']['$get']>>
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
        ? getGet3CollectionCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['collection'][':collection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].collection[':collection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3CollectionCollectionIdImagesKey(
  args: InferRequestType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>,
) {
  return ['3', '/3/collection/:collection_id/images', args] as const
}

export function useGet3CollectionCollectionIdImages<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>
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
        ? getGet3CollectionCollectionIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].collection[':collection_id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3CollectionCollectionIdImages<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>
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
        ? getGet3CollectionCollectionIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].collection[':collection_id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3CollectionCollectionIdTranslationsKey(
  args: InferRequestType<
    (typeof client)['3']['collection'][':collection_id']['translations']['$get']
  >,
) {
  return ['3', '/3/collection/:collection_id/translations', args] as const
}

export function useGet3CollectionCollectionIdTranslations<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['collection'][':collection_id']['translations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3CollectionCollectionIdTranslationsKey(args)
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
                (typeof client)['3']['collection'][':collection_id']['translations']['$get']
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
          client['3'].collection[':collection_id'].translations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3CollectionCollectionIdTranslations<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['collection'][':collection_id']['translations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3CollectionCollectionIdTranslationsKey(args)
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
                (typeof client)['3']['collection'][':collection_id']['translations']['$get']
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
          client['3'].collection[':collection_id'].translations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3CompanyCompanyIdKey(
  args: InferRequestType<(typeof client)['3']['company'][':company_id']['$get']>,
) {
  return ['3', '/3/company/:company_id', args] as const
}

export function useGet3CompanyCompanyId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['company'][':company_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['$get']>>
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
        ? getGet3CompanyCompanyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].company[':company_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3CompanyCompanyId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['company'][':company_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['$get']>>
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
        ? getGet3CompanyCompanyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].company[':company_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3CompanyCompanyIdAlternativeNamesKey(
  args: InferRequestType<
    (typeof client)['3']['company'][':company_id']['alternative_names']['$get']
  >,
) {
  return ['3', '/3/company/:company_id/alternative_names', args] as const
}

export function useGet3CompanyCompanyIdAlternativeNames<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['company'][':company_id']['alternative_names']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3CompanyCompanyIdAlternativeNamesKey(args)
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
                (typeof client)['3']['company'][':company_id']['alternative_names']['$get']
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
          client['3'].company[':company_id'].alternative_names.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3CompanyCompanyIdAlternativeNames<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['company'][':company_id']['alternative_names']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3CompanyCompanyIdAlternativeNamesKey(args)
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
                (typeof client)['3']['company'][':company_id']['alternative_names']['$get']
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
          client['3'].company[':company_id'].alternative_names.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3CompanyCompanyIdImagesKey(
  args: InferRequestType<(typeof client)['3']['company'][':company_id']['images']['$get']>,
) {
  return ['3', '/3/company/:company_id/images', args] as const
}

export function useGet3CompanyCompanyIdImages<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['company'][':company_id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['images']['$get']>>
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
        ? getGet3CompanyCompanyIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].company[':company_id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3CompanyCompanyIdImages<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['company'][':company_id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['images']['$get']>>
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
        ? getGet3CompanyCompanyIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['company'][':company_id']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].company[':company_id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3ConfigurationKey() {
  return ['3', '/3/configuration'] as const
}

export function useGet3Configuration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['configuration']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet3ConfigurationKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['configuration']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].configuration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3Configuration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['configuration']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet3ConfigurationKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['configuration']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].configuration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3ConfigurationCountriesKey(
  args: InferRequestType<(typeof client)['3']['configuration']['countries']['$get']>,
) {
  return ['3', '/3/configuration/countries', args] as const
}

export function useGet3ConfigurationCountries<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['configuration']['countries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['configuration']['countries']['$get']>>
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
        ? getGet3ConfigurationCountriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['configuration']['countries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].configuration.countries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3ConfigurationCountries<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['configuration']['countries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['configuration']['countries']['$get']>>
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
        ? getGet3ConfigurationCountriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['configuration']['countries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].configuration.countries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3ConfigurationJobsKey() {
  return ['3', '/3/configuration/jobs'] as const
}

export function useGet3ConfigurationJobs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['configuration']['jobs']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet3ConfigurationJobsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['configuration']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].configuration.jobs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3ConfigurationJobs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['configuration']['jobs']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet3ConfigurationJobsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['configuration']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].configuration.jobs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3ConfigurationLanguagesKey() {
  return ['3', '/3/configuration/languages'] as const
}

export function useGet3ConfigurationLanguages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['configuration']['languages']['$get']>>
        >
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
        ? getGet3ConfigurationLanguagesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['configuration']['languages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].configuration.languages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3ConfigurationLanguages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['configuration']['languages']['$get']>>
        >
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
        ? getGet3ConfigurationLanguagesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['configuration']['languages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].configuration.languages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3ConfigurationPrimaryTranslationsKey() {
  return ['3', '/3/configuration/primary_translations'] as const
}

export function useGet3ConfigurationPrimaryTranslations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['configuration']['primary_translations']['$get']>>
        >
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
        ? getGet3ConfigurationPrimaryTranslationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['configuration']['primary_translations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['3'].configuration.primary_translations.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3ConfigurationPrimaryTranslations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['configuration']['primary_translations']['$get']>>
        >
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
        ? getGet3ConfigurationPrimaryTranslationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['configuration']['primary_translations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['3'].configuration.primary_translations.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3ConfigurationTimezonesKey() {
  return ['3', '/3/configuration/timezones'] as const
}

export function useGet3ConfigurationTimezones<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['configuration']['timezones']['$get']>>
        >
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
        ? getGet3ConfigurationTimezonesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['configuration']['timezones']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].configuration.timezones.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3ConfigurationTimezones<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['configuration']['timezones']['$get']>>
        >
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
        ? getGet3ConfigurationTimezonesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['configuration']['timezones']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].configuration.timezones.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3CreditCreditIdKey(
  args: InferRequestType<(typeof client)['3']['credit'][':credit_id']['$get']>,
) {
  return ['3', '/3/credit/:credit_id', args] as const
}

export function useGet3CreditCreditId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['credit'][':credit_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['credit'][':credit_id']['$get']>>
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
        ? getGet3CreditCreditIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['credit'][':credit_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].credit[':credit_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3CreditCreditId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['credit'][':credit_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['credit'][':credit_id']['$get']>>
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
        ? getGet3CreditCreditIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['credit'][':credit_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].credit[':credit_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3DiscoverMovieKey(
  args: InferRequestType<(typeof client)['3']['discover']['movie']['$get']>,
) {
  return ['3', '/3/discover/movie', args] as const
}

export function useGet3DiscoverMovie<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['discover']['movie']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['discover']['movie']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3DiscoverMovieKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['discover']['movie']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].discover.movie.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3DiscoverMovie<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['discover']['movie']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['discover']['movie']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3DiscoverMovieKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['discover']['movie']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].discover.movie.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3DiscoverTvKey(
  args: InferRequestType<(typeof client)['3']['discover']['tv']['$get']>,
) {
  return ['3', '/3/discover/tv', args] as const
}

export function useGet3DiscoverTv<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['discover']['tv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['discover']['tv']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet3DiscoverTvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['discover']['tv']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].discover.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3DiscoverTv<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['discover']['tv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['discover']['tv']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet3DiscoverTvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['discover']['tv']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].discover.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3FindExternalIdKey(
  args: InferRequestType<(typeof client)['3']['find'][':external_id']['$get']>,
) {
  return ['3', '/3/find/:external_id', args] as const
}

export function useGet3FindExternalId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['find'][':external_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['find'][':external_id']['$get']>>
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
        ? getGet3FindExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['find'][':external_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].find[':external_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3FindExternalId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['find'][':external_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['find'][':external_id']['$get']>>
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
        ? getGet3FindExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['find'][':external_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].find[':external_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3GenreMovieListKey(
  args: InferRequestType<(typeof client)['3']['genre']['movie']['list']['$get']>,
) {
  return ['3', '/3/genre/movie/list', args] as const
}

export function useGet3GenreMovieList<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['genre']['movie']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['genre']['movie']['list']['$get']>>
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
        ? getGet3GenreMovieListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['genre']['movie']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].genre.movie.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3GenreMovieList<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['genre']['movie']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['genre']['movie']['list']['$get']>>
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
        ? getGet3GenreMovieListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['genre']['movie']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].genre.movie.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3GenreTvListKey(
  args: InferRequestType<(typeof client)['3']['genre']['tv']['list']['$get']>,
) {
  return ['3', '/3/genre/tv/list', args] as const
}

export function useGet3GenreTvList<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['genre']['tv']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['genre']['tv']['list']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3GenreTvListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['genre']['tv']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].genre.tv.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3GenreTvList<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['genre']['tv']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['genre']['tv']['list']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3GenreTvListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['genre']['tv']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].genre.tv.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3GuestSessionGuestSessionIdRatedMoviesKey(
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['movies']['$get']
  >,
) {
  return ['3', '/3/guest_session/:guest_session_id/rated/movies', args] as const
}

export function useGet3GuestSessionGuestSessionIdRatedMovies<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['movies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3GuestSessionGuestSessionIdRatedMoviesKey(args)
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
                (typeof client)['3']['guest_session'][':guest_session_id']['rated']['movies']['$get']
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
          client['3'].guest_session[':guest_session_id'].rated.movies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3GuestSessionGuestSessionIdRatedMovies<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['movies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3GuestSessionGuestSessionIdRatedMoviesKey(args)
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
                (typeof client)['3']['guest_session'][':guest_session_id']['rated']['movies']['$get']
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
          client['3'].guest_session[':guest_session_id'].rated.movies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3GuestSessionGuestSessionIdRatedTvKey(
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['$get']
  >,
) {
  return ['3', '/3/guest_session/:guest_session_id/rated/tv', args] as const
}

export function useGet3GuestSessionGuestSessionIdRatedTv<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3GuestSessionGuestSessionIdRatedTvKey(args)
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
                (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['$get']
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
          client['3'].guest_session[':guest_session_id'].rated.tv.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3GuestSessionGuestSessionIdRatedTv<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3GuestSessionGuestSessionIdRatedTvKey(args)
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
                (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['$get']
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
          client['3'].guest_session[':guest_session_id'].rated.tv.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3GuestSessionGuestSessionIdRatedTvEpisodesKey(
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['episodes']['$get']
  >,
) {
  return ['3', '/3/guest_session/:guest_session_id/rated/tv/episodes', args] as const
}

export function useGet3GuestSessionGuestSessionIdRatedTvEpisodes<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['episodes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3GuestSessionGuestSessionIdRatedTvEpisodesKey(args)
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
                (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['episodes']['$get']
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
          client['3'].guest_session[':guest_session_id'].rated.tv.episodes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3GuestSessionGuestSessionIdRatedTvEpisodes<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['episodes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3GuestSessionGuestSessionIdRatedTvEpisodesKey(args)
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
                (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['episodes']['$get']
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
          client['3'].guest_session[':guest_session_id'].rated.tv.episodes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3KeywordKeywordIdKey(
  args: InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['$get']>,
) {
  return ['3', '/3/keyword/:keyword_id', args] as const
}

export function useGet3KeywordKeywordId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['$get']>>
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
        ? getGet3KeywordKeywordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].keyword[':keyword_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3KeywordKeywordId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['$get']>>
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
        ? getGet3KeywordKeywordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].keyword[':keyword_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3KeywordKeywordIdMoviesKey(
  args: InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>,
) {
  return ['3', '/3/keyword/:keyword_id/movies', args] as const
}

export function useGet3KeywordKeywordIdMovies<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>>
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
        ? getGet3KeywordKeywordIdMoviesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].keyword[':keyword_id'].movies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3KeywordKeywordIdMovies<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>>
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
        ? getGet3KeywordKeywordIdMoviesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].keyword[':keyword_id'].movies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost3ListListIdAddItemKey() {
  return ['3', '/3/list/:list_id/add_item', 'POST'] as const
}

export function usePost3ListListIdAddItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['add_item']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['3']['list'][':list_id']['add_item']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost3ListListIdAddItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['3']['list'][':list_id']['add_item']['$post']> },
      ) => parseResponse(client['3'].list[':list_id'].add_item.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet3ListListIdItemStatusKey(
  args: InferRequestType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>,
) {
  return ['3', '/3/list/:list_id/item_status', args] as const
}

export function useGet3ListListIdItemStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>>
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
        ? getGet3ListListIdItemStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].list[':list_id'].item_status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3ListListIdItemStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>>
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
        ? getGet3ListListIdItemStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].list[':list_id'].item_status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost3ListListIdClearKey() {
  return ['3', '/3/list/:list_id/clear', 'POST'] as const
}

export function usePost3ListListIdClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['clear']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['3']['list'][':list_id']['clear']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost3ListListIdClearKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['3']['list'][':list_id']['clear']['$post']> },
      ) => parseResponse(client['3'].list[':list_id'].clear.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost3ListKey() {
  return ['3', '/3/list', 'POST'] as const
}

export function usePost3List<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['list']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['3']['list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost3ListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['3']['list']['$post']> }) =>
        parseResponse(client['3'].list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet3ListListIdKey(
  args: InferRequestType<(typeof client)['3']['list'][':list_id']['$get']>,
) {
  return ['3', '/3/list/:list_id', args] as const
}

export function useGet3ListListId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['list'][':list_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3ListListIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].list[':list_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3ListListId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['list'][':list_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3ListListIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].list[':list_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete3ListListIdKey() {
  return ['3', '/3/list/:list_id', 'DELETE'] as const
}

export function useDelete3ListListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['3']['list'][':list_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete3ListListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['3']['list'][':list_id']['$delete']> },
      ) => parseResponse(client['3'].list[':list_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost3ListListIdRemoveItemKey() {
  return ['3', '/3/list/:list_id/remove_item', 'POST'] as const
}

export function usePost3ListListIdRemoveItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['list'][':list_id']['remove_item']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['3']['list'][':list_id']['remove_item']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost3ListListIdRemoveItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['3']['list'][':list_id']['remove_item']['$post']>
        },
      ) => parseResponse(client['3'].list[':list_id'].remove_item.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet3MovieNowPlayingKey(
  args: InferRequestType<(typeof client)['3']['movie']['now_playing']['$get']>,
) {
  return ['3', '/3/movie/now_playing', args] as const
}

export function useGet3MovieNowPlaying<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie']['now_playing']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['now_playing']['$get']>>
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
        ? getGet3MovieNowPlayingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['now_playing']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie.now_playing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieNowPlaying<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie']['now_playing']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['now_playing']['$get']>>
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
        ? getGet3MovieNowPlayingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['now_playing']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie.now_playing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MoviePopularKey(
  args: InferRequestType<(typeof client)['3']['movie']['popular']['$get']>,
) {
  return ['3', '/3/movie/popular', args] as const
}

export function useGet3MoviePopular<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie']['popular']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['popular']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3MoviePopularKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['popular']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie.popular.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MoviePopular<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie']['popular']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['popular']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3MoviePopularKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['popular']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie.popular.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieTopRatedKey(
  args: InferRequestType<(typeof client)['3']['movie']['top_rated']['$get']>,
) {
  return ['3', '/3/movie/top_rated', args] as const
}

export function useGet3MovieTopRated<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie']['top_rated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['top_rated']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3MovieTopRatedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['top_rated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie.top_rated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieTopRated<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie']['top_rated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['top_rated']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3MovieTopRatedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['top_rated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie.top_rated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieUpcomingKey(
  args: InferRequestType<(typeof client)['3']['movie']['upcoming']['$get']>,
) {
  return ['3', '/3/movie/upcoming', args] as const
}

export function useGet3MovieUpcoming<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie']['upcoming']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['upcoming']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3MovieUpcomingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['upcoming']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie.upcoming.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieUpcoming<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie']['upcoming']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['upcoming']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3MovieUpcomingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie']['upcoming']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie.upcoming.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieMovieIdKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['$get']>,
) {
  return ['3', '/3/movie/:movie_id', args] as const
}

export function useGet3MovieMovieId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3MovieMovieIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieMovieId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3MovieMovieIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieMovieIdAccountStatesKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/account_states', args] as const
}

export function useGet3MovieMovieIdAccountStates<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>
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
        ? getGet3MovieMovieIdAccountStatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].movie[':movie_id'].account_states.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieMovieIdAccountStates<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>
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
        ? getGet3MovieMovieIdAccountStatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].movie[':movie_id'].account_states.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieMovieIdAlternativeTitlesKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/alternative_titles', args] as const
}

export function useGet3MovieMovieIdAlternativeTitles<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']>
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
        ? getGet3MovieMovieIdAlternativeTitlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].movie[':movie_id'].alternative_titles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieMovieIdAlternativeTitles<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']>
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
        ? getGet3MovieMovieIdAlternativeTitlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].movie[':movie_id'].alternative_titles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieMovieIdChangesKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/changes', args] as const
}

export function useGet3MovieMovieIdChanges<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>>
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
        ? getGet3MovieMovieIdChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieMovieIdChanges<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>>
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
        ? getGet3MovieMovieIdChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieMovieIdCreditsKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/credits', args] as const
}

export function useGet3MovieMovieIdCredits<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>>
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
        ? getGet3MovieMovieIdCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieMovieIdCredits<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>>
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
        ? getGet3MovieMovieIdCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieMovieIdExternalIdsKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/external_ids', args] as const
}

export function useGet3MovieMovieIdExternalIds<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>>
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
        ? getGet3MovieMovieIdExternalIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].movie[':movie_id'].external_ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieMovieIdExternalIds<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>>
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
        ? getGet3MovieMovieIdExternalIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].movie[':movie_id'].external_ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieMovieIdImagesKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/images', args] as const
}

export function useGet3MovieMovieIdImages<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>>
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
        ? getGet3MovieMovieIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieMovieIdImages<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>>
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
        ? getGet3MovieMovieIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieMovieIdKeywordsKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/keywords', args] as const
}

export function useGet3MovieMovieIdKeywords<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>>
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
        ? getGet3MovieMovieIdKeywordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].keywords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieMovieIdKeywords<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>>
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
        ? getGet3MovieMovieIdKeywordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].keywords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieLatestKey() {
  return ['3', '/3/movie/latest'] as const
}

export function useGet3MovieLatest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['latest']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet3MovieLatestKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['latest']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie.latest.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieLatest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['latest']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet3MovieLatestKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['movie']['latest']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie.latest.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieMovieIdListsKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/lists', args] as const
}

export function useGet3MovieMovieIdLists<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>>
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
        ? getGet3MovieMovieIdListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieMovieIdLists<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>>
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
        ? getGet3MovieMovieIdListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieMovieIdRecommendationsKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/recommendations', args] as const
}

export function useGet3MovieMovieIdRecommendations<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>
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
        ? getGet3MovieMovieIdRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].movie[':movie_id'].recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieMovieIdRecommendations<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>
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
        ? getGet3MovieMovieIdRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].movie[':movie_id'].recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieMovieIdReleaseDatesKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/release_dates', args] as const
}

export function useGet3MovieMovieIdReleaseDates<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>>
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
        ? getGet3MovieMovieIdReleaseDatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].movie[':movie_id'].release_dates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieMovieIdReleaseDates<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>>
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
        ? getGet3MovieMovieIdReleaseDatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].movie[':movie_id'].release_dates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieMovieIdReviewsKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/reviews', args] as const
}

export function useGet3MovieMovieIdReviews<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>>
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
        ? getGet3MovieMovieIdReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieMovieIdReviews<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>>
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
        ? getGet3MovieMovieIdReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieMovieIdSimilarKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/similar', args] as const
}

export function useGet3MovieMovieIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>>
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
        ? getGet3MovieMovieIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieMovieIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>>
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
        ? getGet3MovieMovieIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieMovieIdTranslationsKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/translations', args] as const
}

export function useGet3MovieMovieIdTranslations<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>>
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
        ? getGet3MovieMovieIdTranslationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].movie[':movie_id'].translations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieMovieIdTranslations<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>>
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
        ? getGet3MovieMovieIdTranslationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].movie[':movie_id'].translations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieMovieIdVideosKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/videos', args] as const
}

export function useGet3MovieMovieIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>>
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
        ? getGet3MovieMovieIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieMovieIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>>
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
        ? getGet3MovieMovieIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].movie[':movie_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3MovieMovieIdWatchProvidersKey(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']>,
) {
  return ['3', '/3/movie/:movie_id/watch/providers', args] as const
}

export function useGet3MovieMovieIdWatchProviders<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']>
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
        ? getGet3MovieMovieIdWatchProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].movie[':movie_id'].watch.providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3MovieMovieIdWatchProviders<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']>
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
        ? getGet3MovieMovieIdWatchProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].movie[':movie_id'].watch.providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost3MovieMovieIdRatingKey() {
  return ['3', '/3/movie/:movie_id/rating', 'POST'] as const
}

export function usePost3MovieMovieIdRating<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['rating']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['rating']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost3MovieMovieIdRatingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['3']['movie'][':movie_id']['rating']['$post']> },
      ) => parseResponse(client['3'].movie[':movie_id'].rating.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete3MovieMovieIdRatingKey() {
  return ['3', '/3/movie/:movie_id/rating', 'DELETE'] as const
}

export function useDelete3MovieMovieIdRating<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['movie'][':movie_id']['rating']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['3']['movie'][':movie_id']['rating']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete3MovieMovieIdRatingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['3']['movie'][':movie_id']['rating']['$delete']>
        },
      ) => parseResponse(client['3'].movie[':movie_id'].rating.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet3NetworkNetworkIdKey(
  args: InferRequestType<(typeof client)['3']['network'][':network_id']['$get']>,
) {
  return ['3', '/3/network/:network_id', args] as const
}

export function useGet3NetworkNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['network'][':network_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['$get']>>
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
        ? getGet3NetworkNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].network[':network_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3NetworkNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['network'][':network_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['$get']>>
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
        ? getGet3NetworkNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].network[':network_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3NetworkNetworkIdAlternativeNamesKey(
  args: InferRequestType<
    (typeof client)['3']['network'][':network_id']['alternative_names']['$get']
  >,
) {
  return ['3', '/3/network/:network_id/alternative_names', args] as const
}

export function useGet3NetworkNetworkIdAlternativeNames<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['network'][':network_id']['alternative_names']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3NetworkNetworkIdAlternativeNamesKey(args)
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
                (typeof client)['3']['network'][':network_id']['alternative_names']['$get']
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
          client['3'].network[':network_id'].alternative_names.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3NetworkNetworkIdAlternativeNames<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['network'][':network_id']['alternative_names']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3NetworkNetworkIdAlternativeNamesKey(args)
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
                (typeof client)['3']['network'][':network_id']['alternative_names']['$get']
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
          client['3'].network[':network_id'].alternative_names.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3NetworkNetworkIdImagesKey(
  args: InferRequestType<(typeof client)['3']['network'][':network_id']['images']['$get']>,
) {
  return ['3', '/3/network/:network_id/images', args] as const
}

export function useGet3NetworkNetworkIdImages<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['network'][':network_id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['images']['$get']>>
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
        ? getGet3NetworkNetworkIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].network[':network_id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3NetworkNetworkIdImages<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['network'][':network_id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['images']['$get']>>
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
        ? getGet3NetworkNetworkIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['network'][':network_id']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].network[':network_id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3PersonPopularKey(
  args: InferRequestType<(typeof client)['3']['person']['popular']['$get']>,
) {
  return ['3', '/3/person/popular', args] as const
}

export function useGet3PersonPopular<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person']['popular']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person']['popular']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3PersonPopularKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person']['popular']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].person.popular.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3PersonPopular<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person']['popular']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person']['popular']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3PersonPopularKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person']['popular']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].person.popular.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3PersonPersonIdKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['$get']>,
) {
  return ['3', '/3/person/:person_id', args] as const
}

export function useGet3PersonPersonId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['$get']>>
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
        ? getGet3PersonPersonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].person[':person_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3PersonPersonId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['$get']>>
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
        ? getGet3PersonPersonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].person[':person_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3PersonPersonIdChangesKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['changes']['$get']>,
) {
  return ['3', '/3/person/:person_id/changes', args] as const
}

export function useGet3PersonPersonIdChanges<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['changes']['$get']>>
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
        ? getGet3PersonPersonIdChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['changes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].person[':person_id'].changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3PersonPersonIdChanges<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['changes']['$get']>>
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
        ? getGet3PersonPersonIdChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['changes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].person[':person_id'].changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3PersonPersonIdCombinedCreditsKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['combined_credits']['$get']>,
) {
  return ['3', '/3/person/:person_id/combined_credits', args] as const
}

export function useGet3PersonPersonIdCombinedCredits<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['combined_credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['combined_credits']['$get']>
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
        ? getGet3PersonPersonIdCombinedCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['combined_credits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].person[':person_id'].combined_credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3PersonPersonIdCombinedCredits<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['combined_credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['combined_credits']['$get']>
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
        ? getGet3PersonPersonIdCombinedCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['combined_credits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].person[':person_id'].combined_credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3PersonPersonIdExternalIdsKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>,
) {
  return ['3', '/3/person/:person_id/external_ids', args] as const
}

export function useGet3PersonPersonIdExternalIds<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>
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
        ? getGet3PersonPersonIdExternalIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].person[':person_id'].external_ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3PersonPersonIdExternalIds<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>
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
        ? getGet3PersonPersonIdExternalIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].person[':person_id'].external_ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3PersonPersonIdImagesKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['images']['$get']>,
) {
  return ['3', '/3/person/:person_id/images', args] as const
}

export function useGet3PersonPersonIdImages<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['images']['$get']>>
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
        ? getGet3PersonPersonIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].person[':person_id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3PersonPersonIdImages<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['images']['$get']>>
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
        ? getGet3PersonPersonIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].person[':person_id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3PersonLatestKey() {
  return ['3', '/3/person/latest'] as const
}

export function useGet3PersonLatest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['latest']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet3PersonLatestKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].person.latest.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3PersonLatest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['person']['latest']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet3PersonLatestKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].person.latest.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3PersonPersonIdMovieCreditsKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>,
) {
  return ['3', '/3/person/:person_id/movie_credits', args] as const
}

export function useGet3PersonPersonIdMovieCredits<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>
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
        ? getGet3PersonPersonIdMovieCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].person[':person_id'].movie_credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3PersonPersonIdMovieCredits<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>
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
        ? getGet3PersonPersonIdMovieCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].person[':person_id'].movie_credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3PersonPersonIdTvCreditsKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>,
) {
  return ['3', '/3/person/:person_id/tv_credits', args] as const
}

export function useGet3PersonPersonIdTvCredits<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>>
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
        ? getGet3PersonPersonIdTvCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].person[':person_id'].tv_credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3PersonPersonIdTvCredits<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>>
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
        ? getGet3PersonPersonIdTvCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].person[':person_id'].tv_credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3PersonPersonIdTaggedImagesKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>,
) {
  return ['3', '/3/person/:person_id/tagged_images', args] as const
}

export function useGet3PersonPersonIdTaggedImages<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>
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
        ? getGet3PersonPersonIdTaggedImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].person[':person_id'].tagged_images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3PersonPersonIdTaggedImages<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>
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
        ? getGet3PersonPersonIdTaggedImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].person[':person_id'].tagged_images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3PersonPersonIdTranslationsKey(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['translations']['$get']>,
) {
  return ['3', '/3/person/:person_id/translations', args] as const
}

export function useGet3PersonPersonIdTranslations<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['translations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['translations']['$get']>
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
        ? getGet3PersonPersonIdTranslationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['translations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].person[':person_id'].translations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3PersonPersonIdTranslations<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['translations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['translations']['$get']>
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
        ? getGet3PersonPersonIdTranslationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['person'][':person_id']['translations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].person[':person_id'].translations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3ReviewReviewIdKey(
  args: InferRequestType<(typeof client)['3']['review'][':review_id']['$get']>,
) {
  return ['3', '/3/review/:review_id', args] as const
}

export function useGet3ReviewReviewId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['review'][':review_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['review'][':review_id']['$get']>>
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
        ? getGet3ReviewReviewIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['review'][':review_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].review[':review_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3ReviewReviewId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['review'][':review_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['review'][':review_id']['$get']>>
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
        ? getGet3ReviewReviewIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['review'][':review_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].review[':review_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3SearchCollectionKey(
  args: InferRequestType<(typeof client)['3']['search']['collection']['$get']>,
) {
  return ['3', '/3/search/collection', args] as const
}

export function useGet3SearchCollection<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['search']['collection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['search']['collection']['$get']>>
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
        ? getGet3SearchCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['search']['collection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].search.collection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3SearchCollection<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['search']['collection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['search']['collection']['$get']>>
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
        ? getGet3SearchCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['search']['collection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].search.collection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3SearchCompanyKey(
  args: InferRequestType<(typeof client)['3']['search']['company']['$get']>,
) {
  return ['3', '/3/search/company', args] as const
}

export function useGet3SearchCompany<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['search']['company']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['search']['company']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3SearchCompanyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['search']['company']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].search.company.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3SearchCompany<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['search']['company']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['search']['company']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3SearchCompanyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['search']['company']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].search.company.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3SearchKeywordKey(
  args: InferRequestType<(typeof client)['3']['search']['keyword']['$get']>,
) {
  return ['3', '/3/search/keyword', args] as const
}

export function useGet3SearchKeyword<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['search']['keyword']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['search']['keyword']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3SearchKeywordKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['search']['keyword']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].search.keyword.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3SearchKeyword<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['search']['keyword']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['search']['keyword']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3SearchKeywordKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['search']['keyword']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].search.keyword.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3SearchMovieKey(
  args: InferRequestType<(typeof client)['3']['search']['movie']['$get']>,
) {
  return ['3', '/3/search/movie', args] as const
}

export function useGet3SearchMovie<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['search']['movie']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['movie']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet3SearchMovieKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['movie']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].search.movie.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3SearchMovie<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['search']['movie']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['movie']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet3SearchMovieKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['movie']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].search.movie.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3SearchMultiKey(
  args: InferRequestType<(typeof client)['3']['search']['multi']['$get']>,
) {
  return ['3', '/3/search/multi', args] as const
}

export function useGet3SearchMulti<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['search']['multi']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['multi']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet3SearchMultiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['multi']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].search.multi.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3SearchMulti<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['search']['multi']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['multi']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet3SearchMultiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['multi']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].search.multi.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3SearchPersonKey(
  args: InferRequestType<(typeof client)['3']['search']['person']['$get']>,
) {
  return ['3', '/3/search/person', args] as const
}

export function useGet3SearchPerson<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['search']['person']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['search']['person']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3SearchPersonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['search']['person']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].search.person.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3SearchPerson<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['search']['person']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['search']['person']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3SearchPersonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['search']['person']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].search.person.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3SearchTvKey(
  args: InferRequestType<(typeof client)['3']['search']['tv']['$get']>,
) {
  return ['3', '/3/search/tv', args] as const
}

export function useGet3SearchTv<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['search']['tv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['tv']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet3SearchTvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['tv']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].search.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3SearchTv<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['search']['tv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['tv']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet3SearchTvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['search']['tv']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].search.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TrendingAllTimeWindowKey(
  args: InferRequestType<(typeof client)['3']['trending']['all'][':time_window']['$get']>,
) {
  return ['3', '/3/trending/all/:time_window', args] as const
}

export function useGet3TrendingAllTimeWindow<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['trending']['all'][':time_window']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['trending']['all'][':time_window']['$get']>>
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
        ? getGet3TrendingAllTimeWindowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['trending']['all'][':time_window']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].trending.all[':time_window'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TrendingAllTimeWindow<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['trending']['all'][':time_window']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['trending']['all'][':time_window']['$get']>>
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
        ? getGet3TrendingAllTimeWindowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['trending']['all'][':time_window']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].trending.all[':time_window'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TrendingMovieTimeWindowKey(
  args: InferRequestType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>,
) {
  return ['3', '/3/trending/movie/:time_window', args] as const
}

export function useGet3TrendingMovieTimeWindow<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>>
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
        ? getGet3TrendingMovieTimeWindowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].trending.movie[':time_window'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TrendingMovieTimeWindow<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>>
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
        ? getGet3TrendingMovieTimeWindowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].trending.movie[':time_window'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TrendingPersonTimeWindowKey(
  args: InferRequestType<(typeof client)['3']['trending']['person'][':time_window']['$get']>,
) {
  return ['3', '/3/trending/person/:time_window', args] as const
}

export function useGet3TrendingPersonTimeWindow<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['trending']['person'][':time_window']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['trending']['person'][':time_window']['$get']>>
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
        ? getGet3TrendingPersonTimeWindowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['trending']['person'][':time_window']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].trending.person[':time_window'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TrendingPersonTimeWindow<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['trending']['person'][':time_window']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['trending']['person'][':time_window']['$get']>>
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
        ? getGet3TrendingPersonTimeWindowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['trending']['person'][':time_window']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].trending.person[':time_window'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TrendingTvTimeWindowKey(
  args: InferRequestType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>,
) {
  return ['3', '/3/trending/tv/:time_window', args] as const
}

export function useGet3TrendingTvTimeWindow<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>>
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
        ? getGet3TrendingTvTimeWindowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].trending.tv[':time_window'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TrendingTvTimeWindow<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>>
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
        ? getGet3TrendingTvTimeWindowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].trending.tv[':time_window'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvAiringTodayKey(
  args: InferRequestType<(typeof client)['3']['tv']['airing_today']['$get']>,
) {
  return ['3', '/3/tv/airing_today', args] as const
}

export function useGet3TvAiringToday<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv']['airing_today']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv']['airing_today']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3TvAiringTodayKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv']['airing_today']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv.airing_today.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvAiringToday<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv']['airing_today']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv']['airing_today']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3TvAiringTodayKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv']['airing_today']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv.airing_today.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvOnTheAirKey(
  args: InferRequestType<(typeof client)['3']['tv']['on_the_air']['$get']>,
) {
  return ['3', '/3/tv/on_the_air', args] as const
}

export function useGet3TvOnTheAir<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv']['on_the_air']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv']['on_the_air']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3TvOnTheAirKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv']['on_the_air']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv.on_the_air.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvOnTheAir<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv']['on_the_air']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv']['on_the_air']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3TvOnTheAirKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv']['on_the_air']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv.on_the_air.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvPopularKey(
  args: InferRequestType<(typeof client)['3']['tv']['popular']['$get']>,
) {
  return ['3', '/3/tv/popular', args] as const
}

export function useGet3TvPopular<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv']['popular']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['popular']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet3TvPopularKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['popular']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv.popular.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvPopular<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv']['popular']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['popular']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet3TvPopularKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['popular']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv.popular.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvTopRatedKey(
  args: InferRequestType<(typeof client)['3']['tv']['top_rated']['$get']>,
) {
  return ['3', '/3/tv/top_rated', args] as const
}

export function useGet3TvTopRated<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv']['top_rated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['top_rated']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet3TvTopRatedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['top_rated']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv.top_rated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvTopRated<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv']['top_rated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['top_rated']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet3TvTopRatedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['top_rated']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv.top_rated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['$get']>,
) {
  return ['3', '/3/tv/:series_id', args] as const
}

export function useGet3TvSeriesId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3TvSeriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesId<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet3TvSeriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdAccountStatesKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>,
) {
  return ['3', '/3/tv/:series_id/account_states', args] as const
}

export function useGet3TvSeriesIdAccountStates<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>>
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
        ? getGet3TvSeriesIdAccountStatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].account_states.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdAccountStates<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>>
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
        ? getGet3TvSeriesIdAccountStatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].account_states.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdAggregateCreditsKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>,
) {
  return ['3', '/3/tv/:series_id/aggregate_credits', args] as const
}

export function useGet3TvSeriesIdAggregateCredits<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>
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
        ? getGet3TvSeriesIdAggregateCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].aggregate_credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdAggregateCredits<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>
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
        ? getGet3TvSeriesIdAggregateCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].aggregate_credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdAlternativeTitlesKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>,
) {
  return ['3', '/3/tv/:series_id/alternative_titles', args] as const
}

export function useGet3TvSeriesIdAlternativeTitles<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>
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
        ? getGet3TvSeriesIdAlternativeTitlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].alternative_titles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdAlternativeTitles<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>
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
        ? getGet3TvSeriesIdAlternativeTitlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].alternative_titles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdChangesKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>,
) {
  return ['3', '/3/tv/:series_id/changes', args] as const
}

export function useGet3TvSeriesIdChanges<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>>
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
        ? getGet3TvSeriesIdChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdChanges<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>>
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
        ? getGet3TvSeriesIdChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdContentRatingsKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>,
) {
  return ['3', '/3/tv/:series_id/content_ratings', args] as const
}

export function useGet3TvSeriesIdContentRatings<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>>
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
        ? getGet3TvSeriesIdContentRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].content_ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdContentRatings<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>>
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
        ? getGet3TvSeriesIdContentRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].content_ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdCreditsKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>,
) {
  return ['3', '/3/tv/:series_id/credits', args] as const
}

export function useGet3TvSeriesIdCredits<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>>
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
        ? getGet3TvSeriesIdCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdCredits<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>>
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
        ? getGet3TvSeriesIdCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdEpisodeGroupsKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>,
) {
  return ['3', '/3/tv/:series_id/episode_groups', args] as const
}

export function useGet3TvSeriesIdEpisodeGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>>
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
        ? getGet3TvSeriesIdEpisodeGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].episode_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdEpisodeGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>>
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
        ? getGet3TvSeriesIdEpisodeGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].episode_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdExternalIdsKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>,
) {
  return ['3', '/3/tv/:series_id/external_ids', args] as const
}

export function useGet3TvSeriesIdExternalIds<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>>
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
        ? getGet3TvSeriesIdExternalIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].external_ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdExternalIds<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>>
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
        ? getGet3TvSeriesIdExternalIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].external_ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdImagesKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['images']['$get']>,
) {
  return ['3', '/3/tv/:series_id/images', args] as const
}

export function useGet3TvSeriesIdImages<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['images']['$get']>>
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
        ? getGet3TvSeriesIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdImages<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['images']['$get']>>
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
        ? getGet3TvSeriesIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdKeywordsKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>,
) {
  return ['3', '/3/tv/:series_id/keywords', args] as const
}

export function useGet3TvSeriesIdKeywords<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>>
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
        ? getGet3TvSeriesIdKeywordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].keywords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdKeywords<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>>
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
        ? getGet3TvSeriesIdKeywordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].keywords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvLatestKey() {
  return ['3', '/3/tv/latest'] as const
}

export function useGet3TvLatest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['latest']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet3TvLatestKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['latest']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv.latest.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvLatest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['latest']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet3TvLatestKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3']['tv']['latest']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv.latest.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdListsKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>,
) {
  return ['3', '/3/tv/:series_id/lists', args] as const
}

export function useGet3TvSeriesIdLists<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>>
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
        ? getGet3TvSeriesIdListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdLists<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>>
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
        ? getGet3TvSeriesIdListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdRecommendationsKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>,
) {
  return ['3', '/3/tv/:series_id/recommendations', args] as const
}

export function useGet3TvSeriesIdRecommendations<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>>
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
        ? getGet3TvSeriesIdRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdRecommendations<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>>
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
        ? getGet3TvSeriesIdRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdReviewsKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>,
) {
  return ['3', '/3/tv/:series_id/reviews', args] as const
}

export function useGet3TvSeriesIdReviews<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>>
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
        ? getGet3TvSeriesIdReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdReviews<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>>
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
        ? getGet3TvSeriesIdReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdScreenedTheatricallyKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']>,
) {
  return ['3', '/3/tv/:series_id/screened_theatrically', args] as const
}

export function useGet3TvSeriesIdScreenedTheatrically<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']>
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
        ? getGet3TvSeriesIdScreenedTheatricallyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].screened_theatrically.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdScreenedTheatrically<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']>
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
        ? getGet3TvSeriesIdScreenedTheatricallyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].screened_theatrically.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdSimilarKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>,
) {
  return ['3', '/3/tv/:series_id/similar', args] as const
}

export function useGet3TvSeriesIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>>
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
        ? getGet3TvSeriesIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>>
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
        ? getGet3TvSeriesIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdTranslationsKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>,
) {
  return ['3', '/3/tv/:series_id/translations', args] as const
}

export function useGet3TvSeriesIdTranslations<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>>
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
        ? getGet3TvSeriesIdTranslationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].translations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdTranslations<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>>
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
        ? getGet3TvSeriesIdTranslationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].translations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdVideosKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>,
) {
  return ['3', '/3/tv/:series_id/videos', args] as const
}

export function useGet3TvSeriesIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>>
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
        ? getGet3TvSeriesIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>>
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
        ? getGet3TvSeriesIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].tv[':series_id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdWatchProvidersKey(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>,
) {
  return ['3', '/3/tv/:series_id/watch/providers', args] as const
}

export function useGet3TvSeriesIdWatchProviders<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>
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
        ? getGet3TvSeriesIdWatchProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].watch.providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdWatchProviders<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>
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
        ? getGet3TvSeriesIdWatchProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv[':series_id'].watch.providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost3TvSeriesIdRatingKey() {
  return ['3', '/3/tv/:series_id/rating', 'POST'] as const
}

export function usePost3TvSeriesIdRating<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['rating']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['3']['tv'][':series_id']['rating']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost3TvSeriesIdRatingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['3']['tv'][':series_id']['rating']['$post']> },
      ) => parseResponse(client['3'].tv[':series_id'].rating.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete3TvSeriesIdRatingKey() {
  return ['3', '/3/tv/:series_id/rating', 'DELETE'] as const
}

export function useDelete3TvSeriesIdRating<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['3']['tv'][':series_id']['rating']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['3']['tv'][':series_id']['rating']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete3TvSeriesIdRatingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['3']['tv'][':series_id']['rating']['$delete']> },
      ) => parseResponse(client['3'].tv[':series_id'].rating.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet3TvSeriesIdSeasonSeasonNumberKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number', args] as const
}

export function useGet3TvSeriesIdSeasonSeasonNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSeasonSeasonNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdSeasonSeasonNumberAccountStatesKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['account_states']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/account_states', args] as const
}

export function useGet3TvSeriesIdSeasonSeasonNumberAccountStates<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['account_states']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberAccountStatesKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['account_states']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].account_states.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSeasonSeasonNumberAccountStates<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['account_states']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberAccountStatesKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['account_states']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].account_states.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdSeasonSeasonNumberAggregateCreditsKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['aggregate_credits']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/aggregate_credits', args] as const
}

export function useGet3TvSeriesIdSeasonSeasonNumberAggregateCredits<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['aggregate_credits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberAggregateCreditsKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['aggregate_credits']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].aggregate_credits.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSeasonSeasonNumberAggregateCredits<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['aggregate_credits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberAggregateCreditsKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['aggregate_credits']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].aggregate_credits.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeasonSeasonIdChangesKey(
  args: InferRequestType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>,
) {
  return ['3', '/3/tv/season/:season_id/changes', args] as const
}

export function useGet3TvSeasonSeasonIdChanges<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>
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
        ? getGet3TvSeasonSeasonIdChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv.season[':season_id'].changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeasonSeasonIdChanges<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>
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
        ? getGet3TvSeasonSeasonIdChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv.season[':season_id'].changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdSeasonSeasonNumberCreditsKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['credits']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/credits', args] as const
}

export function useGet3TvSeriesIdSeasonSeasonNumberCredits<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['credits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberCreditsKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['credits']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].credits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSeasonSeasonNumberCredits<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['credits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberCreditsKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['credits']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].credits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdSeasonSeasonNumberExternalIdsKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['external_ids']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/external_ids', args] as const
}

export function useGet3TvSeriesIdSeasonSeasonNumberExternalIds<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['external_ids']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberExternalIdsKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['external_ids']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].external_ids.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSeasonSeasonNumberExternalIds<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['external_ids']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberExternalIdsKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['external_ids']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].external_ids.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdSeasonSeasonNumberImagesKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['images']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/images', args] as const
}

export function useGet3TvSeriesIdSeasonSeasonNumberImages<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['images']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberImagesKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['images']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].images.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSeasonSeasonNumberImages<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['images']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberImagesKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['images']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].images.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdSeasonSeasonNumberTranslationsKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['translations']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/translations', args] as const
}

export function useGet3TvSeriesIdSeasonSeasonNumberTranslations<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['translations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberTranslationsKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['translations']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].translations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSeasonSeasonNumberTranslations<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['translations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberTranslationsKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['translations']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].translations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdSeasonSeasonNumberVideosKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['videos']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/videos', args] as const
}

export function useGet3TvSeriesIdSeasonSeasonNumberVideos<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['videos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberVideosKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['videos']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].videos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSeasonSeasonNumberVideos<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['videos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberVideosKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['videos']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].videos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdSeasonSeasonNumberWatchProvidersKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['watch']['providers']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/watch/providers', args] as const
}

export function useGet3TvSeriesIdSeasonSeasonNumberWatchProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['watch']['providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberWatchProvidersKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['watch']['providers']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].watch.providers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSeasonSeasonNumberWatchProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['watch']['providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberWatchProvidersKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['watch']['providers']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].watch.providers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberKey(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['$get']
  >,
) {
  return ['3', '/3/tv/:series_id/season/:season_number/episode/:episode_number', args] as const
}

export function useGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].episode[':episode_number'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].episode[':episode_number'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesKey(
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

export function useGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStates<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['account_states']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['account_states']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].account_states.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStates<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['account_states']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['account_states']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].account_states.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3TvEpisodeEpisodeIdChangesKey(
  args: InferRequestType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>,
) {
  return ['3', '/3/tv/episode/:episode_id/changes', args] as const
}

export function useGet3TvEpisodeEpisodeIdChanges<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>
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
        ? getGet3TvEpisodeEpisodeIdChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv.episode[':episode_id'].changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvEpisodeEpisodeIdChanges<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>
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
        ? getGet3TvEpisodeEpisodeIdChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['3'].tv.episode[':episode_id'].changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsKey(
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

export function useGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCredits<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['credits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['credits']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].credits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCredits<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['credits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['credits']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].credits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsKey(
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

export function useGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIds<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['external_ids']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['external_ids']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].external_ids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIds<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['external_ids']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['external_ids']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].external_ids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesKey(
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

export function useGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImages<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['images']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['images']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].images.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['images']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['images']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].images.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsKey(
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

export function useGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['translations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['translations']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].translations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['translations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['translations']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].translations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosKey(
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

export function useGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideos<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['videos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['videos']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].videos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideos<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['videos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosKey(args)
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
                (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['videos']['$get']
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
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].videos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingKey() {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/rating',
    'POST',
  ] as const
}

export function usePost3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRating<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['rating']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingKey()
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
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['rating']['$post']
          >
        },
      ) =>
        parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].rating.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingKey() {
  return [
    '3',
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/rating',
    'DELETE',
  ] as const
}

export function useDelete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRating<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['rating']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingKey()
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
            (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['rating']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['3'].tv[':series_id'].season[':season_number'].episode[
            ':episode_number'
          ].rating.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet3TvEpisodeGroupTvEpisodeGroupIdKey(
  args: InferRequestType<
    (typeof client)['3']['tv']['episode_group'][':tv_episode_group_id']['$get']
  >,
) {
  return ['3', '/3/tv/episode_group/:tv_episode_group_id', args] as const
}

export function useGet3TvEpisodeGroupTvEpisodeGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv']['episode_group'][':tv_episode_group_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvEpisodeGroupTvEpisodeGroupIdKey(args)
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
                (typeof client)['3']['tv']['episode_group'][':tv_episode_group_id']['$get']
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
          client['3'].tv.episode_group[':tv_episode_group_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3TvEpisodeGroupTvEpisodeGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['3']['tv']['episode_group'][':tv_episode_group_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet3TvEpisodeGroupTvEpisodeGroupIdKey(args)
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
                (typeof client)['3']['tv']['episode_group'][':tv_episode_group_id']['$get']
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
          client['3'].tv.episode_group[':tv_episode_group_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet3WatchProvidersRegionsKey(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['regions']['$get']>,
) {
  return ['3', '/3/watch/providers/regions', args] as const
}

export function useGet3WatchProvidersRegions<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['watch']['providers']['regions']['$get']>>
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
        ? getGet3WatchProvidersRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['watch']['providers']['regions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].watch.providers.regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3WatchProvidersRegions<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['watch']['providers']['regions']['$get']>>
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
        ? getGet3WatchProvidersRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['watch']['providers']['regions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].watch.providers.regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3WatchProvidersMovieKey(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['movie']['$get']>,
) {
  return ['3', '/3/watch/providers/movie', args] as const
}

export function useGet3WatchProvidersMovie<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['movie']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['watch']['providers']['movie']['$get']>>
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
        ? getGet3WatchProvidersMovieKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['watch']['providers']['movie']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].watch.providers.movie.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3WatchProvidersMovie<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['movie']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['watch']['providers']['movie']['$get']>>
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
        ? getGet3WatchProvidersMovieKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['watch']['providers']['movie']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].watch.providers.movie.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet3WatchProvidersTvKey(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['tv']['$get']>,
) {
  return ['3', '/3/watch/providers/tv', args] as const
}

export function useGet3WatchProvidersTv<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['tv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['watch']['providers']['tv']['$get']>>
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
        ? getGet3WatchProvidersTvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['watch']['providers']['tv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].watch.providers.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3WatchProvidersTv<TError = unknown>(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['tv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['watch']['providers']['tv']['$get']>>
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
        ? getGet3WatchProvidersTvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['3']['watch']['providers']['tv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3'].watch.providers.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
