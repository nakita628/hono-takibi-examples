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

export function getArticleKey() {
  return ['article'] as const
}

export function getLatestpostsKey() {
  return ['latestposts'] as const
}

export function getListKey() {
  return ['list'] as const
}

export function getPublicationKey() {
  return ['publication'] as const
}

export function getRelatedTagsKey() {
  return ['related_tags'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getTopWriterKey() {
  return ['top_writer'] as const
}

export function getTopfeedsKey() {
  return ['topfeeds'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArticleArticleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.article)[':article_id']['$get']>>,
) {
  return ['article', '/article/:article_id', toValue(args)] as const
}

export function getArticleArticleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.article)[':article_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticleArticleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.article[':article_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticleArticleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.article)[':article_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.article)[':article_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.article)[':article_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.article)[':article_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArticleArticleIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.article)[':article_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticleArticleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticleArticleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.article[':article_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArticleArticleIdContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.article)[':article_id']['content']['$get']>
  >,
) {
  return ['article', '/article/:article_id/content', toValue(args)] as const
}

export function getArticleArticleIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.article)[':article_id']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticleArticleIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.article[':article_id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticleArticleIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.article)[':article_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.article)[':article_id']['content']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.article)[':article_id']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.article)[':article_id']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArticleArticleIdContentQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.article)[':article_id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticleArticleIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticleArticleIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.article[':article_id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArticleArticleIdFansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.article)[':article_id']['fans']['$get']>>,
) {
  return ['article', '/article/:article_id/fans', toValue(args)] as const
}

export function getArticleArticleIdFansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.article)[':article_id']['fans']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticleArticleIdFansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.article[':article_id'].fans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticleArticleIdFans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.article)[':article_id']['fans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.article)[':article_id']['fans']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.article)[':article_id']['fans']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.article)[':article_id']['fans']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArticleArticleIdFansQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.article)[':article_id']['fans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticleArticleIdFansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticleArticleIdFansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.article[':article_id'].fans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArticleArticleIdMarkdownQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.article)[':article_id']['markdown']['$get']>
  >,
) {
  return ['article', '/article/:article_id/markdown', toValue(args)] as const
}

export function getArticleArticleIdMarkdownQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.article)[':article_id']['markdown']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticleArticleIdMarkdownQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.article[':article_id'].markdown.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticleArticleIdMarkdown<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.article)[':article_id']['markdown']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.article)[':article_id']['markdown']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.article)[':article_id']['markdown']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.article)[':article_id']['markdown']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArticleArticleIdMarkdownQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.article)[':article_id']['markdown']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticleArticleIdMarkdownQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticleArticleIdMarkdownQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.article[':article_id'].markdown.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArticleArticleIdRelatedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.article)[':article_id']['related']['$get']>
  >,
) {
  return ['article', '/article/:article_id/related', toValue(args)] as const
}

export function getArticleArticleIdRelatedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.article)[':article_id']['related']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticleArticleIdRelatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.article[':article_id'].related.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticleArticleIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.article)[':article_id']['related']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.article)[':article_id']['related']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.article)[':article_id']['related']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.article)[':article_id']['related']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArticleArticleIdRelatedQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.article)[':article_id']['related']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticleArticleIdRelatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticleArticleIdRelatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.article[':article_id'].related.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArticleArticleIdResponsesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.article)[':article_id']['responses']['$get']>
  >,
) {
  return ['article', '/article/:article_id/responses', toValue(args)] as const
}

export function getArticleArticleIdResponsesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.article)[':article_id']['responses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticleArticleIdResponsesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.article[':article_id'].responses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticleArticleIdResponses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.article)[':article_id']['responses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.article)[':article_id']['responses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.article)[':article_id']['responses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.article)[':article_id']['responses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArticleArticleIdResponsesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.article)[':article_id']['responses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticleArticleIdResponsesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticleArticleIdResponsesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.article[':article_id'].responses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLatestpostsTopicSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.latestposts)[':topic_slug']['$get']>>,
) {
  return ['latestposts', '/latestposts/:topic_slug', toValue(args)] as const
}

export function getLatestpostsTopicSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.latestposts)[':topic_slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLatestpostsTopicSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.latestposts[':topic_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLatestpostsTopicSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.latestposts)[':topic_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.latestposts)[':topic_slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.latestposts)[':topic_slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.latestposts)[':topic_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLatestpostsTopicSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.latestposts)[':topic_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLatestpostsTopicSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLatestpostsTopicSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.latestposts[':topic_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListListIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.list)[':list_id']['$get']>>,
) {
  return ['list', '/list/:list_id', toValue(args)] as const
}

export function getListListIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.list)[':list_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListListIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.list[':list_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListListId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.list)[':list_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.list)[':list_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.list)[':list_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.list)[':list_id']['$get']>>>
            >
          >,
          ReturnType<typeof getListListIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.list)[':list_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListListIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListListIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.list[':list_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListListIdArticlesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.list)[':list_id']['articles']['$get']>>,
) {
  return ['list', '/list/:list_id/articles', toValue(args)] as const
}

export function getListListIdArticlesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.list)[':list_id']['articles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListListIdArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.list[':list_id'].articles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListListIdArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.list)[':list_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.list)[':list_id']['articles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.list)[':list_id']['articles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.list)[':list_id']['articles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListListIdArticlesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.list)[':list_id']['articles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListListIdArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListListIdArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.list[':list_id'].articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListListIdResponsesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.list)[':list_id']['responses']['$get']>>,
) {
  return ['list', '/list/:list_id/responses', toValue(args)] as const
}

export function getListListIdResponsesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.list)[':list_id']['responses']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListListIdResponsesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.list[':list_id'].responses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListListIdResponses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.list)[':list_id']['responses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.list)[':list_id']['responses']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.list)[':list_id']['responses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.list)[':list_id']['responses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListListIdResponsesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.list)[':list_id']['responses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListListIdResponsesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListListIdResponsesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.list[':list_id'].responses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPublicationIdForPublicationSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.publication.id_for)[':publication_slug']['$get']>
  >,
) {
  return ['publication', '/publication/id_for/:publication_slug', toValue(args)] as const
}

export function getPublicationIdForPublicationSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.publication.id_for)[':publication_slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublicationIdForPublicationSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.publication.id_for[':publication_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublicationIdForPublicationSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.publication.id_for)[':publication_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.publication.id_for)[':publication_slug']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.publication.id_for)[':publication_slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.publication.id_for)[':publication_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPublicationIdForPublicationSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.publication.id_for)[':publication_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicationIdForPublicationSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublicationIdForPublicationSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.publication.id_for[':publication_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPublicationPublicationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.publication)[':publication_id']['$get']>>,
) {
  return ['publication', '/publication/:publication_id', toValue(args)] as const
}

export function getPublicationPublicationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.publication)[':publication_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublicationPublicationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.publication[':publication_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublicationPublicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.publication)[':publication_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.publication)[':publication_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.publication)[':publication_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.publication)[':publication_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPublicationPublicationIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.publication)[':publication_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicationPublicationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublicationPublicationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.publication[':publication_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPublicationPublicationIdArticlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.publication)[':publication_id']['articles']['$get']>
  >,
) {
  return ['publication', '/publication/:publication_id/articles', toValue(args)] as const
}

export function getPublicationPublicationIdArticlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.publication)[':publication_id']['articles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublicationPublicationIdArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.publication[':publication_id'].articles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublicationPublicationIdArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.publication)[':publication_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.publication)[':publication_id']['articles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.publication)[':publication_id']['articles']['$get']>
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
                  ReturnType<(typeof client.publication)[':publication_id']['articles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPublicationPublicationIdArticlesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.publication)[':publication_id']['articles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicationPublicationIdArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublicationPublicationIdArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.publication[':publication_id'].articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPublicationPublicationIdNewsletterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.publication)[':publication_id']['newsletter']['$get']>
  >,
) {
  return ['publication', '/publication/:publication_id/newsletter', toValue(args)] as const
}

export function getPublicationPublicationIdNewsletterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.publication)[':publication_id']['newsletter']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublicationPublicationIdNewsletterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.publication[':publication_id'].newsletter.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublicationPublicationIdNewsletter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.publication)[':publication_id']['newsletter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.publication)[':publication_id']['newsletter']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.publication)[':publication_id']['newsletter']['$get']>
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
                  ReturnType<(typeof client.publication)[':publication_id']['newsletter']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPublicationPublicationIdNewsletterQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.publication)[':publication_id']['newsletter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicationPublicationIdNewsletterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublicationPublicationIdNewsletterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.publication[':publication_id'].newsletter.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRelatedTagsTagQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.related_tags)[':tag']['$get']>>,
) {
  return ['related_tags', '/related_tags/:tag', toValue(args)] as const
}

export function getRelatedTagsTagQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.related_tags)[':tag']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRelatedTagsTagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.related_tags[':tag'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRelatedTagsTag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.related_tags)[':tag']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.related_tags)[':tag']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.related_tags)[':tag']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.related_tags)[':tag']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRelatedTagsTagQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.related_tags)[':tag']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRelatedTagsTagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRelatedTagsTagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.related_tags[':tag'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchArticlesQueryQueryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)['articles?query={query}']['$get']>
  >,
) {
  return ['search', '/search/articles?query={query}', toValue(args)] as const
}

export function getSearchArticlesQueryQueryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)['articles?query={query}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchArticlesQueryQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search['articles?query={query}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchArticlesQueryQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['articles?query={query}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)['articles?query={query}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)['articles?query={query}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)['articles?query={query}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchArticlesQueryQueryQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.search)['articles?query={query}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchArticlesQueryQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchArticlesQueryQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search['articles?query={query}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchListsQueryQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)['lists?query={query}']['$get']>>,
) {
  return ['search', '/search/lists?query={query}', toValue(args)] as const
}

export function getSearchListsQueryQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)['lists?query={query}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchListsQueryQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search['lists?query={query}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchListsQueryQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['lists?query={query}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)['lists?query={query}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)['lists?query={query}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)['lists?query={query}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchListsQueryQueryQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.search)['lists?query={query}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchListsQueryQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchListsQueryQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search['lists?query={query}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchPublicationsQueryQueryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)['publications?query={query}']['$get']>
  >,
) {
  return ['search', '/search/publications?query={query}', toValue(args)] as const
}

export function getSearchPublicationsQueryQueryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)['publications?query={query}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchPublicationsQueryQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search['publications?query={query}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchPublicationsQueryQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['publications?query={query}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)['publications?query={query}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)['publications?query={query}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)['publications?query={query}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchPublicationsQueryQueryQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.search)['publications?query={query}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchPublicationsQueryQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchPublicationsQueryQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search['publications?query={query}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchTagsQueryQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)['tags?query={query}']['$get']>>,
) {
  return ['search', '/search/tags?query={query}', toValue(args)] as const
}

export function getSearchTagsQueryQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)['tags?query={query}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchTagsQueryQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search['tags?query={query}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchTagsQueryQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['tags?query={query}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)['tags?query={query}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)['tags?query={query}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)['tags?query={query}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchTagsQueryQueryQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.search)['tags?query={query}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchTagsQueryQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchTagsQueryQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search['tags?query={query}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchUsersQueryQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)['users?query={query}']['$get']>>,
) {
  return ['search', '/search/users?query={query}', toValue(args)] as const
}

export function getSearchUsersQueryQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)['users?query={query}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchUsersQueryQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search['users?query={query}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchUsersQueryQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['users?query={query}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)['users?query={query}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)['users?query={query}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)['users?query={query}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchUsersQueryQueryQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.search)['users?query={query}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchUsersQueryQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchUsersQueryQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search['users?query={query}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopWriterTopicSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.top_writer)[':topic_slug']['$get']>>,
) {
  return ['top_writer', '/top_writer/:topic_slug', toValue(args)] as const
}

export function getTopWriterTopicSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.top_writer)[':topic_slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopWriterTopicSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.top_writer[':topic_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTopWriterTopicSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.top_writer)[':topic_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.top_writer)[':topic_slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.top_writer)[':topic_slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.top_writer)[':topic_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTopWriterTopicSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.top_writer)[':topic_slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopWriterTopicSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopWriterTopicSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.top_writer[':topic_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopfeedsTagModeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.topfeeds)[':tag'][':mode']['$get']>>,
) {
  return ['topfeeds', '/topfeeds/:tag/:mode', toValue(args)] as const
}

export function getTopfeedsTagModeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.topfeeds)[':tag'][':mode']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopfeedsTagModeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.topfeeds[':tag'][':mode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTopfeedsTagMode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.topfeeds)[':tag'][':mode']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.topfeeds)[':tag'][':mode']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.topfeeds)[':tag'][':mode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.topfeeds)[':tag'][':mode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTopfeedsTagModeQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.topfeeds)[':tag'][':mode']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopfeedsTagModeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopfeedsTagModeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.topfeeds[':tag'][':mode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserIdForUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.id_for)[':username']['$get']>>,
) {
  return ['user', '/user/id_for/:username', toValue(args)] as const
}

export function getUserIdForUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.id_for)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdForUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.id_for[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserIdForUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user.id_for)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.id_for)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.id_for)[':username']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.id_for)[':username']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserIdForUsernameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.user.id_for)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdForUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdForUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.id_for[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['$get']>>,
) {
  return ['user', '/user/:user_id', toValue(args)] as const
}

export function getUserUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':user_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':user_id']['$get']>>>
            >
          >,
          ReturnType<typeof getUserUserIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdArticlesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['articles']['$get']>>,
) {
  return ['user', '/user/:user_id/articles', toValue(args)] as const
}

export function getUserUserIdArticlesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['articles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':user_id'].articles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['articles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':user_id']['articles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':user_id']['articles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserUserIdArticlesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.user)[':user_id']['articles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':user_id'].articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdFollowersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['followers']['$get']>>,
) {
  return ['user', '/user/:user_id/followers', toValue(args)] as const
}

export function getUserUserIdFollowersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['followers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':user_id'].followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['followers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':user_id']['followers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':user_id']['followers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserUserIdFollowersQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.user)[':user_id']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':user_id'].followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdFollowingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['following']['$get']>>,
) {
  return ['user', '/user/:user_id/following', toValue(args)] as const
}

export function getUserUserIdFollowingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['following']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdFollowingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':user_id'].following.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['following']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':user_id']['following']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':user_id']['following']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserUserIdFollowingQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.user)[':user_id']['following']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdFollowingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdFollowingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':user_id'].following.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdInterestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['interests']['$get']>>,
) {
  return ['user', '/user/:user_id/interests', toValue(args)] as const
}

export function getUserUserIdInterestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['interests']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdInterestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':user_id'].interests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdInterests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['interests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['interests']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':user_id']['interests']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':user_id']['interests']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserUserIdInterestsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.user)[':user_id']['interests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdInterestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdInterestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':user_id'].interests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdListsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['lists']['$get']>>,
) {
  return ['user', '/user/:user_id/lists', toValue(args)] as const
}

export function getUserUserIdListsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['lists']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':user_id'].lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':user_id']['lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':user_id']['lists']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':user_id']['lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':user_id']['lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserUserIdListsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':user_id']['lists']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':user_id'].lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdPublicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':user_id']['publications']['$get']>
  >,
) {
  return ['user', '/user/:user_id/publications', toValue(args)] as const
}

export function getUserUserIdPublicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':user_id']['publications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdPublicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':user_id'].publications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':user_id']['publications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':user_id']['publications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':user_id']['publications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserUserIdPublicationsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.user)[':user_id']['publications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdPublicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdPublicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':user_id'].publications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdTopArticlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':user_id']['top_articles']['$get']>
  >,
) {
  return ['user', '/user/:user_id/top_articles', toValue(args)] as const
}

export function getUserUserIdTopArticlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':user_id']['top_articles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdTopArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':user_id'].top_articles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdTopArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['top_articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':user_id']['top_articles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':user_id']['top_articles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':user_id']['top_articles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserUserIdTopArticlesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.user)[':user_id']['top_articles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdTopArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdTopArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':user_id'].top_articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
