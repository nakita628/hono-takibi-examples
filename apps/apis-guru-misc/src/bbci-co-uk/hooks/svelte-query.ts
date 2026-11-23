import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getAtozLetterProgrammesQueryKey(
  args: InferRequestType<(typeof client.atoz)[':letter']['programmes']['$get']>,
) {
  return ['atoz', '/atoz/:letter/programmes', args] as const
}

export function getAtozLetterProgrammesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.atoz)[':letter']['programmes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.atoz)[':letter']['programmes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.atoz)[':letter']['programmes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAtozLetterProgrammesQueryKey>
  >({
    queryKey: getAtozLetterProgrammesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.atoz[':letter'].programmes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAtozLetterProgrammes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.atoz)[':letter']['programmes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.atoz)[':letter']['programmes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.atoz)[':letter']['programmes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAtozLetterProgrammesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAtozLetterProgrammesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCategoriesQueryKey(args: InferRequestType<typeof client.categories.$get>) {
  return ['categories', '/categories', args] as const
}

export function getCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >({
    queryKey: getCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.categories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCategoriesCategoryQueryKey(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
) {
  return ['categories', '/categories/:category', args] as const
}

export function getCategoriesCategoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryQueryKey>
  >({
    queryKey: getCategoriesCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':category'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCategoriesCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.categories)[':category']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesCategoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesCategoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCategoriesCategoryEpisodesQueryKey(
  args: InferRequestType<(typeof client.categories)[':category']['episodes']['$get']>,
) {
  return ['categories', '/categories/:category/episodes', args] as const
}

export function getCategoriesCategoryEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['episodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['episodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.categories)[':category']['episodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryEpisodesQueryKey>
  >({
    queryKey: getCategoriesCategoryEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':category'].episodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCategoriesCategoryEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['episodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.categories)[':category']['episodes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories)[':category']['episodes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesCategoryEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCategoriesCategoryEpisodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCategoriesCategoryHighlightsQueryKey(
  args: InferRequestType<(typeof client.categories)[':category']['highlights']['$get']>,
) {
  return ['categories', '/categories/:category/highlights', args] as const
}

export function getCategoriesCategoryHighlightsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['highlights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['highlights']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.categories)[':category']['highlights']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryHighlightsQueryKey>
  >({
    queryKey: getCategoriesCategoryHighlightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':category'].highlights.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCategoriesCategoryHighlights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['highlights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.categories)[':category']['highlights']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories)[':category']['highlights']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesCategoryHighlightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCategoriesCategoryHighlightsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCategoriesCategoryProgrammesQueryKey(
  args: InferRequestType<(typeof client.categories)[':category']['programmes']['$get']>,
) {
  return ['categories', '/categories/:category/programmes', args] as const
}

export function getCategoriesCategoryProgrammesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['programmes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['programmes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.categories)[':category']['programmes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryProgrammesQueryKey>
  >({
    queryKey: getCategoriesCategoryProgrammesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':category'].programmes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCategoriesCategoryProgrammes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['programmes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.categories)[':category']['programmes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories)[':category']['programmes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesCategoryProgrammesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCategoriesCategoryProgrammesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getChannelsQueryKey(args: InferRequestType<typeof client.channels.$get>) {
  return ['channels', '/channels', args] as const
}

export function getChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.channels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsQueryKey>
  >({
    queryKey: getChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.channels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getChannelsChannelBroadcastsQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel']['broadcasts']['$get']>,
) {
  return ['channels', '/channels/:channel/broadcasts', args] as const
}

export function getChannelsChannelBroadcastsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel']['broadcasts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel']['broadcasts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel']['broadcasts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelBroadcastsQueryKey>
  >({
    queryKey: getChannelsChannelBroadcastsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel'].broadcasts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChannelsChannelBroadcasts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel']['broadcasts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.channels)[':channel']['broadcasts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel']['broadcasts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelBroadcastsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChannelsChannelBroadcastsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getChannelsChannelHighlightsQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel']['highlights']['$get']>,
) {
  return ['channels', '/channels/:channel/highlights', args] as const
}

export function getChannelsChannelHighlightsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel']['highlights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel']['highlights']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel']['highlights']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelHighlightsQueryKey>
  >({
    queryKey: getChannelsChannelHighlightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel'].highlights.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChannelsChannelHighlights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel']['highlights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.channels)[':channel']['highlights']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel']['highlights']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelHighlightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChannelsChannelHighlightsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getChannelsChannelProgrammesQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel']['programmes']['$get']>,
) {
  return ['channels', '/channels/:channel/programmes', args] as const
}

export function getChannelsChannelProgrammesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel']['programmes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel']['programmes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel']['programmes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelProgrammesQueryKey>
  >({
    queryKey: getChannelsChannelProgrammesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel'].programmes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChannelsChannelProgrammes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel']['programmes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.channels)[':channel']['programmes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel']['programmes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelProgrammesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChannelsChannelProgrammesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getChannelsChannelScheduleDateQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>,
) {
  return ['channels', '/channels/:channel/schedule/:date', args] as const
}

export function getChannelsChannelScheduleDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelScheduleDateQueryKey>
  >({
    queryKey: getChannelsChannelScheduleDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel'].schedule[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChannelsChannelScheduleDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelScheduleDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChannelsChannelScheduleDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getClipsPidQueryKey(args: InferRequestType<(typeof client.clips)[':pid']['$get']>) {
  return ['clips', '/clips/:pid', args] as const
}

export function getClipsPidQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clips)[':pid']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.clips)[':pid']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clips)[':pid']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClipsPidQueryKey>
  >({
    queryKey: getClipsPidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clips[':pid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createClipsPid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clips)[':pid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clips)[':pid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.clips)[':pid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClipsPidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClipsPidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEpisodesPidQueryKey(
  args: InferRequestType<(typeof client.episodes)[':pid']['$get']>,
) {
  return ['episodes', '/episodes/:pid', args] as const
}

export function getEpisodesPidQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':pid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesPidQueryKey>
  >({
    queryKey: getEpisodesPidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.episodes[':pid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEpisodesPid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.episodes)[':pid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEpisodesPidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEpisodesPidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEpisodesPidNextQueryKey(
  args: InferRequestType<(typeof client.episodes)[':pid']['next']['$get']>,
) {
  return ['episodes', '/episodes/:pid/next', args] as const
}

export function getEpisodesPidNextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['next']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':pid']['next']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['next']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesPidNextQueryKey>
  >({
    queryKey: getEpisodesPidNextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.episodes[':pid'].next.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEpisodesPidNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['next']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.episodes)[':pid']['next']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.episodes)[':pid']['next']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEpisodesPidNextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEpisodesPidNextQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEpisodesPidPostrollsQueryKey(
  args: InferRequestType<(typeof client.episodes)[':pid']['postrolls']['$get']>,
) {
  return ['episodes', '/episodes/:pid/postrolls', args] as const
}

export function getEpisodesPidPostrollsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':pid']['postrolls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':pid']['postrolls']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.episodes)[':pid']['postrolls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesPidPostrollsQueryKey>
  >({
    queryKey: getEpisodesPidPostrollsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.episodes[':pid'].postrolls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEpisodesPidPostrolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':pid']['postrolls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.episodes)[':pid']['postrolls']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.episodes)[':pid']['postrolls']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEpisodesPidPostrollsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEpisodesPidPostrollsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEpisodesPidPrerollsQueryKey(
  args: InferRequestType<(typeof client.episodes)[':pid']['prerolls']['$get']>,
) {
  return ['episodes', '/episodes/:pid/prerolls', args] as const
}

export function getEpisodesPidPrerollsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':pid']['prerolls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':pid']['prerolls']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.episodes)[':pid']['prerolls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesPidPrerollsQueryKey>
  >({
    queryKey: getEpisodesPidPrerollsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.episodes[':pid'].prerolls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEpisodesPidPrerolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':pid']['prerolls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.episodes)[':pid']['prerolls']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.episodes)[':pid']['prerolls']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEpisodesPidPrerollsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEpisodesPidPrerollsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEpisodesPidRecommendationsQueryKey(
  args: InferRequestType<(typeof client.episodes)[':pid']['recommendations']['$get']>,
) {
  return ['episodes', '/episodes/:pid/recommendations', args] as const
}

export function getEpisodesPidRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':pid']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':pid']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.episodes)[':pid']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesPidRecommendationsQueryKey>
  >({
    queryKey: getEpisodesPidRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.episodes[':pid'].recommendations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEpisodesPidRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':pid']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.episodes)[':pid']['recommendations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.episodes)[':pid']['recommendations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEpisodesPidRecommendationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEpisodesPidRecommendationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGroupsPopularEpisodesQueryKey(
  args: InferRequestType<typeof client.groups.popular.episodes.$get>,
) {
  return ['groups', '/groups/popular/episodes', args] as const
}

export function getGroupsPopularEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.groups.popular.episodes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.popular.episodes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.groups.popular.episodes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsPopularEpisodesQueryKey>
  >({
    queryKey: getGroupsPopularEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.popular.episodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupsPopularEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.groups.popular.episodes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.groups.popular.episodes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.groups.popular.episodes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsPopularEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGroupsPopularEpisodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGroupsPidEpisodesQueryKey(
  args: InferRequestType<(typeof client.groups)[':pid']['episodes']['$get']>,
) {
  return ['groups', '/groups/:pid/episodes', args] as const
}

export function getGroupsPidEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':pid']['episodes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':pid']['episodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':pid']['episodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsPidEpisodesQueryKey>
  >({
    queryKey: getGroupsPidEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':pid'].episodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupsPidEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':pid']['episodes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':pid']['episodes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':pid']['episodes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsPidEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsPidEpisodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHomeHighlightsQueryKey(
  args: InferRequestType<typeof client.home.highlights.$get>,
) {
  return ['home', '/home/highlights', args] as const
}

export function getHomeHighlightsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.home.highlights.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.home.highlights.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.home.highlights.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHomeHighlightsQueryKey>
  >({
    queryKey: getHomeHighlightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.home.highlights.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHomeHighlights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.home.highlights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.home.highlights.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.home.highlights.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHomeHighlightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHomeHighlightsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProgrammesPidQueryKey(
  args: InferRequestType<(typeof client.programmes)[':pid']['$get']>,
) {
  return ['programmes', '/programmes/:pid', args] as const
}

export function getProgrammesPidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.programmes)[':pid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.programmes)[':pid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.programmes)[':pid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProgrammesPidQueryKey>
  >({
    queryKey: getProgrammesPidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.programmes[':pid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProgrammesPid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.programmes)[':pid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.programmes)[':pid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.programmes)[':pid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProgrammesPidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProgrammesPidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProgrammesPidEpisodesQueryKey(
  args: InferRequestType<(typeof client.programmes)[':pid']['episodes']['$get']>,
) {
  return ['programmes', '/programmes/:pid/episodes', args] as const
}

export function getProgrammesPidEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.programmes)[':pid']['episodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.programmes)[':pid']['episodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.programmes)[':pid']['episodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProgrammesPidEpisodesQueryKey>
  >({
    queryKey: getProgrammesPidEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.programmes[':pid'].episodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProgrammesPidEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.programmes)[':pid']['episodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.programmes)[':pid']['episodes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.programmes)[':pid']['episodes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProgrammesPidEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProgrammesPidEpisodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRegionsQueryKey(args: InferRequestType<typeof client.regions.$get>) {
  return ['regions', '/regions', args] as const
}

export function getRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.regions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegionsQueryKey>
  >({
    queryKey: getRegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.regions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.regions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRegionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSchemaIblJsonQueryKey() {
  return ['schema', '/schema/ibl.json'] as const
}

export function getSchemaIblJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schema)['ibl.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.schema)['ibl.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemaIblJsonQueryKey>
  >({
    queryKey: getSchemaIblJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.schema['ibl.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchemaIblJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schema)['ibl.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.schema)['ibl.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchemaIblJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchemaIblJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSearchQueryKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function getSearchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >({
    queryKey: getSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchSuggestQueryKey(
  args: InferRequestType<(typeof client)['search-suggest']['$get']>,
) {
  return ['search-suggest', '/search-suggest', args] as const
}

export function getSearchSuggestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search-suggest']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['search-suggest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['search-suggest']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchSuggestQueryKey>
  >({
    queryKey: getSearchSuggestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['search-suggest'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearchSuggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search-suggest']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['search-suggest']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['search-suggest']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchSuggestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchSuggestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >({
    queryKey: getStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUserPurchasesQueryKey(
  args: InferRequestType<typeof client.user.purchases.$get>,
) {
  return ['user', '/user/purchases', args] as const
}

export function getUserPurchasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.purchases.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.purchases.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.purchases.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserPurchasesQueryKey>
  >({
    queryKey: getUserPurchasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.purchases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserPurchases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.purchases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.purchases.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.purchases.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserPurchasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserPurchasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserRecommendationsQueryKey(
  args: InferRequestType<typeof client.user.recommendations.$get>,
) {
  return ['user', '/user/recommendations', args] as const
}

export function getUserRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.recommendations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.recommendations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.recommendations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserRecommendationsQueryKey>
  >({
    queryKey: getUserRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.recommendations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserRecommendations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.recommendations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.recommendations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.recommendations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserRecommendationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserRecommendationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserWatchingQueryKey(args: InferRequestType<typeof client.user.watching.$get>) {
  return ['user', '/user/watching', args] as const
}

export function getUserWatchingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.watching.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.watching.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.watching.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserWatchingQueryKey>
  >({
    queryKey: getUserWatchingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.watching.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserWatching<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.watching.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.watching.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.watching.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserWatchingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserWatchingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
