import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccessTokensKey() {
  return ['access-tokens'] as const
}

export function getAnswersKey() {
  return ['answers'] as const
}

export function getAppsKey() {
  return ['apps'] as const
}

export function getBadgesKey() {
  return ['badges'] as const
}

export function getCommentsKey() {
  return ['comments'] as const
}

export function getErrorsKey() {
  return ['errors'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getFiltersKey() {
  return ['filters'] as const
}

export function getInboxKey() {
  return ['inbox'] as const
}

export function getInfoKey() {
  return ['info'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getPostsKey() {
  return ['posts'] as const
}

export function getPrivilegesKey() {
  return ['privileges'] as const
}

export function getQuestionsKey() {
  return ['questions'] as const
}

export function getRevisionsKey() {
  return ['revisions'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSimilarKey() {
  return ['similar'] as const
}

export function getSitesKey() {
  return ['sites'] as const
}

export function getSuggestedEditsKey() {
  return ['suggested-edits'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getAccessTokensAccessTokensQueryKey(
  args: InferRequestType<(typeof client)['access-tokens'][':accessTokens']['$get']>,
) {
  return ['access-tokens', '/access-tokens/:accessTokens', args] as const
}

export function getAccessTokensAccessTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-tokens'][':accessTokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['access-tokens'][':accessTokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-tokens'][':accessTokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessTokensAccessTokensQueryKey>
  >({
    queryKey: getAccessTokensAccessTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['access-tokens'][':accessTokens'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccessTokensAccessTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-tokens'][':accessTokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['access-tokens'][':accessTokens']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['access-tokens'][':accessTokens']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccessTokensAccessTokensQueryKey>
        >
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
      ...getAccessTokensAccessTokensQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccessTokensAccessTokensInvalidateQueryKey(
  args: InferRequestType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>,
) {
  return ['access-tokens', '/access-tokens/:accessTokens/invalidate', args] as const
}

export function getAccessTokensAccessTokensInvalidateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessTokensAccessTokensInvalidateQueryKey>
  >({
    queryKey: getAccessTokensAccessTokensInvalidateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['access-tokens'][':accessTokens'].invalidate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccessTokensAccessTokensInvalidate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccessTokensAccessTokensInvalidateQueryKey>
        >
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
      ...getAccessTokensAccessTokensInvalidateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAnswersQueryKey(args: InferRequestType<typeof client.answers.$get>) {
  return ['answers', '/answers', args] as const
}

export function getAnswersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.answers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAnswersQueryKey>
  >({
    queryKey: getAnswersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.answers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnswers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.answers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAnswersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnswersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAnswersIdsQueryKey(
  args: InferRequestType<(typeof client.answers)[':ids']['$get']>,
) {
  return ['answers', '/answers/:ids', args] as const
}

export function getAnswersIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.answers)[':ids']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnswersIdsQueryKey>
  >({
    queryKey: getAnswersIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.answers[':ids'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnswersIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.answers)[':ids']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnswersIdsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnswersIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAnswersIdsCommentsQueryKey(
  args: InferRequestType<(typeof client.answers)[':ids']['comments']['$get']>,
) {
  return ['answers', '/answers/:ids/comments', args] as const
}

export function getAnswersIdsCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.answers)[':ids']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.answers)[':ids']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnswersIdsCommentsQueryKey>
  >({
    queryKey: getAnswersIdsCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.answers[':ids'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnswersIdsComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.answers)[':ids']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.answers)[':ids']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnswersIdsCommentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnswersIdsCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAppsAccessTokensDeAuthenticateQueryKey(
  args: InferRequestType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>,
) {
  return ['apps', '/apps/:accessTokens/de-authenticate', args] as const
}

export function getAppsAccessTokensDeAuthenticateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAccessTokensDeAuthenticateQueryKey>
  >({
    queryKey: getAppsAccessTokensDeAuthenticateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':accessTokens']['de-authenticate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppsAccessTokensDeAuthenticate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAppsAccessTokensDeAuthenticateQueryKey>
        >
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
      ...getAppsAccessTokensDeAuthenticateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBadgesQueryKey(args: InferRequestType<typeof client.badges.$get>) {
  return ['badges', '/badges', args] as const
}

export function getBadgesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.badges.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBadgesQueryKey>
  >({
    queryKey: getBadgesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.badges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBadges<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.badges.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getBadgesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBadgesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBadgesNameQueryKey(args: InferRequestType<typeof client.badges.name.$get>) {
  return ['badges', '/badges/name', args] as const
}

export function getBadgesNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.name.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.badges.name.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.name.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBadgesNameQueryKey>
  >({
    queryKey: getBadgesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.badges.name.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBadgesName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.badges.name.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.name.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBadgesNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBadgesNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBadgesRecipientsQueryKey(
  args: InferRequestType<typeof client.badges.recipients.$get>,
) {
  return ['badges', '/badges/recipients', args] as const
}

export function getBadgesRecipientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.recipients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.badges.recipients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.recipients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBadgesRecipientsQueryKey>
  >({
    queryKey: getBadgesRecipientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.badges.recipients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBadgesRecipients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.recipients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.badges.recipients.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.badges.recipients.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBadgesRecipientsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBadgesRecipientsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBadgesTagsQueryKey(args: InferRequestType<typeof client.badges.tags.$get>) {
  return ['badges', '/badges/tags', args] as const
}

export function getBadgesTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.badges.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBadgesTagsQueryKey>
  >({
    queryKey: getBadgesTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.badges.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBadgesTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.badges.tags.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.tags.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBadgesTagsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBadgesTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBadgesIdsQueryKey(
  args: InferRequestType<(typeof client.badges)[':ids']['$get']>,
) {
  return ['badges', '/badges/:ids', args] as const
}

export function getBadgesIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.badges)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.badges)[':ids']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.badges)[':ids']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBadgesIdsQueryKey>
  >({
    queryKey: getBadgesIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.badges[':ids'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBadgesIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.badges)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.badges)[':ids']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.badges)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBadgesIdsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBadgesIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBadgesIdsRecipientsQueryKey(
  args: InferRequestType<(typeof client.badges)[':ids']['recipients']['$get']>,
) {
  return ['badges', '/badges/:ids/recipients', args] as const
}

export function getBadgesIdsRecipientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.badges)[':ids']['recipients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.badges)[':ids']['recipients']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.badges)[':ids']['recipients']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBadgesIdsRecipientsQueryKey>
  >({
    queryKey: getBadgesIdsRecipientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.badges[':ids'].recipients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBadgesIdsRecipients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.badges)[':ids']['recipients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.badges)[':ids']['recipients']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.badges)[':ids']['recipients']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBadgesIdsRecipientsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBadgesIdsRecipientsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCommentsQueryKey(args: InferRequestType<typeof client.comments.$get>) {
  return ['comments', '/comments', args] as const
}

export function getCommentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.comments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCommentsQueryKey>
  >({
    queryKey: getCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.comments.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCommentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCommentsIdsQueryKey(
  args: InferRequestType<(typeof client.comments)[':ids']['$get']>,
) {
  return ['comments', '/comments/:ids', args] as const
}

export function getCommentsIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':ids']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsIdsQueryKey>
  >({
    queryKey: getCommentsIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comments[':ids'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCommentsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.comments)[':ids']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommentsIdsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCommentsIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCommentsIdDeleteMutationKey() {
  return ['comments', '/comments/:id/delete', 'POST'] as const
}

export function getPostCommentsIdDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.comments)[':id']['delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.comments)[':id']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsIdDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.comments)[':id']['delete']['$post']>) {
      return parseResponse(client.comments[':id'].delete.$post(args, options))
    },
  })
}

export function createPostCommentsIdDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.comments)[':id']['delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.comments)[':id']['delete']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommentsIdDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCommentsIdEditMutationKey() {
  return ['comments', '/comments/:id/edit', 'POST'] as const
}

export function getPostCommentsIdEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['edit']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.comments)[':id']['edit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsIdEditMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.comments)[':id']['edit']['$post']>) {
      return parseResponse(client.comments[':id'].edit.$post(args, options))
    },
  })
}

export function createPostCommentsIdEdit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.comments)[':id']['edit']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.comments)[':id']['edit']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommentsIdEditMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getErrorsQueryKey(args: InferRequestType<typeof client.errors.$get>) {
  return ['errors', '/errors', args] as const
}

export function getErrorsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.errors.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.errors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.errors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getErrorsQueryKey>
  >({
    queryKey: getErrorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.errors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createErrors<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.errors.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.errors.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.errors.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getErrorsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getErrorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getErrorsIdQueryKey(args: InferRequestType<(typeof client.errors)[':id']['$get']>) {
  return ['errors', '/errors/:id', args] as const
}

export function getErrorsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.errors)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.errors)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.errors)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getErrorsIdQueryKey>
  >({
    queryKey: getErrorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.errors[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createErrorsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.errors)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.errors)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.errors)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getErrorsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getErrorsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEventsQueryKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function getEventsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >({
    queryKey: getEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.events.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getEventsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFiltersCreateQueryKey(
  args: InferRequestType<typeof client.filters.create.$get>,
) {
  return ['filters', '/filters/create', args] as const
}

export function getFiltersCreateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.create.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.filters.create.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.create.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFiltersCreateQueryKey>
  >({
    queryKey: getFiltersCreateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.filters.create.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFiltersCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.filters.create.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.create.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getFiltersCreateQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFiltersCreateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFiltersFiltersQueryKey(
  args: InferRequestType<(typeof client.filters)[':filters']['$get']>,
) {
  return ['filters', '/filters/:filters', args] as const
}

export function getFiltersFiltersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':filters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.filters)[':filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':filters']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFiltersFiltersQueryKey>
  >({
    queryKey: getFiltersFiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.filters[':filters'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFiltersFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':filters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.filters)[':filters']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':filters']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFiltersFiltersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFiltersFiltersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInboxQueryKey(args: InferRequestType<typeof client.inbox.$get>) {
  return ['inbox', '/inbox', args] as const
}

export function getInboxQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.inbox.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInboxQueryKey>
  >({
    queryKey: getInboxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inbox.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInbox<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.inbox.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getInboxQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInboxQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInboxUnreadQueryKey(args: InferRequestType<typeof client.inbox.unread.$get>) {
  return ['inbox', '/inbox/unread', args] as const
}

export function getInboxUnreadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.unread.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.inbox.unread.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.unread.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInboxUnreadQueryKey>
  >({
    queryKey: getInboxUnreadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inbox.unread.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInboxUnread<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.unread.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.inbox.unread.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.unread.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getInboxUnreadQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInboxUnreadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInfoQueryKey(args: InferRequestType<typeof client.info.$get>) {
  return ['info', '/info', args] as const
}

export function getInfoQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoQueryKey>
  >({
    queryKey: getInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.info.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getInfoQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeQueryKey(args: InferRequestType<typeof client.me.$get>) {
  return ['me', '/me', args] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(client.me.$get(args, { ...options, init: { ...options?.init, signal } }))
    },
  })
}

export function createMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getMeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeAnswersQueryKey(args: InferRequestType<typeof client.me.answers.$get>) {
  return ['me', '/me/answers', args] as const
}

export function getMeAnswersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.answers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.answers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.answers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeAnswersQueryKey>
  >({
    queryKey: getMeAnswersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.answers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeAnswers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.answers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.answers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.answers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMeAnswersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeAnswersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeAssociatedQueryKey(args: InferRequestType<typeof client.me.associated.$get>) {
  return ['me', '/me/associated', args] as const
}

export function getMeAssociatedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.associated.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.associated.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.associated.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeAssociatedQueryKey>
  >({
    queryKey: getMeAssociatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.associated.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeAssociated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.associated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.associated.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.associated.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMeAssociatedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeAssociatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeBadgesQueryKey(args: InferRequestType<typeof client.me.badges.$get>) {
  return ['me', '/me/badges', args] as const
}

export function getMeBadgesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.badges.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.badges.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.badges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeBadgesQueryKey>
  >({
    queryKey: getMeBadgesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.badges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeBadges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.badges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.badges.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.badges.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMeBadgesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeBadgesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeCommentsQueryKey(args: InferRequestType<typeof client.me.comments.$get>) {
  return ['me', '/me/comments', args] as const
}

export function getMeCommentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.comments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.comments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.comments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeCommentsQueryKey>
  >({
    queryKey: getMeCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.comments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.comments.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.comments.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMeCommentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeCommentsToIdQueryKey(
  args: InferRequestType<(typeof client.me.comments)[':toId']['$get']>,
) {
  return ['me', '/me/comments/:toId', args] as const
}

export function getMeCommentsToIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.comments)[':toId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.comments)[':toId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.comments)[':toId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeCommentsToIdQueryKey>
  >({
    queryKey: getMeCommentsToIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.comments[':toId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeCommentsToId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.comments)[':toId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me.comments)[':toId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.comments)[':toId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeCommentsToIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeCommentsToIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeFavoritesQueryKey(args: InferRequestType<typeof client.me.favorites.$get>) {
  return ['me', '/me/favorites', args] as const
}

export function getMeFavoritesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.favorites.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeFavoritesQueryKey>
  >({
    queryKey: getMeFavoritesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.favorites.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeFavorites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.favorites.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMeFavoritesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeFavoritesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeInboxQueryKey(args: InferRequestType<typeof client.me.inbox.$get>) {
  return ['me', '/me/inbox', args] as const
}

export function getMeInboxQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.inbox.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeInboxQueryKey>
  >({
    queryKey: getMeInboxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.inbox.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeInbox<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.inbox.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMeInboxQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeInboxQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeInboxUnreadQueryKey(
  args: InferRequestType<typeof client.me.inbox.unread.$get>,
) {
  return ['me', '/me/inbox/unread', args] as const
}

export function getMeInboxUnreadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.unread.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.inbox.unread.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.unread.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeInboxUnreadQueryKey>
  >({
    queryKey: getMeInboxUnreadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.inbox.unread.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeInboxUnread<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.unread.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.inbox.unread.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.unread.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeInboxUnreadQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeInboxUnreadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeMentionedQueryKey(args: InferRequestType<typeof client.me.mentioned.$get>) {
  return ['me', '/me/mentioned', args] as const
}

export function getMeMentionedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.mentioned.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.mentioned.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.mentioned.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeMentionedQueryKey>
  >({
    queryKey: getMeMentionedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.mentioned.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeMentioned<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.mentioned.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.mentioned.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.mentioned.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMeMentionedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeMentionedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeMergesQueryKey(args: InferRequestType<typeof client.me.merges.$get>) {
  return ['me', '/me/merges', args] as const
}

export function getMeMergesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.merges.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.merges.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.merges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeMergesQueryKey>
  >({
    queryKey: getMeMergesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.merges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeMerges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.merges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.merges.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.merges.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMeMergesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeMergesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeNotificationsQueryKey(
  args: InferRequestType<typeof client.me.notifications.$get>,
) {
  return ['me', '/me/notifications', args] as const
}

export function getMeNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.notifications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeNotificationsQueryKey>
  >({
    queryKey: getMeNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.notifications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.notifications.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeNotificationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeNotificationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeNotificationsUnreadQueryKey(
  args: InferRequestType<typeof client.me.notifications.unread.$get>,
) {
  return ['me', '/me/notifications/unread', args] as const
}

export function getMeNotificationsUnreadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.unread.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.notifications.unread.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.unread.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeNotificationsUnreadQueryKey>
  >({
    queryKey: getMeNotificationsUnreadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.notifications.unread.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeNotificationsUnread<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.unread.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.notifications.unread.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.unread.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeNotificationsUnreadQueryKey>
        >
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
      ...getMeNotificationsUnreadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMePrivilegesQueryKey(args: InferRequestType<typeof client.me.privileges.$get>) {
  return ['me', '/me/privileges', args] as const
}

export function getMePrivilegesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.privileges.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.privileges.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.privileges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMePrivilegesQueryKey>
  >({
    queryKey: getMePrivilegesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.privileges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMePrivileges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.privileges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.privileges.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.privileges.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMePrivilegesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMePrivilegesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeQuestionsQueryKey(args: InferRequestType<typeof client.me.questions.$get>) {
  return ['me', '/me/questions', args] as const
}

export function getMeQuestionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.questions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQuestionsQueryKey>
  >({
    queryKey: getMeQuestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.questions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeQuestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.questions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMeQuestionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeQuestionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeQuestionsFeaturedQueryKey(
  args: InferRequestType<typeof client.me.questions.featured.$get>,
) {
  return ['me', '/me/questions/featured', args] as const
}

export function getMeQuestionsFeaturedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.questions.featured.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.featured.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeQuestionsFeaturedQueryKey>
  >({
    queryKey: getMeQuestionsFeaturedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.questions.featured.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeQuestionsFeatured<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.questions.featured.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.featured.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeQuestionsFeaturedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeQuestionsFeaturedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeQuestionsNoAnswersQueryKey(
  args: InferRequestType<(typeof client.me.questions)['no-answers']['$get']>,
) {
  return ['me', '/me/questions/no-answers', args] as const
}

export function getMeQuestionsNoAnswersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.questions)['no-answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.questions)['no-answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.questions)['no-answers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeQuestionsNoAnswersQueryKey>
  >({
    queryKey: getMeQuestionsNoAnswersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.questions['no-answers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeQuestionsNoAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.questions)['no-answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me.questions)['no-answers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.questions)['no-answers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeQuestionsNoAnswersQueryKey>
        >
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
      ...getMeQuestionsNoAnswersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMeQuestionsUnacceptedQueryKey(
  args: InferRequestType<typeof client.me.questions.unaccepted.$get>,
) {
  return ['me', '/me/questions/unaccepted', args] as const
}

export function getMeQuestionsUnacceptedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unaccepted.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.questions.unaccepted.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unaccepted.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeQuestionsUnacceptedQueryKey>
  >({
    queryKey: getMeQuestionsUnacceptedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.questions.unaccepted.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeQuestionsUnaccepted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unaccepted.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.questions.unaccepted.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unaccepted.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeQuestionsUnacceptedQueryKey>
        >
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
      ...getMeQuestionsUnacceptedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMeQuestionsUnansweredQueryKey(
  args: InferRequestType<typeof client.me.questions.unanswered.$get>,
) {
  return ['me', '/me/questions/unanswered', args] as const
}

export function getMeQuestionsUnansweredQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unanswered.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.questions.unanswered.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unanswered.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeQuestionsUnansweredQueryKey>
  >({
    queryKey: getMeQuestionsUnansweredQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.questions.unanswered.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeQuestionsUnanswered<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unanswered.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.questions.unanswered.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unanswered.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeQuestionsUnansweredQueryKey>
        >
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
      ...getMeQuestionsUnansweredQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMeReputationQueryKey(args: InferRequestType<typeof client.me.reputation.$get>) {
  return ['me', '/me/reputation', args] as const
}

export function getMeReputationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.reputation.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.reputation.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.reputation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeReputationQueryKey>
  >({
    queryKey: getMeReputationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.reputation.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeReputation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.reputation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.reputation.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.reputation.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMeReputationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeReputationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeReputationHistoryQueryKey(
  args: InferRequestType<(typeof client.me)['reputation-history']['$get']>,
) {
  return ['me', '/me/reputation-history', args] as const
}

export function getMeReputationHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['reputation-history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me)['reputation-history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me)['reputation-history']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeReputationHistoryQueryKey>
  >({
    queryKey: getMeReputationHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me['reputation-history'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeReputationHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['reputation-history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me)['reputation-history']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me)['reputation-history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeReputationHistoryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeReputationHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeReputationHistoryFullQueryKey(
  args: InferRequestType<(typeof client.me)['reputation-history']['full']['$get']>,
) {
  return ['me', '/me/reputation-history/full', args] as const
}

export function getMeReputationHistoryFullQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me)['reputation-history']['full']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me)['reputation-history']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me)['reputation-history']['full']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeReputationHistoryFullQueryKey>
  >({
    queryKey: getMeReputationHistoryFullQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me['reputation-history'].full.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeReputationHistoryFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me)['reputation-history']['full']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me)['reputation-history']['full']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me)['reputation-history']['full']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeReputationHistoryFullQueryKey>
        >
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
      ...getMeReputationHistoryFullQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMeSuggestedEditsQueryKey(
  args: InferRequestType<(typeof client.me)['suggested-edits']['$get']>,
) {
  return ['me', '/me/suggested-edits', args] as const
}

export function getMeSuggestedEditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['suggested-edits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me)['suggested-edits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me)['suggested-edits']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeSuggestedEditsQueryKey>
  >({
    queryKey: getMeSuggestedEditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me['suggested-edits'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeSuggestedEdits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['suggested-edits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me)['suggested-edits']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me)['suggested-edits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeSuggestedEditsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeSuggestedEditsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeTagsQueryKey(args: InferRequestType<typeof client.me.tags.$get>) {
  return ['me', '/me/tags', args] as const
}

export function getMeTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeTagsQueryKey>
  >({
    queryKey: getMeTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.tags.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tags.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMeTagsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeTagsTagsTopAnswersQueryKey(
  args: InferRequestType<(typeof client.me.tags)[':tags']['top-answers']['$get']>,
) {
  return ['me', '/me/tags/:tags/top-answers', args] as const
}

export function getMeTagsTagsTopAnswersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-answers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.tags)[':tags']['top-answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-answers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeTagsTagsTopAnswersQueryKey>
  >({
    queryKey: getMeTagsTagsTopAnswersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.tags[':tags']['top-answers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeTagsTagsTopAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-answers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me.tags)[':tags']['top-answers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-answers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeTagsTagsTopAnswersQueryKey>
        >
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
      ...getMeTagsTagsTopAnswersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMeTagsTagsTopQuestionsQueryKey(
  args: InferRequestType<(typeof client.me.tags)[':tags']['top-questions']['$get']>,
) {
  return ['me', '/me/tags/:tags/top-questions', args] as const
}

export function getMeTagsTagsTopQuestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-questions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.tags)[':tags']['top-questions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-questions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeTagsTagsTopQuestionsQueryKey>
  >({
    queryKey: getMeTagsTagsTopQuestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.tags[':tags']['top-questions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeTagsTagsTopQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-questions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me.tags)[':tags']['top-questions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-questions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeTagsTagsTopQuestionsQueryKey>
        >
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
      ...getMeTagsTagsTopQuestionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMeTimelineQueryKey(args: InferRequestType<typeof client.me.timeline.$get>) {
  return ['me', '/me/timeline', args] as const
}

export function getMeTimelineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.timeline.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.timeline.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.timeline.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeTimelineQueryKey>
  >({
    queryKey: getMeTimelineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.timeline.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeTimeline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.timeline.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.timeline.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.timeline.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMeTimelineQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeTimelineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeTopAnswerTagsQueryKey(
  args: InferRequestType<(typeof client.me)['top-answer-tags']['$get']>,
) {
  return ['me', '/me/top-answer-tags', args] as const
}

export function getMeTopAnswerTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-answer-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me)['top-answer-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-answer-tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeTopAnswerTagsQueryKey>
  >({
    queryKey: getMeTopAnswerTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me['top-answer-tags'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeTopAnswerTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-answer-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me)['top-answer-tags']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me)['top-answer-tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeTopAnswerTagsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeTopAnswerTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeTopQuestionTagsQueryKey(
  args: InferRequestType<(typeof client.me)['top-question-tags']['$get']>,
) {
  return ['me', '/me/top-question-tags', args] as const
}

export function getMeTopQuestionTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-question-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me)['top-question-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-question-tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeTopQuestionTagsQueryKey>
  >({
    queryKey: getMeTopQuestionTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me['top-question-tags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeTopQuestionTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-question-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me)['top-question-tags']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me)['top-question-tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeTopQuestionTagsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeTopQuestionTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeWritePermissionsQueryKey(
  args: InferRequestType<(typeof client.me)['write-permissions']['$get']>,
) {
  return ['me', '/me/write-permissions', args] as const
}

export function getMeWritePermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['write-permissions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me)['write-permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me)['write-permissions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeWritePermissionsQueryKey>
  >({
    queryKey: getMeWritePermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me['write-permissions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMeWritePermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['write-permissions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me)['write-permissions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me)['write-permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeWritePermissionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeWritePermissionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNotificationsQueryKey(args: InferRequestType<typeof client.notifications.$get>) {
  return ['notifications', '/notifications', args] as const
}

export function getNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.notifications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsQueryKey>
  >({
    queryKey: getNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.notifications.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNotificationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNotificationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNotificationsUnreadQueryKey(
  args: InferRequestType<typeof client.notifications.unread.$get>,
) {
  return ['notifications', '/notifications/unread', args] as const
}

export function getNotificationsUnreadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unread.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.notifications.unread.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unread.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsUnreadQueryKey>
  >({
    queryKey: getNotificationsUnreadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.unread.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNotificationsUnread<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unread.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.notifications.unread.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unread.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNotificationsUnreadQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNotificationsUnreadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostsQueryKey(args: InferRequestType<typeof client.posts.$get>) {
  return ['posts', '/posts', args] as const
}

export function getPostsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.posts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPostsQueryKey>
  >({
    queryKey: getPostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.posts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPosts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.posts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getPostsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPostsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostsIdsQueryKey(args: InferRequestType<(typeof client.posts)[':ids']['$get']>) {
  return ['posts', '/posts/:ids', args] as const
}

export function getPostsIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.posts)[':ids']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPostsIdsQueryKey>
  >({
    queryKey: getPostsIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.posts[':ids'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPostsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.posts)[':ids']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPostsIdsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPostsIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostsIdsCommentsQueryKey(
  args: InferRequestType<(typeof client.posts)[':ids']['comments']['$get']>,
) {
  return ['posts', '/posts/:ids/comments', args] as const
}

export function getPostsIdsCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':ids']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['comments']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostsIdsCommentsQueryKey>
  >({
    queryKey: getPostsIdsCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.posts[':ids'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostsIdsComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.posts)[':ids']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':ids']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPostsIdsCommentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPostsIdsCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostsIdsRevisionsQueryKey(
  args: InferRequestType<(typeof client.posts)[':ids']['revisions']['$get']>,
) {
  return ['posts', '/posts/:ids/revisions', args] as const
}

export function getPostsIdsRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['revisions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':ids']['revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':ids']['revisions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostsIdsRevisionsQueryKey>
  >({
    queryKey: getPostsIdsRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.posts[':ids'].revisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostsIdsRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['revisions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.posts)[':ids']['revisions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':ids']['revisions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPostsIdsRevisionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPostsIdsRevisionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostsIdsSuggestedEditsQueryKey(
  args: InferRequestType<(typeof client.posts)[':ids']['suggested-edits']['$get']>,
) {
  return ['posts', '/posts/:ids/suggested-edits', args] as const
}

export function getPostsIdsSuggestedEditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.posts)[':ids']['suggested-edits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':ids']['suggested-edits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':ids']['suggested-edits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostsIdsSuggestedEditsQueryKey>
  >({
    queryKey: getPostsIdsSuggestedEditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.posts[':ids']['suggested-edits'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostsIdsSuggestedEdits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.posts)[':ids']['suggested-edits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.posts)[':ids']['suggested-edits']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':ids']['suggested-edits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPostsIdsSuggestedEditsQueryKey>
        >
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
      ...getPostsIdsSuggestedEditsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPostsIdCommentsAddMutationKey() {
  return ['posts', '/posts/:id/comments/add', 'POST'] as const
}

export function getPostPostsIdCommentsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':id']['comments']['add']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.posts)[':id']['comments']['add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostsIdCommentsAddMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.posts)[':id']['comments']['add']['$post']>,
    ) {
      return parseResponse(client.posts[':id'].comments.add.$post(args, options))
    },
  })
}

export function createPostPostsIdCommentsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':id']['comments']['add']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.posts)[':id']['comments']['add']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPostsIdCommentsAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPrivilegesQueryKey(args: InferRequestType<typeof client.privileges.$get>) {
  return ['privileges', '/privileges', args] as const
}

export function getPrivilegesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privileges.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.privileges.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privileges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPrivilegesQueryKey>
  >({
    queryKey: getPrivilegesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.privileges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPrivileges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privileges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.privileges.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privileges.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPrivilegesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPrivilegesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQuestionsQueryKey(args: InferRequestType<typeof client.questions.$get>) {
  return ['questions', '/questions', args] as const
}

export function getQuestionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.questions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuestionsQueryKey>
  >({
    queryKey: getQuestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.questions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQuestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.questions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getQuestionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuestionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQuestionsFeaturedQueryKey(
  args: InferRequestType<typeof client.questions.featured.$get>,
) {
  return ['questions', '/questions/featured', args] as const
}

export function getQuestionsFeaturedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.featured.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.questions.featured.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.featured.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsFeaturedQueryKey>
  >({
    queryKey: getQuestionsFeaturedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.questions.featured.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQuestionsFeatured<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.questions.featured.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.questions.featured.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQuestionsFeaturedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuestionsFeaturedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQuestionsNoAnswersQueryKey(
  args: InferRequestType<(typeof client.questions)['no-answers']['$get']>,
) {
  return ['questions', '/questions/no-answers', args] as const
}

export function getQuestionsNoAnswersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.questions)['no-answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.questions)['no-answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.questions)['no-answers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsNoAnswersQueryKey>
  >({
    queryKey: getQuestionsNoAnswersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.questions['no-answers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createQuestionsNoAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.questions)['no-answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.questions)['no-answers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.questions)['no-answers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQuestionsNoAnswersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuestionsNoAnswersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQuestionsUnansweredQueryKey(
  args: InferRequestType<typeof client.questions.unanswered.$get>,
) {
  return ['questions', '/questions/unanswered', args] as const
}

export function getQuestionsUnansweredQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.unanswered.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.questions.unanswered.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.unanswered.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsUnansweredQueryKey>
  >({
    queryKey: getQuestionsUnansweredQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.questions.unanswered.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQuestionsUnanswered<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.unanswered.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.questions.unanswered.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.questions.unanswered.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQuestionsUnansweredQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuestionsUnansweredQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQuestionsIdsQueryKey(
  args: InferRequestType<(typeof client.questions)[':ids']['$get']>,
) {
  return ['questions', '/questions/:ids', args] as const
}

export function getQuestionsIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.questions)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsIdsQueryKey>
  >({
    queryKey: getQuestionsIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.questions[':ids'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQuestionsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.questions)[':ids']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQuestionsIdsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuestionsIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQuestionsIdsAnswersQueryKey(
  args: InferRequestType<(typeof client.questions)[':ids']['answers']['$get']>,
) {
  return ['questions', '/questions/:ids/answers', args] as const
}

export function getQuestionsIdsAnswersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.questions)[':ids']['answers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.questions)[':ids']['answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.questions)[':ids']['answers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsIdsAnswersQueryKey>
  >({
    queryKey: getQuestionsIdsAnswersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.questions[':ids'].answers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createQuestionsIdsAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.questions)[':ids']['answers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.questions)[':ids']['answers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.questions)[':ids']['answers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQuestionsIdsAnswersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuestionsIdsAnswersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQuestionsIdsCommentsQueryKey(
  args: InferRequestType<(typeof client.questions)[':ids']['comments']['$get']>,
) {
  return ['questions', '/questions/:ids/comments', args] as const
}

export function getQuestionsIdsCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.questions)[':ids']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.questions)[':ids']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.questions)[':ids']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsIdsCommentsQueryKey>
  >({
    queryKey: getQuestionsIdsCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.questions[':ids'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createQuestionsIdsComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.questions)[':ids']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.questions)[':ids']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.questions)[':ids']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQuestionsIdsCommentsQueryKey>
        >
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
      ...getQuestionsIdsCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getQuestionsIdsLinkedQueryKey(
  args: InferRequestType<(typeof client.questions)[':ids']['linked']['$get']>,
) {
  return ['questions', '/questions/:ids/linked', args] as const
}

export function getQuestionsIdsLinkedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['linked']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.questions)[':ids']['linked']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.questions)[':ids']['linked']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsIdsLinkedQueryKey>
  >({
    queryKey: getQuestionsIdsLinkedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.questions[':ids'].linked.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createQuestionsIdsLinked<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['linked']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.questions)[':ids']['linked']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.questions)[':ids']['linked']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQuestionsIdsLinkedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuestionsIdsLinkedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQuestionsIdsRelatedQueryKey(
  args: InferRequestType<(typeof client.questions)[':ids']['related']['$get']>,
) {
  return ['questions', '/questions/:ids/related', args] as const
}

export function getQuestionsIdsRelatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.questions)[':ids']['related']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.questions)[':ids']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.questions)[':ids']['related']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsIdsRelatedQueryKey>
  >({
    queryKey: getQuestionsIdsRelatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.questions[':ids'].related.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createQuestionsIdsRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.questions)[':ids']['related']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.questions)[':ids']['related']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.questions)[':ids']['related']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQuestionsIdsRelatedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuestionsIdsRelatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQuestionsIdsTimelineQueryKey(
  args: InferRequestType<(typeof client.questions)[':ids']['timeline']['$get']>,
) {
  return ['questions', '/questions/:ids/timeline', args] as const
}

export function getQuestionsIdsTimelineQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.questions)[':ids']['timeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.questions)[':ids']['timeline']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.questions)[':ids']['timeline']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsIdsTimelineQueryKey>
  >({
    queryKey: getQuestionsIdsTimelineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.questions[':ids'].timeline.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createQuestionsIdsTimeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.questions)[':ids']['timeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.questions)[':ids']['timeline']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.questions)[':ids']['timeline']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQuestionsIdsTimelineQueryKey>
        >
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
      ...getQuestionsIdsTimelineQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRevisionsIdsQueryKey(
  args: InferRequestType<(typeof client.revisions)[':ids']['$get']>,
) {
  return ['revisions', '/revisions/:ids', args] as const
}

export function getRevisionsIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.revisions)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':ids']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRevisionsIdsQueryKey>
  >({
    queryKey: getRevisionsIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.revisions[':ids'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRevisionsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.revisions)[':ids']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRevisionsIdsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRevisionsIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
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
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getSearchQueryKey>
        >
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

export function getSearchAdvancedQueryKey(
  args: InferRequestType<typeof client.search.advanced.$get>,
) {
  return ['search', '/search/advanced', args] as const
}

export function getSearchAdvancedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.advanced.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.advanced.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.advanced.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchAdvancedQueryKey>
  >({
    queryKey: getSearchAdvancedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.advanced.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearchAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.advanced.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.advanced.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchAdvancedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchAdvancedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSimilarQueryKey(args: InferRequestType<typeof client.similar.$get>) {
  return ['similar', '/similar', args] as const
}

export function getSimilarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.similar.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSimilarQueryKey>
  >({
    queryKey: getSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.similar.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSimilar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.similar.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSimilarQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSitesQueryKey(args: InferRequestType<typeof client.sites.$get>) {
  return ['sites', '/sites', args] as const
}

export function getSitesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sites.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSitesQueryKey>
  >({
    queryKey: getSitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSites<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sites.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getSitesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSitesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSuggestedEditsQueryKey(
  args: InferRequestType<(typeof client)['suggested-edits']['$get']>,
) {
  return ['suggested-edits', '/suggested-edits', args] as const
}

export function getSuggestedEditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['suggested-edits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuggestedEditsQueryKey>
  >({
    queryKey: getSuggestedEditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['suggested-edits'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSuggestedEdits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['suggested-edits']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSuggestedEditsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSuggestedEditsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSuggestedEditsIdsQueryKey(
  args: InferRequestType<(typeof client)['suggested-edits'][':ids']['$get']>,
) {
  return ['suggested-edits', '/suggested-edits/:ids', args] as const
}

export function getSuggestedEditsIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits'][':ids']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['suggested-edits'][':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['suggested-edits'][':ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuggestedEditsIdsQueryKey>
  >({
    queryKey: getSuggestedEditsIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['suggested-edits'][':ids'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSuggestedEditsIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits'][':ids']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['suggested-edits'][':ids']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['suggested-edits'][':ids']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSuggestedEditsIdsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSuggestedEditsIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTagsQueryKey(args: InferRequestType<typeof client.tags.$get>) {
  return ['tags', '/tags', args] as const
}

export function getTagsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >({
    queryKey: getTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tags.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getTagsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTagsModeratorOnlyQueryKey(
  args: InferRequestType<(typeof client.tags)['moderator-only']['$get']>,
) {
  return ['tags', '/tags/moderator-only', args] as const
}

export function getTagsModeratorOnlyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)['moderator-only']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)['moderator-only']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)['moderator-only']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsModeratorOnlyQueryKey>
  >({
    queryKey: getTagsModeratorOnlyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags['moderator-only'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTagsModeratorOnly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)['moderator-only']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)['moderator-only']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)['moderator-only']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsModeratorOnlyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsModeratorOnlyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTagsRequiredQueryKey(args: InferRequestType<typeof client.tags.required.$get>) {
  return ['tags', '/tags/required', args] as const
}

export function getTagsRequiredQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.required.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tags.required.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.required.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsRequiredQueryKey>
  >({
    queryKey: getTagsRequiredQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.required.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsRequired<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.required.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tags.required.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.required.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getTagsRequiredQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsRequiredQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTagsSynonymsQueryKey(args: InferRequestType<typeof client.tags.synonyms.$get>) {
  return ['tags', '/tags/synonyms', args] as const
}

export function getTagsSynonymsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.synonyms.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tags.synonyms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.synonyms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsSynonymsQueryKey>
  >({
    queryKey: getTagsSynonymsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.synonyms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsSynonyms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.synonyms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tags.synonyms.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.synonyms.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getTagsSynonymsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsSynonymsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTagsTagsFaqQueryKey(
  args: InferRequestType<(typeof client.tags)[':tags']['faq']['$get']>,
) {
  return ['tags', '/tags/:tags/faq', args] as const
}

export function getTagsTagsFaqQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['faq']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tags']['faq']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['faq']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagsFaqQueryKey>
  >({
    queryKey: getTagsTagsFaqQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tags'].faq.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsTagsFaq<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['faq']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':tags']['faq']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tags']['faq']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsTagsFaqQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsTagsFaqQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTagsTagsInfoQueryKey(
  args: InferRequestType<(typeof client.tags)[':tags']['info']['$get']>,
) {
  return ['tags', '/tags/:tags/info', args] as const
}

export function getTagsTagsInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tags']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagsInfoQueryKey>
  >({
    queryKey: getTagsTagsInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tags'].info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsTagsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':tags']['info']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tags']['info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsTagsInfoQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsTagsInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTagsTagsRelatedQueryKey(
  args: InferRequestType<(typeof client.tags)[':tags']['related']['$get']>,
) {
  return ['tags', '/tags/:tags/related', args] as const
}

export function getTagsTagsRelatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tags']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['related']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagsRelatedQueryKey>
  >({
    queryKey: getTagsTagsRelatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tags'].related.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsTagsRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':tags']['related']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tags']['related']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsTagsRelatedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsTagsRelatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTagsTagsSynonymsQueryKey(
  args: InferRequestType<(typeof client.tags)[':tags']['synonyms']['$get']>,
) {
  return ['tags', '/tags/:tags/synonyms', args] as const
}

export function getTagsTagsSynonymsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['synonyms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tags']['synonyms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['synonyms']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagsSynonymsQueryKey>
  >({
    queryKey: getTagsTagsSynonymsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tags'].synonyms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTagsTagsSynonyms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['synonyms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':tags']['synonyms']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tags']['synonyms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsTagsSynonymsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsTagsSynonymsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTagsTagsWikisQueryKey(
  args: InferRequestType<(typeof client.tags)[':tags']['wikis']['$get']>,
) {
  return ['tags', '/tags/:tags/wikis', args] as const
}

export function getTagsTagsWikisQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['wikis']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tags']['wikis']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['wikis']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagsWikisQueryKey>
  >({
    queryKey: getTagsTagsWikisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tags'].wikis.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsTagsWikis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['wikis']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':tags']['wikis']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tags']['wikis']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsTagsWikisQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsTagsWikisQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTagsTagTopAnswerersPeriodQueryKey(
  args: InferRequestType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>,
) {
  return ['tags', '/tags/:tag/top-answerers/:period', args] as const
}

export function getTagsTagTopAnswerersPeriodQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagTopAnswerersPeriodQueryKey>
  >({
    queryKey: getTagsTagTopAnswerersPeriodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tag']['top-answerers'][':period'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTagsTagTopAnswerersPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsTagTopAnswerersPeriodQueryKey>
        >
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
      ...getTagsTagTopAnswerersPeriodQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTagsTagTopAskersPeriodQueryKey(
  args: InferRequestType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>,
) {
  return ['tags', '/tags/:tag/top-askers/:period', args] as const
}

export function getTagsTagTopAskersPeriodQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagTopAskersPeriodQueryKey>
  >({
    queryKey: getTagsTagTopAskersPeriodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tag']['top-askers'][':period'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTagsTagTopAskersPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsTagTopAskersPeriodQueryKey>
        >
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
      ...getTagsTagTopAskersPeriodQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getUsersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersModeratorsQueryKey(
  args: InferRequestType<typeof client.users.moderators.$get>,
) {
  return ['users', '/users/moderators', args] as const
}

export function getUsersModeratorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.moderators.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersModeratorsQueryKey>
  >({
    queryKey: getUsersModeratorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.moderators.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersModerators<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.moderators.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersModeratorsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersModeratorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersModeratorsElectedQueryKey(
  args: InferRequestType<typeof client.users.moderators.elected.$get>,
) {
  return ['users', '/users/moderators/elected', args] as const
}

export function getUsersModeratorsElectedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.elected.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.moderators.elected.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.elected.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersModeratorsElectedQueryKey>
  >({
    queryKey: getUsersModeratorsElectedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.moderators.elected.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersModeratorsElected<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.elected.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.moderators.elected.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.elected.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersModeratorsElectedQueryKey>
        >
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
      ...getUsersModeratorsElectedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersIdsQueryKey(args: InferRequestType<(typeof client.users)[':ids']['$get']>) {
  return ['users', '/users/:ids', args] as const
}

export function getUsersIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.users)[':ids']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsQueryKey>
  >({
    queryKey: getUsersIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdsAnswersQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['answers']['$get']>,
) {
  return ['users', '/users/:ids/answers', args] as const
}

export function getUsersIdsAnswersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['answers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsAnswersQueryKey>
  >({
    queryKey: getUsersIdsAnswersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].answers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersIdsAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['answers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['answers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsAnswersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdsAnswersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdsAssociatedQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['associated']['$get']>,
) {
  return ['users', '/users/:ids/associated', args] as const
}

export function getUsersIdsAssociatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['associated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['associated']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':ids']['associated']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsAssociatedQueryKey>
  >({
    queryKey: getUsersIdsAssociatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].associated.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdsAssociated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['associated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['associated']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['associated']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsAssociatedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdsAssociatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdsBadgesQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['badges']['$get']>,
) {
  return ['users', '/users/:ids/badges', args] as const
}

export function getUsersIdsBadgesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['badges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['badges']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['badges']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsBadgesQueryKey>
  >({
    queryKey: getUsersIdsBadgesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].badges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersIdsBadges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['badges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['badges']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['badges']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsBadgesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdsBadgesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdsCommentsQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['comments']['$get']>,
) {
  return ['users', '/users/:ids/comments', args] as const
}

export function getUsersIdsCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['comments']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsCommentsQueryKey>
  >({
    queryKey: getUsersIdsCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdsComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsCommentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdsCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdsCommentsToidQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['comments'][':toid']['$get']>,
) {
  return ['users', '/users/:ids/comments/:toid', args] as const
}

export function getUsersIdsCommentsToidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ids']['comments'][':toid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['comments'][':toid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':ids']['comments'][':toid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsCommentsToidQueryKey>
  >({
    queryKey: getUsersIdsCommentsToidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].comments[':toid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdsCommentsToid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ids']['comments'][':toid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['comments'][':toid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['comments'][':toid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsCommentsToidQueryKey>
        >
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
      ...getUsersIdsCommentsToidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersIdsFavoritesQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['favorites']['$get']>,
) {
  return ['users', '/users/:ids/favorites', args] as const
}

export function getUsersIdsFavoritesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['favorites']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['favorites']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':ids']['favorites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsFavoritesQueryKey>
  >({
    queryKey: getUsersIdsFavoritesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].favorites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdsFavorites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['favorites']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['favorites']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['favorites']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsFavoritesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdsFavoritesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdsMentionedQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['mentioned']['$get']>,
) {
  return ['users', '/users/:ids/mentioned', args] as const
}

export function getUsersIdsMentionedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['mentioned']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['mentioned']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':ids']['mentioned']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsMentionedQueryKey>
  >({
    queryKey: getUsersIdsMentionedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].mentioned.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdsMentioned<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['mentioned']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['mentioned']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['mentioned']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsMentionedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdsMentionedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdsMergesQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['merges']['$get']>,
) {
  return ['users', '/users/:ids/merges', args] as const
}

export function getUsersIdsMergesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['merges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['merges']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['merges']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsMergesQueryKey>
  >({
    queryKey: getUsersIdsMergesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].merges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersIdsMerges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['merges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['merges']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['merges']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsMergesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdsMergesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdsQuestionsQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['$get']>,
) {
  return ['users', '/users/:ids/questions', args] as const
}

export function getUsersIdsQuestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['questions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':ids']['questions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsQuestionsQueryKey>
  >({
    queryKey: getUsersIdsQuestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].questions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdsQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['questions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['questions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['questions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsQuestionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdsQuestionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdsQuestionsFeaturedQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['featured']['$get']>,
) {
  return ['users', '/users/:ids/questions/featured', args] as const
}

export function getUsersIdsQuestionsFeaturedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ids']['questions']['featured']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['featured']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':ids']['questions']['featured']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsQuestionsFeaturedQueryKey>
  >({
    queryKey: getUsersIdsQuestionsFeaturedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].questions.featured.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdsQuestionsFeatured<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ids']['questions']['featured']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['questions']['featured']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['questions']['featured']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsQuestionsFeaturedQueryKey>
        >
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
      ...getUsersIdsQuestionsFeaturedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersIdsQuestionsNoAnswersQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>,
) {
  return ['users', '/users/:ids/questions/no-answers', args] as const
}

export function getUsersIdsQuestionsNoAnswersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsQuestionsNoAnswersQueryKey>
  >({
    queryKey: getUsersIdsQuestionsNoAnswersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].questions['no-answers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdsQuestionsNoAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsQuestionsNoAnswersQueryKey>
        >
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
      ...getUsersIdsQuestionsNoAnswersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersIdsQuestionsUnacceptedQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>,
) {
  return ['users', '/users/:ids/questions/unaccepted', args] as const
}

export function getUsersIdsQuestionsUnacceptedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsQuestionsUnacceptedQueryKey>
  >({
    queryKey: getUsersIdsQuestionsUnacceptedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].questions.unaccepted.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdsQuestionsUnaccepted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsQuestionsUnacceptedQueryKey>
        >
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
      ...getUsersIdsQuestionsUnacceptedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersIdsQuestionsUnansweredQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>,
) {
  return ['users', '/users/:ids/questions/unanswered', args] as const
}

export function getUsersIdsQuestionsUnansweredQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsQuestionsUnansweredQueryKey>
  >({
    queryKey: getUsersIdsQuestionsUnansweredQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].questions.unanswered.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdsQuestionsUnanswered<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsQuestionsUnansweredQueryKey>
        >
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
      ...getUsersIdsQuestionsUnansweredQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersIdsReputationQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['reputation']['$get']>,
) {
  return ['users', '/users/:ids/reputation', args] as const
}

export function getUsersIdsReputationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['reputation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['reputation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':ids']['reputation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsReputationQueryKey>
  >({
    queryKey: getUsersIdsReputationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].reputation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdsReputation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['reputation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['reputation']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['reputation']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsReputationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdsReputationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdsReputationHistoryQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['reputation-history']['$get']>,
) {
  return ['users', '/users/:ids/reputation-history', args] as const
}

export function getUsersIdsReputationHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ids']['reputation-history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['reputation-history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':ids']['reputation-history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsReputationHistoryQueryKey>
  >({
    queryKey: getUsersIdsReputationHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids']['reputation-history'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdsReputationHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ids']['reputation-history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['reputation-history']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['reputation-history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsReputationHistoryQueryKey>
        >
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
      ...getUsersIdsReputationHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersIdsSuggestedEditsQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['suggested-edits']['$get']>,
) {
  return ['users', '/users/:ids/suggested-edits', args] as const
}

export function getUsersIdsSuggestedEditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ids']['suggested-edits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['suggested-edits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':ids']['suggested-edits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsSuggestedEditsQueryKey>
  >({
    queryKey: getUsersIdsSuggestedEditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids']['suggested-edits'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdsSuggestedEdits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ids']['suggested-edits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['suggested-edits']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['suggested-edits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsSuggestedEditsQueryKey>
        >
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
      ...getUsersIdsSuggestedEditsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersIdsTagsQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['tags']['$get']>,
) {
  return ['users', '/users/:ids/tags', args] as const
}

export function getUsersIdsTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsTagsQueryKey>
  >({
    queryKey: getUsersIdsTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersIdsTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['tags']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsTagsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdsTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdsTimelineQueryKey(
  args: InferRequestType<(typeof client.users)[':ids']['timeline']['$get']>,
) {
  return ['users', '/users/:ids/timeline', args] as const
}

export function getUsersIdsTimelineQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['timeline']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['timeline']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['timeline']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsTimelineQueryKey>
  >({
    queryKey: getUsersIdsTimelineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ids'].timeline.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdsTimeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['timeline']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ids']['timeline']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['timeline']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdsTimelineQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdsTimelineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdInboxQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['inbox']['$get']>,
) {
  return ['users', '/users/:id/inbox', args] as const
}

export function getUsersIdInboxQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['inbox']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['inbox']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['inbox']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdInboxQueryKey>
  >({
    queryKey: getUsersIdInboxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].inbox.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersIdInbox<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['inbox']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['inbox']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['inbox']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdInboxQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdInboxQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdInboxUnreadQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['inbox']['unread']['$get']>,
) {
  return ['users', '/users/:id/inbox/unread', args] as const
}

export function getUsersIdInboxUnreadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['inbox']['unread']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['inbox']['unread']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['inbox']['unread']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdInboxUnreadQueryKey>
  >({
    queryKey: getUsersIdInboxUnreadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].inbox.unread.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdInboxUnread<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['inbox']['unread']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['inbox']['unread']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['inbox']['unread']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdInboxUnreadQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdInboxUnreadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdNotificationsQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['notifications']['$get']>,
) {
  return ['users', '/users/:id/notifications', args] as const
}

export function getUsersIdNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['notifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdNotificationsQueryKey>
  >({
    queryKey: getUsersIdNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].notifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['notifications']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['notifications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdNotificationsQueryKey>
        >
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
      ...getUsersIdNotificationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersIdNotificationsUnreadQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['notifications']['unread']['$get']>,
) {
  return ['users', '/users/:id/notifications/unread', args] as const
}

export function getUsersIdNotificationsUnreadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['notifications']['unread']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['notifications']['unread']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['notifications']['unread']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdNotificationsUnreadQueryKey>
  >({
    queryKey: getUsersIdNotificationsUnreadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].notifications.unread.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdNotificationsUnread<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['notifications']['unread']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['notifications']['unread']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['notifications']['unread']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdNotificationsUnreadQueryKey>
        >
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
      ...getUsersIdNotificationsUnreadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersIdPrivilegesQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['privileges']['$get']>,
) {
  return ['users', '/users/:id/privileges', args] as const
}

export function getUsersIdPrivilegesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['privileges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['privileges']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['privileges']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdPrivilegesQueryKey>
  >({
    queryKey: getUsersIdPrivilegesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].privileges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdPrivileges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['privileges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['privileges']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['privileges']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdPrivilegesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdPrivilegesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdReputationHistoryFullQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['reputation-history']['full']['$get']>,
) {
  return ['users', '/users/:id/reputation-history/full', args] as const
}

export function getUsersIdReputationHistoryFullQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['reputation-history']['full']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['reputation-history']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['reputation-history']['full']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdReputationHistoryFullQueryKey>
  >({
    queryKey: getUsersIdReputationHistoryFullQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id']['reputation-history'].full.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdReputationHistoryFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['reputation-history']['full']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['reputation-history']['full']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':id']['reputation-history']['full']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdReputationHistoryFullQueryKey>
        >
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
      ...getUsersIdReputationHistoryFullQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersIdTagsTagsTopAnswersQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>,
) {
  return ['users', '/users/:id/tags/:tags/top-answers', args] as const
}

export function getUsersIdTagsTagsTopAnswersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdTagsTagsTopAnswersQueryKey>
  >({
    queryKey: getUsersIdTagsTagsTopAnswersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].tags[':tags']['top-answers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdTagsTagsTopAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdTagsTagsTopAnswersQueryKey>
        >
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
      ...getUsersIdTagsTagsTopAnswersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersIdTagsTagsTopQuestionsQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>,
) {
  return ['users', '/users/:id/tags/:tags/top-questions', args] as const
}

export function getUsersIdTagsTagsTopQuestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdTagsTagsTopQuestionsQueryKey>
  >({
    queryKey: getUsersIdTagsTagsTopQuestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].tags[':tags']['top-questions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdTagsTagsTopQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdTagsTagsTopQuestionsQueryKey>
        >
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
      ...getUsersIdTagsTagsTopQuestionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersIdTopAnswerTagsQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['top-answer-tags']['$get']>,
) {
  return ['users', '/users/:id/top-answer-tags', args] as const
}

export function getUsersIdTopAnswerTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['top-answer-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['top-answer-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['top-answer-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdTopAnswerTagsQueryKey>
  >({
    queryKey: getUsersIdTopAnswerTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id']['top-answer-tags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdTopAnswerTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['top-answer-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['top-answer-tags']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['top-answer-tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdTopAnswerTagsQueryKey>
        >
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
      ...getUsersIdTopAnswerTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersIdTopQuestionTagsQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['top-question-tags']['$get']>,
) {
  return ['users', '/users/:id/top-question-tags', args] as const
}

export function getUsersIdTopQuestionTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['top-question-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['top-question-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['top-question-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdTopQuestionTagsQueryKey>
  >({
    queryKey: getUsersIdTopQuestionTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id']['top-question-tags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdTopQuestionTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['top-question-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['top-question-tags']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['top-question-tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdTopQuestionTagsQueryKey>
        >
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
      ...getUsersIdTopQuestionTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersIdWritePermissionsQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['write-permissions']['$get']>,
) {
  return ['users', '/users/:id/write-permissions', args] as const
}

export function getUsersIdWritePermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['write-permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['write-permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['write-permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdWritePermissionsQueryKey>
  >({
    queryKey: getUsersIdWritePermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id']['write-permissions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdWritePermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['write-permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['write-permissions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['write-permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersIdWritePermissionsQueryKey>
        >
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
      ...getUsersIdWritePermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
