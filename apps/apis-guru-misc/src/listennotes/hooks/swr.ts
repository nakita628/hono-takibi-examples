import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBestPodcastsKey() {
  return ['best_podcasts'] as const
}

export function getCuratedPodcastsKey() {
  return ['curated_podcasts'] as const
}

export function getEpisodesKey() {
  return ['episodes'] as const
}

export function getGenresKey() {
  return ['genres'] as const
}

export function getJustListenKey() {
  return ['just_listen'] as const
}

export function getLanguagesKey() {
  return ['languages'] as const
}

export function getPlaylistsKey() {
  return ['playlists'] as const
}

export function getPodcastsKey() {
  return ['podcasts'] as const
}

export function getRegionsKey() {
  return ['regions'] as const
}

export function getRelatedSearchesKey() {
  return ['related_searches'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSpellcheckKey() {
  return ['spellcheck'] as const
}

export function getTrendingSearchesKey() {
  return ['trending_searches'] as const
}

export function getTypeaheadKey() {
  return ['typeahead'] as const
}

export function getGetBestPodcastsKey(args: InferRequestType<typeof client.best_podcasts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['best_podcasts', '/best_podcasts', keyArgs] as const
}

export function useGetBestPodcasts<TError = unknown>(
  args: InferRequestType<typeof client.best_podcasts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.best_podcasts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBestPodcastsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.best_podcasts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.best_podcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBestPodcasts<TError = unknown>(
  args: InferRequestType<typeof client.best_podcasts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.best_podcasts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBestPodcastsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.best_podcasts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.best_podcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCuratedPodcastsKey(
  args: InferRequestType<typeof client.curated_podcasts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['curated_podcasts', '/curated_podcasts', keyArgs] as const
}

export function useGetCuratedPodcasts<TError = unknown>(
  args: InferRequestType<typeof client.curated_podcasts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curated_podcasts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCuratedPodcastsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curated_podcasts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.curated_podcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCuratedPodcasts<TError = unknown>(
  args: InferRequestType<typeof client.curated_podcasts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curated_podcasts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCuratedPodcastsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curated_podcasts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.curated_podcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCuratedPodcastsIdKey(
  args: InferRequestType<(typeof client.curated_podcasts)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['curated_podcasts', '/curated_podcasts/:id', keyArgs] as const
}

export function useGetCuratedPodcastsId<TError = unknown>(
  args: InferRequestType<(typeof client.curated_podcasts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.curated_podcasts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCuratedPodcastsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.curated_podcasts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.curated_podcasts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCuratedPodcastsId<TError = unknown>(
  args: InferRequestType<(typeof client.curated_podcasts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.curated_podcasts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCuratedPodcastsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.curated_podcasts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.curated_podcasts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEpisodesKey() {
  return ['episodes', '/episodes', 'POST'] as const
}

export function usePostEpisodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.episodes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEpisodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.episodes.$post> }) =>
        parseResponse(client.episodes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEpisodesIdKey(
  args: InferRequestType<(typeof client.episodes)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['episodes', '/episodes/:id', keyArgs] as const
}

export function useGetEpisodesId<TError = unknown>(
  args: InferRequestType<(typeof client.episodes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpisodesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episodes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpisodesId<TError = unknown>(
  args: InferRequestType<(typeof client.episodes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpisodesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episodes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpisodesIdRecommendationsKey(
  args: InferRequestType<(typeof client.episodes)[':id']['recommendations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['episodes', '/episodes/:id/recommendations', keyArgs] as const
}

export function useGetEpisodesIdRecommendations<TError = unknown>(
  args: InferRequestType<(typeof client.episodes)[':id']['recommendations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':id']['recommendations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEpisodesIdRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':id']['recommendations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episodes[':id'].recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpisodesIdRecommendations<TError = unknown>(
  args: InferRequestType<(typeof client.episodes)[':id']['recommendations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':id']['recommendations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEpisodesIdRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':id']['recommendations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episodes[':id'].recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenresKey(args: InferRequestType<typeof client.genres.$get>) {
  const { header: _, ...keyArgs } = args
  return ['genres', '/genres', keyArgs] as const
}

export function useGetGenres<TError = unknown>(
  args: InferRequestType<typeof client.genres.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.genres.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGenres<TError = unknown>(
  args: InferRequestType<typeof client.genres.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.genres.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetJustListenKey(args: InferRequestType<typeof client.just_listen.$get>) {
  const { header: _, ...keyArgs } = args
  return ['just_listen', '/just_listen', keyArgs] as const
}

export function useGetJustListen<TError = unknown>(
  args: InferRequestType<typeof client.just_listen.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.just_listen.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJustListenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.just_listen.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.just_listen.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJustListen<TError = unknown>(
  args: InferRequestType<typeof client.just_listen.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.just_listen.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJustListenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.just_listen.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.just_listen.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLanguagesKey(args: InferRequestType<typeof client.languages.$get>) {
  const { header: _, ...keyArgs } = args
  return ['languages', '/languages', keyArgs] as const
}

export function useGetLanguages<TError = unknown>(
  args: InferRequestType<typeof client.languages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLanguagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.languages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLanguages<TError = unknown>(
  args: InferRequestType<typeof client.languages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLanguagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.languages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlaylistsKey(args: InferRequestType<typeof client.playlists.$get>) {
  const { header: _, ...keyArgs } = args
  return ['playlists', '/playlists', keyArgs] as const
}

export function useGetPlaylists<TError = unknown>(
  args: InferRequestType<typeof client.playlists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaylistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaylists<TError = unknown>(
  args: InferRequestType<typeof client.playlists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaylistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlaylistsIdKey(
  args: InferRequestType<(typeof client.playlists)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['playlists', '/playlists/:id', keyArgs] as const
}

export function useGetPlaylistsId<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaylistsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaylistsId<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaylistsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPodcastsKey() {
  return ['podcasts', '/podcasts', 'POST'] as const
}

export function usePostPodcasts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.podcasts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.podcasts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPodcastsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.podcasts.$post> }) =>
        parseResponse(client.podcasts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPodcastsSubmitKey() {
  return ['podcasts', '/podcasts/submit', 'POST'] as const
}

export function usePostPodcastsSubmit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.podcasts.submit.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.podcasts.submit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPodcastsSubmitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.podcasts.submit.$post> }) =>
        parseResponse(client.podcasts.submit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPodcastsIdKey(
  args: InferRequestType<(typeof client.podcasts)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['podcasts', '/podcasts/:id', keyArgs] as const
}

export function useGetPodcastsId<TError = unknown>(
  args: InferRequestType<(typeof client.podcasts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPodcastsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.podcasts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPodcastsId<TError = unknown>(
  args: InferRequestType<(typeof client.podcasts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPodcastsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.podcasts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePodcastsIdKey() {
  return ['podcasts', '/podcasts/:id', 'DELETE'] as const
}

export function useDeletePodcastsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.podcasts)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePodcastsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.podcasts)[':id']['$delete']> },
      ) => parseResponse(client.podcasts[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPodcastsIdAudienceKey(
  args: InferRequestType<(typeof client.podcasts)[':id']['audience']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['podcasts', '/podcasts/:id/audience', keyArgs] as const
}

export function useGetPodcastsIdAudience<TError = unknown>(
  args: InferRequestType<(typeof client.podcasts)[':id']['audience']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.podcasts)[':id']['audience']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPodcastsIdAudienceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.podcasts)[':id']['audience']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.podcasts[':id'].audience.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPodcastsIdAudience<TError = unknown>(
  args: InferRequestType<(typeof client.podcasts)[':id']['audience']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.podcasts)[':id']['audience']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPodcastsIdAudienceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.podcasts)[':id']['audience']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.podcasts[':id'].audience.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPodcastsIdRecommendationsKey(
  args: InferRequestType<(typeof client.podcasts)[':id']['recommendations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['podcasts', '/podcasts/:id/recommendations', keyArgs] as const
}

export function useGetPodcastsIdRecommendations<TError = unknown>(
  args: InferRequestType<(typeof client.podcasts)[':id']['recommendations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.podcasts)[':id']['recommendations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPodcastsIdRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.podcasts)[':id']['recommendations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.podcasts[':id'].recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPodcastsIdRecommendations<TError = unknown>(
  args: InferRequestType<(typeof client.podcasts)[':id']['recommendations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.podcasts)[':id']['recommendations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPodcastsIdRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.podcasts)[':id']['recommendations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.podcasts[':id'].recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegionsKey(args: InferRequestType<typeof client.regions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['regions', '/regions', keyArgs] as const
}

export function useGetRegions<TError = unknown>(
  args: InferRequestType<typeof client.regions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.regions.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRegions<TError = unknown>(
  args: InferRequestType<typeof client.regions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.regions.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetRelatedSearchesKey(
  args: InferRequestType<typeof client.related_searches.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['related_searches', '/related_searches', keyArgs] as const
}

export function useGetRelatedSearches<TError = unknown>(
  args: InferRequestType<typeof client.related_searches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.related_searches.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRelatedSearchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.related_searches.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.related_searches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRelatedSearches<TError = unknown>(
  args: InferRequestType<typeof client.related_searches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.related_searches.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRelatedSearchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.related_searches.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.related_searches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchKey(args: InferRequestType<typeof client.search.$get>) {
  const { header: _, ...keyArgs } = args
  return ['search', '/search', keyArgs] as const
}

export function useGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSpellcheckKey(args: InferRequestType<typeof client.spellcheck.$get>) {
  const { header: _, ...keyArgs } = args
  return ['spellcheck', '/spellcheck', keyArgs] as const
}

export function useGetSpellcheck<TError = unknown>(
  args: InferRequestType<typeof client.spellcheck.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spellcheck.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpellcheckKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spellcheck.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spellcheck.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpellcheck<TError = unknown>(
  args: InferRequestType<typeof client.spellcheck.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spellcheck.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpellcheckKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spellcheck.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spellcheck.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrendingSearchesKey(
  args: InferRequestType<typeof client.trending_searches.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['trending_searches', '/trending_searches', keyArgs] as const
}

export function useGetTrendingSearches<TError = unknown>(
  args: InferRequestType<typeof client.trending_searches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trending_searches.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrendingSearchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trending_searches.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trending_searches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrendingSearches<TError = unknown>(
  args: InferRequestType<typeof client.trending_searches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trending_searches.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrendingSearchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trending_searches.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trending_searches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTypeaheadKey(args: InferRequestType<typeof client.typeahead.$get>) {
  const { header: _, ...keyArgs } = args
  return ['typeahead', '/typeahead', keyArgs] as const
}

export function useGetTypeahead<TError = unknown>(
  args: InferRequestType<typeof client.typeahead.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typeahead.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTypeaheadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typeahead.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.typeahead.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTypeahead<TError = unknown>(
  args: InferRequestType<typeof client.typeahead.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typeahead.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTypeaheadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typeahead.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.typeahead.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
