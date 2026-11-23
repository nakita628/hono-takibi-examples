import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.atoz)[':letter']['programmes']['$get']>>,
) {
  return ['atoz', '/atoz/:letter/programmes', toValue(args)] as const
}

export function getAtozLetterProgrammesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.atoz)[':letter']['programmes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAtozLetterProgrammesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.atoz[':letter'].programmes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAtozLetterProgrammes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.atoz)[':letter']['programmes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.atoz)[':letter']['programmes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.atoz)[':letter']['programmes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.atoz)[':letter']['programmes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAtozLetterProgrammesQueryKey>
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
          Awaited<ReturnType<(typeof client.atoz)[':letter']['programmes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAtozLetterProgrammesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAtozLetterProgrammesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.atoz[':letter'].programmes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
) {
  return ['categories', '/categories', toValue(args)] as const
}

export function getCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          ReturnType<typeof getCategoriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesCategoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':category']['$get']>>,
) {
  return ['categories', '/categories/:category', toValue(args)] as const
}

export function getCategoriesCategoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':category']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesCategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':category'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':category']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoriesCategoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesCategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':category'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesCategoryEpisodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['episodes']['$get']>
  >,
) {
  return ['categories', '/categories/:category/episodes', toValue(args)] as const
}

export function getCategoriesCategoryEpisodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['episodes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesCategoryEpisodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':category'].episodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesCategoryEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['episodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['episodes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':category']['episodes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':category']['episodes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoriesCategoryEpisodesQueryKey>
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
          Awaited<ReturnType<(typeof client.categories)[':category']['episodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesCategoryEpisodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':category'].episodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesCategoryHighlightsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['highlights']['$get']>
  >,
) {
  return ['categories', '/categories/:category/highlights', toValue(args)] as const
}

export function getCategoriesCategoryHighlightsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['highlights']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesCategoryHighlightsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':category'].highlights.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesCategoryHighlights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['highlights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['highlights']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':category']['highlights']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':category']['highlights']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoriesCategoryHighlightsQueryKey>
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
          Awaited<ReturnType<(typeof client.categories)[':category']['highlights']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryHighlightsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesCategoryHighlightsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':category'].highlights.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesCategoryProgrammesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['programmes']['$get']>
  >,
) {
  return ['categories', '/categories/:category/programmes', toValue(args)] as const
}

export function getCategoriesCategoryProgrammesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['programmes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesCategoryProgrammesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':category'].programmes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesCategoryProgrammes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':category']['programmes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':category']['programmes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':category']['programmes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':category']['programmes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoriesCategoryProgrammesQueryKey>
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
          Awaited<ReturnType<(typeof client.categories)[':category']['programmes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryProgrammesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesCategoryProgrammesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':category'].programmes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
) {
  return ['channels', '/channels', toValue(args)] as const
}

export function getChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
          >,
          ReturnType<typeof getChannelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsChannelBroadcastsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel']['broadcasts']['$get']>
  >,
) {
  return ['channels', '/channels/:channel/broadcasts', toValue(args)] as const
}

export function getChannelsChannelBroadcastsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel']['broadcasts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelBroadcastsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel'].broadcasts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelBroadcasts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel']['broadcasts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel']['broadcasts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel']['broadcasts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel']['broadcasts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelBroadcastsQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel']['broadcasts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelBroadcastsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelBroadcastsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel'].broadcasts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsChannelHighlightsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel']['highlights']['$get']>
  >,
) {
  return ['channels', '/channels/:channel/highlights', toValue(args)] as const
}

export function getChannelsChannelHighlightsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel']['highlights']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelHighlightsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel'].highlights.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelHighlights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel']['highlights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel']['highlights']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel']['highlights']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel']['highlights']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelHighlightsQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel']['highlights']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelHighlightsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelHighlightsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel'].highlights.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsChannelProgrammesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel']['programmes']['$get']>
  >,
) {
  return ['channels', '/channels/:channel/programmes', toValue(args)] as const
}

export function getChannelsChannelProgrammesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel']['programmes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelProgrammesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel'].programmes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelProgrammes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel']['programmes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel']['programmes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel']['programmes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel']['programmes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelProgrammesQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel']['programmes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelProgrammesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelProgrammesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel'].programmes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsChannelScheduleDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>
  >,
) {
  return ['channels', '/channels/:channel/schedule/:date', toValue(args)] as const
}

export function getChannelsChannelScheduleDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelScheduleDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel'].schedule[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelScheduleDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>
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
                  ReturnType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelScheduleDateQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel']['schedule'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelScheduleDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelScheduleDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel'].schedule[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClipsPidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clips)[':pid']['$get']>>,
) {
  return ['clips', '/clips/:pid', toValue(args)] as const
}

export function getClipsPidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clips)[':pid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClipsPidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clips[':pid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClipsPid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clips)[':pid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clips)[':pid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.clips)[':pid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.clips)[':pid']['$get']>>>
            >
          >,
          ReturnType<typeof getClipsPidQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clips)[':pid']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClipsPidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClipsPidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clips[':pid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpisodesPidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':pid']['$get']>>,
) {
  return ['episodes', '/episodes/:pid', toValue(args)] as const
}

export function getEpisodesPidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':pid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpisodesPidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.episodes[':pid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpisodesPid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':pid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['$get']>>>
            >
          >,
          ReturnType<typeof getEpisodesPidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesPidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpisodesPidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.episodes[':pid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpisodesPidNextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':pid']['next']['$get']>>,
) {
  return ['episodes', '/episodes/:pid/next', toValue(args)] as const
}

export function getEpisodesPidNextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':pid']['next']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpisodesPidNextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.episodes[':pid'].next.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpisodesPidNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['next']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':pid']['next']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.episodes)[':pid']['next']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.episodes)[':pid']['next']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEpisodesPidNextQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':pid']['next']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesPidNextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpisodesPidNextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.episodes[':pid'].next.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpisodesPidPostrollsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':pid']['postrolls']['$get']>>,
) {
  return ['episodes', '/episodes/:pid/postrolls', toValue(args)] as const
}

export function getEpisodesPidPostrollsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':pid']['postrolls']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpisodesPidPostrollsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.episodes[':pid'].postrolls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpisodesPidPostrolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':pid']['postrolls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':pid']['postrolls']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.episodes)[':pid']['postrolls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.episodes)[':pid']['postrolls']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEpisodesPidPostrollsQueryKey>
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
          Awaited<ReturnType<(typeof client.episodes)[':pid']['postrolls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesPidPostrollsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpisodesPidPostrollsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.episodes[':pid'].postrolls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpisodesPidPrerollsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':pid']['prerolls']['$get']>>,
) {
  return ['episodes', '/episodes/:pid/prerolls', toValue(args)] as const
}

export function getEpisodesPidPrerollsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':pid']['prerolls']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpisodesPidPrerollsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.episodes[':pid'].prerolls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpisodesPidPrerolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':pid']['prerolls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':pid']['prerolls']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.episodes)[':pid']['prerolls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.episodes)[':pid']['prerolls']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEpisodesPidPrerollsQueryKey>
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
          Awaited<ReturnType<(typeof client.episodes)[':pid']['prerolls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesPidPrerollsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpisodesPidPrerollsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.episodes[':pid'].prerolls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpisodesPidRecommendationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.episodes)[':pid']['recommendations']['$get']>
  >,
) {
  return ['episodes', '/episodes/:pid/recommendations', toValue(args)] as const
}

export function getEpisodesPidRecommendationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.episodes)[':pid']['recommendations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpisodesPidRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.episodes[':pid'].recommendations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpisodesPidRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':pid']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.episodes)[':pid']['recommendations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.episodes)[':pid']['recommendations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.episodes)[':pid']['recommendations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEpisodesPidRecommendationsQueryKey>
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
          Awaited<ReturnType<(typeof client.episodes)[':pid']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesPidRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpisodesPidRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.episodes[':pid'].recommendations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsPopularEpisodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.popular.episodes.$get>>,
) {
  return ['groups', '/groups/popular/episodes', toValue(args)] as const
}

export function getGroupsPopularEpisodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.popular.episodes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsPopularEpisodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.popular.episodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsPopularEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.groups.popular.episodes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.popular.episodes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.popular.episodes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.popular.episodes.$get>>>
            >
          >,
          ReturnType<typeof getGroupsPopularEpisodesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.groups.popular.episodes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsPopularEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsPopularEpisodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.popular.episodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsPidEpisodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':pid']['episodes']['$get']>>,
) {
  return ['groups', '/groups/:pid/episodes', toValue(args)] as const
}

export function getGroupsPidEpisodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':pid']['episodes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsPidEpisodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':pid'].episodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsPidEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':pid']['episodes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':pid']['episodes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':pid']['episodes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':pid']['episodes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsPidEpisodesQueryKey>
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
          Awaited<ReturnType<(typeof client.groups)[':pid']['episodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsPidEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsPidEpisodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':pid'].episodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHomeHighlightsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.home.highlights.$get>>,
) {
  return ['home', '/home/highlights', toValue(args)] as const
}

export function getHomeHighlightsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.home.highlights.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHomeHighlightsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.home.highlights.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHomeHighlights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.home.highlights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.home.highlights.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.home.highlights.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.home.highlights.$get>>>
            >
          >,
          ReturnType<typeof getHomeHighlightsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.home.highlights.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHomeHighlightsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHomeHighlightsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.home.highlights.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProgrammesPidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.programmes)[':pid']['$get']>>,
) {
  return ['programmes', '/programmes/:pid', toValue(args)] as const
}

export function getProgrammesPidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.programmes)[':pid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProgrammesPidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.programmes[':pid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProgrammesPid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.programmes)[':pid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.programmes)[':pid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.programmes)[':pid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.programmes)[':pid']['$get']>>>
            >
          >,
          ReturnType<typeof getProgrammesPidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.programmes)[':pid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProgrammesPidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProgrammesPidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.programmes[':pid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProgrammesPidEpisodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.programmes)[':pid']['episodes']['$get']>>,
) {
  return ['programmes', '/programmes/:pid/episodes', toValue(args)] as const
}

export function getProgrammesPidEpisodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.programmes)[':pid']['episodes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProgrammesPidEpisodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.programmes[':pid'].episodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProgrammesPidEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.programmes)[':pid']['episodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.programmes)[':pid']['episodes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.programmes)[':pid']['episodes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.programmes)[':pid']['episodes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProgrammesPidEpisodesQueryKey>
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
          Awaited<ReturnType<(typeof client.programmes)[':pid']['episodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProgrammesPidEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProgrammesPidEpisodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.programmes[':pid'].episodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.regions.$get>>,
) {
  return ['regions', '/regions', toValue(args)] as const
}

export function getRegionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.regions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.regions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.regions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
          >,
          ReturnType<typeof getRegionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.regions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchemaIblJsonQueryKey() {
  return ['schema', '/schema/ibl.json'] as const
}

export function getSchemaIblJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSchemaIblJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schema['ibl.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchemaIblJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schema)['ibl.json']['$get']>>>
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
              typeof parseResponse<Awaited<ReturnType<(typeof client.schema)['ibl.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.schema)['ibl.json']['$get']>>>
            >
          >,
          ReturnType<typeof getSchemaIblJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.schema)['ibl.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemaIblJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSchemaIblJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.schema['ibl.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
) {
  return ['search', '/search', toValue(args)] as const
}

export function getSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          ReturnType<typeof getSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchSuggestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['search-suggest']['$get']>>,
) {
  return ['search-suggest', '/search-suggest', toValue(args)] as const
}

export function getSearchSuggestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['search-suggest']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchSuggestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['search-suggest'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchSuggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search-suggest']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['search-suggest']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['search-suggest']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['search-suggest']['$get']>>>
            >
          >,
          ReturnType<typeof getSearchSuggestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['search-suggest']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchSuggestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchSuggestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['search-suggest'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          ReturnType<typeof getStatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserPurchasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.purchases.$get>>,
) {
  return ['user', '/user/purchases', toValue(args)] as const
}

export function getUserPurchasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.purchases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserPurchasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.purchases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserPurchases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.purchases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.purchases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.purchases.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.purchases.$get>>>>
          >,
          ReturnType<typeof getUserPurchasesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.purchases.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserPurchasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserPurchasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.purchases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserRecommendationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.recommendations.$get>>,
) {
  return ['user', '/user/recommendations', toValue(args)] as const
}

export function getUserRecommendationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.recommendations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.recommendations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserRecommendations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.recommendations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.recommendations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.recommendations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.recommendations.$get>>>
            >
          >,
          ReturnType<typeof getUserRecommendationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.recommendations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.recommendations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserWatchingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.watching.$get>>,
) {
  return ['user', '/user/watching', toValue(args)] as const
}

export function getUserWatchingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.watching.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserWatchingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.watching.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserWatching<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.watching.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.watching.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.watching.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.watching.$get>>>>
          >,
          ReturnType<typeof getUserWatchingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.watching.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserWatchingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserWatchingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.watching.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
