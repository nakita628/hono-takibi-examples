import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiAdminUsersKey() {
  return ['api', '/api/admin/users', 'POST'] as const
}

export function usePostApiAdminUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.users.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.admin.users.$post> }) =>
        parseResponse(client.api.admin.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiArticlesKey(args: InferRequestType<typeof client.api.articles.$get>) {
  return ['api', '/api/articles', args] as const
}

export function useGetApiArticles<TError = unknown>(
  args: InferRequestType<typeof client.api.articles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiArticlesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiArticles<TError = unknown>(
  args: InferRequestType<typeof client.api.articles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiArticlesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiArticlesKey() {
  return ['api', '/api/articles', 'POST'] as const
}

export function usePostApiArticles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.articles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiArticlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.articles.$post> }) =>
        parseResponse(client.api.articles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiArticlesLatestKey(
  args: InferRequestType<typeof client.api.articles.latest.$get>,
) {
  return ['api', '/api/articles/latest', args] as const
}

export function useGetApiArticlesLatest<TError = unknown>(
  args: InferRequestType<typeof client.api.articles.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>
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
        ? getGetApiArticlesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.articles.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiArticlesLatest<TError = unknown>(
  args: InferRequestType<typeof client.api.articles.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>
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
        ? getGetApiArticlesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.articles.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiArticlesMeKey(args: InferRequestType<typeof client.api.articles.me.$get>) {
  return ['api', '/api/articles/me', args] as const
}

export function useGetApiArticlesMe<TError = unknown>(
  args: InferRequestType<typeof client.api.articles.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiArticlesMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.articles.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiArticlesMe<TError = unknown>(
  args: InferRequestType<typeof client.api.articles.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiArticlesMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.articles.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiArticlesMeAllKey(
  args: InferRequestType<typeof client.api.articles.me.all.$get>,
) {
  return ['api', '/api/articles/me/all', args] as const
}

export function useGetApiArticlesMeAll<TError = unknown>(
  args: InferRequestType<typeof client.api.articles.me.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>
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
        ? getGetApiArticlesMeAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.articles.me.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiArticlesMeAll<TError = unknown>(
  args: InferRequestType<typeof client.api.articles.me.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>
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
        ? getGetApiArticlesMeAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.articles.me.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiArticlesMePublishedKey(
  args: InferRequestType<typeof client.api.articles.me.published.$get>,
) {
  return ['api', '/api/articles/me/published', args] as const
}

export function useGetApiArticlesMePublished<TError = unknown>(
  args: InferRequestType<typeof client.api.articles.me.published.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.published.$get>>>
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
        ? getGetApiArticlesMePublishedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.published.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.articles.me.published.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiArticlesMePublished<TError = unknown>(
  args: InferRequestType<typeof client.api.articles.me.published.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.published.$get>>>
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
        ? getGetApiArticlesMePublishedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.published.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.articles.me.published.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiArticlesMeUnpublishedKey(
  args: InferRequestType<typeof client.api.articles.me.unpublished.$get>,
) {
  return ['api', '/api/articles/me/unpublished', args] as const
}

export function useGetApiArticlesMeUnpublished<TError = unknown>(
  args: InferRequestType<typeof client.api.articles.me.unpublished.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>>
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
        ? getGetApiArticlesMeUnpublishedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.articles.me.unpublished.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiArticlesMeUnpublished<TError = unknown>(
  args: InferRequestType<typeof client.api.articles.me.unpublished.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>>
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
        ? getGetApiArticlesMeUnpublishedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.articles.me.unpublished.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiArticlesIdKey(
  args: InferRequestType<(typeof client.api.articles)[':id']['$get']>,
) {
  return ['api', '/api/articles/:id', args] as const
}

export function useGetApiArticlesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.articles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiArticlesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.articles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiArticlesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.articles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiArticlesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.articles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiArticlesIdKey() {
  return ['api', '/api/articles/:id', 'PUT'] as const
}

export function usePutApiArticlesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.articles)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiArticlesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.articles)[':id']['$put']> },
      ) => parseResponse(client.api.articles[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiArticlesIdUnpublishKey() {
  return ['api', '/api/articles/:id/unpublish', 'PUT'] as const
}

export function usePutApiArticlesIdUnpublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.articles)[':id']['unpublish']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.articles)[':id']['unpublish']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiArticlesIdUnpublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.articles)[':id']['unpublish']['$put']> },
      ) => parseResponse(client.api.articles[':id'].unpublish.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiArticlesUsernameSlugKey(
  args: InferRequestType<(typeof client.api.articles)[':username'][':slug']['$get']>,
) {
  return ['api', '/api/articles/:username/:slug', args] as const
}

export function useGetApiArticlesUsernameSlug<TError = unknown>(
  args: InferRequestType<(typeof client.api.articles)[':username'][':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
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
        ? getGetApiArticlesUsernameSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.articles[':username'][':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiArticlesUsernameSlug<TError = unknown>(
  args: InferRequestType<(typeof client.api.articles)[':username'][':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
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
        ? getGetApiArticlesUsernameSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.articles[':username'][':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCommentsKey(args: InferRequestType<typeof client.api.comments.$get>) {
  return ['api', '/api/comments', args] as const
}

export function useGetApiComments<TError = unknown>(
  args: InferRequestType<typeof client.api.comments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCommentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiComments<TError = unknown>(
  args: InferRequestType<typeof client.api.comments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCommentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCommentsIdKey(
  args: InferRequestType<(typeof client.api.comments)[':id']['$get']>,
) {
  return ['api', '/api/comments/:id', args] as const
}

export function useGetApiCommentsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.comments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiCommentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.comments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCommentsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.comments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiCommentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.comments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDisplayAdsKey() {
  return ['api', '/api/display_ads'] as const
}

export function useGetApiDisplayAds<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDisplayAdsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.display_ads.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDisplayAds<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDisplayAdsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.display_ads.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiDisplayAdsKey() {
  return ['api', '/api/display_ads', 'POST'] as const
}

export function usePostApiDisplayAds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.display_ads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDisplayAdsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.display_ads.$post> }) =>
        parseResponse(client.api.display_ads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiDisplayAdsIdKey(
  args: InferRequestType<(typeof client.api.display_ads)[':id']['$get']>,
) {
  return ['api', '/api/display_ads/:id', args] as const
}

export function useGetApiDisplayAdsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.display_ads)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>>
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
        ? getGetApiDisplayAdsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.display_ads[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDisplayAdsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.display_ads)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>>
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
        ? getGetApiDisplayAdsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.display_ads[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiDisplayAdsIdKey() {
  return ['api', '/api/display_ads/:id', 'PUT'] as const
}

export function usePutApiDisplayAdsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.display_ads)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiDisplayAdsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.display_ads)[':id']['$put']> },
      ) => parseResponse(client.api.display_ads[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiDisplayAdsIdUnpublishKey() {
  return ['api', '/api/display_ads/:id/unpublish', 'PUT'] as const
}

export function usePutApiDisplayAdsIdUnpublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.display_ads)[':id']['unpublish']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.display_ads)[':id']['unpublish']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiDisplayAdsIdUnpublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.display_ads)[':id']['unpublish']['$put']> },
      ) => parseResponse(client.api.display_ads[':id'].unpublish.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFollowersUsersKey(
  args: InferRequestType<typeof client.api.followers.users.$get>,
) {
  return ['api', '/api/followers/users', args] as const
}

export function useGetApiFollowersUsers<TError = unknown>(
  args: InferRequestType<typeof client.api.followers.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>
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
        ? getGetApiFollowersUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.followers.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFollowersUsers<TError = unknown>(
  args: InferRequestType<typeof client.api.followers.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>
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
        ? getGetApiFollowersUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.followers.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFollowsTagsKey() {
  return ['api', '/api/follows/tags'] as const
}

export function useGetApiFollowsTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiFollowsTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.follows.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFollowsTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiFollowsTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.follows.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsUsernameKey(
  args: InferRequestType<(typeof client.api.organizations)[':username']['$get']>,
) {
  return ['api', '/api/organizations/:username', args] as const
}

export function useGetApiOrganizationsUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
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
        ? getGetApiOrganizationsUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.organizations[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
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
        ? getGetApiOrganizationsUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.organizations[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsUsernameArticlesKey(
  args: InferRequestType<(typeof client.api.organizations)[':username']['articles']['$get']>,
) {
  return ['api', '/api/organizations/:username/articles', args] as const
}

export function useGetApiOrganizationsUsernameArticles<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['articles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>>
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
        ? getGetApiOrganizationsUsernameArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':username'].articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsUsernameArticles<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['articles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>>
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
        ? getGetApiOrganizationsUsernameArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':username'].articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsUsernameUsersKey(
  args: InferRequestType<(typeof client.api.organizations)[':username']['users']['$get']>,
) {
  return ['api', '/api/organizations/:username/users', args] as const
}

export function useGetApiOrganizationsUsernameUsers<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
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
        ? getGetApiOrganizationsUsernameUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':username'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsUsernameUsers<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
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
        ? getGetApiOrganizationsUsernameUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':username'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPagesKey() {
  return ['api', '/api/pages'] as const
}

export function useGetApiPages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPagesKey() {
  return ['api', '/api/pages', 'POST'] as const
}

export function usePostApiPages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.pages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.pages.$post> }) =>
        parseResponse(client.api.pages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPagesIdKey(
  args: InferRequestType<(typeof client.api.pages)[':id']['$get']>,
) {
  return ['api', '/api/pages/:id', args] as const
}

export function useGetApiPagesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.pages)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiPagesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pages[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPagesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.pages)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiPagesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pages[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiPagesIdKey() {
  return ['api', '/api/pages/:id', 'PUT'] as const
}

export function usePutApiPagesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.pages)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiPagesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.pages)[':id']['$put']> },
      ) => parseResponse(client.api.pages[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiPagesIdKey() {
  return ['api', '/api/pages/:id', 'DELETE'] as const
}

export function useDeleteApiPagesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.pages)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPagesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.pages)[':id']['$delete']> },
      ) => parseResponse(client.api.pages[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPodcastEpisodesKey(
  args: InferRequestType<typeof client.api.podcast_episodes.$get>,
) {
  return ['api', '/api/podcast_episodes', args] as const
}

export function useGetApiPodcastEpisodes<TError = unknown>(
  args: InferRequestType<typeof client.api.podcast_episodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>
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
        ? getGetApiPodcastEpisodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.podcast_episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPodcastEpisodes<TError = unknown>(
  args: InferRequestType<typeof client.api.podcast_episodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>
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
        ? getGetApiPodcastEpisodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.podcast_episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiProfileImagesUsernameKey(
  args: InferRequestType<(typeof client.api.profile_images)[':username']['$get']>,
) {
  return ['api', '/api/profile_images/:username', args] as const
}

export function useGetApiProfileImagesUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.profile_images)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
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
        ? getGetApiProfileImagesUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.profile_images[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProfileImagesUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.profile_images)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
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
        ? getGetApiProfileImagesUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.profile_images[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiReactionsKey() {
  return ['api', '/api/reactions', 'POST'] as const
}

export function usePostApiReactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.reactions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiReactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.reactions.$post> }) =>
        parseResponse(client.api.reactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiReactionsToggleKey() {
  return ['api', '/api/reactions/toggle', 'POST'] as const
}

export function usePostApiReactionsToggle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.reactions.toggle.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.reactions.toggle.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiReactionsToggleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.reactions.toggle.$post> },
      ) => parseResponse(client.api.reactions.toggle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiReadinglistKey(
  args: InferRequestType<typeof client.api.readinglist.$get>,
) {
  return ['api', '/api/readinglist', args] as const
}

export function useGetApiReadinglist<TError = unknown>(
  args: InferRequestType<typeof client.api.readinglist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiReadinglistKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.readinglist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiReadinglist<TError = unknown>(
  args: InferRequestType<typeof client.api.readinglist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiReadinglistKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.readinglist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTagsKey(args: InferRequestType<typeof client.api.tags.$get>) {
  return ['api', '/api/tags', args] as const
}

export function useGetApiTags<TError = unknown>(
  args: InferRequestType<typeof client.api.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApiTags<TError = unknown>(
  args: InferRequestType<typeof client.api.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetApiUsersMeKey() {
  return ['api', '/api/users/me'] as const
}

export function useGetApiUsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUsersIdKey(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
) {
  return ['api', '/api/users/:id', args] as const
}

export function useGetApiUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiUsersIdSuspendKey() {
  return ['api', '/api/users/:id/suspend', 'PUT'] as const
}

export function usePutApiUsersIdSuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':id']['suspend']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.users)[':id']['suspend']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiUsersIdSuspendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.users)[':id']['suspend']['$put']> },
      ) => parseResponse(client.api.users[':id'].suspend.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiUsersIdUnpublishKey() {
  return ['api', '/api/users/:id/unpublish', 'PUT'] as const
}

export function usePutApiUsersIdUnpublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':id']['unpublish']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.users)[':id']['unpublish']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiUsersIdUnpublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.users)[':id']['unpublish']['$put']> },
      ) => parseResponse(client.api.users[':id'].unpublish.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVideosKey(args: InferRequestType<typeof client.api.videos.$get>) {
  return ['api', '/api/videos', args] as const
}

export function useGetApiVideos<TError = unknown>(
  args: InferRequestType<typeof client.api.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiVideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVideos<TError = unknown>(
  args: InferRequestType<typeof client.api.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiVideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
