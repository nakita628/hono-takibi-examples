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

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV1EmojiAutoEmojifyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.emoji)['auto-emojify']['$get']>>,
) {
  return ['v1', '/v1/emoji/auto-emojify', toValue(args)] as const
}

export function getV1EmojiAutoEmojifyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.emoji)['auto-emojify']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmojiAutoEmojifyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.emoji['auto-emojify'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmojiAutoEmojify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.emoji)['auto-emojify']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.emoji)['auto-emojify']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.emoji)['auto-emojify']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.emoji)['auto-emojify']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EmojiAutoEmojifyQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.emoji)['auto-emojify']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmojiAutoEmojifyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmojiAutoEmojifyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.emoji['auto-emojify'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EmojiSuggestionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.emoji.suggestions.$get>>,
) {
  return ['v1', '/v1/emoji/suggestions', toValue(args)] as const
}

export function getV1EmojiSuggestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.emoji.suggestions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmojiSuggestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.emoji.suggestions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmojiSuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.emoji.suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.emoji.suggestions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.emoji.suggestions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.emoji.suggestions.$get>>>
            >
          >,
          ReturnType<typeof getV1EmojiSuggestionsQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.emoji.suggestions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmojiSuggestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmojiSuggestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.emoji.suggestions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ImagesAnimateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.images.animate.$get>>,
) {
  return ['v1', '/v1/images/animate', toValue(args)] as const
}

export function getV1ImagesAnimateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.images.animate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ImagesAnimateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.images.animate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ImagesAnimate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.animate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.images.animate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.animate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.animate.$get>>>
            >
          >,
          ReturnType<typeof getV1ImagesAnimateQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.animate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ImagesAnimateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ImagesAnimateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.images.animate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ImagesLogoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.images.logo.$get>>,
) {
  return ['v1', '/v1/images/logo', toValue(args)] as const
}

export function getV1ImagesLogoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.images.logo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ImagesLogoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.images.logo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ImagesLogo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.logo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.images.logo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.logo.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.logo.$get>>>>
          >,
          ReturnType<typeof getV1ImagesLogoQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.logo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ImagesLogoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ImagesLogoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.images.logo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ImagesQuoteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.images.quote.$get>>,
) {
  return ['v1', '/v1/images/quote', toValue(args)] as const
}

export function getV1ImagesQuoteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.images.quote.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ImagesQuoteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.images.quote.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ImagesQuote<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.quote.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.images.quote.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.quote.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.quote.$get>>>
            >
          >,
          ReturnType<typeof getV1ImagesQuoteQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.quote.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ImagesQuoteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ImagesQuoteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.images.quote.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LinkCtaQueryKey() {
  return ['v1', '/v1/link/cta'] as const
}

export function getV1LinkCtaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1LinkCtaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.link.cta.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1LinkCta<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.link.cta.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.link.cta.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.link.cta.$get>>>>
          >,
          ReturnType<typeof getV1LinkCtaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.link.cta.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1LinkCtaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1LinkCtaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.link.cta.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LinkShortLinkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.link)['short-link']['$get']>>,
) {
  return ['v1', '/v1/link/short-link', toValue(args)] as const
}

export function getV1LinkShortLinkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.link)['short-link']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LinkShortLinkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.link['short-link'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LinkShortLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.link)['short-link']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.link)['short-link']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.link)['short-link']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.link)['short-link']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1LinkShortLinkQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.link)['short-link']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LinkShortLinkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LinkShortLinkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.link['short-link'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SearchTrendingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.search.trending.$get>>,
) {
  return ['v1', '/v1/search/trending', toValue(args)] as const
}

export function getV1SearchTrendingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.search.trending.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SearchTrendingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.search.trending.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SearchTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.search.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.search.trending.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.search.trending.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.search.trending.$get>>>
            >
          >,
          ReturnType<typeof getV1SearchTrendingQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.search.trending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SearchTrendingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SearchTrendingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.search.trending.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1StatsAutoHashtagQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.stats)['auto-hashtag']['$get']>>,
) {
  return ['v1', '/v1/stats/auto-hashtag', toValue(args)] as const
}

export function getV1StatsAutoHashtagQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.stats)['auto-hashtag']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1StatsAutoHashtagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.stats['auto-hashtag'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1StatsAutoHashtag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats)['auto-hashtag']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.stats)['auto-hashtag']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.stats)['auto-hashtag']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.stats)['auto-hashtag']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1StatsAutoHashtagQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats)['auto-hashtag']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatsAutoHashtagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1StatsAutoHashtagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.stats['auto-hashtag'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1StatsHashtagSuggestionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.stats)['hashtag-suggestions']['$get']>>,
) {
  return ['v1', '/v1/stats/hashtag-suggestions', toValue(args)] as const
}

export function getV1StatsHashtagSuggestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.stats)['hashtag-suggestions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1StatsHashtagSuggestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.stats['hashtag-suggestions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1StatsHashtagSuggestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.stats)['hashtag-suggestions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.stats)['hashtag-suggestions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.stats)['hashtag-suggestions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.stats)['hashtag-suggestions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1StatsHashtagSuggestionsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.stats)['hashtag-suggestions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatsHashtagSuggestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1StatsHashtagSuggestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.stats['hashtag-suggestions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1StatsHistoryHashtagQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.stats.history)[':hashtag']['$get']>>,
) {
  return ['v1', '/v1/stats/history/:hashtag', toValue(args)] as const
}

export function getV1StatsHistoryHashtagQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.stats.history)[':hashtag']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1StatsHistoryHashtagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.stats.history[':hashtag'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1StatsHistoryHashtag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.stats.history)[':hashtag']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.stats.history)[':hashtag']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.stats.history)[':hashtag']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.stats.history)[':hashtag']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1StatsHistoryHashtagQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.stats.history)[':hashtag']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatsHistoryHashtagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1StatsHistoryHashtagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.stats.history[':hashtag'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1StatsMultipleHashtagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.stats)['multiple-hashtags']['$get']>>,
) {
  return ['v1', '/v1/stats/multiple-hashtags', toValue(args)] as const
}

export function getV1StatsMultipleHashtagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.stats)['multiple-hashtags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1StatsMultipleHashtagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.stats['multiple-hashtags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1StatsMultipleHashtags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.stats)['multiple-hashtags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.stats)['multiple-hashtags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.stats)['multiple-hashtags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.stats)['multiple-hashtags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1StatsMultipleHashtagsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.stats)['multiple-hashtags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatsMultipleHashtagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1StatsMultipleHashtagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.stats['multiple-hashtags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2InstagramHashtagsCleanerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.instagram)['hashtags-cleaner']['$get']>
  >,
) {
  return ['v2', '/v2/instagram/hashtags-cleaner', toValue(args)] as const
}

export function getV2InstagramHashtagsCleanerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.instagram)['hashtags-cleaner']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2InstagramHashtagsCleanerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.instagram['hashtags-cleaner'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2InstagramHashtagsCleaner<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.instagram)['hashtags-cleaner']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.instagram)['hashtags-cleaner']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.instagram)['hashtags-cleaner']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.instagram)['hashtags-cleaner']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2InstagramHashtagsCleanerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v2.instagram)['hashtags-cleaner']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InstagramHashtagsCleanerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2InstagramHashtagsCleanerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.instagram['hashtags-cleaner'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
