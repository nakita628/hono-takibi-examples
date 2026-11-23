import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getArticleArticleIdQueryKey(
  args: InferRequestType<(typeof client.article)[':article_id']['$get']>,
) {
  return ['article', '/article/:article_id', args] as const
}

export function getArticleArticleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.article)[':article_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.article)[':article_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.article)[':article_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticleArticleIdQueryKey>
  >({
    queryKey: getArticleArticleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.article[':article_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArticleArticleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.article)[':article_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.article)[':article_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.article)[':article_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArticleArticleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArticleArticleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getArticleArticleIdContentQueryKey(
  args: InferRequestType<(typeof client.article)[':article_id']['content']['$get']>,
) {
  return ['article', '/article/:article_id/content', args] as const
}

export function getArticleArticleIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.article)[':article_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.article)[':article_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getArticleArticleIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.article[':article_id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArticleArticleIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.article)[':article_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.article)[':article_id']['content']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getArticleArticleIdContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getArticleArticleIdFansQueryKey(
  args: InferRequestType<(typeof client.article)[':article_id']['fans']['$get']>,
) {
  return ['article', '/article/:article_id/fans', args] as const
}

export function getArticleArticleIdFansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.article)[':article_id']['fans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.article)[':article_id']['fans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getArticleArticleIdFansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.article[':article_id'].fans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArticleArticleIdFans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.article)[':article_id']['fans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.article)[':article_id']['fans']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getArticleArticleIdFansQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getArticleArticleIdMarkdownQueryKey(
  args: InferRequestType<(typeof client.article)[':article_id']['markdown']['$get']>,
) {
  return ['article', '/article/:article_id/markdown', args] as const
}

export function getArticleArticleIdMarkdownQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.article)[':article_id']['markdown']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.article)[':article_id']['markdown']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getArticleArticleIdMarkdownQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.article[':article_id'].markdown.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArticleArticleIdMarkdown<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.article)[':article_id']['markdown']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.article)[':article_id']['markdown']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getArticleArticleIdMarkdownQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getArticleArticleIdRelatedQueryKey(
  args: InferRequestType<(typeof client.article)[':article_id']['related']['$get']>,
) {
  return ['article', '/article/:article_id/related', args] as const
}

export function getArticleArticleIdRelatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.article)[':article_id']['related']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.article)[':article_id']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getArticleArticleIdRelatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.article[':article_id'].related.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArticleArticleIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.article)[':article_id']['related']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.article)[':article_id']['related']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getArticleArticleIdRelatedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getArticleArticleIdResponsesQueryKey(
  args: InferRequestType<(typeof client.article)[':article_id']['responses']['$get']>,
) {
  return ['article', '/article/:article_id/responses', args] as const
}

export function getArticleArticleIdResponsesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.article)[':article_id']['responses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.article)[':article_id']['responses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getArticleArticleIdResponsesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.article[':article_id'].responses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArticleArticleIdResponses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.article)[':article_id']['responses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.article)[':article_id']['responses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getArticleArticleIdResponsesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLatestpostsTopicSlugQueryKey(
  args: InferRequestType<(typeof client.latestposts)[':topic_slug']['$get']>,
) {
  return ['latestposts', '/latestposts/:topic_slug', args] as const
}

export function getLatestpostsTopicSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.latestposts)[':topic_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.latestposts)[':topic_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLatestpostsTopicSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.latestposts[':topic_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLatestpostsTopicSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.latestposts)[':topic_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.latestposts)[':topic_slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getLatestpostsTopicSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getListListIdQueryKey(
  args: InferRequestType<(typeof client.list)[':list_id']['$get']>,
) {
  return ['list', '/list/:list_id', args] as const
}

export function getListListIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.list)[':list_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.list)[':list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.list)[':list_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListListIdQueryKey>
  >({
    queryKey: getListListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.list[':list_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createListListId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.list)[':list_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.list)[':list_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.list)[':list_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListListIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListListIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListListIdArticlesQueryKey(
  args: InferRequestType<(typeof client.list)[':list_id']['articles']['$get']>,
) {
  return ['list', '/list/:list_id/articles', args] as const
}

export function getListListIdArticlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.list)[':list_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.list)[':list_id']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListListIdArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.list[':list_id'].articles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListListIdArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.list)[':list_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.list)[':list_id']['articles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListListIdArticlesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListListIdResponsesQueryKey(
  args: InferRequestType<(typeof client.list)[':list_id']['responses']['$get']>,
) {
  return ['list', '/list/:list_id/responses', args] as const
}

export function getListListIdResponsesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.list)[':list_id']['responses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.list)[':list_id']['responses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListListIdResponsesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.list[':list_id'].responses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListListIdResponses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.list)[':list_id']['responses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.list)[':list_id']['responses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListListIdResponsesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPublicationIdForPublicationSlugQueryKey(
  args: InferRequestType<(typeof client.publication.id_for)[':publication_slug']['$get']>,
) {
  return ['publication', '/publication/id_for/:publication_slug', args] as const
}

export function getPublicationIdForPublicationSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.publication.id_for)[':publication_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.publication.id_for)[':publication_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPublicationIdForPublicationSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.publication.id_for[':publication_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicationIdForPublicationSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.publication.id_for)[':publication_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.publication.id_for)[':publication_slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPublicationIdForPublicationSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPublicationPublicationIdQueryKey(
  args: InferRequestType<(typeof client.publication)[':publication_id']['$get']>,
) {
  return ['publication', '/publication/:publication_id', args] as const
}

export function getPublicationPublicationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.publication)[':publication_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.publication)[':publication_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPublicationPublicationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.publication[':publication_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicationPublicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.publication)[':publication_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.publication)[':publication_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPublicationPublicationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPublicationPublicationIdArticlesQueryKey(
  args: InferRequestType<(typeof client.publication)[':publication_id']['articles']['$get']>,
) {
  return ['publication', '/publication/:publication_id/articles', args] as const
}

export function getPublicationPublicationIdArticlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.publication)[':publication_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.publication)[':publication_id']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPublicationPublicationIdArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.publication[':publication_id'].articles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicationPublicationIdArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.publication)[':publication_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.publication)[':publication_id']['articles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getPublicationPublicationIdArticlesQueryKey>
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
      ...getPublicationPublicationIdArticlesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPublicationPublicationIdNewsletterQueryKey(
  args: InferRequestType<(typeof client.publication)[':publication_id']['newsletter']['$get']>,
) {
  return ['publication', '/publication/:publication_id/newsletter', args] as const
}

export function getPublicationPublicationIdNewsletterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.publication)[':publication_id']['newsletter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.publication)[':publication_id']['newsletter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPublicationPublicationIdNewsletterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.publication[':publication_id'].newsletter.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicationPublicationIdNewsletter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.publication)[':publication_id']['newsletter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.publication)[':publication_id']['newsletter']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getPublicationPublicationIdNewsletterQueryKey>
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
      ...getPublicationPublicationIdNewsletterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRelatedTagsTagQueryKey(
  args: InferRequestType<(typeof client.related_tags)[':tag']['$get']>,
) {
  return ['related_tags', '/related_tags/:tag', args] as const
}

export function getRelatedTagsTagQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.related_tags)[':tag']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.related_tags)[':tag']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.related_tags)[':tag']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRelatedTagsTagQueryKey>
  >({
    queryKey: getRelatedTagsTagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.related_tags[':tag'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRelatedTagsTag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.related_tags)[':tag']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.related_tags)[':tag']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.related_tags)[':tag']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRelatedTagsTagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRelatedTagsTagQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchArticlesQueryQueryQueryKey(
  args: InferRequestType<(typeof client.search)['articles?query={query}']['$get']>,
) {
  return ['search', '/search/articles?query={query}', args] as const
}

export function getSearchArticlesQueryQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['articles?query={query}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)['articles?query={query}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSearchArticlesQueryQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search['articles?query={query}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchArticlesQueryQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['articles?query={query}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search)['articles?query={query}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSearchArticlesQueryQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSearchListsQueryQueryQueryKey(
  args: InferRequestType<(typeof client.search)['lists?query={query}']['$get']>,
) {
  return ['search', '/search/lists?query={query}', args] as const
}

export function getSearchListsQueryQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['lists?query={query}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)['lists?query={query}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSearchListsQueryQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search['lists?query={query}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchListsQueryQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['lists?query={query}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search)['lists?query={query}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSearchListsQueryQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSearchPublicationsQueryQueryQueryKey(
  args: InferRequestType<(typeof client.search)['publications?query={query}']['$get']>,
) {
  return ['search', '/search/publications?query={query}', args] as const
}

export function getSearchPublicationsQueryQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['publications?query={query}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)['publications?query={query}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSearchPublicationsQueryQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search['publications?query={query}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchPublicationsQueryQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['publications?query={query}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search)['publications?query={query}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSearchPublicationsQueryQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSearchTagsQueryQueryQueryKey(
  args: InferRequestType<(typeof client.search)['tags?query={query}']['$get']>,
) {
  return ['search', '/search/tags?query={query}', args] as const
}

export function getSearchTagsQueryQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['tags?query={query}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)['tags?query={query}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSearchTagsQueryQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search['tags?query={query}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchTagsQueryQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['tags?query={query}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search)['tags?query={query}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSearchTagsQueryQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSearchUsersQueryQueryQueryKey(
  args: InferRequestType<(typeof client.search)['users?query={query}']['$get']>,
) {
  return ['search', '/search/users?query={query}', args] as const
}

export function getSearchUsersQueryQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['users?query={query}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)['users?query={query}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSearchUsersQueryQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search['users?query={query}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchUsersQueryQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['users?query={query}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search)['users?query={query}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSearchUsersQueryQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTopWriterTopicSlugQueryKey(
  args: InferRequestType<(typeof client.top_writer)[':topic_slug']['$get']>,
) {
  return ['top_writer', '/top_writer/:topic_slug', args] as const
}

export function getTopWriterTopicSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.top_writer)[':topic_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.top_writer)[':topic_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.top_writer)[':topic_slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopWriterTopicSlugQueryKey>
  >({
    queryKey: getTopWriterTopicSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.top_writer[':topic_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTopWriterTopicSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.top_writer)[':topic_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.top_writer)[':topic_slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.top_writer)[':topic_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTopWriterTopicSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTopWriterTopicSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTopfeedsTagModeQueryKey(
  args: InferRequestType<(typeof client.topfeeds)[':tag'][':mode']['$get']>,
) {
  return ['topfeeds', '/topfeeds/:tag/:mode', args] as const
}

export function getTopfeedsTagModeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.topfeeds)[':tag'][':mode']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.topfeeds)[':tag'][':mode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.topfeeds)[':tag'][':mode']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopfeedsTagModeQueryKey>
  >({
    queryKey: getTopfeedsTagModeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.topfeeds[':tag'][':mode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTopfeedsTagMode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.topfeeds)[':tag'][':mode']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.topfeeds)[':tag'][':mode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.topfeeds)[':tag'][':mode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTopfeedsTagModeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTopfeedsTagModeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserIdForUsernameQueryKey(
  args: InferRequestType<(typeof client.user.id_for)[':username']['$get']>,
) {
  return ['user', '/user/id_for/:username', args] as const
}

export function getUserIdForUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user.id_for)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.id_for)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user.id_for)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdForUsernameQueryKey>
  >({
    queryKey: getUserIdForUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.id_for[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserIdForUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user.id_for)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user.id_for)[':username']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user.id_for)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdForUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserIdForUsernameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserUserIdQueryKey(
  args: InferRequestType<(typeof client.user)[':user_id']['$get']>,
) {
  return ['user', '/user/:user_id', args] as const
}

export function getUserUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdQueryKey>
  >({
    queryKey: getUserUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':user_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':user_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':user_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserUserIdArticlesQueryKey(
  args: InferRequestType<(typeof client.user)[':user_id']['articles']['$get']>,
) {
  return ['user', '/user/:user_id/articles', args] as const
}

export function getUserUserIdArticlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':user_id']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserUserIdArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':user_id'].articles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserUserIdArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':user_id']['articles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUserIdArticlesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserUserIdFollowersQueryKey(
  args: InferRequestType<(typeof client.user)[':user_id']['followers']['$get']>,
) {
  return ['user', '/user/:user_id/followers', args] as const
}

export function getUserUserIdFollowersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':user_id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserUserIdFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':user_id'].followers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserUserIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':user_id']['followers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUserIdFollowersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserUserIdFollowingQueryKey(
  args: InferRequestType<(typeof client.user)[':user_id']['following']['$get']>,
) {
  return ['user', '/user/:user_id/following', args] as const
}

export function getUserUserIdFollowingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':user_id']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserUserIdFollowingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':user_id'].following.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserUserIdFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':user_id']['following']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUserIdFollowingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserUserIdInterestsQueryKey(
  args: InferRequestType<(typeof client.user)[':user_id']['interests']['$get']>,
) {
  return ['user', '/user/:user_id/interests', args] as const
}

export function getUserUserIdInterestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['interests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':user_id']['interests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserUserIdInterestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':user_id'].interests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserUserIdInterests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['interests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':user_id']['interests']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUserIdInterestsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserUserIdListsQueryKey(
  args: InferRequestType<(typeof client.user)[':user_id']['lists']['$get']>,
) {
  return ['user', '/user/:user_id/lists', args] as const
}

export function getUserUserIdListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':user_id']['lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':user_id']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':user_id']['lists']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdListsQueryKey>
  >({
    queryKey: getUserUserIdListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':user_id'].lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserUserIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':user_id']['lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':user_id']['lists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user)[':user_id']['lists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUserIdListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserUserIdPublicationsQueryKey(
  args: InferRequestType<(typeof client.user)[':user_id']['publications']['$get']>,
) {
  return ['user', '/user/:user_id/publications', args] as const
}

export function getUserUserIdPublicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':user_id']['publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserUserIdPublicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':user_id'].publications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserUserIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':user_id']['publications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getUserUserIdPublicationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserUserIdTopArticlesQueryKey(
  args: InferRequestType<(typeof client.user)[':user_id']['top_articles']['$get']>,
) {
  return ['user', '/user/:user_id/top_articles', args] as const
}

export function getUserUserIdTopArticlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['top_articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':user_id']['top_articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserUserIdTopArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':user_id'].top_articles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserUserIdTopArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':user_id']['top_articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':user_id']['top_articles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getUserUserIdTopArticlesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
