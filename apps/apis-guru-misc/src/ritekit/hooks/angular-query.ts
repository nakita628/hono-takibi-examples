import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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
  args: InferRequestType<(typeof client.v1.emoji)['auto-emojify']['$get']>,
) {
  return ['v1', '/v1/emoji/auto-emojify', args] as const
}

export function getV1EmojiAutoEmojifyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.emoji)['auto-emojify']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.emoji)['auto-emojify']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.emoji)['auto-emojify']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmojiAutoEmojifyQueryKey>
  >({
    queryKey: getV1EmojiAutoEmojifyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.emoji['auto-emojify'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1EmojiAutoEmojify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.emoji)['auto-emojify']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.emoji)['auto-emojify']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.emoji)['auto-emojify']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmojiAutoEmojifyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EmojiAutoEmojifyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1EmojiSuggestionsQueryKey(
  args: InferRequestType<typeof client.v1.emoji.suggestions.$get>,
) {
  return ['v1', '/v1/emoji/suggestions', args] as const
}

export function getV1EmojiSuggestionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.emoji.suggestions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.emoji.suggestions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.emoji.suggestions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmojiSuggestionsQueryKey>
  >({
    queryKey: getV1EmojiSuggestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.emoji.suggestions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1EmojiSuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.emoji.suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.emoji.suggestions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.emoji.suggestions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmojiSuggestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EmojiSuggestionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1ImagesAnimateQueryKey(
  args: InferRequestType<typeof client.v1.images.animate.$get>,
) {
  return ['v1', '/v1/images/animate', args] as const
}

export function getV1ImagesAnimateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.animate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.images.animate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.animate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ImagesAnimateQueryKey>
  >({
    queryKey: getV1ImagesAnimateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.images.animate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1ImagesAnimate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.animate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.images.animate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.animate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ImagesAnimateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ImagesAnimateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1ImagesLogoQueryKey(args: InferRequestType<typeof client.v1.images.logo.$get>) {
  return ['v1', '/v1/images/logo', args] as const
}

export function getV1ImagesLogoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.logo.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.images.logo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.logo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ImagesLogoQueryKey>
  >({
    queryKey: getV1ImagesLogoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.images.logo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1ImagesLogo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.logo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.images.logo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.logo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ImagesLogoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ImagesLogoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1ImagesQuoteQueryKey(
  args: InferRequestType<typeof client.v1.images.quote.$get>,
) {
  return ['v1', '/v1/images/quote', args] as const
}

export function getV1ImagesQuoteQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.quote.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.images.quote.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.quote.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ImagesQuoteQueryKey>
  >({
    queryKey: getV1ImagesQuoteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.images.quote.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1ImagesQuote<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.quote.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.images.quote.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.images.quote.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ImagesQuoteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ImagesQuoteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1LinkCtaQueryKey() {
  return ['v1', '/v1/link/cta'] as const
}

export function getV1LinkCtaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.link.cta.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.link.cta.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1LinkCtaQueryKey>
  >({
    queryKey: getV1LinkCtaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.link.cta.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1LinkCta<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.link.cta.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.link.cta.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1LinkCtaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1LinkCtaQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1LinkShortLinkQueryKey(
  args: InferRequestType<(typeof client.v1.link)['short-link']['$get']>,
) {
  return ['v1', '/v1/link/short-link', args] as const
}

export function getV1LinkShortLinkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.link)['short-link']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.link)['short-link']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.link)['short-link']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LinkShortLinkQueryKey>
  >({
    queryKey: getV1LinkShortLinkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.link['short-link'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1LinkShortLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.link)['short-link']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.link)['short-link']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.link)['short-link']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LinkShortLinkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1LinkShortLinkQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1SearchTrendingQueryKey(
  args: InferRequestType<typeof client.v1.search.trending.$get>,
) {
  return ['v1', '/v1/search/trending', args] as const
}

export function getV1SearchTrendingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.search.trending.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.search.trending.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.search.trending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SearchTrendingQueryKey>
  >({
    queryKey: getV1SearchTrendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.search.trending.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1SearchTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.search.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.search.trending.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.search.trending.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SearchTrendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SearchTrendingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1StatsAutoHashtagQueryKey(
  args: InferRequestType<(typeof client.v1.stats)['auto-hashtag']['$get']>,
) {
  return ['v1', '/v1/stats/auto-hashtag', args] as const
}

export function getV1StatsAutoHashtagQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats)['auto-hashtag']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stats)['auto-hashtag']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats)['auto-hashtag']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatsAutoHashtagQueryKey>
  >({
    queryKey: getV1StatsAutoHashtagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stats['auto-hashtag'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1StatsAutoHashtag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats)['auto-hashtag']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.stats)['auto-hashtag']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stats)['auto-hashtag']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsAutoHashtagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1StatsAutoHashtagQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1StatsHashtagSuggestionsQueryKey(
  args: InferRequestType<(typeof client.v1.stats)['hashtag-suggestions']['$get']>,
) {
  return ['v1', '/v1/stats/hashtag-suggestions', args] as const
}

export function getV1StatsHashtagSuggestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.stats)['hashtag-suggestions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stats)['hashtag-suggestions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1StatsHashtagSuggestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stats['hashtag-suggestions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1StatsHashtagSuggestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.stats)['hashtag-suggestions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.stats)['hashtag-suggestions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1StatsHashtagSuggestionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1StatsHistoryHashtagQueryKey(
  args: InferRequestType<(typeof client.v1.stats.history)[':hashtag']['$get']>,
) {
  return ['v1', '/v1/stats/history/:hashtag', args] as const
}

export function getV1StatsHistoryHashtagQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.stats.history)[':hashtag']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stats.history)[':hashtag']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1StatsHistoryHashtagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stats.history[':hashtag'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1StatsHistoryHashtag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.stats.history)[':hashtag']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.stats.history)[':hashtag']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1StatsHistoryHashtagQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1StatsMultipleHashtagsQueryKey(
  args: InferRequestType<(typeof client.v1.stats)['multiple-hashtags']['$get']>,
) {
  return ['v1', '/v1/stats/multiple-hashtags', args] as const
}

export function getV1StatsMultipleHashtagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.stats)['multiple-hashtags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stats)['multiple-hashtags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1StatsMultipleHashtagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stats['multiple-hashtags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1StatsMultipleHashtags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.stats)['multiple-hashtags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.stats)['multiple-hashtags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1StatsMultipleHashtagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2InstagramHashtagsCleanerQueryKey(
  args: InferRequestType<(typeof client.v2.instagram)['hashtags-cleaner']['$get']>,
) {
  return ['v2', '/v2/instagram/hashtags-cleaner', args] as const
}

export function getV2InstagramHashtagsCleanerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.instagram)['hashtags-cleaner']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.instagram)['hashtags-cleaner']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2InstagramHashtagsCleanerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.instagram['hashtags-cleaner'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2InstagramHashtagsCleaner<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.instagram)['hashtags-cleaner']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.instagram)['hashtags-cleaner']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2InstagramHashtagsCleanerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
