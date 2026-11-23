import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getArticlesKey() {
  return ['articles'] as const
}

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getFileKey() {
  return ['file'] as const
}

export function getInstitutionKey() {
  return ['institution'] as const
}

export function getInstitutionsKey() {
  return ['institutions'] as const
}

export function getItemTypesKey() {
  return ['item_types'] as const
}

export function getLicensesKey() {
  return ['licenses'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getGetAccountKey() {
  return ['account', '/account'] as const
}

export function useGetAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountArticlesKey(
  args: InferRequestType<typeof client.account.articles.$get>,
) {
  return ['account', '/account/articles', args] as const
}

export function useGetAccountArticles<TError = unknown>(
  args: InferRequestType<typeof client.account.articles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.$get>>>>
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
        ? getGetAccountArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountArticles<TError = unknown>(
  args: InferRequestType<typeof client.account.articles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.$get>>>>
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
        ? getGetAccountArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountArticlesKey() {
  return ['account', '/account/articles', 'POST'] as const
}

export function usePostAccountArticles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.articles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountArticlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.articles.$post> }) =>
        parseResponse(client.account.articles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountArticlesExportKey(
  args: InferRequestType<typeof client.account.articles.export.$get>,
) {
  return ['account', '/account/articles/export', args] as const
}

export function useGetAccountArticlesExport<TError = unknown>(
  args: InferRequestType<typeof client.account.articles.export.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.export.$get>>>
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
        ? getGetAccountArticlesExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.export.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.articles.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountArticlesExport<TError = unknown>(
  args: InferRequestType<typeof client.account.articles.export.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.export.$get>>>
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
        ? getGetAccountArticlesExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.export.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.articles.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountArticlesExportKey() {
  return ['account', '/account/articles/export', 'POST'] as const
}

export function usePostAccountArticlesExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.export.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountArticlesExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.account.articles.export.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountArticlesSearchKey() {
  return ['account', '/account/articles/search', 'POST'] as const
}

export function usePostAccountArticlesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.articles.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountArticlesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.articles.search.$post> },
      ) => parseResponse(client.account.articles.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountArticlesArticleIdKey(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['$get']>,
) {
  return ['account', '/account/articles/:article_id', args] as const
}

export function useGetAccountArticlesArticleId<TError = unknown>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$get']>>
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
        ? getGetAccountArticlesArticleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.articles[':article_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountArticlesArticleId<TError = unknown>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$get']>>
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
        ? getGetAccountArticlesArticleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.articles[':article_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountArticlesArticleIdKey() {
  return ['account', '/account/articles/:article_id', 'PUT'] as const
}

export function usePutAccountArticlesArticleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountArticlesArticleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.articles)[':article_id']['$put']> },
      ) => parseResponse(client.account.articles[':article_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountArticlesArticleIdKey() {
  return ['account', '/account/articles/:article_id', 'DELETE'] as const
}

export function useDeleteAccountArticlesArticleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountArticlesArticleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.articles)[':article_id']['$delete']> },
      ) => parseResponse(client.account.articles[':article_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountArticlesArticleIdAuthorsKey(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$get']>,
) {
  return ['account', '/account/articles/:article_id/authors', args] as const
}

export function useGetAccountArticlesArticleIdAuthors<TError = unknown>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['authors']['$get']>>
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
        ? getGetAccountArticlesArticleIdAuthorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['authors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.articles[':article_id'].authors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountArticlesArticleIdAuthors<TError = unknown>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['authors']['$get']>>
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
        ? getGetAccountArticlesArticleIdAuthorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['authors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.articles[':article_id'].authors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountArticlesArticleIdAuthorsKey() {
  return ['account', '/account/articles/:article_id/authors', 'PUT'] as const
}

export function usePutAccountArticlesArticleIdAuthors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['authors']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountArticlesArticleIdAuthorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$put']>
        },
      ) => parseResponse(client.account.articles[':article_id'].authors.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountArticlesArticleIdAuthorsKey() {
  return ['account', '/account/articles/:article_id/authors', 'POST'] as const
}

export function usePostAccountArticlesArticleIdAuthors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['authors']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountArticlesArticleIdAuthorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$post']>
        },
      ) => parseResponse(client.account.articles[':article_id'].authors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountArticlesArticleIdAuthorsAuthorIdKey() {
  return ['account', '/account/articles/:article_id/authors/:author_id', 'DELETE'] as const
}

export function useDeleteAccountArticlesArticleIdAuthorsAuthorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.articles)[':article_id']['authors'][':author_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.articles)[':article_id']['authors'][':author_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountArticlesArticleIdAuthorsAuthorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['authors'][':author_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account.articles[':article_id'].authors[':author_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountArticlesArticleIdCategoriesKey(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$get']>,
) {
  return ['account', '/account/articles/:article_id/categories', args] as const
}

export function useGetAccountArticlesArticleIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['categories']['$get']>
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
        ? getGetAccountArticlesArticleIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['categories']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.articles[':article_id'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountArticlesArticleIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['categories']['$get']>
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
        ? getGetAccountArticlesArticleIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['categories']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.articles[':article_id'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountArticlesArticleIdCategoriesKey() {
  return ['account', '/account/articles/:article_id/categories', 'PUT'] as const
}

export function usePutAccountArticlesArticleIdCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['categories']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountArticlesArticleIdCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['categories']['$put']
          >
        },
      ) =>
        parseResponse(client.account.articles[':article_id'].categories.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountArticlesArticleIdCategoriesKey() {
  return ['account', '/account/articles/:article_id/categories', 'POST'] as const
}

export function usePostAccountArticlesArticleIdCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['categories']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountArticlesArticleIdCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['categories']['$post']
          >
        },
      ) =>
        parseResponse(client.account.articles[':article_id'].categories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountArticlesArticleIdCategoriesCategoryIdKey() {
  return ['account', '/account/articles/:article_id/categories/:category_id', 'DELETE'] as const
}

export function useDeleteAccountArticlesArticleIdCategoriesCategoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.articles)[':article_id']['categories'][':category_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.articles)[':article_id']['categories'][':category_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountArticlesArticleIdCategoriesCategoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['categories'][':category_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account.articles[':article_id'].categories[':category_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountArticlesArticleIdConfidentialityKey(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['confidentiality']['$get']
  >,
) {
  return ['account', '/account/articles/:article_id/confidentiality', args] as const
}

export function useGetAccountArticlesArticleIdConfidentiality<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['confidentiality']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['confidentiality']['$get']>
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
        ? getGetAccountArticlesArticleIdConfidentialityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['confidentiality']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.articles[':article_id'].confidentiality.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountArticlesArticleIdConfidentiality<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['confidentiality']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['confidentiality']['$get']>
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
        ? getGetAccountArticlesArticleIdConfidentialityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['confidentiality']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.articles[':article_id'].confidentiality.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountArticlesArticleIdConfidentialityKey() {
  return ['account', '/account/articles/:article_id/confidentiality', 'PUT'] as const
}

export function usePutAccountArticlesArticleIdConfidentiality<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['confidentiality']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['confidentiality']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountArticlesArticleIdConfidentialityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['confidentiality']['$put']
          >
        },
      ) =>
        parseResponse(
          client.account.articles[':article_id'].confidentiality.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountArticlesArticleIdConfidentialityKey() {
  return ['account', '/account/articles/:article_id/confidentiality', 'DELETE'] as const
}

export function useDeleteAccountArticlesArticleIdConfidentiality<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.articles)[':article_id']['confidentiality']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['confidentiality']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountArticlesArticleIdConfidentialityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['confidentiality']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account.articles[':article_id'].confidentiality.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountArticlesArticleIdEmbargoKey(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$get']>,
) {
  return ['account', '/account/articles/:article_id/embargo', args] as const
}

export function useGetAccountArticlesArticleIdEmbargo<TError = unknown>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['embargo']['$get']>>
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
        ? getGetAccountArticlesArticleIdEmbargoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['embargo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.articles[':article_id'].embargo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountArticlesArticleIdEmbargo<TError = unknown>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['embargo']['$get']>>
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
        ? getGetAccountArticlesArticleIdEmbargoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['embargo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.articles[':article_id'].embargo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountArticlesArticleIdEmbargoKey() {
  return ['account', '/account/articles/:article_id/embargo', 'PUT'] as const
}

export function usePutAccountArticlesArticleIdEmbargo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['embargo']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountArticlesArticleIdEmbargoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$put']>
        },
      ) => parseResponse(client.account.articles[':article_id'].embargo.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountArticlesArticleIdEmbargoKey() {
  return ['account', '/account/articles/:article_id/embargo', 'DELETE'] as const
}

export function useDeleteAccountArticlesArticleIdEmbargo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['embargo']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountArticlesArticleIdEmbargoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['embargo']['$delete']
          >
        },
      ) =>
        parseResponse(client.account.articles[':article_id'].embargo.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountArticlesArticleIdFilesKey(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['files']['$get']>,
) {
  return ['account', '/account/articles/:article_id/files', args] as const
}

export function useGetAccountArticlesArticleIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['files']['$get']>>
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
        ? getGetAccountArticlesArticleIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.articles[':article_id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountArticlesArticleIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['files']['$get']>>
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
        ? getGetAccountArticlesArticleIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.articles[':article_id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountArticlesArticleIdFilesKey() {
  return ['account', '/account/articles/:article_id/files', 'POST'] as const
}

export function usePostAccountArticlesArticleIdFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.articles)[':article_id']['files']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['files']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountArticlesArticleIdFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.articles)[':article_id']['files']['$post']>
        },
      ) => parseResponse(client.account.articles[':article_id'].files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountArticlesArticleIdFilesFileIdKey(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['files'][':file_id']['$get']
  >,
) {
  return ['account', '/account/articles/:article_id/files/:file_id', args] as const
}

export function useGetAccountArticlesArticleIdFilesFileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['files'][':file_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.articles)[':article_id']['files'][':file_id']['$get']
              >
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
        ? getGetAccountArticlesArticleIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.articles)[':article_id']['files'][':file_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.articles[':article_id'].files[':file_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountArticlesArticleIdFilesFileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['files'][':file_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.articles)[':article_id']['files'][':file_id']['$get']
              >
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
        ? getGetAccountArticlesArticleIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.articles)[':article_id']['files'][':file_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.articles[':article_id'].files[':file_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountArticlesArticleIdFilesFileIdKey() {
  return ['account', '/account/articles/:article_id/files/:file_id', 'POST'] as const
}

export function usePostAccountArticlesArticleIdFilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account.articles)[':article_id']['files'][':file_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['files'][':file_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountArticlesArticleIdFilesFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['files'][':file_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account.articles[':article_id'].files[':file_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountArticlesArticleIdFilesFileIdKey() {
  return ['account', '/account/articles/:article_id/files/:file_id', 'DELETE'] as const
}

export function useDeleteAccountArticlesArticleIdFilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.articles)[':article_id']['files'][':file_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.articles)[':article_id']['files'][':file_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountArticlesArticleIdFilesFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['files'][':file_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account.articles[':article_id'].files[':file_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountArticlesArticleIdPrivateLinksKey(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['private_links']['$get']>,
) {
  return ['account', '/account/articles/:article_id/private_links', args] as const
}

export function useGetAccountArticlesArticleIdPrivateLinks<TError = unknown>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['private_links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['private_links']['$get']>
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
        ? getGetAccountArticlesArticleIdPrivateLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['private_links']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.articles[':article_id'].private_links.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountArticlesArticleIdPrivateLinks<TError = unknown>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['private_links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['private_links']['$get']>
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
        ? getGetAccountArticlesArticleIdPrivateLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['private_links']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.articles[':article_id'].private_links.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountArticlesArticleIdPrivateLinksKey() {
  return ['account', '/account/articles/:article_id/private_links', 'POST'] as const
}

export function usePostAccountArticlesArticleIdPrivateLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.articles)[':article_id']['private_links']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['private_links']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountArticlesArticleIdPrivateLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['private_links']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account.articles[':article_id'].private_links.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAccountArticlesArticleIdPrivateLinksLinkIdKey() {
  return ['account', '/account/articles/:article_id/private_links/:link_id', 'PUT'] as const
}

export function usePutAccountArticlesArticleIdPrivateLinksLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.articles)[':article_id']['private_links'][':link_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.articles)[':article_id']['private_links'][':link_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountArticlesArticleIdPrivateLinksLinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['private_links'][':link_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.account.articles[':article_id'].private_links[':link_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountArticlesArticleIdPrivateLinksLinkIdKey() {
  return ['account', '/account/articles/:article_id/private_links/:link_id', 'DELETE'] as const
}

export function useDeleteAccountArticlesArticleIdPrivateLinksLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.articles)[':article_id']['private_links'][':link_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.articles)[':article_id']['private_links'][':link_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountArticlesArticleIdPrivateLinksLinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['private_links'][':link_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account.articles[':article_id'].private_links[':link_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountArticlesArticleIdPublishKey() {
  return ['account', '/account/articles/:article_id/publish', 'POST'] as const
}

export function usePostAccountArticlesArticleIdPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.articles)[':article_id']['publish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountArticlesArticleIdPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.articles)[':article_id']['publish']['$post']>
        },
      ) => parseResponse(client.account.articles[':article_id'].publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountArticlesArticleIdReserveDoiKey() {
  return ['account', '/account/articles/:article_id/reserve_doi', 'POST'] as const
}

export function usePostAccountArticlesArticleIdReserveDoi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.articles)[':article_id']['reserve_doi']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['reserve_doi']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountArticlesArticleIdReserveDoiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['reserve_doi']['$post']
          >
        },
      ) =>
        parseResponse(client.account.articles[':article_id'].reserve_doi.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountArticlesArticleIdReserveHandleKey() {
  return ['account', '/account/articles/:article_id/reserve_handle', 'POST'] as const
}

export function usePostAccountArticlesArticleIdReserveHandle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.articles)[':article_id']['reserve_handle']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['reserve_handle']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountArticlesArticleIdReserveHandleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['reserve_handle']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account.articles[':article_id'].reserve_handle.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountArticlesArticleIdResourceKey() {
  return ['account', '/account/articles/:article_id/resource', 'POST'] as const
}

export function usePostAccountArticlesArticleIdResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.articles)[':article_id']['resource']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.articles)[':article_id']['resource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountArticlesArticleIdResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['resource']['$post']
          >
        },
      ) => parseResponse(client.account.articles[':article_id'].resource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountArticlesArticleIdVersionsVersionIdIndexKey() {
  return ['account', '/account/articles/:article_id/versions/:version_id/', 'PUT'] as const
}

export function usePutAccountArticlesArticleIdVersionsVersionIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.articles)[':article_id']['versions'][':version_id']['index']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.articles)[':article_id']['versions'][':version_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountArticlesArticleIdVersionsVersionIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['versions'][':version_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.account.articles[':article_id'].versions[':version_id'].index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAccountArticlesArticleIdVersionsVersionIdUpdateThumbKey() {
  return [
    'account',
    '/account/articles/:article_id/versions/:version_id/update_thumb',
    'PUT',
  ] as const
}

export function usePutAccountArticlesArticleIdVersionsVersionIdUpdateThumb<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.articles)[':article_id']['versions'][':version_id']['update_thumb']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.articles)[':article_id']['versions'][':version_id']['update_thumb']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountArticlesArticleIdVersionsVersionIdUpdateThumbKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.articles)[':article_id']['versions'][':version_id']['update_thumb']['$put']
          >
        },
      ) =>
        parseResponse(
          client.account.articles[':article_id'].versions[':version_id'].update_thumb.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountAuthorsSearchKey() {
  return ['account', '/account/authors/search', 'POST'] as const
}

export function usePostAccountAuthorsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.authors.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.authors.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountAuthorsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.authors.search.$post> },
      ) => parseResponse(client.account.authors.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountAuthorsAuthorIdKey(
  args: InferRequestType<(typeof client.account.authors)[':author_id']['$get']>,
) {
  return ['account', '/account/authors/:author_id', args] as const
}

export function useGetAccountAuthorsAuthorId<TError = unknown>(
  args: InferRequestType<(typeof client.account.authors)[':author_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.authors)[':author_id']['$get']>>
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
        ? getGetAccountAuthorsAuthorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.authors)[':author_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.authors[':author_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountAuthorsAuthorId<TError = unknown>(
  args: InferRequestType<(typeof client.account.authors)[':author_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.authors)[':author_id']['$get']>>
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
        ? getGetAccountAuthorsAuthorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.authors)[':author_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.authors[':author_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountCategoriesKey() {
  return ['account', '/account/categories'] as const
}

export function useGetAccountCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.categories.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.categories.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountCollectionsKey(
  args: InferRequestType<typeof client.account.collections.$get>,
) {
  return ['account', '/account/collections', args] as const
}

export function useGetAccountCollections<TError = unknown>(
  args: InferRequestType<typeof client.account.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.$get>>>
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
        ? getGetAccountCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountCollections<TError = unknown>(
  args: InferRequestType<typeof client.account.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.$get>>>
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
        ? getGetAccountCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountCollectionsKey() {
  return ['account', '/account/collections', 'POST'] as const
}

export function usePostAccountCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.collections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.collections.$post> }) =>
        parseResponse(client.account.collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountCollectionsSearchKey() {
  return ['account', '/account/collections/search', 'POST'] as const
}

export function usePostAccountCollectionsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.collections.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountCollectionsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.collections.search.$post> },
      ) => parseResponse(client.account.collections.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountCollectionsCollectionIdKey(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['$get']>,
) {
  return ['account', '/account/collections/:collection_id', args] as const
}

export function useGetAccountCollectionsCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$get']>>
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
        ? getGetAccountCollectionsCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.collections[':collection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountCollectionsCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$get']>>
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
        ? getGetAccountCollectionsCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.collections[':collection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountCollectionsCollectionIdKey() {
  return ['account', '/account/collections/:collection_id', 'PUT'] as const
}

export function usePutAccountCollectionsCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.collections)[':collection_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountCollectionsCollectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.collections)[':collection_id']['$put']> },
      ) => parseResponse(client.account.collections[':collection_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountCollectionsCollectionIdKey() {
  return ['account', '/account/collections/:collection_id', 'DELETE'] as const
}

export function useDeleteAccountCollectionsCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.collections)[':collection_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountCollectionsCollectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.collections)[':collection_id']['$delete']>
        },
      ) => parseResponse(client.account.collections[':collection_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountCollectionsCollectionIdArticlesKey(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['articles']['$get']>,
) {
  return ['account', '/account/collections/:collection_id/articles', args] as const
}

export function useGetAccountCollectionsCollectionIdArticles<TError = unknown>(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['articles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.collections)[':collection_id']['articles']['$get']>
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
        ? getGetAccountCollectionsCollectionIdArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.collections)[':collection_id']['articles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.collections[':collection_id'].articles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountCollectionsCollectionIdArticles<TError = unknown>(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['articles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.collections)[':collection_id']['articles']['$get']>
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
        ? getGetAccountCollectionsCollectionIdArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.collections)[':collection_id']['articles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.collections[':collection_id'].articles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountCollectionsCollectionIdArticlesKey() {
  return ['account', '/account/collections/:collection_id/articles', 'PUT'] as const
}

export function usePutAccountCollectionsCollectionIdArticles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.collections)[':collection_id']['articles']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.collections)[':collection_id']['articles']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountCollectionsCollectionIdArticlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.collections)[':collection_id']['articles']['$put']
          >
        },
      ) =>
        parseResponse(
          client.account.collections[':collection_id'].articles.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountCollectionsCollectionIdArticlesKey() {
  return ['account', '/account/collections/:collection_id/articles', 'POST'] as const
}

export function usePostAccountCollectionsCollectionIdArticles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.collections)[':collection_id']['articles']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.collections)[':collection_id']['articles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountCollectionsCollectionIdArticlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.collections)[':collection_id']['articles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account.collections[':collection_id'].articles.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountCollectionsCollectionIdArticlesArticleIdKey() {
  return ['account', '/account/collections/:collection_id/articles/:article_id', 'DELETE'] as const
}

export function useDeleteAccountCollectionsCollectionIdArticlesArticleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.collections)[':collection_id']['articles'][':article_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.collections)[':collection_id']['articles'][':article_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountCollectionsCollectionIdArticlesArticleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.collections)[':collection_id']['articles'][':article_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account.collections[':collection_id'].articles[':article_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountCollectionsCollectionIdAuthorsKey(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$get']>,
) {
  return ['account', '/account/collections/:collection_id/authors', args] as const
}

export function useGetAccountCollectionsCollectionIdAuthors<TError = unknown>(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.collections)[':collection_id']['authors']['$get']>
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
        ? getGetAccountCollectionsCollectionIdAuthorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.collections)[':collection_id']['authors']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.collections[':collection_id'].authors.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountCollectionsCollectionIdAuthors<TError = unknown>(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.collections)[':collection_id']['authors']['$get']>
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
        ? getGetAccountCollectionsCollectionIdAuthorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.collections)[':collection_id']['authors']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.collections[':collection_id'].authors.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountCollectionsCollectionIdAuthorsKey() {
  return ['account', '/account/collections/:collection_id/authors', 'PUT'] as const
}

export function usePutAccountCollectionsCollectionIdAuthors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.collections)[':collection_id']['authors']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountCollectionsCollectionIdAuthorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.collections)[':collection_id']['authors']['$put']
          >
        },
      ) =>
        parseResponse(
          client.account.collections[':collection_id'].authors.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountCollectionsCollectionIdAuthorsKey() {
  return ['account', '/account/collections/:collection_id/authors', 'POST'] as const
}

export function usePostAccountCollectionsCollectionIdAuthors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.collections)[':collection_id']['authors']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountCollectionsCollectionIdAuthorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.collections)[':collection_id']['authors']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account.collections[':collection_id'].authors.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountCollectionsCollectionIdAuthorsAuthorIdKey() {
  return ['account', '/account/collections/:collection_id/authors/:author_id', 'DELETE'] as const
}

export function useDeleteAccountCollectionsCollectionIdAuthorsAuthorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.collections)[':collection_id']['authors'][':author_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.collections)[':collection_id']['authors'][':author_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountCollectionsCollectionIdAuthorsAuthorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.collections)[':collection_id']['authors'][':author_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account.collections[':collection_id'].authors[':author_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountCollectionsCollectionIdCategoriesKey(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['categories']['$get']
  >,
) {
  return ['account', '/account/collections/:collection_id/categories', args] as const
}

export function useGetAccountCollectionsCollectionIdCategories<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['categories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.collections)[':collection_id']['categories']['$get']
              >
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
        ? getGetAccountCollectionsCollectionIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.collections)[':collection_id']['categories']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.collections[':collection_id'].categories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountCollectionsCollectionIdCategories<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['categories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.collections)[':collection_id']['categories']['$get']
              >
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
        ? getGetAccountCollectionsCollectionIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.collections)[':collection_id']['categories']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.collections[':collection_id'].categories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountCollectionsCollectionIdCategoriesKey() {
  return ['account', '/account/collections/:collection_id/categories', 'PUT'] as const
}

export function usePutAccountCollectionsCollectionIdCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.collections)[':collection_id']['categories']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.collections)[':collection_id']['categories']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountCollectionsCollectionIdCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.collections)[':collection_id']['categories']['$put']
          >
        },
      ) =>
        parseResponse(
          client.account.collections[':collection_id'].categories.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountCollectionsCollectionIdCategoriesKey() {
  return ['account', '/account/collections/:collection_id/categories', 'POST'] as const
}

export function usePostAccountCollectionsCollectionIdCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.collections)[':collection_id']['categories']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.collections)[':collection_id']['categories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountCollectionsCollectionIdCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.collections)[':collection_id']['categories']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account.collections[':collection_id'].categories.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountCollectionsCollectionIdCategoriesCategoryIdKey() {
  return [
    'account',
    '/account/collections/:collection_id/categories/:category_id',
    'DELETE',
  ] as const
}

export function useDeleteAccountCollectionsCollectionIdCategoriesCategoryId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.collections)[':collection_id']['categories'][':category_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.collections)[':collection_id']['categories'][':category_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountCollectionsCollectionIdCategoriesCategoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.collections)[':collection_id']['categories'][':category_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account.collections[':collection_id'].categories[':category_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountCollectionsCollectionIdPrivateLinksKey(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['private_links']['$get']
  >,
) {
  return ['account', '/account/collections/:collection_id/private_links', args] as const
}

export function useGetAccountCollectionsCollectionIdPrivateLinks<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['private_links']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.collections)[':collection_id']['private_links']['$get']
              >
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
        ? getGetAccountCollectionsCollectionIdPrivateLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.collections)[':collection_id']['private_links']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.collections[':collection_id'].private_links.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountCollectionsCollectionIdPrivateLinks<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['private_links']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.collections)[':collection_id']['private_links']['$get']
              >
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
        ? getGetAccountCollectionsCollectionIdPrivateLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.collections)[':collection_id']['private_links']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.collections[':collection_id'].private_links.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountCollectionsCollectionIdPrivateLinksKey() {
  return ['account', '/account/collections/:collection_id/private_links', 'POST'] as const
}

export function usePostAccountCollectionsCollectionIdPrivateLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account.collections)[':collection_id']['private_links']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.collections)[':collection_id']['private_links']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountCollectionsCollectionIdPrivateLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.collections)[':collection_id']['private_links']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account.collections[':collection_id'].private_links.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAccountCollectionsCollectionIdPrivateLinksLinkIdKey() {
  return ['account', '/account/collections/:collection_id/private_links/:link_id', 'PUT'] as const
}

export function usePutAccountCollectionsCollectionIdPrivateLinksLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.collections)[':collection_id']['private_links'][':link_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.collections)[':collection_id']['private_links'][':link_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountCollectionsCollectionIdPrivateLinksLinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.collections)[':collection_id']['private_links'][':link_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.account.collections[':collection_id'].private_links[':link_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountCollectionsCollectionIdPrivateLinksLinkIdKey() {
  return [
    'account',
    '/account/collections/:collection_id/private_links/:link_id',
    'DELETE',
  ] as const
}

export function useDeleteAccountCollectionsCollectionIdPrivateLinksLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.collections)[':collection_id']['private_links'][':link_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.collections)[':collection_id']['private_links'][':link_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountCollectionsCollectionIdPrivateLinksLinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.collections)[':collection_id']['private_links'][':link_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account.collections[':collection_id'].private_links[':link_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountCollectionsCollectionIdPublishKey() {
  return ['account', '/account/collections/:collection_id/publish', 'POST'] as const
}

export function usePostAccountCollectionsCollectionIdPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.collections)[':collection_id']['publish']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.collections)[':collection_id']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountCollectionsCollectionIdPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.collections)[':collection_id']['publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account.collections[':collection_id'].publish.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountCollectionsCollectionIdReserveDoiKey() {
  return ['account', '/account/collections/:collection_id/reserve_doi', 'POST'] as const
}

export function usePostAccountCollectionsCollectionIdReserveDoi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account.collections)[':collection_id']['reserve_doi']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.collections)[':collection_id']['reserve_doi']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountCollectionsCollectionIdReserveDoiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.collections)[':collection_id']['reserve_doi']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account.collections[':collection_id'].reserve_doi.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountCollectionsCollectionIdReserveHandleKey() {
  return ['account', '/account/collections/:collection_id/reserve_handle', 'POST'] as const
}

export function usePostAccountCollectionsCollectionIdReserveHandle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account.collections)[':collection_id']['reserve_handle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.collections)[':collection_id']['reserve_handle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountCollectionsCollectionIdReserveHandleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.collections)[':collection_id']['reserve_handle']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account.collections[':collection_id'].reserve_handle.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountCollectionsCollectionIdResourceKey() {
  return ['account', '/account/collections/:collection_id/resource', 'POST'] as const
}

export function usePostAccountCollectionsCollectionIdResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.collections)[':collection_id']['resource']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.collections)[':collection_id']['resource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountCollectionsCollectionIdResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.collections)[':collection_id']['resource']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account.collections[':collection_id'].resource.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountFundingSearchKey() {
  return ['account', '/account/funding/search', 'POST'] as const
}

export function usePostAccountFundingSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.funding.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.funding.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountFundingSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.funding.search.$post> },
      ) => parseResponse(client.account.funding.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountInstitutionKey() {
  return ['account', '/account/institution'] as const
}

export function useGetAccountInstitution<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountInstitutionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.institution.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountInstitution<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountInstitutionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.institution.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountInstitutionAccountsKey(
  args: InferRequestType<typeof client.account.institution.accounts.$get>,
) {
  return ['account', '/account/institution/accounts', args] as const
}

export function useGetAccountInstitutionAccounts<TError = unknown>(
  args: InferRequestType<typeof client.account.institution.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.accounts.$get>>>
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
        ? getGetAccountInstitutionAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.institution.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountInstitutionAccounts<TError = unknown>(
  args: InferRequestType<typeof client.account.institution.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.accounts.$get>>>
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
        ? getGetAccountInstitutionAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.institution.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountInstitutionAccountsKey() {
  return ['account', '/account/institution/accounts', 'POST'] as const
}

export function usePostAccountInstitutionAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.accounts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.institution.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountInstitutionAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.institution.accounts.$post> },
      ) => parseResponse(client.account.institution.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountInstitutionAccountsSearchKey() {
  return ['account', '/account/institution/accounts/search', 'POST'] as const
}

export function usePostAccountInstitutionAccountsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.account.institution.accounts.search.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.institution.accounts.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountInstitutionAccountsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.institution.accounts.search.$post> },
      ) => parseResponse(client.account.institution.accounts.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountInstitutionAccountsAccountIdKey() {
  return ['account', '/account/institution/accounts/:account_id', 'PUT'] as const
}

export function usePutAccountInstitutionAccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.institution.accounts)[':account_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.institution.accounts)[':account_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountInstitutionAccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.institution.accounts)[':account_id']['$put']>
        },
      ) =>
        parseResponse(client.account.institution.accounts[':account_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountInstitutionArticlesKey(
  args: InferRequestType<typeof client.account.institution.articles.$get>,
) {
  return ['account', '/account/institution/articles', args] as const
}

export function useGetAccountInstitutionArticles<TError = unknown>(
  args: InferRequestType<typeof client.account.institution.articles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.articles.$get>>>
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
        ? getGetAccountInstitutionArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.articles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.institution.articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountInstitutionArticles<TError = unknown>(
  args: InferRequestType<typeof client.account.institution.articles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.articles.$get>>>
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
        ? getGetAccountInstitutionArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.articles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.institution.articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountInstitutionCustomFieldsKey(
  args: InferRequestType<typeof client.account.institution.custom_fields.$get>,
) {
  return ['account', '/account/institution/custom_fields', args] as const
}

export function useGetAccountInstitutionCustomFields<TError = unknown>(
  args: InferRequestType<typeof client.account.institution.custom_fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.account.institution.custom_fields.$get>>
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
        ? getGetAccountInstitutionCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.account.institution.custom_fields.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.institution.custom_fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountInstitutionCustomFields<TError = unknown>(
  args: InferRequestType<typeof client.account.institution.custom_fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.account.institution.custom_fields.$get>>
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
        ? getGetAccountInstitutionCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.account.institution.custom_fields.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.institution.custom_fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountInstitutionCustomFieldsCustomFieldIdItemsUploadKey() {
  return [
    'account',
    '/account/institution/custom_fields/:custom_field_id/items/upload',
    'POST',
  ] as const
}

export function usePostAccountInstitutionCustomFieldsCustomFieldIdItemsUpload<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account.institution.custom_fields)[':custom_field_id']['items']['upload']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.institution.custom_fields)[':custom_field_id']['items']['upload']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountInstitutionCustomFieldsCustomFieldIdItemsUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.institution.custom_fields)[':custom_field_id']['items']['upload']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account.institution.custom_fields[':custom_field_id'].items.upload.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountInstitutionEmbargoOptionsKey() {
  return ['account', '/account/institution/embargo_options'] as const
}

export function useGetAccountInstitutionEmbargoOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.account.institution.embargo_options.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountInstitutionEmbargoOptionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.account.institution.embargo_options.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.institution.embargo_options.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountInstitutionEmbargoOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.account.institution.embargo_options.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountInstitutionEmbargoOptionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.account.institution.embargo_options.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.institution.embargo_options.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountInstitutionGroupsKey() {
  return ['account', '/account/institution/groups'] as const
}

export function useGetAccountInstitutionGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.groups.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountInstitutionGroupsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.institution.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountInstitutionGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.groups.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountInstitutionGroupsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.institution.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountInstitutionGroupsGroupIdEmbargoOptionsKey(
  args: InferRequestType<
    (typeof client.account.institution.groups)[':group_id']['embargo_options']['$get']
  >,
) {
  return ['account', '/account/institution/groups/:group_id/embargo_options', args] as const
}

export function useGetAccountInstitutionGroupsGroupIdEmbargoOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.institution.groups)[':group_id']['embargo_options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.institution.groups)[':group_id']['embargo_options']['$get']
              >
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
        ? getGetAccountInstitutionGroupsGroupIdEmbargoOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.institution.groups)[':group_id']['embargo_options']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.institution.groups[':group_id'].embargo_options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountInstitutionGroupsGroupIdEmbargoOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.institution.groups)[':group_id']['embargo_options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.institution.groups)[':group_id']['embargo_options']['$get']
              >
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
        ? getGetAccountInstitutionGroupsGroupIdEmbargoOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.institution.groups)[':group_id']['embargo_options']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.institution.groups[':group_id'].embargo_options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountInstitutionReviewCurationIdKey(
  args: InferRequestType<(typeof client.account.institution.review)[':curation_id']['$get']>,
) {
  return ['account', '/account/institution/review/:curation_id', args] as const
}

export function useGetAccountInstitutionReviewCurationId<TError = unknown>(
  args: InferRequestType<(typeof client.account.institution.review)[':curation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.institution.review)[':curation_id']['$get']>>
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
        ? getGetAccountInstitutionReviewCurationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.institution.review)[':curation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.institution.review[':curation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountInstitutionReviewCurationId<TError = unknown>(
  args: InferRequestType<(typeof client.account.institution.review)[':curation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.institution.review)[':curation_id']['$get']>>
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
        ? getGetAccountInstitutionReviewCurationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.institution.review)[':curation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.institution.review[':curation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountInstitutionReviewCurationIdCommentsKey(
  args: InferRequestType<
    (typeof client.account.institution.review)[':curation_id']['comments']['$get']
  >,
) {
  return ['account', '/account/institution/review/:curation_id/comments', args] as const
}

export function useGetAccountInstitutionReviewCurationIdComments<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.institution.review)[':curation_id']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.institution.review)[':curation_id']['comments']['$get']
              >
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
        ? getGetAccountInstitutionReviewCurationIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.institution.review)[':curation_id']['comments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.institution.review[':curation_id'].comments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountInstitutionReviewCurationIdComments<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.institution.review)[':curation_id']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.institution.review)[':curation_id']['comments']['$get']
              >
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
        ? getGetAccountInstitutionReviewCurationIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.institution.review)[':curation_id']['comments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.institution.review[':curation_id'].comments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountInstitutionReviewCurationIdCommentsKey() {
  return ['account', '/account/institution/review/:curation_id/comments', 'POST'] as const
}

export function usePostAccountInstitutionReviewCurationIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account.institution.review)[':curation_id']['comments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.institution.review)[':curation_id']['comments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountInstitutionReviewCurationIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.institution.review)[':curation_id']['comments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account.institution.review[':curation_id'].comments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountInstitutionReviewsKey(
  args: InferRequestType<typeof client.account.institution.reviews.$get>,
) {
  return ['account', '/account/institution/reviews', args] as const
}

export function useGetAccountInstitutionReviews<TError = unknown>(
  args: InferRequestType<typeof client.account.institution.reviews.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.reviews.$get>>>
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
        ? getGetAccountInstitutionReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.reviews.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.institution.reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountInstitutionReviews<TError = unknown>(
  args: InferRequestType<typeof client.account.institution.reviews.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.reviews.$get>>>
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
        ? getGetAccountInstitutionReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.reviews.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.institution.reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountInstitutionRolesKey() {
  return ['account', '/account/institution/roles'] as const
}

export function useGetAccountInstitutionRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.roles.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountInstitutionRolesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.roles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.institution.roles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountInstitutionRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.roles.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountInstitutionRolesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.roles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.institution.roles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountInstitutionRolesAccountIdKey(
  args: InferRequestType<(typeof client.account.institution.roles)[':account_id']['$get']>,
) {
  return ['account', '/account/institution/roles/:account_id', args] as const
}

export function useGetAccountInstitutionRolesAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.account.institution.roles)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.institution.roles)[':account_id']['$get']>>
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
        ? getGetAccountInstitutionRolesAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.institution.roles)[':account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.institution.roles[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountInstitutionRolesAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.account.institution.roles)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.institution.roles)[':account_id']['$get']>>
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
        ? getGetAccountInstitutionRolesAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.institution.roles)[':account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.institution.roles[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountInstitutionRolesAccountIdKey() {
  return ['account', '/account/institution/roles/:account_id', 'POST'] as const
}

export function usePostAccountInstitutionRolesAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.institution.roles)[':account_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.institution.roles)[':account_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountInstitutionRolesAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.institution.roles)[':account_id']['$post']>
        },
      ) => parseResponse(client.account.institution.roles[':account_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountInstitutionRolesAccountIdGroupIdRoleIdKey() {
  return ['account', '/account/institution/roles/:account_id/:group_id/:role_id', 'DELETE'] as const
}

export function useDeleteAccountInstitutionRolesAccountIdGroupIdRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.institution.roles)[':account_id'][':group_id'][':role_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.institution.roles)[':account_id'][':group_id'][':role_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountInstitutionRolesAccountIdGroupIdRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.institution.roles)[':account_id'][':group_id'][':role_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account.institution.roles[':account_id'][':group_id'][':role_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountInstitutionUsersAccountIdKey(
  args: InferRequestType<(typeof client.account.institution.users)[':account_id']['$get']>,
) {
  return ['account', '/account/institution/users/:account_id', args] as const
}

export function useGetAccountInstitutionUsersAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.account.institution.users)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.institution.users)[':account_id']['$get']>>
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
        ? getGetAccountInstitutionUsersAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.institution.users)[':account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.institution.users[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountInstitutionUsersAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.account.institution.users)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.institution.users)[':account_id']['$get']>>
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
        ? getGetAccountInstitutionUsersAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.institution.users)[':account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.institution.users[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountLicensesKey() {
  return ['account', '/account/licenses'] as const
}

export function useGetAccountLicenses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.licenses.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountLicensesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.licenses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.licenses.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountLicenses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.licenses.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountLicensesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.licenses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.licenses.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountProjectsKey(
  args: InferRequestType<typeof client.account.projects.$get>,
) {
  return ['account', '/account/projects', args] as const
}

export function useGetAccountProjects<TError = unknown>(
  args: InferRequestType<typeof client.account.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.$get>>>>
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
        ? getGetAccountProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProjects<TError = unknown>(
  args: InferRequestType<typeof client.account.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.$get>>>>
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
        ? getGetAccountProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountProjectsKey() {
  return ['account', '/account/projects', 'POST'] as const
}

export function usePostAccountProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.projects.$post> }) =>
        parseResponse(client.account.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountProjectsSearchKey() {
  return ['account', '/account/projects/search', 'POST'] as const
}

export function usePostAccountProjectsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.projects.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountProjectsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.projects.search.$post> },
      ) => parseResponse(client.account.projects.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountProjectsProjectIdKey(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['$get']>,
) {
  return ['account', '/account/projects/:project_id', args] as const
}

export function useGetAccountProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$get']>>
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
        ? getGetAccountProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.projects[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$get']>>
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
        ? getGetAccountProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.projects[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountProjectsProjectIdKey() {
  return ['account', '/account/projects/:project_id', 'PUT'] as const
}

export function usePutAccountProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.projects)[':project_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.projects)[':project_id']['$put']> },
      ) => parseResponse(client.account.projects[':project_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountProjectsProjectIdKey() {
  return ['account', '/account/projects/:project_id', 'DELETE'] as const
}

export function useDeleteAccountProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.projects)[':project_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.projects)[':project_id']['$delete']> },
      ) => parseResponse(client.account.projects[':project_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountProjectsProjectIdArticlesKey(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['articles']['$get']>,
) {
  return ['account', '/account/projects/:project_id/articles', args] as const
}

export function useGetAccountProjectsProjectIdArticles<TError = unknown>(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['articles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['articles']['$get']>>
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
        ? getGetAccountProjectsProjectIdArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['articles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.projects[':project_id'].articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProjectsProjectIdArticles<TError = unknown>(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['articles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['articles']['$get']>>
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
        ? getGetAccountProjectsProjectIdArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['articles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.projects[':project_id'].articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountProjectsProjectIdArticlesKey() {
  return ['account', '/account/projects/:project_id/articles', 'POST'] as const
}

export function usePostAccountProjectsProjectIdArticles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.projects)[':project_id']['articles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.projects)[':project_id']['articles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountProjectsProjectIdArticlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.projects)[':project_id']['articles']['$post']
          >
        },
      ) => parseResponse(client.account.projects[':project_id'].articles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountProjectsProjectIdArticlesArticleIdKey(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['$get']
  >,
) {
  return ['account', '/account/projects/:project_id/articles/:article_id', args] as const
}

export function useGetAccountProjectsProjectIdArticlesArticleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['articles'][':article_id']['$get']
              >
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
        ? getGetAccountProjectsProjectIdArticlesArticleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['articles'][':article_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.projects[':project_id'].articles[':article_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProjectsProjectIdArticlesArticleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['articles'][':article_id']['$get']
              >
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
        ? getGetAccountProjectsProjectIdArticlesArticleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['articles'][':article_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.projects[':project_id'].articles[':article_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountProjectsProjectIdArticlesArticleIdKey() {
  return ['account', '/account/projects/:project_id/articles/:article_id', 'DELETE'] as const
}

export function useDeleteAccountProjectsProjectIdArticlesArticleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['articles'][':article_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.projects)[':project_id']['articles'][':article_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountProjectsProjectIdArticlesArticleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.projects)[':project_id']['articles'][':article_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account.projects[':project_id'].articles[':article_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountProjectsProjectIdArticlesArticleIdFilesKey(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files']['$get']
  >,
) {
  return ['account', '/account/projects/:project_id/articles/:article_id/files', args] as const
}

export function useGetAccountProjectsProjectIdArticlesArticleIdFiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['articles'][':article_id']['files']['$get']
              >
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
        ? getGetAccountProjectsProjectIdArticlesArticleIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['articles'][':article_id']['files']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.projects[':project_id'].articles[':article_id'].files.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProjectsProjectIdArticlesArticleIdFiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['articles'][':article_id']['files']['$get']
              >
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
        ? getGetAccountProjectsProjectIdArticlesArticleIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['articles'][':article_id']['files']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.projects[':project_id'].articles[':article_id'].files.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountProjectsProjectIdArticlesArticleIdFilesFileIdKey(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files'][':file_id']['$get']
  >,
) {
  return [
    'account',
    '/account/projects/:project_id/articles/:article_id/files/:file_id',
    args,
  ] as const
}

export function useGetAccountProjectsProjectIdArticlesArticleIdFilesFileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files'][':file_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['articles'][':article_id']['files'][':file_id']['$get']
              >
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
        ? getGetAccountProjectsProjectIdArticlesArticleIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['articles'][':article_id']['files'][':file_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.projects[':project_id'].articles[':article_id'].files[':file_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProjectsProjectIdArticlesArticleIdFilesFileId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files'][':file_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['articles'][':article_id']['files'][':file_id']['$get']
              >
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
        ? getGetAccountProjectsProjectIdArticlesArticleIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['articles'][':article_id']['files'][':file_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.projects[':project_id'].articles[':article_id'].files[':file_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountProjectsProjectIdCollaboratorsKey(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>,
) {
  return ['account', '/account/projects/:project_id/collaborators', args] as const
}

export function useGetAccountProjectsProjectIdCollaborators<TError = unknown>(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>
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
        ? getGetAccountProjectsProjectIdCollaboratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.projects[':project_id'].collaborators.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProjectsProjectIdCollaborators<TError = unknown>(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>
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
        ? getGetAccountProjectsProjectIdCollaboratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.projects[':project_id'].collaborators.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountProjectsProjectIdCollaboratorsKey() {
  return ['account', '/account/projects/:project_id/collaborators', 'POST'] as const
}

export function usePostAccountProjectsProjectIdCollaborators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.projects)[':project_id']['collaborators']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.projects)[':project_id']['collaborators']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountProjectsProjectIdCollaboratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.projects)[':project_id']['collaborators']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account.projects[':project_id'].collaborators.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountProjectsProjectIdCollaboratorsUserIdKey() {
  return ['account', '/account/projects/:project_id/collaborators/:user_id', 'DELETE'] as const
}

export function useDeleteAccountProjectsProjectIdCollaboratorsUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['collaborators'][':user_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.projects)[':project_id']['collaborators'][':user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountProjectsProjectIdCollaboratorsUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.projects)[':project_id']['collaborators'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account.projects[':project_id'].collaborators[':user_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountProjectsProjectIdLeaveKey() {
  return ['account', '/account/projects/:project_id/leave', 'POST'] as const
}

export function usePostAccountProjectsProjectIdLeave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['leave']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.projects)[':project_id']['leave']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountProjectsProjectIdLeaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.projects)[':project_id']['leave']['$post']>
        },
      ) => parseResponse(client.account.projects[':project_id'].leave.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountProjectsProjectIdNotesKey(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$get']>,
) {
  return ['account', '/account/projects/:project_id/notes', args] as const
}

export function useGetAccountProjectsProjectIdNotes<TError = unknown>(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['notes']['$get']>>
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
        ? getGetAccountProjectsProjectIdNotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['notes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.projects[':project_id'].notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProjectsProjectIdNotes<TError = unknown>(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['notes']['$get']>>
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
        ? getGetAccountProjectsProjectIdNotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['notes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.projects[':project_id'].notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountProjectsProjectIdNotesKey() {
  return ['account', '/account/projects/:project_id/notes', 'POST'] as const
}

export function usePostAccountProjectsProjectIdNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.projects)[':project_id']['notes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountProjectsProjectIdNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$post']>
        },
      ) => parseResponse(client.account.projects[':project_id'].notes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountProjectsProjectIdNotesNoteIdKey(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']
  >,
) {
  return ['account', '/account/projects/:project_id/notes/:note_id', args] as const
}

export function useGetAccountProjectsProjectIdNotesNoteId<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']
              >
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
        ? getGetAccountProjectsProjectIdNotesNoteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.projects[':project_id'].notes[':note_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProjectsProjectIdNotesNoteId<TError = unknown>(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']
              >
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
        ? getGetAccountProjectsProjectIdNotesNoteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.projects[':project_id'].notes[':note_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountProjectsProjectIdNotesNoteIdKey() {
  return ['account', '/account/projects/:project_id/notes/:note_id', 'PUT'] as const
}

export function usePutAccountProjectsProjectIdNotesNoteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['notes'][':note_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.projects)[':project_id']['notes'][':note_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountProjectsProjectIdNotesNoteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.projects)[':project_id']['notes'][':note_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.account.projects[':project_id'].notes[':note_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountProjectsProjectIdNotesNoteIdKey() {
  return ['account', '/account/projects/:project_id/notes/:note_id', 'DELETE'] as const
}

export function useDeleteAccountProjectsProjectIdNotesNoteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account.projects)[':project_id']['notes'][':note_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.account.projects)[':project_id']['notes'][':note_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountProjectsProjectIdNotesNoteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account.projects)[':project_id']['notes'][':note_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account.projects[':project_id'].notes[':note_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountProjectsProjectIdPublishKey() {
  return ['account', '/account/projects/:project_id/publish', 'POST'] as const
}

export function usePostAccountProjectsProjectIdPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.projects)[':project_id']['publish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.projects)[':project_id']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountProjectsProjectIdPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.projects)[':project_id']['publish']['$post']>
        },
      ) => parseResponse(client.account.projects[':project_id'].publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetArticlesKey(args: InferRequestType<typeof client.articles.$get>) {
  const { header: _, ...keyArgs } = args
  return ['articles', '/articles', keyArgs] as const
}

export function useGetArticles<TError = unknown>(
  args: InferRequestType<typeof client.articles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArticlesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.articles.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetArticles<TError = unknown>(
  args: InferRequestType<typeof client.articles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArticlesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.articles.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostArticlesSearchKey() {
  return ['articles', '/articles/search', 'POST'] as const
}

export function usePostArticlesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.articles.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostArticlesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.articles.search.$post> }) =>
        parseResponse(client.articles.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetArticlesArticleIdKey(
  args: InferRequestType<(typeof client.articles)[':article_id']['$get']>,
) {
  return ['articles', '/articles/:article_id', args] as const
}

export function useGetArticlesArticleId<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':article_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
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
        ? getGetArticlesArticleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.articles[':article_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArticlesArticleId<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':article_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
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
        ? getGetArticlesArticleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.articles[':article_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArticlesArticleIdFilesKey(
  args: InferRequestType<(typeof client.articles)[':article_id']['files']['$get']>,
) {
  return ['articles', '/articles/:article_id/files', args] as const
}

export function useGetArticlesArticleIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':article_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':article_id']['files']['$get']>>
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
        ? getGetArticlesArticleIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':article_id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.articles[':article_id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArticlesArticleIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':article_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':article_id']['files']['$get']>>
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
        ? getGetArticlesArticleIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':article_id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.articles[':article_id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArticlesArticleIdFilesFileIdKey(
  args: InferRequestType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>,
) {
  return ['articles', '/articles/:article_id/files/:file_id', args] as const
}

export function useGetArticlesArticleIdFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>
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
        ? getGetArticlesArticleIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.articles[':article_id'].files[':file_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArticlesArticleIdFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>
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
        ? getGetArticlesArticleIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.articles[':article_id'].files[':file_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArticlesArticleIdVersionsKey(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>,
) {
  return ['articles', '/articles/:article_id/versions', args] as const
}

export function useGetArticlesArticleIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
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
        ? getGetArticlesArticleIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.articles[':article_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArticlesArticleIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
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
        ? getGetArticlesArticleIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.articles[':article_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArticlesArticleIdVersionsVNumberKey(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>,
) {
  return ['articles', '/articles/:article_id/versions/:v_number', args] as const
}

export function useGetArticlesArticleIdVersionsVNumber<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>
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
        ? getGetArticlesArticleIdVersionsVNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.articles[':article_id'].versions[':v_number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArticlesArticleIdVersionsVNumber<TError = unknown>(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>
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
        ? getGetArticlesArticleIdVersionsVNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.articles[':article_id'].versions[':v_number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetArticlesArticleIdVersionsVNumberConfidentialityKey(
  args: InferRequestType<
    (typeof client.articles)[':article_id']['versions'][':v_number']['confidentiality']['$get']
  >,
) {
  return ['articles', '/articles/:article_id/versions/:v_number/confidentiality', args] as const
}

export function useGetArticlesArticleIdVersionsVNumberConfidentiality<TError = unknown>(
  args: InferRequestType<
    (typeof client.articles)[':article_id']['versions'][':v_number']['confidentiality']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.articles)[':article_id']['versions'][':v_number']['confidentiality']['$get']
              >
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
        ? getGetArticlesArticleIdVersionsVNumberConfidentialityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.articles)[':article_id']['versions'][':v_number']['confidentiality']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.articles[':article_id'].versions[':v_number'].confidentiality.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArticlesArticleIdVersionsVNumberConfidentiality<TError = unknown>(
  args: InferRequestType<
    (typeof client.articles)[':article_id']['versions'][':v_number']['confidentiality']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.articles)[':article_id']['versions'][':v_number']['confidentiality']['$get']
              >
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
        ? getGetArticlesArticleIdVersionsVNumberConfidentialityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.articles)[':article_id']['versions'][':v_number']['confidentiality']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.articles[':article_id'].versions[':v_number'].confidentiality.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetArticlesArticleIdVersionsVNumberEmbargoKey(
  args: InferRequestType<
    (typeof client.articles)[':article_id']['versions'][':v_number']['embargo']['$get']
  >,
) {
  return ['articles', '/articles/:article_id/versions/:v_number/embargo', args] as const
}

export function useGetArticlesArticleIdVersionsVNumberEmbargo<TError = unknown>(
  args: InferRequestType<
    (typeof client.articles)[':article_id']['versions'][':v_number']['embargo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.articles)[':article_id']['versions'][':v_number']['embargo']['$get']
              >
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
        ? getGetArticlesArticleIdVersionsVNumberEmbargoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.articles)[':article_id']['versions'][':v_number']['embargo']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.articles[':article_id'].versions[':v_number'].embargo.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArticlesArticleIdVersionsVNumberEmbargo<TError = unknown>(
  args: InferRequestType<
    (typeof client.articles)[':article_id']['versions'][':v_number']['embargo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.articles)[':article_id']['versions'][':v_number']['embargo']['$get']
              >
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
        ? getGetArticlesArticleIdVersionsVNumberEmbargoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.articles)[':article_id']['versions'][':v_number']['embargo']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.articles[':article_id'].versions[':v_number'].embargo.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesKey() {
  return ['categories', '/categories'] as const
}

export function useGetCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionsKey(args: InferRequestType<typeof client.collections.$get>) {
  const { header: _, ...keyArgs } = args
  return ['collections', '/collections', keyArgs] as const
}

export function useGetCollections<TError = unknown>(
  args: InferRequestType<typeof client.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollections<TError = unknown>(
  args: InferRequestType<typeof client.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsSearchKey() {
  return ['collections', '/collections/search', 'POST'] as const
}

export function usePostCollectionsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.collections.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.collections.search.$post> }) =>
        parseResponse(client.collections.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionIdKey(
  args: InferRequestType<(typeof client.collections)[':collection_id']['$get']>,
) {
  return ['collections', '/collections/:collection_id', args] as const
}

export function useGetCollectionsCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
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
        ? getGetCollectionsCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections[':collection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
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
        ? getGetCollectionsCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections[':collection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionsCollectionIdArticlesKey(
  args: InferRequestType<(typeof client.collections)[':collection_id']['articles']['$get']>,
) {
  return ['collections', '/collections/:collection_id/articles', args] as const
}

export function useGetCollectionsCollectionIdArticles<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['articles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['articles']['$get']>>
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
        ? getGetCollectionsCollectionIdArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['articles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_id'].articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionIdArticles<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['articles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['articles']['$get']>>
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
        ? getGetCollectionsCollectionIdArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['articles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_id'].articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionsCollectionIdVersionsKey(
  args: InferRequestType<(typeof client.collections)[':collection_id']['versions']['$get']>,
) {
  return ['collections', '/collections/:collection_id/versions', args] as const
}

export function useGetCollectionsCollectionIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['versions']['$get']>>
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
        ? getGetCollectionsCollectionIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['versions']['$get']>>
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
        ? getGetCollectionsCollectionIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionsCollectionIdVersionsVersionIdKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['versions'][':version_id']['$get']
  >,
) {
  return ['collections', '/collections/:collection_id/versions/:version_id', args] as const
}

export function useGetCollectionsCollectionIdVersionsVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['versions'][':version_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['versions'][':version_id']['$get']
              >
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
        ? getGetCollectionsCollectionIdVersionsVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['versions'][':version_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.collections[':collection_id'].versions[':version_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionIdVersionsVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['versions'][':version_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['versions'][':version_id']['$get']
              >
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
        ? getGetCollectionsCollectionIdVersionsVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['versions'][':version_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.collections[':collection_id'].versions[':version_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFileDownloadFileIdKey(
  args: InferRequestType<(typeof client.file.download)[':file_id']['$get']>,
) {
  return ['file', '/file/download/:file_id', args] as const
}

export function useGetFileDownloadFileId<TError = unknown>(
  args: InferRequestType<(typeof client.file.download)[':file_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file.download)[':file_id']['$get']>>
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
        ? getGetFileDownloadFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file.download)[':file_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file.download[':file_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileDownloadFileId<TError = unknown>(
  args: InferRequestType<(typeof client.file.download)[':file_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file.download)[':file_id']['$get']>>
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
        ? getGetFileDownloadFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file.download)[':file_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file.download[':file_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInstitutionHrfeedUploadKey() {
  return ['institution', '/institution/hrfeed/upload', 'POST'] as const
}

export function usePostInstitutionHrfeedUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.institution.hrfeed.upload.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.institution.hrfeed.upload.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstitutionHrfeedUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.institution.hrfeed.upload.$post> },
      ) => parseResponse(client.institution.hrfeed.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstitutionsInstitutionStringIdArticlesFilterByKey(
  args: InferRequestType<
    (typeof client.institutions)[':institution_string_id']['articles']['filter-by']['$get']
  >,
) {
  return ['institutions', '/institutions/:institution_string_id/articles/filter-by', args] as const
}

export function useGetInstitutionsInstitutionStringIdArticlesFilterBy<TError = unknown>(
  args: InferRequestType<
    (typeof client.institutions)[':institution_string_id']['articles']['filter-by']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.institutions)[':institution_string_id']['articles']['filter-by']['$get']
              >
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
        ? getGetInstitutionsInstitutionStringIdArticlesFilterByKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.institutions)[':institution_string_id']['articles']['filter-by']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.institutions[':institution_string_id'].articles['filter-by'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstitutionsInstitutionStringIdArticlesFilterBy<TError = unknown>(
  args: InferRequestType<
    (typeof client.institutions)[':institution_string_id']['articles']['filter-by']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.institutions)[':institution_string_id']['articles']['filter-by']['$get']
              >
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
        ? getGetInstitutionsInstitutionStringIdArticlesFilterByKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.institutions)[':institution_string_id']['articles']['filter-by']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.institutions[':institution_string_id'].articles['filter-by'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetItemTypesKey(args: InferRequestType<typeof client.item_types.$get>) {
  return ['item_types', '/item_types', args] as const
}

export function useGetItemTypes<TError = unknown>(
  args: InferRequestType<typeof client.item_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_types.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_types.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemTypes<TError = unknown>(
  args: InferRequestType<typeof client.item_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_types.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_types.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLicensesKey() {
  return ['licenses', '/licenses'] as const
}

export function useGetLicenses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicensesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.licenses.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLicenses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicensesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.licenses.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsKey(args: InferRequestType<typeof client.projects.$get>) {
  const { header: _, ...keyArgs } = args
  return ['projects', '/projects', keyArgs] as const
}

export function useGetProjects<TError = unknown>(
  args: InferRequestType<typeof client.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.projects.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetProjects<TError = unknown>(
  args: InferRequestType<typeof client.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.projects.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostProjectsSearchKey() {
  return ['projects', '/projects/search', 'POST'] as const
}

export function usePostProjectsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.projects.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.projects.search.$post> }) =>
        parseResponse(client.projects.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['$get']>,
) {
  return ['projects', '/projects/:project_id', args] as const
}

export function useGetProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
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
        ? getGetProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
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
        ? getGetProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdArticlesKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['articles']['$get']>,
) {
  return ['projects', '/projects/:project_id/articles', args] as const
}

export function useGetProjectsProjectIdArticles<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_id']['articles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_id']['articles']['$get']>>
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
        ? getGetProjectsProjectIdArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_id']['articles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':project_id'].articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdArticles<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_id']['articles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_id']['articles']['$get']>>
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
        ? getGetProjectsProjectIdArticlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_id']['articles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':project_id'].articles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
