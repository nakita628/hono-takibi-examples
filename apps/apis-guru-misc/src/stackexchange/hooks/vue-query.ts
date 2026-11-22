import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-tokens'][':accessTokens']['$get']>
  >,
) {
  return ['access-tokens', '/access-tokens/:accessTokens', toValue(args)] as const
}

export function getAccessTokensAccessTokensQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-tokens'][':accessTokens']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessTokensAccessTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['access-tokens'][':accessTokens'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-tokens'][':accessTokens']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['access-tokens'][':accessTokens']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccessTokensAccessTokensQueryKey>
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
          Awaited<ReturnType<(typeof client)['access-tokens'][':accessTokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessTokensAccessTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessTokensAccessTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['access-tokens'][':accessTokens'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccessTokensAccessTokensInvalidateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>
  >,
) {
  return ['access-tokens', '/access-tokens/:accessTokens/invalidate', toValue(args)] as const
}

export function getAccessTokensAccessTokensInvalidateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessTokensAccessTokensInvalidateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['access-tokens'][':accessTokens'].invalidate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getAccessTokensAccessTokensInvalidateQueryKey>
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
          Awaited<
            ReturnType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessTokensAccessTokensInvalidateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessTokensAccessTokensInvalidateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['access-tokens'][':accessTokens'].invalidate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnswersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.answers.$get>>,
) {
  return ['answers', '/answers', toValue(args)] as const
}

export function getAnswersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.answers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnswersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.answers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAnswers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.answers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$get>>>>
          >,
          ReturnType<typeof getAnswersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAnswersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnswersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.answers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnswersIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.answers)[':ids']['$get']>>,
) {
  return ['answers', '/answers/:ids', toValue(args)] as const
}

export function getAnswersIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.answers)[':ids']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnswersIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.answers[':ids'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnswersIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.answers)[':ids']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['$get']>>>
            >
          >,
          ReturnType<typeof getAnswersIdsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnswersIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnswersIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.answers[':ids'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnswersIdsCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.answers)[':ids']['comments']['$get']>>,
) {
  return ['answers', '/answers/:ids/comments', toValue(args)] as const
}

export function getAnswersIdsCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.answers)[':ids']['comments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnswersIdsCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.answers[':ids'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnswersIdsComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.answers)[':ids']['comments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.answers)[':ids']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnswersIdsCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.answers)[':ids']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnswersIdsCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnswersIdsCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.answers[':ids'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAccessTokensDeAuthenticateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>
  >,
) {
  return ['apps', '/apps/:accessTokens/de-authenticate', toValue(args)] as const
}

export function getAppsAccessTokensDeAuthenticateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAccessTokensDeAuthenticateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':accessTokens']['de-authenticate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAccessTokensDeAuthenticateQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAccessTokensDeAuthenticateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAccessTokensDeAuthenticateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':accessTokens']['de-authenticate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBadgesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badges.$get>>,
) {
  return ['badges', '/badges', toValue(args)] as const
}

export function getBadgesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBadgesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.badges.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBadges<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.$get>>>>>,
          ReturnType<typeof getBadgesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBadgesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBadgesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.badges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBadgesNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badges.name.$get>>,
) {
  return ['badges', '/badges/name', toValue(args)] as const
}

export function getBadgesNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badges.name.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBadgesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.badges.name.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBadgesName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badges.name.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.name.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.name.$get>>>>
          >,
          ReturnType<typeof getBadgesNameQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.name.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBadgesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBadgesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.badges.name.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBadgesRecipientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badges.recipients.$get>>,
) {
  return ['badges', '/badges/recipients', toValue(args)] as const
}

export function getBadgesRecipientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badges.recipients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBadgesRecipientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.badges.recipients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBadgesRecipients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.recipients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badges.recipients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.badges.recipients.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.badges.recipients.$get>>>
            >
          >,
          ReturnType<typeof getBadgesRecipientsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.recipients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBadgesRecipientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBadgesRecipientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.badges.recipients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBadgesTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badges.tags.$get>>,
) {
  return ['badges', '/badges/tags', toValue(args)] as const
}

export function getBadgesTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badges.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBadgesTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.badges.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBadgesTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badges.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.tags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.tags.$get>>>>
          >,
          ReturnType<typeof getBadgesTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBadgesTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBadgesTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.badges.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBadgesIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.badges)[':ids']['$get']>>,
) {
  return ['badges', '/badges/:ids', toValue(args)] as const
}

export function getBadgesIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.badges)[':ids']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBadgesIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.badges[':ids'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBadgesIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.badges)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.badges)[':ids']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.badges)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.badges)[':ids']['$get']>>>
            >
          >,
          ReturnType<typeof getBadgesIdsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.badges)[':ids']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBadgesIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBadgesIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.badges[':ids'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBadgesIdsRecipientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.badges)[':ids']['recipients']['$get']>>,
) {
  return ['badges', '/badges/:ids/recipients', toValue(args)] as const
}

export function getBadgesIdsRecipientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.badges)[':ids']['recipients']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBadgesIdsRecipientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.badges[':ids'].recipients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.badges)[':ids']['recipients']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.badges)[':ids']['recipients']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBadgesIdsRecipientsQueryKey>
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
          Awaited<ReturnType<(typeof client.badges)[':ids']['recipients']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBadgesIdsRecipientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBadgesIdsRecipientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.badges[':ids'].recipients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comments.$get>>,
) {
  return ['comments', '/comments', toValue(args)] as const
}

export function getCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>
          >,
          ReturnType<typeof getCommentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommentsIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':ids']['$get']>>,
) {
  return ['comments', '/comments/:ids', toValue(args)] as const
}

export function getCommentsIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':ids']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommentsIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comments[':ids'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommentsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':ids']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':ids']['$get']>>>
            >
          >,
          ReturnType<typeof getCommentsIdsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':ids']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommentsIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comments[':ids'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getErrorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.errors.$get>>,
) {
  return ['errors', '/errors', toValue(args)] as const
}

export function getErrorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.errors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getErrorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.errors.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useErrors<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.errors.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.errors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.errors.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.errors.$get>>>>>,
          ReturnType<typeof getErrorsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.errors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getErrorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getErrorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.errors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getErrorsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.errors)[':id']['$get']>>,
) {
  return ['errors', '/errors/:id', toValue(args)] as const
}

export function getErrorsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.errors)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getErrorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.errors[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useErrorsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.errors)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.errors)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.errors)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.errors)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getErrorsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.errors)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getErrorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getErrorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.errors[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  return ['events', '/events', toValue(args)] as const
}

export function getEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFiltersCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.filters.create.$get>>,
) {
  return ['filters', '/filters/create', toValue(args)] as const
}

export function getFiltersCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.filters.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFiltersCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.filters.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFiltersCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.filters.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.create.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.create.$get>>>>
          >,
          ReturnType<typeof getFiltersCreateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.create.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFiltersCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFiltersCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.filters.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFiltersFiltersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.filters)[':filters']['$get']>>,
) {
  return ['filters', '/filters/:filters', toValue(args)] as const
}

export function getFiltersFiltersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.filters)[':filters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFiltersFiltersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.filters[':filters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFiltersFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':filters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.filters)[':filters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':filters']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':filters']['$get']>>>
            >
          >,
          ReturnType<typeof getFiltersFiltersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':filters']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFiltersFiltersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFiltersFiltersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.filters[':filters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInboxQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inbox.$get>>,
) {
  return ['inbox', '/inbox', toValue(args)] as const
}

export function getInboxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inbox.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inbox.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInbox<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inbox.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.$get>>>>>,
          ReturnType<typeof getInboxQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInboxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inbox.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInboxUnreadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inbox.unread.$get>>,
) {
  return ['inbox', '/inbox/unread', toValue(args)] as const
}

export function getInboxUnreadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inbox.unread.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxUnreadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inbox.unread.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInboxUnread<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.unread.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inbox.unread.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.unread.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.unread.$get>>>>
          >,
          ReturnType<typeof getInboxUnreadQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.unread.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInboxUnreadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxUnreadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inbox.unread.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.info.$get>>) {
  return ['info', '/info', toValue(args)] as const
}

export function getInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
          ReturnType<typeof getInfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.me.$get>>) {
  return ['me', '/me', toValue(args)] as const
}

export function getMeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          ReturnType<typeof getMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeAnswersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.answers.$get>>,
) {
  return ['me', '/me/answers', toValue(args)] as const
}

export function getMeAnswersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.answers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeAnswersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.answers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeAnswers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.answers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.answers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.answers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.answers.$get>>>>
          >,
          ReturnType<typeof getMeAnswersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.answers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeAnswersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeAnswersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.answers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeAssociatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.associated.$get>>,
) {
  return ['me', '/me/associated', toValue(args)] as const
}

export function getMeAssociatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.associated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeAssociatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.associated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeAssociated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.associated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.associated.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.associated.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.associated.$get>>>>
          >,
          ReturnType<typeof getMeAssociatedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.associated.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeAssociatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeAssociatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.associated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeBadgesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.badges.$get>>,
) {
  return ['me', '/me/badges', toValue(args)] as const
}

export function getMeBadgesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.badges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeBadgesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.badges.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeBadges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.badges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.badges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.badges.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.badges.$get>>>>
          >,
          ReturnType<typeof getMeBadgesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.badges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeBadgesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeBadgesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.badges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.comments.$get>>,
) {
  return ['me', '/me/comments', toValue(args)] as const
}

export function getMeCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.comments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.comments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.comments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.comments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.comments.$get>>>>
          >,
          ReturnType<typeof getMeCommentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.comments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeCommentsToIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.comments)[':toId']['$get']>>,
) {
  return ['me', '/me/comments/:toId', toValue(args)] as const
}

export function getMeCommentsToIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.comments)[':toId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeCommentsToIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.comments[':toId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeCommentsToId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.comments)[':toId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.comments)[':toId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.comments)[':toId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.comments)[':toId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeCommentsToIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.comments)[':toId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeCommentsToIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeCommentsToIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.comments[':toId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeFavoritesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.favorites.$get>>,
) {
  return ['me', '/me/favorites', toValue(args)] as const
}

export function getMeFavoritesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.favorites.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeFavoritesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.favorites.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeFavorites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.favorites.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.$get>>>>
          >,
          ReturnType<typeof getMeFavoritesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeFavoritesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeFavoritesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.favorites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeInboxQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.inbox.$get>>,
) {
  return ['me', '/me/inbox', toValue(args)] as const
}

export function getMeInboxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.inbox.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeInboxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.inbox.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeInbox<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.inbox.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.$get>>>>
          >,
          ReturnType<typeof getMeInboxQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeInboxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeInboxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.inbox.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeInboxUnreadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.inbox.unread.$get>>,
) {
  return ['me', '/me/inbox/unread', toValue(args)] as const
}

export function getMeInboxUnreadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.inbox.unread.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeInboxUnreadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.inbox.unread.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeInboxUnread<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.unread.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.inbox.unread.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.unread.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.unread.$get>>>
            >
          >,
          ReturnType<typeof getMeInboxUnreadQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.unread.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeInboxUnreadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeInboxUnreadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.inbox.unread.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeMentionedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.mentioned.$get>>,
) {
  return ['me', '/me/mentioned', toValue(args)] as const
}

export function getMeMentionedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.mentioned.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeMentionedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.mentioned.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeMentioned<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.mentioned.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.mentioned.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.mentioned.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.mentioned.$get>>>>
          >,
          ReturnType<typeof getMeMentionedQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.mentioned.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeMentionedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeMentionedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.mentioned.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeMergesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.merges.$get>>,
) {
  return ['me', '/me/merges', toValue(args)] as const
}

export function getMeMergesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.merges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeMergesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.merges.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeMerges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.merges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.merges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.merges.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.merges.$get>>>>
          >,
          ReturnType<typeof getMeMergesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.merges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeMergesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeMergesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.merges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeNotificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.notifications.$get>>,
) {
  return ['me', '/me/notifications', toValue(args)] as const
}

export function getMeNotificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.notifications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.notifications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.$get>>>
            >
          >,
          ReturnType<typeof getMeNotificationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeNotificationsUnreadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.notifications.unread.$get>>,
) {
  return ['me', '/me/notifications/unread', toValue(args)] as const
}

export function getMeNotificationsUnreadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.notifications.unread.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeNotificationsUnreadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.notifications.unread.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeNotificationsUnread<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.unread.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.notifications.unread.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.unread.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.unread.$get>>>
            >
          >,
          ReturnType<typeof getMeNotificationsUnreadQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.unread.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeNotificationsUnreadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeNotificationsUnreadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.notifications.unread.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMePrivilegesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.privileges.$get>>,
) {
  return ['me', '/me/privileges', toValue(args)] as const
}

export function getMePrivilegesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.privileges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMePrivilegesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.privileges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMePrivileges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.privileges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.privileges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.privileges.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.privileges.$get>>>>
          >,
          ReturnType<typeof getMePrivilegesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.privileges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMePrivilegesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMePrivilegesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.privileges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeQuestionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.questions.$get>>,
) {
  return ['me', '/me/questions', toValue(args)] as const
}

export function getMeQuestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.questions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeQuestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.questions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeQuestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.questions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.$get>>>>
          >,
          ReturnType<typeof getMeQuestionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQuestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeQuestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.questions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeQuestionsFeaturedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.questions.featured.$get>>,
) {
  return ['me', '/me/questions/featured', toValue(args)] as const
}

export function getMeQuestionsFeaturedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.questions.featured.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeQuestionsFeaturedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.questions.featured.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeQuestionsFeatured<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.questions.featured.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.featured.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.featured.$get>>>
            >
          >,
          ReturnType<typeof getMeQuestionsFeaturedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.featured.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeQuestionsFeaturedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeQuestionsFeaturedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.questions.featured.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeQuestionsNoAnswersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.questions)['no-answers']['$get']>>,
) {
  return ['me', '/me/questions/no-answers', toValue(args)] as const
}

export function getMeQuestionsNoAnswersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.questions)['no-answers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeQuestionsNoAnswersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.questions['no-answers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeQuestionsNoAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.questions)['no-answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.questions)['no-answers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.questions)['no-answers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeQuestionsNoAnswersQueryKey>
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
          Awaited<ReturnType<(typeof client.me.questions)['no-answers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeQuestionsNoAnswersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeQuestionsNoAnswersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.questions['no-answers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeQuestionsUnacceptedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.questions.unaccepted.$get>>,
) {
  return ['me', '/me/questions/unaccepted', toValue(args)] as const
}

export function getMeQuestionsUnacceptedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.questions.unaccepted.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeQuestionsUnacceptedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.questions.unaccepted.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeQuestionsUnaccepted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unaccepted.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.questions.unaccepted.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unaccepted.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unaccepted.$get>>>
            >
          >,
          ReturnType<typeof getMeQuestionsUnacceptedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unaccepted.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeQuestionsUnacceptedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeQuestionsUnacceptedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.questions.unaccepted.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeQuestionsUnansweredQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.questions.unanswered.$get>>,
) {
  return ['me', '/me/questions/unanswered', toValue(args)] as const
}

export function getMeQuestionsUnansweredQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.questions.unanswered.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeQuestionsUnansweredQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.questions.unanswered.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeQuestionsUnanswered<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unanswered.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.questions.unanswered.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unanswered.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unanswered.$get>>>
            >
          >,
          ReturnType<typeof getMeQuestionsUnansweredQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unanswered.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeQuestionsUnansweredQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeQuestionsUnansweredQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.questions.unanswered.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeReputationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.reputation.$get>>,
) {
  return ['me', '/me/reputation', toValue(args)] as const
}

export function getMeReputationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.reputation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeReputationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.reputation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeReputation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.reputation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.reputation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.reputation.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.reputation.$get>>>>
          >,
          ReturnType<typeof getMeReputationQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.reputation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeReputationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeReputationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.reputation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeReputationHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me)['reputation-history']['$get']>>,
) {
  return ['me', '/me/reputation-history', toValue(args)] as const
}

export function getMeReputationHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me)['reputation-history']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeReputationHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me['reputation-history'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeReputationHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['reputation-history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me)['reputation-history']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me)['reputation-history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeReputationHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.me)['reputation-history']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeReputationHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeReputationHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me['reputation-history'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeReputationHistoryFullQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me)['reputation-history']['full']['$get']>
  >,
) {
  return ['me', '/me/reputation-history/full', toValue(args)] as const
}

export function getMeReputationHistoryFullQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me)['reputation-history']['full']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeReputationHistoryFullQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me['reputation-history'].full.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me)['reputation-history']['full']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me)['reputation-history']['full']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeReputationHistoryFullQueryKey>
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
          Awaited<ReturnType<(typeof client.me)['reputation-history']['full']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeReputationHistoryFullQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeReputationHistoryFullQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me['reputation-history'].full.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeSuggestedEditsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me)['suggested-edits']['$get']>>,
) {
  return ['me', '/me/suggested-edits', toValue(args)] as const
}

export function getMeSuggestedEditsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me)['suggested-edits']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeSuggestedEditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me['suggested-edits'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeSuggestedEdits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['suggested-edits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me)['suggested-edits']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me)['suggested-edits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me)['suggested-edits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeSuggestedEditsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.me)['suggested-edits']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeSuggestedEditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeSuggestedEditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me['suggested-edits'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.tags.$get>>,
) {
  return ['me', '/me/tags', toValue(args)] as const
}

export function getMeTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tags.$get>>>>
          >,
          ReturnType<typeof getMeTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeTagsTagsTopAnswersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.tags)[':tags']['top-answers']['$get']>>,
) {
  return ['me', '/me/tags/:tags/top-answers', toValue(args)] as const
}

export function getMeTagsTagsTopAnswersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.tags)[':tags']['top-answers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeTagsTagsTopAnswersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.tags[':tags']['top-answers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.tags)[':tags']['top-answers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-answers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeTagsTagsTopAnswersQueryKey>
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
          Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-answers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeTagsTagsTopAnswersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeTagsTagsTopAnswersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.tags[':tags']['top-answers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeTagsTagsTopQuestionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.tags)[':tags']['top-questions']['$get']>
  >,
) {
  return ['me', '/me/tags/:tags/top-questions', toValue(args)] as const
}

export function getMeTagsTagsTopQuestionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.tags)[':tags']['top-questions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeTagsTagsTopQuestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.tags[':tags']['top-questions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.tags)[':tags']['top-questions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-questions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeTagsTagsTopQuestionsQueryKey>
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
          Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-questions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeTagsTagsTopQuestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeTagsTagsTopQuestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.tags[':tags']['top-questions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeTimelineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.timeline.$get>>,
) {
  return ['me', '/me/timeline', toValue(args)] as const
}

export function getMeTimelineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.timeline.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeTimelineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.timeline.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeTimeline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.timeline.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.timeline.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.timeline.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.timeline.$get>>>>
          >,
          ReturnType<typeof getMeTimelineQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.timeline.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeTimelineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeTimelineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.timeline.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeTopAnswerTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me)['top-answer-tags']['$get']>>,
) {
  return ['me', '/me/top-answer-tags', toValue(args)] as const
}

export function getMeTopAnswerTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me)['top-answer-tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeTopAnswerTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me['top-answer-tags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeTopAnswerTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-answer-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me)['top-answer-tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me)['top-answer-tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me)['top-answer-tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeTopAnswerTagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-answer-tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeTopAnswerTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeTopAnswerTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me['top-answer-tags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeTopQuestionTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me)['top-question-tags']['$get']>>,
) {
  return ['me', '/me/top-question-tags', toValue(args)] as const
}

export function getMeTopQuestionTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me)['top-question-tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeTopQuestionTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me['top-question-tags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeTopQuestionTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-question-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me)['top-question-tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me)['top-question-tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeTopQuestionTagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-question-tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeTopQuestionTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeTopQuestionTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me['top-question-tags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeWritePermissionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me)['write-permissions']['$get']>>,
) {
  return ['me', '/me/write-permissions', toValue(args)] as const
}

export function getMeWritePermissionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me)['write-permissions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeWritePermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me['write-permissions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeWritePermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me)['write-permissions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me)['write-permissions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me)['write-permissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeWritePermissionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.me)['write-permissions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeWritePermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeWritePermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me['write-permissions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.$get>>,
) {
  return ['notifications', '/notifications', toValue(args)] as const
}

export function getNotificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
          >,
          ReturnType<typeof getNotificationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsUnreadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.unread.$get>>,
) {
  return ['notifications', '/notifications/unread', toValue(args)] as const
}

export function getNotificationsUnreadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.unread.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsUnreadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.unread.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsUnread<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unread.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.unread.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unread.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unread.$get>>>
            >
          >,
          ReturnType<typeof getNotificationsUnreadQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unread.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsUnreadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsUnreadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.unread.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.$get>>,
) {
  return ['posts', '/posts', toValue(args)] as const
}

export function getPostsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.posts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePosts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
          ReturnType<typeof getPostsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.posts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostsIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':ids']['$get']>>,
) {
  return ['posts', '/posts/:ids', toValue(args)] as const
}

export function getPostsIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':ids']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostsIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.posts[':ids'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':ids']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['$get']>>>
            >
          >,
          ReturnType<typeof getPostsIdsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPostsIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostsIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.posts[':ids'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostsIdsCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':ids']['comments']['$get']>>,
) {
  return ['posts', '/posts/:ids/comments', toValue(args)] as const
}

export function getPostsIdsCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':ids']['comments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostsIdsCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.posts[':ids'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostsIdsComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':ids']['comments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':ids']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPostsIdsCommentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['comments']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostsIdsCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostsIdsCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.posts[':ids'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostsIdsRevisionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':ids']['revisions']['$get']>>,
) {
  return ['posts', '/posts/:ids/revisions', toValue(args)] as const
}

export function getPostsIdsRevisionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':ids']['revisions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostsIdsRevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.posts[':ids'].revisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostsIdsRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['revisions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':ids']['revisions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':ids']['revisions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPostsIdsRevisionsQueryKey>
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
          Awaited<ReturnType<(typeof client.posts)[':ids']['revisions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostsIdsRevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostsIdsRevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.posts[':ids'].revisions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostsIdsSuggestedEditsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.posts)[':ids']['suggested-edits']['$get']>
  >,
) {
  return ['posts', '/posts/:ids/suggested-edits', toValue(args)] as const
}

export function getPostsIdsSuggestedEditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.posts)[':ids']['suggested-edits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostsIdsSuggestedEditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.posts[':ids']['suggested-edits'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.posts)[':ids']['suggested-edits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':ids']['suggested-edits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPostsIdsSuggestedEditsQueryKey>
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
          Awaited<ReturnType<(typeof client.posts)[':ids']['suggested-edits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostsIdsSuggestedEditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostsIdsSuggestedEditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.posts[':ids']['suggested-edits'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getPrivilegesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.privileges.$get>>,
) {
  return ['privileges', '/privileges', toValue(args)] as const
}

export function getPrivilegesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.privileges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPrivilegesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.privileges.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePrivileges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privileges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.privileges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privileges.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privileges.$get>>>>
          >,
          ReturnType<typeof getPrivilegesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privileges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPrivilegesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPrivilegesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.privileges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuestionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.questions.$get>>,
) {
  return ['questions', '/questions', toValue(args)] as const
}

export function getQuestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.questions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.questions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQuestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.questions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>
          >,
          ReturnType<typeof getQuestionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.questions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuestionsFeaturedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.questions.featured.$get>>,
) {
  return ['questions', '/questions/featured', toValue(args)] as const
}

export function getQuestionsFeaturedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.questions.featured.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuestionsFeaturedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.questions.featured.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuestionsFeatured<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.questions.featured.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.questions.featured.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.questions.featured.$get>>>
            >
          >,
          ReturnType<typeof getQuestionsFeaturedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.featured.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsFeaturedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuestionsFeaturedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.questions.featured.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuestionsNoAnswersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)['no-answers']['$get']>>,
) {
  return ['questions', '/questions/no-answers', toValue(args)] as const
}

export function getQuestionsNoAnswersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)['no-answers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuestionsNoAnswersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.questions['no-answers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuestionsNoAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.questions)['no-answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)['no-answers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.questions)['no-answers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuestionsNoAnswersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.questions)['no-answers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsNoAnswersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuestionsNoAnswersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.questions['no-answers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuestionsUnansweredQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.questions.unanswered.$get>>,
) {
  return ['questions', '/questions/unanswered', toValue(args)] as const
}

export function getQuestionsUnansweredQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.questions.unanswered.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuestionsUnansweredQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.questions.unanswered.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuestionsUnanswered<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.unanswered.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.questions.unanswered.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.questions.unanswered.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.questions.unanswered.$get>>>
            >
          >,
          ReturnType<typeof getQuestionsUnansweredQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.unanswered.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsUnansweredQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuestionsUnansweredQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.questions.unanswered.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuestionsIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['$get']>>,
) {
  return ['questions', '/questions/:ids', toValue(args)] as const
}

export function getQuestionsIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuestionsIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.questions[':ids'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuestionsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['$get']>>>
            >
          >,
          ReturnType<typeof getQuestionsIdsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuestionsIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.questions[':ids'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuestionsIdsAnswersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['answers']['$get']>>,
) {
  return ['questions', '/questions/:ids/answers', toValue(args)] as const
}

export function getQuestionsIdsAnswersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['answers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuestionsIdsAnswersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.questions[':ids'].answers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['answers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.questions)[':ids']['answers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuestionsIdsAnswersQueryKey>
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
          Awaited<ReturnType<(typeof client.questions)[':ids']['answers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsIdsAnswersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuestionsIdsAnswersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.questions[':ids'].answers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuestionsIdsCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['comments']['$get']>>,
) {
  return ['questions', '/questions/:ids/comments', toValue(args)] as const
}

export function getQuestionsIdsCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['comments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuestionsIdsCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.questions[':ids'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['comments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.questions)[':ids']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuestionsIdsCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.questions)[':ids']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsIdsCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuestionsIdsCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.questions[':ids'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuestionsIdsLinkedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['linked']['$get']>>,
) {
  return ['questions', '/questions/:ids/linked', toValue(args)] as const
}

export function getQuestionsIdsLinkedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['linked']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuestionsIdsLinkedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.questions[':ids'].linked.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuestionsIdsLinked<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['linked']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['linked']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.questions)[':ids']['linked']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuestionsIdsLinkedQueryKey>
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
          Awaited<ReturnType<(typeof client.questions)[':ids']['linked']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsIdsLinkedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuestionsIdsLinkedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.questions[':ids'].linked.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuestionsIdsRelatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['related']['$get']>>,
) {
  return ['questions', '/questions/:ids/related', toValue(args)] as const
}

export function getQuestionsIdsRelatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['related']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuestionsIdsRelatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.questions[':ids'].related.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['related']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.questions)[':ids']['related']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuestionsIdsRelatedQueryKey>
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
          Awaited<ReturnType<(typeof client.questions)[':ids']['related']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsIdsRelatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuestionsIdsRelatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.questions[':ids'].related.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuestionsIdsTimelineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['timeline']['$get']>>,
) {
  return ['questions', '/questions/:ids/timeline', toValue(args)] as const
}

export function getQuestionsIdsTimelineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['timeline']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuestionsIdsTimelineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.questions[':ids'].timeline.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.questions)[':ids']['timeline']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.questions)[':ids']['timeline']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuestionsIdsTimelineQueryKey>
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
          Awaited<ReturnType<(typeof client.questions)[':ids']['timeline']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionsIdsTimelineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuestionsIdsTimelineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.questions[':ids'].timeline.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRevisionsIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.revisions)[':ids']['$get']>>,
) {
  return ['revisions', '/revisions/:ids', toValue(args)] as const
}

export function getRevisionsIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.revisions)[':ids']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRevisionsIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.revisions[':ids'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRevisionsIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.revisions)[':ids']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':ids']['$get']>>>
            >
          >,
          ReturnType<typeof getRevisionsIdsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':ids']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRevisionsIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRevisionsIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.revisions[':ids'].$get(toValue(args), {
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

export function getSearchAdvancedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.advanced.$get>>,
) {
  return ['search', '/search/advanced', toValue(args)] as const
}

export function getSearchAdvancedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.advanced.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchAdvancedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.advanced.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.advanced.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.advanced.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.advanced.$get>>>
            >
          >,
          ReturnType<typeof getSearchAdvancedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.advanced.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchAdvancedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchAdvancedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.advanced.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSimilarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.similar.$get>>,
) {
  return ['similar', '/similar', toValue(args)] as const
}

export function getSimilarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.similar.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSimilarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.similar.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSimilar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.similar.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>
          >,
          ReturnType<typeof getSimilarQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSimilarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSimilarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.similar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sites.$get>>,
) {
  return ['sites', '/sites', toValue(args)] as const
}

export function getSitesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sites.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSites<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sites.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
          ReturnType<typeof getSitesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSuggestedEditsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['suggested-edits']['$get']>>,
) {
  return ['suggested-edits', '/suggested-edits', toValue(args)] as const
}

export function getSuggestedEditsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['suggested-edits']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuggestedEditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['suggested-edits'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuggestedEdits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['suggested-edits']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits']['$get']>>>
            >
          >,
          ReturnType<typeof getSuggestedEditsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuggestedEditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuggestedEditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['suggested-edits'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSuggestedEditsIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['suggested-edits'][':ids']['$get']>>,
) {
  return ['suggested-edits', '/suggested-edits/:ids', toValue(args)] as const
}

export function getSuggestedEditsIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['suggested-edits'][':ids']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuggestedEditsIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['suggested-edits'][':ids'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuggestedEditsIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits'][':ids']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['suggested-edits'][':ids']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['suggested-edits'][':ids']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSuggestedEditsIdsQueryKey>
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
          Awaited<ReturnType<(typeof client)['suggested-edits'][':ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuggestedEditsIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuggestedEditsIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['suggested-edits'][':ids'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>) {
  return ['tags', '/tags', toValue(args)] as const
}

export function getTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          ReturnType<typeof getTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsModeratorOnlyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)['moderator-only']['$get']>>,
) {
  return ['tags', '/tags/moderator-only', toValue(args)] as const
}

export function getTagsModeratorOnlyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)['moderator-only']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsModeratorOnlyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags['moderator-only'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsModeratorOnly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)['moderator-only']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)['moderator-only']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)['moderator-only']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsModeratorOnlyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)['moderator-only']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsModeratorOnlyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsModeratorOnlyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags['moderator-only'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsRequiredQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.required.$get>>,
) {
  return ['tags', '/tags/required', toValue(args)] as const
}

export function getTagsRequiredQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.required.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsRequiredQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.required.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsRequired<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.required.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.required.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.required.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.required.$get>>>>
          >,
          ReturnType<typeof getTagsRequiredQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.required.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsRequiredQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsRequiredQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.required.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsSynonymsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.synonyms.$get>>,
) {
  return ['tags', '/tags/synonyms', toValue(args)] as const
}

export function getTagsSynonymsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.synonyms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsSynonymsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.synonyms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsSynonyms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.synonyms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.synonyms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.synonyms.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.synonyms.$get>>>>
          >,
          ReturnType<typeof getTagsSynonymsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.synonyms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsSynonymsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsSynonymsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.synonyms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsTagsFaqQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['faq']['$get']>>,
) {
  return ['tags', '/tags/:tags/faq', toValue(args)] as const
}

export function getTagsTagsFaqQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['faq']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagsFaqQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tags'].faq.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsTagsFaq<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['faq']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['faq']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tags']['faq']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tags']['faq']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsTagsFaqQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['faq']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagsFaqQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagsFaqQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tags'].faq.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsTagsInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['info']['$get']>>,
) {
  return ['tags', '/tags/:tags/info', toValue(args)] as const
}

export function getTagsTagsInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tags'].info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsTagsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tags']['info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tags']['info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsTagsInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tags'].info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsTagsRelatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['related']['$get']>>,
) {
  return ['tags', '/tags/:tags/related', toValue(args)] as const
}

export function getTagsTagsRelatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['related']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagsRelatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tags'].related.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsTagsRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['related']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tags']['related']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsTagsRelatedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['related']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagsRelatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagsRelatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tags'].related.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsTagsSynonymsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['synonyms']['$get']>>,
) {
  return ['tags', '/tags/:tags/synonyms', toValue(args)] as const
}

export function getTagsTagsSynonymsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['synonyms']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagsSynonymsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tags'].synonyms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsTagsSynonyms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['synonyms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['synonyms']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tags']['synonyms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsTagsSynonymsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['synonyms']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagsSynonymsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagsSynonymsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tags'].synonyms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsTagsWikisQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['wikis']['$get']>>,
) {
  return ['tags', '/tags/:tags/wikis', toValue(args)] as const
}

export function getTagsTagsWikisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['wikis']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagsWikisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tags'].wikis.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsTagsWikis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['wikis']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['wikis']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tags']['wikis']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsTagsWikisQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['wikis']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagsWikisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagsWikisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tags'].wikis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsTagTopAnswerersPeriodQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>
  >,
) {
  return ['tags', '/tags/:tag/top-answerers/:period', toValue(args)] as const
}

export function getTagsTagTopAnswerersPeriodQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagTopAnswerersPeriodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tag']['top-answerers'][':period'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTagsTagTopAnswerersPeriodQueryKey>
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
          Awaited<ReturnType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagTopAnswerersPeriodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagTopAnswerersPeriodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tag']['top-answerers'][':period'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsTagTopAskersPeriodQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>
  >,
) {
  return ['tags', '/tags/:tag/top-askers/:period', toValue(args)] as const
}

export function getTagsTagTopAskersPeriodQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagTopAskersPeriodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tag']['top-askers'][':period'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsTagTopAskersPeriodQueryKey>
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
          Awaited<ReturnType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagTopAskersPeriodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagTopAskersPeriodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tag']['top-askers'][':period'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersModeratorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.moderators.$get>>,
) {
  return ['users', '/users/moderators', toValue(args)] as const
}

export function getUsersModeratorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.moderators.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersModeratorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.moderators.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersModerators<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.moderators.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.$get>>>
            >
          >,
          ReturnType<typeof getUsersModeratorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersModeratorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersModeratorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.moderators.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersModeratorsElectedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.moderators.elected.$get>>,
) {
  return ['users', '/users/moderators/elected', toValue(args)] as const
}

export function getUsersModeratorsElectedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.moderators.elected.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersModeratorsElectedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.moderators.elected.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersModeratorsElected<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.elected.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.moderators.elected.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.elected.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.elected.$get>>>
            >
          >,
          ReturnType<typeof getUsersModeratorsElectedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.elected.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersModeratorsElectedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersModeratorsElectedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.moderators.elected.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['$get']>>,
) {
  return ['users', '/users/:ids', toValue(args)] as const
}

export function getUsersIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersIdsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsAnswersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['answers']['$get']>>,
) {
  return ['users', '/users/:ids/answers', toValue(args)] as const
}

export function getUsersIdsAnswersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['answers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsAnswersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].answers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdsAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['answers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['answers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdsAnswersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['answers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsAnswersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsAnswersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].answers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsAssociatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['associated']['$get']>>,
) {
  return ['users', '/users/:ids/associated', toValue(args)] as const
}

export function getUsersIdsAssociatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['associated']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsAssociatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].associated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdsAssociated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['associated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['associated']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['associated']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdsAssociatedQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':ids']['associated']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsAssociatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsAssociatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].associated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsBadgesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['badges']['$get']>>,
) {
  return ['users', '/users/:ids/badges', toValue(args)] as const
}

export function getUsersIdsBadgesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['badges']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsBadgesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].badges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdsBadges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['badges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['badges']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['badges']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdsBadgesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['badges']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsBadgesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsBadgesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].badges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['comments']['$get']>>,
) {
  return ['users', '/users/:ids/comments', toValue(args)] as const
}

export function getUsersIdsCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['comments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdsComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['comments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['comments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdsCommentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['comments']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsCommentsToidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['comments'][':toid']['$get']>
  >,
) {
  return ['users', '/users/:ids/comments/:toid', toValue(args)] as const
}

export function getUsersIdsCommentsToidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['comments'][':toid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsCommentsToidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].comments[':toid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['comments'][':toid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['comments'][':toid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdsCommentsToidQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':ids']['comments'][':toid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsCommentsToidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsCommentsToidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].comments[':toid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsFavoritesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['favorites']['$get']>>,
) {
  return ['users', '/users/:ids/favorites', toValue(args)] as const
}

export function getUsersIdsFavoritesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['favorites']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsFavoritesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].favorites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdsFavorites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['favorites']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['favorites']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['favorites']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdsFavoritesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':ids']['favorites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsFavoritesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsFavoritesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].favorites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsMentionedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['mentioned']['$get']>>,
) {
  return ['users', '/users/:ids/mentioned', toValue(args)] as const
}

export function getUsersIdsMentionedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['mentioned']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsMentionedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].mentioned.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdsMentioned<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['mentioned']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['mentioned']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['mentioned']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdsMentionedQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':ids']['mentioned']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsMentionedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsMentionedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].mentioned.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsMergesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['merges']['$get']>>,
) {
  return ['users', '/users/:ids/merges', toValue(args)] as const
}

export function getUsersIdsMergesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['merges']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsMergesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].merges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdsMerges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['merges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['merges']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['merges']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdsMergesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['merges']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsMergesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsMergesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].merges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsQuestionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['questions']['$get']>>,
) {
  return ['users', '/users/:ids/questions', toValue(args)] as const
}

export function getUsersIdsQuestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['questions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsQuestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].questions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdsQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['questions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['questions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['questions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdsQuestionsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':ids']['questions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsQuestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsQuestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].questions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsQuestionsFeaturedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['questions']['featured']['$get']>
  >,
) {
  return ['users', '/users/:ids/questions/featured', toValue(args)] as const
}

export function getUsersIdsQuestionsFeaturedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['questions']['featured']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsQuestionsFeaturedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].questions.featured.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['questions']['featured']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['questions']['featured']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdsQuestionsFeaturedQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':ids']['questions']['featured']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsQuestionsFeaturedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsQuestionsFeaturedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].questions.featured.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsQuestionsNoAnswersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>
  >,
) {
  return ['users', '/users/:ids/questions/no-answers', toValue(args)] as const
}

export function getUsersIdsQuestionsNoAnswersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsQuestionsNoAnswersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].questions['no-answers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdsQuestionsNoAnswersQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsQuestionsNoAnswersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsQuestionsNoAnswersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].questions['no-answers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsQuestionsUnacceptedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>
  >,
) {
  return ['users', '/users/:ids/questions/unaccepted', toValue(args)] as const
}

export function getUsersIdsQuestionsUnacceptedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsQuestionsUnacceptedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].questions.unaccepted.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdsQuestionsUnacceptedQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsQuestionsUnacceptedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsQuestionsUnacceptedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].questions.unaccepted.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsQuestionsUnansweredQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>
  >,
) {
  return ['users', '/users/:ids/questions/unanswered', toValue(args)] as const
}

export function getUsersIdsQuestionsUnansweredQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsQuestionsUnansweredQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].questions.unanswered.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdsQuestionsUnansweredQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsQuestionsUnansweredQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsQuestionsUnansweredQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].questions.unanswered.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsReputationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['reputation']['$get']>>,
) {
  return ['users', '/users/:ids/reputation', toValue(args)] as const
}

export function getUsersIdsReputationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['reputation']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsReputationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].reputation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdsReputation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['reputation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['reputation']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['reputation']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdsReputationQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':ids']['reputation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsReputationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsReputationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].reputation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsReputationHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['reputation-history']['$get']>
  >,
) {
  return ['users', '/users/:ids/reputation-history', toValue(args)] as const
}

export function getUsersIdsReputationHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['reputation-history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsReputationHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids']['reputation-history'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['reputation-history']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['reputation-history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdsReputationHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':ids']['reputation-history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsReputationHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsReputationHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids']['reputation-history'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsSuggestedEditsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['suggested-edits']['$get']>
  >,
) {
  return ['users', '/users/:ids/suggested-edits', toValue(args)] as const
}

export function getUsersIdsSuggestedEditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['suggested-edits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsSuggestedEditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids']['suggested-edits'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ids']['suggested-edits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['suggested-edits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdsSuggestedEditsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':ids']['suggested-edits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsSuggestedEditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsSuggestedEditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids']['suggested-edits'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['tags']['$get']>>,
) {
  return ['users', '/users/:ids/tags', toValue(args)] as const
}

export function getUsersIdsTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdsTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdsTagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdsTimelineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['timeline']['$get']>>,
) {
  return ['users', '/users/:ids/timeline', toValue(args)] as const
}

export function getUsersIdsTimelineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['timeline']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdsTimelineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ids'].timeline.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdsTimeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['timeline']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ids']['timeline']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ids']['timeline']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdsTimelineQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['timeline']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdsTimelineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdsTimelineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ids'].timeline.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdInboxQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['inbox']['$get']>>,
) {
  return ['users', '/users/:id/inbox', toValue(args)] as const
}

export function getUsersIdInboxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['inbox']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdInboxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].inbox.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdInbox<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['inbox']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['inbox']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['inbox']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['inbox']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdInboxQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['inbox']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdInboxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdInboxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].inbox.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdInboxUnreadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['inbox']['unread']['$get']>>,
) {
  return ['users', '/users/:id/inbox/unread', toValue(args)] as const
}

export function getUsersIdInboxUnreadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['inbox']['unread']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdInboxUnreadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].inbox.unread.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['inbox']['unread']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['inbox']['unread']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdInboxUnreadQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['inbox']['unread']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdInboxUnreadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdInboxUnreadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].inbox.unread.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdNotificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['notifications']['$get']>>,
) {
  return ['users', '/users/:id/notifications', toValue(args)] as const
}

export function getUsersIdNotificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['notifications']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['notifications']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['notifications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdNotificationsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['notifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdNotificationsUnreadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['notifications']['unread']['$get']>
  >,
) {
  return ['users', '/users/:id/notifications/unread', toValue(args)] as const
}

export function getUsersIdNotificationsUnreadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['notifications']['unread']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdNotificationsUnreadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].notifications.unread.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['notifications']['unread']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['notifications']['unread']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdNotificationsUnreadQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['notifications']['unread']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdNotificationsUnreadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdNotificationsUnreadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].notifications.unread.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdPrivilegesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['privileges']['$get']>>,
) {
  return ['users', '/users/:id/privileges', toValue(args)] as const
}

export function getUsersIdPrivilegesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['privileges']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdPrivilegesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].privileges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdPrivileges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['privileges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['privileges']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['privileges']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdPrivilegesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['privileges']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdPrivilegesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdPrivilegesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].privileges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdReputationHistoryFullQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['reputation-history']['full']['$get']>
  >,
) {
  return ['users', '/users/:id/reputation-history/full', toValue(args)] as const
}

export function getUsersIdReputationHistoryFullQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['reputation-history']['full']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdReputationHistoryFullQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id']['reputation-history'].full.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['reputation-history']['full']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':id']['reputation-history']['full']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdReputationHistoryFullQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['reputation-history']['full']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdReputationHistoryFullQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdReputationHistoryFullQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id']['reputation-history'].full.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdTagsTagsTopAnswersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>
  >,
) {
  return ['users', '/users/:id/tags/:tags/top-answers', toValue(args)] as const
}

export function getUsersIdTagsTagsTopAnswersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdTagsTagsTopAnswersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].tags[':tags']['top-answers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdTagsTagsTopAnswersQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdTagsTagsTopAnswersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdTagsTagsTopAnswersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].tags[':tags']['top-answers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdTagsTagsTopQuestionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>
  >,
) {
  return ['users', '/users/:id/tags/:tags/top-questions', toValue(args)] as const
}

export function getUsersIdTagsTagsTopQuestionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdTagsTagsTopQuestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].tags[':tags']['top-questions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdTagsTagsTopQuestionsQueryKey>
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
          Awaited<
            ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdTagsTagsTopQuestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdTagsTagsTopQuestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].tags[':tags']['top-questions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdTopAnswerTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['top-answer-tags']['$get']>>,
) {
  return ['users', '/users/:id/top-answer-tags', toValue(args)] as const
}

export function getUsersIdTopAnswerTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['top-answer-tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdTopAnswerTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id']['top-answer-tags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['top-answer-tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['top-answer-tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdTopAnswerTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['top-answer-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdTopAnswerTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdTopAnswerTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id']['top-answer-tags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdTopQuestionTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['top-question-tags']['$get']>
  >,
) {
  return ['users', '/users/:id/top-question-tags', toValue(args)] as const
}

export function getUsersIdTopQuestionTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['top-question-tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdTopQuestionTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id']['top-question-tags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['top-question-tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['top-question-tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdTopQuestionTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['top-question-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdTopQuestionTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdTopQuestionTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id']['top-question-tags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdWritePermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['write-permissions']['$get']>
  >,
) {
  return ['users', '/users/:id/write-permissions', toValue(args)] as const
}

export function getUsersIdWritePermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['write-permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdWritePermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id']['write-permissions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['write-permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['write-permissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdWritePermissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['write-permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdWritePermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdWritePermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id']['write-permissions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
