import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function useAccessTokensAccessTokens<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccessTokensAccessTokensQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccessTokensAccessTokens<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccessTokensAccessTokensQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAccessTokensAccessTokensInvalidate<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccessTokensAccessTokensInvalidateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccessTokensAccessTokensInvalidate<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccessTokensAccessTokensInvalidateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAnswers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.answers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAnswersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnswers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.answers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAnswersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAnswersIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.answers)[':ids']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnswersIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnswersIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnswersIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.answers)[':ids']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnswersIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnswersIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAnswersIdsComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.answers)[':ids']['comments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnswersIdsCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnswersIdsComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.answers)[':ids']['comments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnswersIdsCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAppsAccessTokensDeAuthenticate<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAppsAccessTokensDeAuthenticateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAccessTokensDeAuthenticate<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAppsAccessTokensDeAuthenticateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useBadges<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.badges.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBadgesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBadgesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBadges<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.badges.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBadgesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBadgesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useBadgesName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.badges.name.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.name.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBadgesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBadgesNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBadgesName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.badges.name.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.name.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBadgesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBadgesNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useBadgesRecipients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.recipients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.badges.recipients.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.badges.recipients.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBadgesRecipientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBadgesRecipientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBadgesRecipients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.recipients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.badges.recipients.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.badges.recipients.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBadgesRecipientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBadgesRecipientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useBadgesTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.badges.tags.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBadgesTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBadgesTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBadgesTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.badges.tags.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBadgesTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBadgesTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useBadgesIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.badges)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.badges)[':ids']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.badges)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBadgesIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBadgesIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBadgesIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.badges)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.badges)[':ids']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.badges)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBadgesIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBadgesIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useBadgesIdsRecipients<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBadgesIdsRecipientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBadgesIdsRecipients<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBadgesIdsRecipientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.comments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.comments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCommentsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':ids']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCommentsIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCommentsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':ids']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCommentsIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostCommentsIdDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCommentsIdDeleteMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostCommentsIdEdit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCommentsIdEditMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useErrors<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.errors.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.errors.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.errors.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getErrorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseErrors<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.errors.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.errors.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.errors.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getErrorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useErrorsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.errors)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.errors)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.errors)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getErrorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getErrorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseErrorsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.errors)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.errors)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.errors)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getErrorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getErrorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useFiltersCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.filters.create.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.create.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFiltersCreateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFiltersCreateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFiltersCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.filters.create.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.create.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFiltersCreateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFiltersCreateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useFiltersFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':filters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.filters)[':filters']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':filters']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFiltersFiltersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFiltersFiltersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFiltersFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':filters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.filters)[':filters']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':filters']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFiltersFiltersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFiltersFiltersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useInbox<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inbox.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInboxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInboxQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInbox<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inbox.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInboxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInboxQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useInboxUnread<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.unread.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inbox.unread.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.unread.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInboxUnreadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInboxUnreadQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInboxUnread<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.unread.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inbox.unread.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.unread.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInboxUnreadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInboxUnreadQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useInfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeAnswers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.answers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.answers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.answers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeAnswersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeAnswers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.answers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.answers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.answers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeAnswersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeAssociated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.associated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.associated.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.associated.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeAssociatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeAssociatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeAssociated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.associated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.associated.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.associated.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeAssociatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeAssociatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeBadges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.badges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.badges.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.badges.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeBadgesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeBadgesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeBadges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.badges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.badges.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.badges.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeBadgesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeBadgesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.comments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.comments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.comments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.comments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeCommentsToId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.comments)[':toId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.comments)[':toId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.me.comments)[':toId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeCommentsToIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeCommentsToIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeCommentsToId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.comments)[':toId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.comments)[':toId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.me.comments)[':toId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeCommentsToIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeCommentsToIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeFavorites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.favorites.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeFavoritesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeFavoritesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeFavorites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.favorites.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeFavoritesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeFavoritesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeInbox<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.inbox.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeInboxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeInboxQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeInbox<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.inbox.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeInboxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeInboxQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeInboxUnread<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.unread.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.inbox.unread.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.unread.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeInboxUnreadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeInboxUnreadQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeInboxUnread<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.unread.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.inbox.unread.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.unread.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeInboxUnreadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeInboxUnreadQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeMentioned<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.mentioned.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.mentioned.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.mentioned.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeMentionedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeMentionedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeMentioned<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.mentioned.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.mentioned.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.mentioned.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeMentionedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeMentionedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeMerges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.merges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.merges.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.merges.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeMergesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeMergesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeMerges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.merges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.merges.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.merges.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeMergesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeMergesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.notifications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeNotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeNotificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.notifications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeNotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeNotificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeNotificationsUnread<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.unread.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.notifications.unread.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.unread.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeNotificationsUnreadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMeNotificationsUnreadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMeNotificationsUnread<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.unread.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.notifications.unread.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.unread.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeNotificationsUnreadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMeNotificationsUnreadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMePrivileges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.privileges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.privileges.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.privileges.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMePrivilegesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMePrivilegesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMePrivileges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.privileges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.privileges.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.privileges.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMePrivilegesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMePrivilegesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeQuestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.questions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeQuestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeQuestionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeQuestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.questions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeQuestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeQuestionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeQuestionsFeatured<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.questions.featured.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.featured.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeQuestionsFeaturedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeQuestionsFeaturedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeQuestionsFeatured<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.questions.featured.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.featured.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeQuestionsFeaturedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeQuestionsFeaturedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeQuestionsNoAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.questions)['no-answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.questions)['no-answers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeQuestionsNoAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeQuestionsNoAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.questions)['no-answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.questions)['no-answers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeQuestionsNoAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeQuestionsUnaccepted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unaccepted.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.questions.unaccepted.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unaccepted.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeQuestionsUnacceptedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMeQuestionsUnacceptedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMeQuestionsUnaccepted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unaccepted.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.questions.unaccepted.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unaccepted.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeQuestionsUnacceptedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMeQuestionsUnacceptedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMeQuestionsUnanswered<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unanswered.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.questions.unanswered.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unanswered.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeQuestionsUnansweredQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMeQuestionsUnansweredQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMeQuestionsUnanswered<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unanswered.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.questions.unanswered.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unanswered.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeQuestionsUnansweredQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMeQuestionsUnansweredQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMeReputation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.reputation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.reputation.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.reputation.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeReputationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeReputationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeReputation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.reputation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.reputation.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.reputation.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeReputationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeReputationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeReputationHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['reputation-history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me)['reputation-history']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeReputationHistoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeReputationHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['reputation-history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me)['reputation-history']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeReputationHistoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeReputationHistoryFull<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMeReputationHistoryFullQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMeReputationHistoryFull<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMeReputationHistoryFullQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMeSuggestedEdits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['suggested-edits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me)['suggested-edits']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.me)['suggested-edits']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeSuggestedEditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeSuggestedEditsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeSuggestedEdits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['suggested-edits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me)['suggested-edits']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.me)['suggested-edits']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeSuggestedEditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeSuggestedEditsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.tags.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.tags.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeTagsTagsTopAnswers<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeTagsTagsTopAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeTagsTagsTopAnswers<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeTagsTagsTopAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeTagsTagsTopQuestions<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMeTagsTagsTopQuestionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMeTagsTagsTopQuestions<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMeTagsTagsTopQuestionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMeTimeline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.timeline.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.timeline.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.timeline.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeTimelineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeTimelineQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeTimeline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.timeline.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.timeline.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.timeline.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeTimelineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeTimelineQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeTopAnswerTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-answer-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me)['top-answer-tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-answer-tags']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeTopAnswerTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeTopAnswerTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeTopAnswerTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-answer-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me)['top-answer-tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-answer-tags']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeTopAnswerTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeTopAnswerTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeTopQuestionTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-question-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me)['top-question-tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeTopQuestionTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeTopQuestionTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-question-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me)['top-question-tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeTopQuestionTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMeWritePermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['write-permissions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me)['write-permissions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeWritePermissionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeWritePermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['write-permissions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me)['write-permissions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeWritePermissionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNotificationsUnread<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unread.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notifications.unread.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unread.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsUnreadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationsUnreadQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotificationsUnread<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unread.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notifications.unread.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unread.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsUnreadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationsUnreadQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePosts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.posts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPostsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPostsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePosts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.posts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPostsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPostsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':ids']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostsIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPostsIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePostsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':ids']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostsIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPostsIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostsIdsComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':ids']['comments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPostsIdsCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePostsIdsComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':ids']['comments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPostsIdsCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostsIdsRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['revisions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':ids']['revisions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPostsIdsRevisionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePostsIdsRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['revisions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':ids']['revisions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPostsIdsRevisionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostsIdsSuggestedEdits<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPostsIdsSuggestedEditsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePostsIdsSuggestedEdits<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPostsIdsSuggestedEditsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostPostsIdCommentsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostsIdCommentsAddMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePrivileges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privileges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.privileges.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privileges.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPrivilegesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPrivilegesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePrivileges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privileges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.privileges.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privileges.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPrivilegesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPrivilegesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useQuestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.questions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQuestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuestionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.questions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQuestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuestionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useQuestionsFeatured<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.questions.featured.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.questions.featured.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuestionsFeaturedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuestionsFeaturedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuestionsFeatured<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.questions.featured.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.questions.featured.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuestionsFeaturedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuestionsFeaturedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useQuestionsNoAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.questions)['no-answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.questions)['no-answers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuestionsNoAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuestionsNoAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.questions)['no-answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.questions)['no-answers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuestionsNoAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useQuestionsUnanswered<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.unanswered.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.questions.unanswered.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.questions.unanswered.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuestionsUnansweredQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuestionsUnansweredQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuestionsUnanswered<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.unanswered.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.questions.unanswered.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.questions.unanswered.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuestionsUnansweredQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuestionsUnansweredQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useQuestionsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.questions)[':ids']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuestionsIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuestionsIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuestionsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.questions)[':ids']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuestionsIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuestionsIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useQuestionsIdsAnswers<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuestionsIdsAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuestionsIdsAnswers<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuestionsIdsAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useQuestionsIdsComments<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuestionsIdsCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuestionsIdsComments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuestionsIdsCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useQuestionsIdsLinked<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['linked']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.questions)[':ids']['linked']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuestionsIdsLinkedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuestionsIdsLinked<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['linked']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.questions)[':ids']['linked']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuestionsIdsLinkedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useQuestionsIdsRelated<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuestionsIdsRelatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuestionsIdsRelated<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuestionsIdsRelatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useQuestionsIdsTimeline<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuestionsIdsTimelineQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuestionsIdsTimeline<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuestionsIdsTimelineQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useRevisionsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.revisions)[':ids']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRevisionsIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRevisionsIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRevisionsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.revisions)[':ids']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRevisionsIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRevisionsIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSearchAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.advanced.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.advanced.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchAdvancedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchAdvancedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearchAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.advanced.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.advanced.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchAdvancedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchAdvancedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSimilar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.similar.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSimilarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSimilarQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSimilar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.similar.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSimilarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSimilarQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSites<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSites<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSuggestedEdits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['suggested-edits']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestedEditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSuggestedEditsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSuggestedEdits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['suggested-edits']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuggestedEditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSuggestedEditsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSuggestedEditsIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits'][':ids']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['suggested-edits'][':ids']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSuggestedEditsIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSuggestedEditsIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits'][':ids']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['suggested-edits'][':ids']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSuggestedEditsIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTagsModeratorOnly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)['moderator-only']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)['moderator-only']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsModeratorOnlyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsModeratorOnly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)['moderator-only']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)['moderator-only']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsModeratorOnlyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTagsRequired<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.required.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tags.required.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.required.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTagsRequiredQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsRequiredQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsRequired<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.required.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tags.required.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.required.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTagsRequiredQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsRequiredQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTagsSynonyms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.synonyms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tags.synonyms.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.synonyms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTagsSynonymsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsSynonymsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsSynonyms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.synonyms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tags.synonyms.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.synonyms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTagsSynonymsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsSynonymsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTagsTagsFaq<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['faq']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tags']['faq']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['faq']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagsFaqQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsTagsFaqQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsTagsFaq<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['faq']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tags']['faq']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['faq']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagsFaqQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsTagsFaqQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTagsTagsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tags']['info']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagsInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsTagsInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsTagsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tags']['info']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagsInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsTagsInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTagsTagsRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tags']['related']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsTagsRelatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsTagsRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tags']['related']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsTagsRelatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTagsTagsSynonyms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['synonyms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tags']['synonyms']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsTagsSynonymsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsTagsSynonyms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['synonyms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tags']['synonyms']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsTagsSynonymsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTagsTagsWikis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['wikis']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tags']['wikis']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsTagsWikisQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsTagsWikis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['wikis']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tags']['wikis']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsTagsWikisQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTagsTagTopAnswerersPeriod<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTagsTagTopAnswerersPeriodQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTagsTagTopAnswerersPeriod<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTagsTagTopAnswerersPeriodQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTagsTagTopAskersPeriod<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTagsTagTopAskersPeriodQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTagsTagTopAskersPeriod<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTagsTagTopAskersPeriodQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersModerators<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.moderators.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersModeratorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersModeratorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersModerators<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.moderators.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersModeratorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersModeratorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersModeratorsElected<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.elected.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.moderators.elected.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.elected.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersModeratorsElectedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersModeratorsElectedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersModeratorsElected<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.elected.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.moderators.elected.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.elected.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersModeratorsElectedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersModeratorsElectedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdsAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['answers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdsAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdsAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['answers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdsAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdsAssociated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['associated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['associated']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdsAssociatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdsAssociated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['associated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['associated']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdsAssociatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdsBadges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['badges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['badges']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdsBadgesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdsBadges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['badges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['badges']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdsBadgesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdsComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['comments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdsCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdsComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['comments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdsCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdsCommentsToid<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdsCommentsToidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdsCommentsToid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdsCommentsToidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdsFavorites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['favorites']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['favorites']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdsFavoritesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdsFavorites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['favorites']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['favorites']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdsFavoritesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdsMentioned<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['mentioned']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['mentioned']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdsMentionedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdsMentioned<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['mentioned']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['mentioned']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdsMentionedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdsMerges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['merges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['merges']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdsMergesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdsMerges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['merges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['merges']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdsMergesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdsQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['questions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdsQuestionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdsQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['questions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdsQuestionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdsQuestionsFeatured<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersIdsQuestionsFeaturedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdsQuestionsFeatured<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersIdsQuestionsFeaturedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersIdsQuestionsNoAnswers<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersIdsQuestionsNoAnswersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdsQuestionsNoAnswers<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersIdsQuestionsNoAnswersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersIdsQuestionsUnaccepted<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersIdsQuestionsUnacceptedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdsQuestionsUnaccepted<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersIdsQuestionsUnacceptedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersIdsQuestionsUnanswered<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersIdsQuestionsUnansweredQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdsQuestionsUnanswered<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersIdsQuestionsUnansweredQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersIdsReputation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['reputation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['reputation']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdsReputationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdsReputation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['reputation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['reputation']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdsReputationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdsReputationHistory<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersIdsReputationHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdsReputationHistory<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersIdsReputationHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersIdsSuggestedEdits<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersIdsSuggestedEditsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdsSuggestedEdits<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersIdsSuggestedEditsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersIdsTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['tags']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdsTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdsTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['tags']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdsTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdsTimeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['timeline']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['timeline']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdsTimelineQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdsTimeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['timeline']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ids']['timeline']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdsTimelineQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdInbox<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['inbox']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['inbox']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['inbox']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdInboxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdInboxQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdInbox<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['inbox']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['inbox']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['inbox']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdInboxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdInboxQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdInboxUnread<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdInboxUnreadQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdInboxUnread<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdInboxUnreadQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdNotifications<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdNotificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdNotifications<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdNotificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdNotificationsUnread<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersIdNotificationsUnreadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdNotificationsUnread<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersIdNotificationsUnreadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersIdPrivileges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['privileges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['privileges']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdPrivilegesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdPrivileges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['privileges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['privileges']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdPrivilegesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdReputationHistoryFull<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersIdReputationHistoryFullQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdReputationHistoryFull<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersIdReputationHistoryFullQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersIdTagsTagsTopAnswers<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersIdTagsTagsTopAnswersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdTagsTagsTopAnswers<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersIdTagsTagsTopAnswersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersIdTagsTagsTopQuestions<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersIdTagsTagsTopQuestionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdTagsTagsTopQuestions<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersIdTagsTagsTopQuestionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersIdTopAnswerTags<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdTopAnswerTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdTopAnswerTags<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdTopAnswerTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersIdTopQuestionTags<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersIdTopQuestionTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdTopQuestionTags<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersIdTopQuestionTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersIdWritePermissions<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersIdWritePermissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdWritePermissions<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersIdWritePermissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
