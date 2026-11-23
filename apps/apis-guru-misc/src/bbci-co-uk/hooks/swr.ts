import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAtozKey() {
  return ['atoz'] as const
}

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getClipsKey() {
  return ['clips'] as const
}

export function getEpisodesKey() {
  return ['episodes'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getHomeKey() {
  return ['home'] as const
}

export function getProgrammesKey() {
  return ['programmes'] as const
}

export function getRegionsKey() {
  return ['regions'] as const
}

export function getSchemaKey() {
  return ['schema'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSearchSuggestKey() {
  return ['search-suggest'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getGetAtozLetterProgrammesKey(
  args: InferRequestType<(typeof client.atoz)[':letter']['programmes']['$get']>,
) {
  return ['atoz', '/atoz/:letter/programmes', args] as const
}

export function useGetAtozLetterProgrammes<TError = unknown>(
  args: InferRequestType<(typeof client.atoz)[':letter']['programmes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.atoz)[':letter']['programmes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAtozLetterProgrammesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.atoz)[':letter']['programmes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.atoz[':letter'].programmes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAtozLetterProgrammes<TError = unknown>(
  args: InferRequestType<(typeof client.atoz)[':letter']['programmes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.atoz)[':letter']['programmes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAtozLetterProgrammesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.atoz)[':letter']['programmes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.atoz[':letter'].programmes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesKey(args: InferRequestType<typeof client.categories.$get>) {
  return ['categories', '/categories', args] as const
}

export function useGetCategories<TError = unknown>(
  args: InferRequestType<typeof client.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategories<TError = unknown>(
  args: InferRequestType<typeof client.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesCategoryKey(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
) {
  return ['categories', '/categories/:category', args] as const
}

export function useGetCategoriesCategory<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoriesCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':category'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesCategory<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoriesCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':category'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesCategoryEpisodesKey(
  args: InferRequestType<(typeof client.categories)[':category']['episodes']['$get']>,
) {
  return ['categories', '/categories/:category/episodes', args] as const
}

export function useGetCategoriesCategoryEpisodes<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['episodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['episodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoriesCategoryEpisodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['episodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':category'].episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesCategoryEpisodes<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['episodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['episodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoriesCategoryEpisodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['episodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':category'].episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesCategoryHighlightsKey(
  args: InferRequestType<(typeof client.categories)[':category']['highlights']['$get']>,
) {
  return ['categories', '/categories/:category/highlights', args] as const
}

export function useGetCategoriesCategoryHighlights<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['highlights']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['highlights']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoriesCategoryHighlightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['highlights']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.categories[':category'].highlights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesCategoryHighlights<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['highlights']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['highlights']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoriesCategoryHighlightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['highlights']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.categories[':category'].highlights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesCategoryProgrammesKey(
  args: InferRequestType<(typeof client.categories)[':category']['programmes']['$get']>,
) {
  return ['categories', '/categories/:category/programmes', args] as const
}

export function useGetCategoriesCategoryProgrammes<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['programmes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['programmes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoriesCategoryProgrammesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['programmes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.categories[':category'].programmes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesCategoryProgrammes<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':category']['programmes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['programmes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCategoriesCategoryProgrammesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':category']['programmes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.categories[':category'].programmes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsKey(args: InferRequestType<typeof client.channels.$get>) {
  return ['channels', '/channels', args] as const
}

export function useGetChannels<TError = unknown>(
  args: InferRequestType<typeof client.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.channels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChannels<TError = unknown>(
  args: InferRequestType<typeof client.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.channels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetChannelsChannelBroadcastsKey(
  args: InferRequestType<(typeof client.channels)[':channel']['broadcasts']['$get']>,
) {
  return ['channels', '/channels/:channel/broadcasts', args] as const
}

export function useGetChannelsChannelBroadcasts<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel']['broadcasts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel']['broadcasts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChannelsChannelBroadcastsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel']['broadcasts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel'].broadcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelBroadcasts<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel']['broadcasts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel']['broadcasts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChannelsChannelBroadcastsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel']['broadcasts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel'].broadcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsChannelHighlightsKey(
  args: InferRequestType<(typeof client.channels)[':channel']['highlights']['$get']>,
) {
  return ['channels', '/channels/:channel/highlights', args] as const
}

export function useGetChannelsChannelHighlights<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel']['highlights']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel']['highlights']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChannelsChannelHighlightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel']['highlights']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel'].highlights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelHighlights<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel']['highlights']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel']['highlights']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChannelsChannelHighlightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel']['highlights']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel'].highlights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsChannelProgrammesKey(
  args: InferRequestType<(typeof client.channels)[':channel']['programmes']['$get']>,
) {
  return ['channels', '/channels/:channel/programmes', args] as const
}

export function useGetChannelsChannelProgrammes<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel']['programmes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel']['programmes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChannelsChannelProgrammesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel']['programmes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel'].programmes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelProgrammes<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel']['programmes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel']['programmes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChannelsChannelProgrammesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel']['programmes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel'].programmes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsChannelScheduleDateKey(
  args: InferRequestType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>,
) {
  return ['channels', '/channels/:channel/schedule/:date', args] as const
}

export function useGetChannelsChannelScheduleDate<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChannelsChannelScheduleDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel'].schedule[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelScheduleDate<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChannelsChannelScheduleDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel'].schedule[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClipsPidKey(args: InferRequestType<(typeof client.clips)[':pid']['$get']>) {
  return ['clips', '/clips/:pid', args] as const
}

export function useGetClipsPid<TError = unknown>(
  args: InferRequestType<(typeof client.clips)[':pid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clips)[':pid']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClipsPidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clips)[':pid']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clips[':pid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClipsPid<TError = unknown>(
  args: InferRequestType<(typeof client.clips)[':pid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clips)[':pid']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClipsPidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clips)[':pid']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clips[':pid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpisodesPidKey(
  args: InferRequestType<(typeof client.episodes)[':pid']['$get']>,
) {
  return ['episodes', '/episodes/:pid', args] as const
}

export function useGetEpisodesPid<TError = unknown>(
  args: InferRequestType<(typeof client.episodes)[':pid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpisodesPidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episodes[':pid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpisodesPid<TError = unknown>(
  args: InferRequestType<(typeof client.episodes)[':pid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpisodesPidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episodes[':pid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpisodesPidNextKey(
  args: InferRequestType<(typeof client.episodes)[':pid']['next']['$get']>,
) {
  return ['episodes', '/episodes/:pid/next', args] as const
}

export function useGetEpisodesPidNext<TError = unknown>(
  args: InferRequestType<(typeof client.episodes)[':pid']['next']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':pid']['next']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEpisodesPidNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':pid']['next']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episodes[':pid'].next.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpisodesPidNext<TError = unknown>(
  args: InferRequestType<(typeof client.episodes)[':pid']['next']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':pid']['next']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEpisodesPidNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':pid']['next']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episodes[':pid'].next.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpisodesPidPostrollsKey(
  args: InferRequestType<(typeof client.episodes)[':pid']['postrolls']['$get']>,
) {
  return ['episodes', '/episodes/:pid/postrolls', args] as const
}

export function useGetEpisodesPidPostrolls<TError = unknown>(
  args: InferRequestType<(typeof client.episodes)[':pid']['postrolls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':pid']['postrolls']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEpisodesPidPostrollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':pid']['postrolls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episodes[':pid'].postrolls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpisodesPidPostrolls<TError = unknown>(
  args: InferRequestType<(typeof client.episodes)[':pid']['postrolls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':pid']['postrolls']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEpisodesPidPostrollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':pid']['postrolls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episodes[':pid'].postrolls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpisodesPidPrerollsKey(
  args: InferRequestType<(typeof client.episodes)[':pid']['prerolls']['$get']>,
) {
  return ['episodes', '/episodes/:pid/prerolls', args] as const
}

export function useGetEpisodesPidPrerolls<TError = unknown>(
  args: InferRequestType<(typeof client.episodes)[':pid']['prerolls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':pid']['prerolls']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEpisodesPidPrerollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':pid']['prerolls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episodes[':pid'].prerolls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpisodesPidPrerolls<TError = unknown>(
  args: InferRequestType<(typeof client.episodes)[':pid']['prerolls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':pid']['prerolls']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEpisodesPidPrerollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':pid']['prerolls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episodes[':pid'].prerolls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpisodesPidRecommendationsKey(
  args: InferRequestType<(typeof client.episodes)[':pid']['recommendations']['$get']>,
) {
  return ['episodes', '/episodes/:pid/recommendations', args] as const
}

export function useGetEpisodesPidRecommendations<TError = unknown>(
  args: InferRequestType<(typeof client.episodes)[':pid']['recommendations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':pid']['recommendations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEpisodesPidRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':pid']['recommendations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episodes[':pid'].recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpisodesPidRecommendations<TError = unknown>(
  args: InferRequestType<(typeof client.episodes)[':pid']['recommendations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':pid']['recommendations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEpisodesPidRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.episodes)[':pid']['recommendations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episodes[':pid'].recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsPopularEpisodesKey(
  args: InferRequestType<typeof client.groups.popular.episodes.$get>,
) {
  return ['groups', '/groups/popular/episodes', args] as const
}

export function useGetGroupsPopularEpisodes<TError = unknown>(
  args: InferRequestType<typeof client.groups.popular.episodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.groups.popular.episodes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsPopularEpisodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.groups.popular.episodes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.popular.episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsPopularEpisodes<TError = unknown>(
  args: InferRequestType<typeof client.groups.popular.episodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.groups.popular.episodes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsPopularEpisodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.groups.popular.episodes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.popular.episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsPidEpisodesKey(
  args: InferRequestType<(typeof client.groups)[':pid']['episodes']['$get']>,
) {
  return ['groups', '/groups/:pid/episodes', args] as const
}

export function useGetGroupsPidEpisodes<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':pid']['episodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':pid']['episodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsPidEpisodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':pid']['episodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':pid'].episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsPidEpisodes<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':pid']['episodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':pid']['episodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsPidEpisodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':pid']['episodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':pid'].episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHomeHighlightsKey(
  args: InferRequestType<typeof client.home.highlights.$get>,
) {
  return ['home', '/home/highlights', args] as const
}

export function useGetHomeHighlights<TError = unknown>(
  args: InferRequestType<typeof client.home.highlights.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.home.highlights.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHomeHighlightsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.home.highlights.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.home.highlights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHomeHighlights<TError = unknown>(
  args: InferRequestType<typeof client.home.highlights.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.home.highlights.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHomeHighlightsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.home.highlights.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.home.highlights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProgrammesPidKey(
  args: InferRequestType<(typeof client.programmes)[':pid']['$get']>,
) {
  return ['programmes', '/programmes/:pid', args] as const
}

export function useGetProgrammesPid<TError = unknown>(
  args: InferRequestType<(typeof client.programmes)[':pid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.programmes)[':pid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProgrammesPidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.programmes)[':pid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.programmes[':pid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProgrammesPid<TError = unknown>(
  args: InferRequestType<(typeof client.programmes)[':pid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.programmes)[':pid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProgrammesPidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.programmes)[':pid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.programmes[':pid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProgrammesPidEpisodesKey(
  args: InferRequestType<(typeof client.programmes)[':pid']['episodes']['$get']>,
) {
  return ['programmes', '/programmes/:pid/episodes', args] as const
}

export function useGetProgrammesPidEpisodes<TError = unknown>(
  args: InferRequestType<(typeof client.programmes)[':pid']['episodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.programmes)[':pid']['episodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProgrammesPidEpisodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.programmes)[':pid']['episodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.programmes[':pid'].episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProgrammesPidEpisodes<TError = unknown>(
  args: InferRequestType<(typeof client.programmes)[':pid']['episodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.programmes)[':pid']['episodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProgrammesPidEpisodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.programmes)[':pid']['episodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.programmes[':pid'].episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegionsKey(args: InferRequestType<typeof client.regions.$get>) {
  return ['regions', '/regions', args] as const
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

export function getGetSchemaIblJsonKey() {
  return ['schema', '/schema/ibl.json'] as const
}

export function useGetSchemaIblJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.schema)['ibl.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSchemaIblJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.schema)['ibl.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schema['ibl.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchemaIblJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.schema)['ibl.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSchemaIblJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.schema)['ibl.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schema['ibl.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
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

export function getGetSearchSuggestKey(
  args: InferRequestType<(typeof client)['search-suggest']['$get']>,
) {
  return ['search-suggest', '/search-suggest', args] as const
}

export function useGetSearchSuggest<TError = unknown>(
  args: InferRequestType<(typeof client)['search-suggest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['search-suggest']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchSuggestKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['search-suggest']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['search-suggest'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchSuggest<TError = unknown>(
  args: InferRequestType<(typeof client)['search-suggest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['search-suggest']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchSuggestKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['search-suggest']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['search-suggest'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusKey() {
  return ['status', '/status'] as const
}

export function useGetStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserPurchasesKey(args: InferRequestType<typeof client.user.purchases.$get>) {
  return ['user', '/user/purchases', args] as const
}

export function useGetUserPurchases<TError = unknown>(
  args: InferRequestType<typeof client.user.purchases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.purchases.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserPurchasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.purchases.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.purchases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserPurchases<TError = unknown>(
  args: InferRequestType<typeof client.user.purchases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.purchases.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserPurchasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.purchases.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.purchases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserRecommendationsKey(
  args: InferRequestType<typeof client.user.recommendations.$get>,
) {
  return ['user', '/user/recommendations', args] as const
}

export function useGetUserRecommendations<TError = unknown>(
  args: InferRequestType<typeof client.user.recommendations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.recommendations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.recommendations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserRecommendations<TError = unknown>(
  args: InferRequestType<typeof client.user.recommendations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.recommendations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.recommendations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserWatchingKey(args: InferRequestType<typeof client.user.watching.$get>) {
  return ['user', '/user/watching', args] as const
}

export function useGetUserWatching<TError = unknown>(
  args: InferRequestType<typeof client.user.watching.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.watching.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserWatchingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.watching.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.watching.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserWatching<TError = unknown>(
  args: InferRequestType<typeof client.user.watching.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.watching.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserWatchingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.watching.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.watching.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
