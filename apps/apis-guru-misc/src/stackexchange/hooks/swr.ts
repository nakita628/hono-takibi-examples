import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAccessTokensAccessTokensKey(
  args: InferRequestType<(typeof client)['access-tokens'][':accessTokens']['$get']>,
) {
  return ['access-tokens', '/access-tokens/:accessTokens', args] as const
}

export function useGetAccessTokensAccessTokens<TError = unknown>(
  args: InferRequestType<(typeof client)['access-tokens'][':accessTokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-tokens'][':accessTokens']['$get']>>
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
        ? getGetAccessTokensAccessTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-tokens'][':accessTokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['access-tokens'][':accessTokens'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessTokensAccessTokens<TError = unknown>(
  args: InferRequestType<(typeof client)['access-tokens'][':accessTokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-tokens'][':accessTokens']['$get']>>
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
        ? getGetAccessTokensAccessTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-tokens'][':accessTokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['access-tokens'][':accessTokens'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccessTokensAccessTokensInvalidateKey(
  args: InferRequestType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>,
) {
  return ['access-tokens', '/access-tokens/:accessTokens/invalidate', args] as const
}

export function useGetAccessTokensAccessTokensInvalidate<TError = unknown>(
  args: InferRequestType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>
            >
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
        ? getGetAccessTokensAccessTokensInvalidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['access-tokens'][':accessTokens'].invalidate.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessTokensAccessTokensInvalidate<TError = unknown>(
  args: InferRequestType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>
            >
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
        ? getGetAccessTokensAccessTokensInvalidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['access-tokens'][':accessTokens'].invalidate.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnswersKey(args: InferRequestType<typeof client.answers.$get>) {
  return ['answers', '/answers', args] as const
}

export function useGetAnswers<TError = unknown>(
  args: InferRequestType<typeof client.answers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnswersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.answers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAnswers<TError = unknown>(
  args: InferRequestType<typeof client.answers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnswersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.answers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAnswersIdsKey(
  args: InferRequestType<(typeof client.answers)[':ids']['$get']>,
) {
  return ['answers', '/answers/:ids', args] as const
}

export function useGetAnswersIds<TError = unknown>(
  args: InferRequestType<(typeof client.answers)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAnswersIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.answers[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnswersIds<TError = unknown>(
  args: InferRequestType<(typeof client.answers)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAnswersIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.answers)[':ids']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.answers[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnswersIdsCommentsKey(
  args: InferRequestType<(typeof client.answers)[':ids']['comments']['$get']>,
) {
  return ['answers', '/answers/:ids/comments', args] as const
}

export function useGetAnswersIdsComments<TError = unknown>(
  args: InferRequestType<(typeof client.answers)[':ids']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.answers)[':ids']['comments']['$get']>>
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
        ? getGetAnswersIdsCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.answers)[':ids']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.answers[':ids'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnswersIdsComments<TError = unknown>(
  args: InferRequestType<(typeof client.answers)[':ids']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.answers)[':ids']['comments']['$get']>>
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
        ? getGetAnswersIdsCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.answers)[':ids']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.answers[':ids'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAccessTokensDeAuthenticateKey(
  args: InferRequestType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>,
) {
  return ['apps', '/apps/:accessTokens/de-authenticate', args] as const
}

export function useGetAppsAccessTokensDeAuthenticate<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>>
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
        ? getGetAppsAccessTokensDeAuthenticateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':accessTokens']['de-authenticate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAccessTokensDeAuthenticate<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>>
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
        ? getGetAppsAccessTokensDeAuthenticateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':accessTokens']['de-authenticate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBadgesKey(args: InferRequestType<typeof client.badges.$get>) {
  return ['badges', '/badges', args] as const
}

export function useGetBadges<TError = unknown>(
  args: InferRequestType<typeof client.badges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBadgesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.badges.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBadges<TError = unknown>(
  args: InferRequestType<typeof client.badges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBadgesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.badges.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBadgesNameKey(args: InferRequestType<typeof client.badges.name.$get>) {
  return ['badges', '/badges/name', args] as const
}

export function useGetBadgesName<TError = unknown>(
  args: InferRequestType<typeof client.badges.name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.name.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBadgesNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.name.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.badges.name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBadgesName<TError = unknown>(
  args: InferRequestType<typeof client.badges.name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.name.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBadgesNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.name.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.badges.name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBadgesRecipientsKey(
  args: InferRequestType<typeof client.badges.recipients.$get>,
) {
  return ['badges', '/badges/recipients', args] as const
}

export function useGetBadgesRecipients<TError = unknown>(
  args: InferRequestType<typeof client.badges.recipients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.recipients.$get>>>>
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
        ? getGetBadgesRecipientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.recipients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.badges.recipients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBadgesRecipients<TError = unknown>(
  args: InferRequestType<typeof client.badges.recipients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.recipients.$get>>>>
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
        ? getGetBadgesRecipientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.recipients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.badges.recipients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBadgesTagsKey(args: InferRequestType<typeof client.badges.tags.$get>) {
  return ['badges', '/badges/tags', args] as const
}

export function useGetBadgesTags<TError = unknown>(
  args: InferRequestType<typeof client.badges.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBadgesTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.badges.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBadgesTags<TError = unknown>(
  args: InferRequestType<typeof client.badges.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBadgesTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badges.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.badges.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBadgesIdsKey(args: InferRequestType<(typeof client.badges)[':ids']['$get']>) {
  return ['badges', '/badges/:ids', args] as const
}

export function useGetBadgesIds<TError = unknown>(
  args: InferRequestType<(typeof client.badges)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.badges)[':ids']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBadgesIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.badges)[':ids']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.badges[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBadgesIds<TError = unknown>(
  args: InferRequestType<(typeof client.badges)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.badges)[':ids']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBadgesIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.badges)[':ids']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.badges[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBadgesIdsRecipientsKey(
  args: InferRequestType<(typeof client.badges)[':ids']['recipients']['$get']>,
) {
  return ['badges', '/badges/:ids/recipients', args] as const
}

export function useGetBadgesIdsRecipients<TError = unknown>(
  args: InferRequestType<(typeof client.badges)[':ids']['recipients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.badges)[':ids']['recipients']['$get']>>
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
        ? getGetBadgesIdsRecipientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.badges)[':ids']['recipients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.badges[':ids'].recipients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBadgesIdsRecipients<TError = unknown>(
  args: InferRequestType<(typeof client.badges)[':ids']['recipients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.badges)[':ids']['recipients']['$get']>>
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
        ? getGetBadgesIdsRecipientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.badges)[':ids']['recipients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.badges[':ids'].recipients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommentsKey(args: InferRequestType<typeof client.comments.$get>) {
  return ['comments', '/comments', args] as const
}

export function useGetComments<TError = unknown>(
  args: InferRequestType<typeof client.comments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCommentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.comments.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetComments<TError = unknown>(
  args: InferRequestType<typeof client.comments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCommentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.comments.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCommentsIdsKey(
  args: InferRequestType<(typeof client.comments)[':ids']['$get']>,
) {
  return ['comments', '/comments/:ids', args] as const
}

export function useGetCommentsIds<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':ids']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCommentsIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':ids']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommentsIds<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':ids']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCommentsIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':ids']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCommentsIdDeleteKey() {
  return ['comments', '/comments/:id/delete', 'POST'] as const
}

export function usePostCommentsIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.comments)[':id']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.comments)[':id']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.comments)[':id']['delete']['$post']> },
      ) => parseResponse(client.comments[':id'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCommentsIdEditKey() {
  return ['comments', '/comments/:id/edit', 'POST'] as const
}

export function usePostCommentsIdEdit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['edit']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.comments)[':id']['edit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsIdEditKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.comments)[':id']['edit']['$post']> },
      ) => parseResponse(client.comments[':id'].edit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetErrorsKey(args: InferRequestType<typeof client.errors.$get>) {
  return ['errors', '/errors', args] as const
}

export function useGetErrors<TError = unknown>(
  args: InferRequestType<typeof client.errors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.errors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetErrorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.errors.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.errors.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetErrors<TError = unknown>(
  args: InferRequestType<typeof client.errors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.errors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetErrorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.errors.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.errors.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetErrorsIdKey(args: InferRequestType<(typeof client.errors)[':id']['$get']>) {
  return ['errors', '/errors/:id', args] as const
}

export function useGetErrorsId<TError = unknown>(
  args: InferRequestType<(typeof client.errors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.errors)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetErrorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.errors)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.errors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetErrorsId<TError = unknown>(
  args: InferRequestType<(typeof client.errors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.errors)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetErrorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.errors)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.errors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function useGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetFiltersCreateKey(args: InferRequestType<typeof client.filters.create.$get>) {
  return ['filters', '/filters/create', args] as const
}

export function useGetFiltersCreate<TError = unknown>(
  args: InferRequestType<typeof client.filters.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.create.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFiltersCreateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.create.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.filters.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFiltersCreate<TError = unknown>(
  args: InferRequestType<typeof client.filters.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.create.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFiltersCreateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filters.create.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.filters.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFiltersFiltersKey(
  args: InferRequestType<(typeof client.filters)[':filters']['$get']>,
) {
  return ['filters', '/filters/:filters', args] as const
}

export function useGetFiltersFilters<TError = unknown>(
  args: InferRequestType<(typeof client.filters)[':filters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':filters']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFiltersFiltersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':filters']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.filters[':filters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFiltersFilters<TError = unknown>(
  args: InferRequestType<(typeof client.filters)[':filters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':filters']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFiltersFiltersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.filters)[':filters']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.filters[':filters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInboxKey(args: InferRequestType<typeof client.inbox.$get>) {
  return ['inbox', '/inbox', args] as const
}

export function useGetInbox<TError = unknown>(
  args: InferRequestType<typeof client.inbox.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInboxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.inbox.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetInbox<TError = unknown>(
  args: InferRequestType<typeof client.inbox.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInboxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.inbox.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetInboxUnreadKey(args: InferRequestType<typeof client.inbox.unread.$get>) {
  return ['inbox', '/inbox/unread', args] as const
}

export function useGetInboxUnread<TError = unknown>(
  args: InferRequestType<typeof client.inbox.unread.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.unread.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInboxUnreadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.unread.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inbox.unread.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboxUnread<TError = unknown>(
  args: InferRequestType<typeof client.inbox.unread.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.unread.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInboxUnreadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbox.unread.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inbox.unread.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoKey(args: InferRequestType<typeof client.info.$get>) {
  return ['info', '/info', args] as const
}

export function useGetInfo<TError = unknown>(
  args: InferRequestType<typeof client.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.info.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetInfo<TError = unknown>(
  args: InferRequestType<typeof client.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.info.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMeKey(args: InferRequestType<typeof client.me.$get>) {
  return ['me', '/me', args] as const
}

export function useGetMe<TError = unknown>(
  args: InferRequestType<typeof client.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(
  args: InferRequestType<typeof client.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMeAnswersKey(args: InferRequestType<typeof client.me.answers.$get>) {
  return ['me', '/me/answers', args] as const
}

export function useGetMeAnswers<TError = unknown>(
  args: InferRequestType<typeof client.me.answers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.answers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeAnswersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.answers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.answers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeAnswers<TError = unknown>(
  args: InferRequestType<typeof client.me.answers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.answers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeAnswersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.answers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.answers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeAssociatedKey(args: InferRequestType<typeof client.me.associated.$get>) {
  return ['me', '/me/associated', args] as const
}

export function useGetMeAssociated<TError = unknown>(
  args: InferRequestType<typeof client.me.associated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.associated.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeAssociatedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.associated.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.associated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeAssociated<TError = unknown>(
  args: InferRequestType<typeof client.me.associated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.associated.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeAssociatedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.associated.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.associated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeBadgesKey(args: InferRequestType<typeof client.me.badges.$get>) {
  return ['me', '/me/badges', args] as const
}

export function useGetMeBadges<TError = unknown>(
  args: InferRequestType<typeof client.me.badges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.badges.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeBadgesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.badges.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.badges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeBadges<TError = unknown>(
  args: InferRequestType<typeof client.me.badges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.badges.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeBadgesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.badges.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.badges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeCommentsKey(args: InferRequestType<typeof client.me.comments.$get>) {
  return ['me', '/me/comments', args] as const
}

export function useGetMeComments<TError = unknown>(
  args: InferRequestType<typeof client.me.comments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.comments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeCommentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.comments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeComments<TError = unknown>(
  args: InferRequestType<typeof client.me.comments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.comments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeCommentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.comments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeCommentsToIdKey(
  args: InferRequestType<(typeof client.me.comments)[':toId']['$get']>,
) {
  return ['me', '/me/comments/:toId', args] as const
}

export function useGetMeCommentsToId<TError = unknown>(
  args: InferRequestType<(typeof client.me.comments)[':toId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.comments)[':toId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMeCommentsToIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.comments)[':toId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.comments[':toId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeCommentsToId<TError = unknown>(
  args: InferRequestType<(typeof client.me.comments)[':toId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.comments)[':toId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMeCommentsToIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.comments)[':toId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.comments[':toId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeFavoritesKey(args: InferRequestType<typeof client.me.favorites.$get>) {
  return ['me', '/me/favorites', args] as const
}

export function useGetMeFavorites<TError = unknown>(
  args: InferRequestType<typeof client.me.favorites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeFavoritesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.favorites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeFavorites<TError = unknown>(
  args: InferRequestType<typeof client.me.favorites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeFavoritesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.favorites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeInboxKey(args: InferRequestType<typeof client.me.inbox.$get>) {
  return ['me', '/me/inbox', args] as const
}

export function useGetMeInbox<TError = unknown>(
  args: InferRequestType<typeof client.me.inbox.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeInboxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.inbox.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMeInbox<TError = unknown>(
  args: InferRequestType<typeof client.me.inbox.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeInboxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.inbox.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMeInboxUnreadKey(args: InferRequestType<typeof client.me.inbox.unread.$get>) {
  return ['me', '/me/inbox/unread', args] as const
}

export function useGetMeInboxUnread<TError = unknown>(
  args: InferRequestType<typeof client.me.inbox.unread.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.unread.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeInboxUnreadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.unread.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.inbox.unread.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeInboxUnread<TError = unknown>(
  args: InferRequestType<typeof client.me.inbox.unread.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.unread.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeInboxUnreadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.inbox.unread.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.inbox.unread.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeMentionedKey(args: InferRequestType<typeof client.me.mentioned.$get>) {
  return ['me', '/me/mentioned', args] as const
}

export function useGetMeMentioned<TError = unknown>(
  args: InferRequestType<typeof client.me.mentioned.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.mentioned.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeMentionedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.mentioned.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.mentioned.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeMentioned<TError = unknown>(
  args: InferRequestType<typeof client.me.mentioned.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.mentioned.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeMentionedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.mentioned.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.mentioned.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeMergesKey(args: InferRequestType<typeof client.me.merges.$get>) {
  return ['me', '/me/merges', args] as const
}

export function useGetMeMerges<TError = unknown>(
  args: InferRequestType<typeof client.me.merges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.merges.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeMergesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.merges.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.merges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeMerges<TError = unknown>(
  args: InferRequestType<typeof client.me.merges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.merges.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeMergesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.merges.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.merges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeNotificationsKey(
  args: InferRequestType<typeof client.me.notifications.$get>,
) {
  return ['me', '/me/notifications', args] as const
}

export function useGetMeNotifications<TError = unknown>(
  args: InferRequestType<typeof client.me.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.$get>>>>
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
        ? getGetMeNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeNotifications<TError = unknown>(
  args: InferRequestType<typeof client.me.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.$get>>>>
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
        ? getGetMeNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeNotificationsUnreadKey(
  args: InferRequestType<typeof client.me.notifications.unread.$get>,
) {
  return ['me', '/me/notifications/unread', args] as const
}

export function useGetMeNotificationsUnread<TError = unknown>(
  args: InferRequestType<typeof client.me.notifications.unread.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.unread.$get>>>
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
        ? getGetMeNotificationsUnreadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.unread.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.notifications.unread.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeNotificationsUnread<TError = unknown>(
  args: InferRequestType<typeof client.me.notifications.unread.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.unread.$get>>>
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
        ? getGetMeNotificationsUnreadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.notifications.unread.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.notifications.unread.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMePrivilegesKey(args: InferRequestType<typeof client.me.privileges.$get>) {
  return ['me', '/me/privileges', args] as const
}

export function useGetMePrivileges<TError = unknown>(
  args: InferRequestType<typeof client.me.privileges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.privileges.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePrivilegesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.privileges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.privileges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePrivileges<TError = unknown>(
  args: InferRequestType<typeof client.me.privileges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.privileges.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePrivilegesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.privileges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.privileges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeQuestionsKey(args: InferRequestType<typeof client.me.questions.$get>) {
  return ['me', '/me/questions', args] as const
}

export function useGetMeQuestions<TError = unknown>(
  args: InferRequestType<typeof client.me.questions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeQuestionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.questions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeQuestions<TError = unknown>(
  args: InferRequestType<typeof client.me.questions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeQuestionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.questions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeQuestionsFeaturedKey(
  args: InferRequestType<typeof client.me.questions.featured.$get>,
) {
  return ['me', '/me/questions/featured', args] as const
}

export function useGetMeQuestionsFeatured<TError = unknown>(
  args: InferRequestType<typeof client.me.questions.featured.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.featured.$get>>>
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
        ? getGetMeQuestionsFeaturedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.featured.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.questions.featured.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeQuestionsFeatured<TError = unknown>(
  args: InferRequestType<typeof client.me.questions.featured.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.featured.$get>>>
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
        ? getGetMeQuestionsFeaturedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.featured.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.questions.featured.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeQuestionsNoAnswersKey(
  args: InferRequestType<(typeof client.me.questions)['no-answers']['$get']>,
) {
  return ['me', '/me/questions/no-answers', args] as const
}

export function useGetMeQuestionsNoAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.me.questions)['no-answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.questions)['no-answers']['$get']>>
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
        ? getGetMeQuestionsNoAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.questions)['no-answers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.questions['no-answers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeQuestionsNoAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.me.questions)['no-answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.questions)['no-answers']['$get']>>
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
        ? getGetMeQuestionsNoAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.questions)['no-answers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.questions['no-answers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeQuestionsUnacceptedKey(
  args: InferRequestType<typeof client.me.questions.unaccepted.$get>,
) {
  return ['me', '/me/questions/unaccepted', args] as const
}

export function useGetMeQuestionsUnaccepted<TError = unknown>(
  args: InferRequestType<typeof client.me.questions.unaccepted.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unaccepted.$get>>>
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
        ? getGetMeQuestionsUnacceptedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unaccepted.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.questions.unaccepted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeQuestionsUnaccepted<TError = unknown>(
  args: InferRequestType<typeof client.me.questions.unaccepted.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unaccepted.$get>>>
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
        ? getGetMeQuestionsUnacceptedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unaccepted.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.questions.unaccepted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeQuestionsUnansweredKey(
  args: InferRequestType<typeof client.me.questions.unanswered.$get>,
) {
  return ['me', '/me/questions/unanswered', args] as const
}

export function useGetMeQuestionsUnanswered<TError = unknown>(
  args: InferRequestType<typeof client.me.questions.unanswered.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unanswered.$get>>>
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
        ? getGetMeQuestionsUnansweredKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unanswered.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.questions.unanswered.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeQuestionsUnanswered<TError = unknown>(
  args: InferRequestType<typeof client.me.questions.unanswered.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unanswered.$get>>>
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
        ? getGetMeQuestionsUnansweredKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.questions.unanswered.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.questions.unanswered.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeReputationKey(args: InferRequestType<typeof client.me.reputation.$get>) {
  return ['me', '/me/reputation', args] as const
}

export function useGetMeReputation<TError = unknown>(
  args: InferRequestType<typeof client.me.reputation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.reputation.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeReputationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.reputation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.reputation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeReputation<TError = unknown>(
  args: InferRequestType<typeof client.me.reputation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.reputation.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeReputationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.reputation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.reputation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeReputationHistoryKey(
  args: InferRequestType<(typeof client.me)['reputation-history']['$get']>,
) {
  return ['me', '/me/reputation-history', args] as const
}

export function useGetMeReputationHistory<TError = unknown>(
  args: InferRequestType<(typeof client.me)['reputation-history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me)['reputation-history']['$get']>>
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
        ? getGetMeReputationHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me)['reputation-history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me['reputation-history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeReputationHistory<TError = unknown>(
  args: InferRequestType<(typeof client.me)['reputation-history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me)['reputation-history']['$get']>>
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
        ? getGetMeReputationHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me)['reputation-history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me['reputation-history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeReputationHistoryFullKey(
  args: InferRequestType<(typeof client.me)['reputation-history']['full']['$get']>,
) {
  return ['me', '/me/reputation-history/full', args] as const
}

export function useGetMeReputationHistoryFull<TError = unknown>(
  args: InferRequestType<(typeof client.me)['reputation-history']['full']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me)['reputation-history']['full']['$get']>>
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
        ? getGetMeReputationHistoryFullKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me)['reputation-history']['full']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me['reputation-history'].full.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeReputationHistoryFull<TError = unknown>(
  args: InferRequestType<(typeof client.me)['reputation-history']['full']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me)['reputation-history']['full']['$get']>>
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
        ? getGetMeReputationHistoryFullKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me)['reputation-history']['full']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me['reputation-history'].full.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeSuggestedEditsKey(
  args: InferRequestType<(typeof client.me)['suggested-edits']['$get']>,
) {
  return ['me', '/me/suggested-edits', args] as const
}

export function useGetMeSuggestedEdits<TError = unknown>(
  args: InferRequestType<(typeof client.me)['suggested-edits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me)['suggested-edits']['$get']>>>
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
        ? getGetMeSuggestedEditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me)['suggested-edits']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me['suggested-edits'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeSuggestedEdits<TError = unknown>(
  args: InferRequestType<(typeof client.me)['suggested-edits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me)['suggested-edits']['$get']>>>
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
        ? getGetMeSuggestedEditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me)['suggested-edits']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me['suggested-edits'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeTagsKey(args: InferRequestType<typeof client.me.tags.$get>) {
  return ['me', '/me/tags', args] as const
}

export function useGetMeTags<TError = unknown>(
  args: InferRequestType<typeof client.me.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMeTags<TError = unknown>(
  args: InferRequestType<typeof client.me.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMeTagsTagsTopAnswersKey(
  args: InferRequestType<(typeof client.me.tags)[':tags']['top-answers']['$get']>,
) {
  return ['me', '/me/tags/:tags/top-answers', args] as const
}

export function useGetMeTagsTagsTopAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.me.tags)[':tags']['top-answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-answers']['$get']>>
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
        ? getGetMeTagsTagsTopAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-answers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.tags[':tags']['top-answers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeTagsTagsTopAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.me.tags)[':tags']['top-answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-answers']['$get']>>
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
        ? getGetMeTagsTagsTopAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-answers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.tags[':tags']['top-answers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeTagsTagsTopQuestionsKey(
  args: InferRequestType<(typeof client.me.tags)[':tags']['top-questions']['$get']>,
) {
  return ['me', '/me/tags/:tags/top-questions', args] as const
}

export function useGetMeTagsTagsTopQuestions<TError = unknown>(
  args: InferRequestType<(typeof client.me.tags)[':tags']['top-questions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-questions']['$get']>>
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
        ? getGetMeTagsTagsTopQuestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-questions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.tags[':tags']['top-questions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeTagsTagsTopQuestions<TError = unknown>(
  args: InferRequestType<(typeof client.me.tags)[':tags']['top-questions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-questions']['$get']>>
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
        ? getGetMeTagsTagsTopQuestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.tags)[':tags']['top-questions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.tags[':tags']['top-questions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeTimelineKey(args: InferRequestType<typeof client.me.timeline.$get>) {
  return ['me', '/me/timeline', args] as const
}

export function useGetMeTimeline<TError = unknown>(
  args: InferRequestType<typeof client.me.timeline.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.timeline.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeTimelineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.timeline.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.timeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeTimeline<TError = unknown>(
  args: InferRequestType<typeof client.me.timeline.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.timeline.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeTimelineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.timeline.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.timeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeTopAnswerTagsKey(
  args: InferRequestType<(typeof client.me)['top-answer-tags']['$get']>,
) {
  return ['me', '/me/top-answer-tags', args] as const
}

export function useGetMeTopAnswerTags<TError = unknown>(
  args: InferRequestType<(typeof client.me)['top-answer-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-answer-tags']['$get']>>>
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
        ? getGetMeTopAnswerTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-answer-tags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me['top-answer-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeTopAnswerTags<TError = unknown>(
  args: InferRequestType<(typeof client.me)['top-answer-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-answer-tags']['$get']>>>
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
        ? getGetMeTopAnswerTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-answer-tags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me['top-answer-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeTopQuestionTagsKey(
  args: InferRequestType<(typeof client.me)['top-question-tags']['$get']>,
) {
  return ['me', '/me/top-question-tags', args] as const
}

export function useGetMeTopQuestionTags<TError = unknown>(
  args: InferRequestType<(typeof client.me)['top-question-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-question-tags']['$get']>>>
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
        ? getGetMeTopQuestionTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-question-tags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me['top-question-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeTopQuestionTags<TError = unknown>(
  args: InferRequestType<(typeof client.me)['top-question-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-question-tags']['$get']>>>
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
        ? getGetMeTopQuestionTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me)['top-question-tags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me['top-question-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeWritePermissionsKey(
  args: InferRequestType<(typeof client.me)['write-permissions']['$get']>,
) {
  return ['me', '/me/write-permissions', args] as const
}

export function useGetMeWritePermissions<TError = unknown>(
  args: InferRequestType<(typeof client.me)['write-permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me)['write-permissions']['$get']>>>
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
        ? getGetMeWritePermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me)['write-permissions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me['write-permissions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeWritePermissions<TError = unknown>(
  args: InferRequestType<(typeof client.me)['write-permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me)['write-permissions']['$get']>>>
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
        ? getGetMeWritePermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me)['write-permissions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me['write-permissions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsKey(args: InferRequestType<typeof client.notifications.$get>) {
  return ['notifications', '/notifications', args] as const
}

export function useGetNotifications<TError = unknown>(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotificationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotifications<TError = unknown>(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotificationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsUnreadKey(
  args: InferRequestType<typeof client.notifications.unread.$get>,
) {
  return ['notifications', '/notifications/unread', args] as const
}

export function useGetNotificationsUnread<TError = unknown>(
  args: InferRequestType<typeof client.notifications.unread.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unread.$get>>>
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
        ? getGetNotificationsUnreadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unread.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.unread.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsUnread<TError = unknown>(
  args: InferRequestType<typeof client.notifications.unread.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unread.$get>>>
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
        ? getGetNotificationsUnreadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unread.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.unread.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPostsKey(args: InferRequestType<typeof client.posts.$get>) {
  return ['posts', '/posts', args] as const
}

export function useGetPosts<TError = unknown>(
  args: InferRequestType<typeof client.posts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.posts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPosts<TError = unknown>(
  args: InferRequestType<typeof client.posts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.posts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPostsIdsKey(args: InferRequestType<(typeof client.posts)[':ids']['$get']>) {
  return ['posts', '/posts/:ids', args] as const
}

export function useGetPostsIds<TError = unknown>(
  args: InferRequestType<(typeof client.posts)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostsIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostsIds<TError = unknown>(
  args: InferRequestType<(typeof client.posts)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostsIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':ids']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPostsIdsCommentsKey(
  args: InferRequestType<(typeof client.posts)[':ids']['comments']['$get']>,
) {
  return ['posts', '/posts/:ids/comments', args] as const
}

export function useGetPostsIdsComments<TError = unknown>(
  args: InferRequestType<(typeof client.posts)[':ids']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':ids']['comments']['$get']>>
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
        ? getGetPostsIdsCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':ids']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts[':ids'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostsIdsComments<TError = unknown>(
  args: InferRequestType<(typeof client.posts)[':ids']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':ids']['comments']['$get']>>
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
        ? getGetPostsIdsCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':ids']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts[':ids'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPostsIdsRevisionsKey(
  args: InferRequestType<(typeof client.posts)[':ids']['revisions']['$get']>,
) {
  return ['posts', '/posts/:ids/revisions', args] as const
}

export function useGetPostsIdsRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.posts)[':ids']['revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':ids']['revisions']['$get']>>
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
        ? getGetPostsIdsRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':ids']['revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts[':ids'].revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostsIdsRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.posts)[':ids']['revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':ids']['revisions']['$get']>>
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
        ? getGetPostsIdsRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':ids']['revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts[':ids'].revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPostsIdsSuggestedEditsKey(
  args: InferRequestType<(typeof client.posts)[':ids']['suggested-edits']['$get']>,
) {
  return ['posts', '/posts/:ids/suggested-edits', args] as const
}

export function useGetPostsIdsSuggestedEdits<TError = unknown>(
  args: InferRequestType<(typeof client.posts)[':ids']['suggested-edits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':ids']['suggested-edits']['$get']>>
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
        ? getGetPostsIdsSuggestedEditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':ids']['suggested-edits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts[':ids']['suggested-edits'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostsIdsSuggestedEdits<TError = unknown>(
  args: InferRequestType<(typeof client.posts)[':ids']['suggested-edits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':ids']['suggested-edits']['$get']>>
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
        ? getGetPostsIdsSuggestedEditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':ids']['suggested-edits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts[':ids']['suggested-edits'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPostsIdCommentsAddKey() {
  return ['posts', '/posts/:id/comments/add', 'POST'] as const
}

export function usePostPostsIdCommentsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':id']['comments']['add']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posts)[':id']['comments']['add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostsIdCommentsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.posts)[':id']['comments']['add']['$post']> },
      ) => parseResponse(client.posts[':id'].comments.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPrivilegesKey(args: InferRequestType<typeof client.privileges.$get>) {
  return ['privileges', '/privileges', args] as const
}

export function useGetPrivileges<TError = unknown>(
  args: InferRequestType<typeof client.privileges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privileges.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPrivilegesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privileges.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.privileges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrivileges<TError = unknown>(
  args: InferRequestType<typeof client.privileges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privileges.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPrivilegesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privileges.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.privileges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuestionsKey(args: InferRequestType<typeof client.questions.$get>) {
  return ['questions', '/questions', args] as const
}

export function useGetQuestions<TError = unknown>(
  args: InferRequestType<typeof client.questions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuestionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuestions<TError = unknown>(
  args: InferRequestType<typeof client.questions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuestionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuestionsFeaturedKey(
  args: InferRequestType<typeof client.questions.featured.$get>,
) {
  return ['questions', '/questions/featured', args] as const
}

export function useGetQuestionsFeatured<TError = unknown>(
  args: InferRequestType<typeof client.questions.featured.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.featured.$get>>>>
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
        ? getGetQuestionsFeaturedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.featured.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions.featured.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuestionsFeatured<TError = unknown>(
  args: InferRequestType<typeof client.questions.featured.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.featured.$get>>>>
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
        ? getGetQuestionsFeaturedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.featured.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions.featured.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuestionsNoAnswersKey(
  args: InferRequestType<(typeof client.questions)['no-answers']['$get']>,
) {
  return ['questions', '/questions/no-answers', args] as const
}

export function useGetQuestionsNoAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.questions)['no-answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.questions)['no-answers']['$get']>>>
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
        ? getGetQuestionsNoAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.questions)['no-answers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions['no-answers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuestionsNoAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.questions)['no-answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.questions)['no-answers']['$get']>>>
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
        ? getGetQuestionsNoAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.questions)['no-answers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions['no-answers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuestionsUnansweredKey(
  args: InferRequestType<typeof client.questions.unanswered.$get>,
) {
  return ['questions', '/questions/unanswered', args] as const
}

export function useGetQuestionsUnanswered<TError = unknown>(
  args: InferRequestType<typeof client.questions.unanswered.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.questions.unanswered.$get>>>
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
        ? getGetQuestionsUnansweredKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.questions.unanswered.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions.unanswered.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuestionsUnanswered<TError = unknown>(
  args: InferRequestType<typeof client.questions.unanswered.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.questions.unanswered.$get>>>
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
        ? getGetQuestionsUnansweredKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.questions.unanswered.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions.unanswered.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuestionsIdsKey(
  args: InferRequestType<(typeof client.questions)[':ids']['$get']>,
) {
  return ['questions', '/questions/:ids', args] as const
}

export function useGetQuestionsIds<TError = unknown>(
  args: InferRequestType<(typeof client.questions)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQuestionsIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuestionsIds<TError = unknown>(
  args: InferRequestType<(typeof client.questions)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQuestionsIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.questions)[':ids']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuestionsIdsAnswersKey(
  args: InferRequestType<(typeof client.questions)[':ids']['answers']['$get']>,
) {
  return ['questions', '/questions/:ids/answers', args] as const
}

export function useGetQuestionsIdsAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.questions)[':ids']['answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['answers']['$get']>>
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
        ? getGetQuestionsIdsAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['answers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions[':ids'].answers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuestionsIdsAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.questions)[':ids']['answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['answers']['$get']>>
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
        ? getGetQuestionsIdsAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['answers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions[':ids'].answers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuestionsIdsCommentsKey(
  args: InferRequestType<(typeof client.questions)[':ids']['comments']['$get']>,
) {
  return ['questions', '/questions/:ids/comments', args] as const
}

export function useGetQuestionsIdsComments<TError = unknown>(
  args: InferRequestType<(typeof client.questions)[':ids']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['comments']['$get']>>
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
        ? getGetQuestionsIdsCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions[':ids'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuestionsIdsComments<TError = unknown>(
  args: InferRequestType<(typeof client.questions)[':ids']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['comments']['$get']>>
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
        ? getGetQuestionsIdsCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions[':ids'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuestionsIdsLinkedKey(
  args: InferRequestType<(typeof client.questions)[':ids']['linked']['$get']>,
) {
  return ['questions', '/questions/:ids/linked', args] as const
}

export function useGetQuestionsIdsLinked<TError = unknown>(
  args: InferRequestType<(typeof client.questions)[':ids']['linked']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['linked']['$get']>>
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
        ? getGetQuestionsIdsLinkedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['linked']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions[':ids'].linked.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuestionsIdsLinked<TError = unknown>(
  args: InferRequestType<(typeof client.questions)[':ids']['linked']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['linked']['$get']>>
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
        ? getGetQuestionsIdsLinkedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['linked']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions[':ids'].linked.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuestionsIdsRelatedKey(
  args: InferRequestType<(typeof client.questions)[':ids']['related']['$get']>,
) {
  return ['questions', '/questions/:ids/related', args] as const
}

export function useGetQuestionsIdsRelated<TError = unknown>(
  args: InferRequestType<(typeof client.questions)[':ids']['related']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['related']['$get']>>
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
        ? getGetQuestionsIdsRelatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['related']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions[':ids'].related.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuestionsIdsRelated<TError = unknown>(
  args: InferRequestType<(typeof client.questions)[':ids']['related']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['related']['$get']>>
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
        ? getGetQuestionsIdsRelatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['related']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions[':ids'].related.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuestionsIdsTimelineKey(
  args: InferRequestType<(typeof client.questions)[':ids']['timeline']['$get']>,
) {
  return ['questions', '/questions/:ids/timeline', args] as const
}

export function useGetQuestionsIdsTimeline<TError = unknown>(
  args: InferRequestType<(typeof client.questions)[':ids']['timeline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['timeline']['$get']>>
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
        ? getGetQuestionsIdsTimelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['timeline']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions[':ids'].timeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuestionsIdsTimeline<TError = unknown>(
  args: InferRequestType<(typeof client.questions)[':ids']['timeline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['timeline']['$get']>>
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
        ? getGetQuestionsIdsTimelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.questions)[':ids']['timeline']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.questions[':ids'].timeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRevisionsIdsKey(
  args: InferRequestType<(typeof client.revisions)[':ids']['$get']>,
) {
  return ['revisions', '/revisions/:ids', args] as const
}

export function useGetRevisionsIds<TError = unknown>(
  args: InferRequestType<(typeof client.revisions)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':ids']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRevisionsIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':ids']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.revisions[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRevisionsIds<TError = unknown>(
  args: InferRequestType<(typeof client.revisions)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':ids']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRevisionsIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':ids']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.revisions[':ids'].$get(args, clientOptions)),
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

export function getGetSearchAdvancedKey(
  args: InferRequestType<typeof client.search.advanced.$get>,
) {
  return ['search', '/search/advanced', args] as const
}

export function useGetSearchAdvanced<TError = unknown>(
  args: InferRequestType<typeof client.search.advanced.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.advanced.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchAdvancedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.advanced.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.advanced.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchAdvanced<TError = unknown>(
  args: InferRequestType<typeof client.search.advanced.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.advanced.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchAdvancedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.advanced.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.advanced.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSimilarKey(args: InferRequestType<typeof client.similar.$get>) {
  return ['similar', '/similar', args] as const
}

export function useGetSimilar<TError = unknown>(
  args: InferRequestType<typeof client.similar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSimilarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.similar.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSimilar<TError = unknown>(
  args: InferRequestType<typeof client.similar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSimilarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similar.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.similar.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSitesKey(args: InferRequestType<typeof client.sites.$get>) {
  return ['sites', '/sites', args] as const
}

export function useGetSites<TError = unknown>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sites.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSites<TError = unknown>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sites.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSuggestedEditsKey(
  args: InferRequestType<(typeof client)['suggested-edits']['$get']>,
) {
  return ['suggested-edits', '/suggested-edits', args] as const
}

export function useGetSuggestedEdits<TError = unknown>(
  args: InferRequestType<(typeof client)['suggested-edits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSuggestedEditsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['suggested-edits'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuggestedEdits<TError = unknown>(
  args: InferRequestType<(typeof client)['suggested-edits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSuggestedEditsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['suggested-edits']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['suggested-edits'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSuggestedEditsIdsKey(
  args: InferRequestType<(typeof client)['suggested-edits'][':ids']['$get']>,
) {
  return ['suggested-edits', '/suggested-edits/:ids', args] as const
}

export function useGetSuggestedEditsIds<TError = unknown>(
  args: InferRequestType<(typeof client)['suggested-edits'][':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['suggested-edits'][':ids']['$get']>>
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
        ? getGetSuggestedEditsIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['suggested-edits'][':ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['suggested-edits'][':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuggestedEditsIds<TError = unknown>(
  args: InferRequestType<(typeof client)['suggested-edits'][':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['suggested-edits'][':ids']['$get']>>
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
        ? getGetSuggestedEditsIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['suggested-edits'][':ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['suggested-edits'][':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsKey(args: InferRequestType<typeof client.tags.$get>) {
  return ['tags', '/tags', args] as const
}

export function useGetTags<TError = unknown>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTags<TError = unknown>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTagsModeratorOnlyKey(
  args: InferRequestType<(typeof client.tags)['moderator-only']['$get']>,
) {
  return ['tags', '/tags/moderator-only', args] as const
}

export function useGetTagsModeratorOnly<TError = unknown>(
  args: InferRequestType<(typeof client.tags)['moderator-only']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)['moderator-only']['$get']>>>
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
        ? getGetTagsModeratorOnlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)['moderator-only']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags['moderator-only'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsModeratorOnly<TError = unknown>(
  args: InferRequestType<(typeof client.tags)['moderator-only']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)['moderator-only']['$get']>>>
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
        ? getGetTagsModeratorOnlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)['moderator-only']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags['moderator-only'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsRequiredKey(args: InferRequestType<typeof client.tags.required.$get>) {
  return ['tags', '/tags/required', args] as const
}

export function useGetTagsRequired<TError = unknown>(
  args: InferRequestType<typeof client.tags.required.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.required.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsRequiredKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.required.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.required.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsRequired<TError = unknown>(
  args: InferRequestType<typeof client.tags.required.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.required.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsRequiredKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.required.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.required.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsSynonymsKey(args: InferRequestType<typeof client.tags.synonyms.$get>) {
  return ['tags', '/tags/synonyms', args] as const
}

export function useGetTagsSynonyms<TError = unknown>(
  args: InferRequestType<typeof client.tags.synonyms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.synonyms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsSynonymsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.synonyms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.synonyms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsSynonyms<TError = unknown>(
  args: InferRequestType<typeof client.tags.synonyms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.synonyms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsSynonymsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.synonyms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.synonyms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsTagsFaqKey(
  args: InferRequestType<(typeof client.tags)[':tags']['faq']['$get']>,
) {
  return ['tags', '/tags/:tags/faq', args] as const
}

export function useGetTagsTagsFaq<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tags']['faq']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['faq']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTagsTagsFaqKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['faq']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tags'].faq.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagsFaq<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tags']['faq']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['faq']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTagsTagsFaqKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['faq']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tags'].faq.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsTagsInfoKey(
  args: InferRequestType<(typeof client.tags)[':tags']['info']['$get']>,
) {
  return ['tags', '/tags/:tags/info', args] as const
}

export function useGetTagsTagsInfo<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tags']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['info']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTagsTagsInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tags'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagsInfo<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tags']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['info']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTagsTagsInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tags'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsTagsRelatedKey(
  args: InferRequestType<(typeof client.tags)[':tags']['related']['$get']>,
) {
  return ['tags', '/tags/:tags/related', args] as const
}

export function useGetTagsTagsRelated<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tags']['related']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tags']['related']['$get']>>
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
        ? getGetTagsTagsRelatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tags']['related']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tags'].related.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagsRelated<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tags']['related']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tags']['related']['$get']>>
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
        ? getGetTagsTagsRelatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tags']['related']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tags'].related.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsTagsSynonymsKey(
  args: InferRequestType<(typeof client.tags)[':tags']['synonyms']['$get']>,
) {
  return ['tags', '/tags/:tags/synonyms', args] as const
}

export function useGetTagsTagsSynonyms<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tags']['synonyms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tags']['synonyms']['$get']>>
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
        ? getGetTagsTagsSynonymsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tags']['synonyms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tags'].synonyms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagsSynonyms<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tags']['synonyms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tags']['synonyms']['$get']>>
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
        ? getGetTagsTagsSynonymsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tags']['synonyms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tags'].synonyms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsTagsWikisKey(
  args: InferRequestType<(typeof client.tags)[':tags']['wikis']['$get']>,
) {
  return ['tags', '/tags/:tags/wikis', args] as const
}

export function useGetTagsTagsWikis<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tags']['wikis']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['wikis']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTagsTagsWikisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['wikis']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tags'].wikis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagsWikis<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tags']['wikis']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['wikis']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTagsTagsWikisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['wikis']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tags'].wikis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsTagTopAnswerersPeriodKey(
  args: InferRequestType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>,
) {
  return ['tags', '/tags/:tag/top-answerers/:period', args] as const
}

export function useGetTagsTagTopAnswerersPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>>
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
        ? getGetTagsTagTopAnswerersPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tags[':tag']['top-answerers'][':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagTopAnswerersPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>>
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
        ? getGetTagsTagTopAnswerersPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tags[':tag']['top-answerers'][':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsTagTopAskersPeriodKey(
  args: InferRequestType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>,
) {
  return ['tags', '/tags/:tag/top-askers/:period', args] as const
}

export function useGetTagsTagTopAskersPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>>
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
        ? getGetTagsTagTopAskersPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tags[':tag']['top-askers'][':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagTopAskersPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>>
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
        ? getGetTagsTagTopAskersPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tags[':tag']['top-askers'][':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetUsersModeratorsKey(
  args: InferRequestType<typeof client.users.moderators.$get>,
) {
  return ['users', '/users/moderators', args] as const
}

export function useGetUsersModerators<TError = unknown>(
  args: InferRequestType<typeof client.users.moderators.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.$get>>>>
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
        ? getGetUsersModeratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.moderators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersModerators<TError = unknown>(
  args: InferRequestType<typeof client.users.moderators.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.$get>>>>
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
        ? getGetUsersModeratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.moderators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersModeratorsElectedKey(
  args: InferRequestType<typeof client.users.moderators.elected.$get>,
) {
  return ['users', '/users/moderators/elected', args] as const
}

export function useGetUsersModeratorsElected<TError = unknown>(
  args: InferRequestType<typeof client.users.moderators.elected.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.elected.$get>>>
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
        ? getGetUsersModeratorsElectedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.elected.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.moderators.elected.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersModeratorsElected<TError = unknown>(
  args: InferRequestType<typeof client.users.moderators.elected.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.elected.$get>>>
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
        ? getGetUsersModeratorsElectedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.moderators.elected.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.moderators.elected.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsKey(args: InferRequestType<(typeof client.users)[':ids']['$get']>) {
  return ['users', '/users/:ids', args] as const
}

export function useGetUsersIds<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIds<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsAnswersKey(
  args: InferRequestType<(typeof client.users)[':ids']['answers']['$get']>,
) {
  return ['users', '/users/:ids/answers', args] as const
}

export function useGetUsersIdsAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['answers']['$get']>>
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
        ? getGetUsersIdsAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['answers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].answers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['answers']['$get']>>
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
        ? getGetUsersIdsAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['answers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].answers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsAssociatedKey(
  args: InferRequestType<(typeof client.users)[':ids']['associated']['$get']>,
) {
  return ['users', '/users/:ids/associated', args] as const
}

export function useGetUsersIdsAssociated<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['associated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['associated']['$get']>>
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
        ? getGetUsersIdsAssociatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['associated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].associated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsAssociated<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['associated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['associated']['$get']>>
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
        ? getGetUsersIdsAssociatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['associated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].associated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsBadgesKey(
  args: InferRequestType<(typeof client.users)[':ids']['badges']['$get']>,
) {
  return ['users', '/users/:ids/badges', args] as const
}

export function useGetUsersIdsBadges<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['badges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['badges']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdsBadgesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['badges']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].badges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsBadges<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['badges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['badges']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdsBadgesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['badges']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].badges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsCommentsKey(
  args: InferRequestType<(typeof client.users)[':ids']['comments']['$get']>,
) {
  return ['users', '/users/:ids/comments', args] as const
}

export function useGetUsersIdsComments<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['comments']['$get']>>
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
        ? getGetUsersIdsCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsComments<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['comments']['$get']>>
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
        ? getGetUsersIdsCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsCommentsToidKey(
  args: InferRequestType<(typeof client.users)[':ids']['comments'][':toid']['$get']>,
) {
  return ['users', '/users/:ids/comments/:toid', args] as const
}

export function useGetUsersIdsCommentsToid<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['comments'][':toid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['comments'][':toid']['$get']>>
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
        ? getGetUsersIdsCommentsToidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['comments'][':toid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].comments[':toid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsCommentsToid<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['comments'][':toid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['comments'][':toid']['$get']>>
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
        ? getGetUsersIdsCommentsToidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['comments'][':toid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].comments[':toid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsFavoritesKey(
  args: InferRequestType<(typeof client.users)[':ids']['favorites']['$get']>,
) {
  return ['users', '/users/:ids/favorites', args] as const
}

export function useGetUsersIdsFavorites<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['favorites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['favorites']['$get']>>
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
        ? getGetUsersIdsFavoritesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['favorites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].favorites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsFavorites<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['favorites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['favorites']['$get']>>
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
        ? getGetUsersIdsFavoritesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['favorites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].favorites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsMentionedKey(
  args: InferRequestType<(typeof client.users)[':ids']['mentioned']['$get']>,
) {
  return ['users', '/users/:ids/mentioned', args] as const
}

export function useGetUsersIdsMentioned<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['mentioned']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['mentioned']['$get']>>
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
        ? getGetUsersIdsMentionedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['mentioned']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].mentioned.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsMentioned<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['mentioned']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['mentioned']['$get']>>
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
        ? getGetUsersIdsMentionedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['mentioned']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].mentioned.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsMergesKey(
  args: InferRequestType<(typeof client.users)[':ids']['merges']['$get']>,
) {
  return ['users', '/users/:ids/merges', args] as const
}

export function useGetUsersIdsMerges<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['merges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['merges']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdsMergesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['merges']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].merges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsMerges<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['merges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['merges']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdsMergesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['merges']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].merges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsQuestionsKey(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['$get']>,
) {
  return ['users', '/users/:ids/questions', args] as const
}

export function useGetUsersIdsQuestions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['$get']>>
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
        ? getGetUsersIdsQuestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].questions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsQuestions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['$get']>>
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
        ? getGetUsersIdsQuestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].questions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsQuestionsFeaturedKey(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['featured']['$get']>,
) {
  return ['users', '/users/:ids/questions/featured', args] as const
}

export function useGetUsersIdsQuestionsFeatured<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['featured']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['featured']['$get']>>
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
        ? getGetUsersIdsQuestionsFeaturedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['featured']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].questions.featured.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsQuestionsFeatured<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['featured']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['featured']['$get']>>
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
        ? getGetUsersIdsQuestionsFeaturedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['featured']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].questions.featured.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsQuestionsNoAnswersKey(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>,
) {
  return ['users', '/users/:ids/questions/no-answers', args] as const
}

export function useGetUsersIdsQuestionsNoAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>>
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
        ? getGetUsersIdsQuestionsNoAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':ids'].questions['no-answers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsQuestionsNoAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>>
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
        ? getGetUsersIdsQuestionsNoAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':ids'].questions['no-answers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsQuestionsUnacceptedKey(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>,
) {
  return ['users', '/users/:ids/questions/unaccepted', args] as const
}

export function useGetUsersIdsQuestionsUnaccepted<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>>
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
        ? getGetUsersIdsQuestionsUnacceptedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':ids'].questions.unaccepted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsQuestionsUnaccepted<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>>
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
        ? getGetUsersIdsQuestionsUnacceptedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':ids'].questions.unaccepted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsQuestionsUnansweredKey(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>,
) {
  return ['users', '/users/:ids/questions/unanswered', args] as const
}

export function useGetUsersIdsQuestionsUnanswered<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>>
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
        ? getGetUsersIdsQuestionsUnansweredKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':ids'].questions.unanswered.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsQuestionsUnanswered<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>>
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
        ? getGetUsersIdsQuestionsUnansweredKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':ids'].questions.unanswered.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsReputationKey(
  args: InferRequestType<(typeof client.users)[':ids']['reputation']['$get']>,
) {
  return ['users', '/users/:ids/reputation', args] as const
}

export function useGetUsersIdsReputation<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['reputation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['reputation']['$get']>>
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
        ? getGetUsersIdsReputationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['reputation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].reputation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsReputation<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['reputation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['reputation']['$get']>>
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
        ? getGetUsersIdsReputationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['reputation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].reputation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsReputationHistoryKey(
  args: InferRequestType<(typeof client.users)[':ids']['reputation-history']['$get']>,
) {
  return ['users', '/users/:ids/reputation-history', args] as const
}

export function useGetUsersIdsReputationHistory<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['reputation-history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['reputation-history']['$get']>>
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
        ? getGetUsersIdsReputationHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['reputation-history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':ids']['reputation-history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsReputationHistory<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['reputation-history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['reputation-history']['$get']>>
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
        ? getGetUsersIdsReputationHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['reputation-history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':ids']['reputation-history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsSuggestedEditsKey(
  args: InferRequestType<(typeof client.users)[':ids']['suggested-edits']['$get']>,
) {
  return ['users', '/users/:ids/suggested-edits', args] as const
}

export function useGetUsersIdsSuggestedEdits<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['suggested-edits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['suggested-edits']['$get']>>
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
        ? getGetUsersIdsSuggestedEditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['suggested-edits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids']['suggested-edits'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsSuggestedEdits<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['suggested-edits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['suggested-edits']['$get']>>
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
        ? getGetUsersIdsSuggestedEditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['suggested-edits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids']['suggested-edits'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsTagsKey(
  args: InferRequestType<(typeof client.users)[':ids']['tags']['$get']>,
) {
  return ['users', '/users/:ids/tags', args] as const
}

export function useGetUsersIdsTags<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['tags']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdsTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['tags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsTags<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['tags']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdsTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ids']['tags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdsTimelineKey(
  args: InferRequestType<(typeof client.users)[':ids']['timeline']['$get']>,
) {
  return ['users', '/users/:ids/timeline', args] as const
}

export function useGetUsersIdsTimeline<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['timeline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['timeline']['$get']>>
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
        ? getGetUsersIdsTimelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['timeline']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].timeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdsTimeline<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ids']['timeline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['timeline']['$get']>>
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
        ? getGetUsersIdsTimelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ids']['timeline']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ids'].timeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdInboxKey(
  args: InferRequestType<(typeof client.users)[':id']['inbox']['$get']>,
) {
  return ['users', '/users/:id/inbox', args] as const
}

export function useGetUsersIdInbox<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['inbox']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['inbox']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdInboxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['inbox']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].inbox.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdInbox<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['inbox']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['inbox']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdInboxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['inbox']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].inbox.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdInboxUnreadKey(
  args: InferRequestType<(typeof client.users)[':id']['inbox']['unread']['$get']>,
) {
  return ['users', '/users/:id/inbox/unread', args] as const
}

export function useGetUsersIdInboxUnread<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['inbox']['unread']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['inbox']['unread']['$get']>>
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
        ? getGetUsersIdInboxUnreadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['inbox']['unread']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].inbox.unread.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdInboxUnread<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['inbox']['unread']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['inbox']['unread']['$get']>>
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
        ? getGetUsersIdInboxUnreadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['inbox']['unread']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].inbox.unread.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdNotificationsKey(
  args: InferRequestType<(typeof client.users)[':id']['notifications']['$get']>,
) {
  return ['users', '/users/:id/notifications', args] as const
}

export function useGetUsersIdNotifications<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['notifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['notifications']['$get']>>
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
        ? getGetUsersIdNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['notifications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdNotifications<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['notifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['notifications']['$get']>>
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
        ? getGetUsersIdNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['notifications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdNotificationsUnreadKey(
  args: InferRequestType<(typeof client.users)[':id']['notifications']['unread']['$get']>,
) {
  return ['users', '/users/:id/notifications/unread', args] as const
}

export function useGetUsersIdNotificationsUnread<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['notifications']['unread']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['notifications']['unread']['$get']>>
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
        ? getGetUsersIdNotificationsUnreadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['notifications']['unread']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].notifications.unread.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdNotificationsUnread<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['notifications']['unread']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['notifications']['unread']['$get']>>
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
        ? getGetUsersIdNotificationsUnreadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['notifications']['unread']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].notifications.unread.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdPrivilegesKey(
  args: InferRequestType<(typeof client.users)[':id']['privileges']['$get']>,
) {
  return ['users', '/users/:id/privileges', args] as const
}

export function useGetUsersIdPrivileges<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['privileges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['privileges']['$get']>>
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
        ? getGetUsersIdPrivilegesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['privileges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].privileges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdPrivileges<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['privileges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['privileges']['$get']>>
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
        ? getGetUsersIdPrivilegesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['privileges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].privileges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdReputationHistoryFullKey(
  args: InferRequestType<(typeof client.users)[':id']['reputation-history']['full']['$get']>,
) {
  return ['users', '/users/:id/reputation-history/full', args] as const
}

export function useGetUsersIdReputationHistoryFull<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['reputation-history']['full']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['reputation-history']['full']['$get']>>
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
        ? getGetUsersIdReputationHistoryFullKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['reputation-history']['full']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':id']['reputation-history'].full.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdReputationHistoryFull<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['reputation-history']['full']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['reputation-history']['full']['$get']>>
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
        ? getGetUsersIdReputationHistoryFullKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['reputation-history']['full']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':id']['reputation-history'].full.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdTagsTagsTopAnswersKey(
  args: InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>,
) {
  return ['users', '/users/:id/tags/:tags/top-answers', args] as const
}

export function useGetUsersIdTagsTagsTopAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>
            >
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
        ? getGetUsersIdTagsTagsTopAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':id'].tags[':tags']['top-answers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdTagsTagsTopAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>
            >
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
        ? getGetUsersIdTagsTagsTopAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':id'].tags[':tags']['top-answers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdTagsTagsTopQuestionsKey(
  args: InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>,
) {
  return ['users', '/users/:id/tags/:tags/top-questions', args] as const
}

export function useGetUsersIdTagsTagsTopQuestions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>
            >
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
        ? getGetUsersIdTagsTagsTopQuestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':id'].tags[':tags']['top-questions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdTagsTagsTopQuestions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>
            >
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
        ? getGetUsersIdTagsTagsTopQuestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':id'].tags[':tags']['top-questions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdTopAnswerTagsKey(
  args: InferRequestType<(typeof client.users)[':id']['top-answer-tags']['$get']>,
) {
  return ['users', '/users/:id/top-answer-tags', args] as const
}

export function useGetUsersIdTopAnswerTags<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['top-answer-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['top-answer-tags']['$get']>>
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
        ? getGetUsersIdTopAnswerTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['top-answer-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id']['top-answer-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdTopAnswerTags<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['top-answer-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['top-answer-tags']['$get']>>
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
        ? getGetUsersIdTopAnswerTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['top-answer-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id']['top-answer-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdTopQuestionTagsKey(
  args: InferRequestType<(typeof client.users)[':id']['top-question-tags']['$get']>,
) {
  return ['users', '/users/:id/top-question-tags', args] as const
}

export function useGetUsersIdTopQuestionTags<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['top-question-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['top-question-tags']['$get']>>
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
        ? getGetUsersIdTopQuestionTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['top-question-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id']['top-question-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdTopQuestionTags<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['top-question-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['top-question-tags']['$get']>>
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
        ? getGetUsersIdTopQuestionTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['top-question-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id']['top-question-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdWritePermissionsKey(
  args: InferRequestType<(typeof client.users)[':id']['write-permissions']['$get']>,
) {
  return ['users', '/users/:id/write-permissions', args] as const
}

export function useGetUsersIdWritePermissions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['write-permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['write-permissions']['$get']>>
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
        ? getGetUsersIdWritePermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['write-permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id']['write-permissions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdWritePermissions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['write-permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['write-permissions']['$get']>>
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
        ? getGetUsersIdWritePermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['write-permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id']['write-permissions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
