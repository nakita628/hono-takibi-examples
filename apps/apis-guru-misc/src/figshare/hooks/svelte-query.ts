import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function getAccountQueryKey() {
  return ['account', '/account'] as const
}

export function getAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >({
    queryKey: getAccountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAccountArticlesQueryKey(
  args: InferRequestType<typeof client.account.articles.$get>,
) {
  return ['account', '/account/articles', args] as const
}

export function getAccountArticlesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.articles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesQueryKey>
  >({
    queryKey: getAccountArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.articles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.articles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountArticlesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountArticlesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAccountArticlesMutationKey() {
  return ['account', '/account/articles', 'POST'] as const
}

export function getPostAccountArticlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.articles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountArticlesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.articles.$post>) {
      return parseResponse(client.account.articles.$post(args, options))
    },
  })
}

export function createPostAccountArticles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account.articles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountArticlesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountArticlesExportQueryKey(
  args: InferRequestType<typeof client.account.articles.export.$get>,
) {
  return ['account', '/account/articles/export', args] as const
}

export function getAccountArticlesExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.export.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.articles.export.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.export.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesExportQueryKey>
  >({
    queryKey: getAccountArticlesExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.articles.export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountArticlesExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.export.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.articles.export.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.export.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountArticlesExportQueryKey>
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
      ...getAccountArticlesExportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountArticlesExportMutationKey() {
  return ['account', '/account/articles/export', 'POST'] as const
}

export function getPostAccountArticlesExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.export.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAccountArticlesExportMutationKey(),
    async mutationFn() {
      return parseResponse(client.account.articles.export.$post(undefined, options))
    },
  })
}

export function createPostAccountArticlesExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.export.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountArticlesExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountArticlesSearchMutationKey() {
  return ['account', '/account/articles/search', 'POST'] as const
}

export function getPostAccountArticlesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.articles.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountArticlesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.articles.search.$post>) {
      return parseResponse(client.account.articles.search.$post(args, options))
    },
  })
}

export function createPostAccountArticlesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account.articles.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountArticlesSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountArticlesArticleIdQueryKey(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['$get']>,
) {
  return ['account', '/account/articles/:article_id', args] as const
}

export function getAccountArticlesArticleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesArticleIdQueryKey>
  >({
    queryKey: getAccountArticlesArticleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.articles[':article_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountArticlesArticleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.articles)[':article_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountArticlesArticleIdQueryKey>
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
      ...getAccountArticlesArticleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAccountArticlesArticleIdMutationKey() {
  return ['account', '/account/articles/:article_id', 'PUT'] as const
}

export function getPutAccountArticlesArticleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.articles)[':article_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountArticlesArticleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.articles)[':article_id']['$put']>,
    ) {
      return parseResponse(client.account.articles[':article_id'].$put(args, options))
    },
  })
}

export function createPutAccountArticlesArticleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.account.articles)[':article_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountArticlesArticleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountArticlesArticleIdMutationKey() {
  return ['account', '/account/articles/:article_id', 'DELETE'] as const
}

export function getDeleteAccountArticlesArticleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.articles)[':article_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountArticlesArticleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.articles)[':article_id']['$delete']>,
    ) {
      return parseResponse(client.account.articles[':article_id'].$delete(args, options))
    },
  })
}

export function createDeleteAccountArticlesArticleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.account.articles)[':article_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountArticlesArticleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountArticlesArticleIdAuthorsQueryKey(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$get']>,
) {
  return ['account', '/account/articles/:article_id/authors', args] as const
}

export function getAccountArticlesArticleIdAuthorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.articles)[':article_id']['authors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.articles)[':article_id']['authors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesArticleIdAuthorsQueryKey>
  >({
    queryKey: getAccountArticlesArticleIdAuthorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.articles[':article_id'].authors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountArticlesArticleIdAuthors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.articles)[':article_id']['authors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.account.articles)[':article_id']['authors']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountArticlesArticleIdAuthorsQueryKey>
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
      ...getAccountArticlesArticleIdAuthorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAccountArticlesArticleIdAuthorsMutationKey() {
  return ['account', '/account/articles/:article_id/authors', 'PUT'] as const
}

export function getPutAccountArticlesArticleIdAuthorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['authors']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountArticlesArticleIdAuthorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$put']>,
    ) {
      return parseResponse(client.account.articles[':article_id'].authors.$put(args, options))
    },
  })
}

export function createPutAccountArticlesArticleIdAuthors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.articles)[':article_id']['authors']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountArticlesArticleIdAuthorsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountArticlesArticleIdAuthorsMutationKey() {
  return ['account', '/account/articles/:article_id/authors', 'POST'] as const
}

export function getPostAccountArticlesArticleIdAuthorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['authors']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountArticlesArticleIdAuthorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$post']>,
    ) {
      return parseResponse(client.account.articles[':article_id'].authors.$post(args, options))
    },
  })
}

export function createPostAccountArticlesArticleIdAuthors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.articles)[':article_id']['authors']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountArticlesArticleIdAuthorsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountArticlesArticleIdAuthorsAuthorIdMutationKey() {
  return ['account', '/account/articles/:article_id/authors/:author_id', 'DELETE'] as const
}

export function getDeleteAccountArticlesArticleIdAuthorsAuthorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.articles)[':article_id']['authors'][':author_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountArticlesArticleIdAuthorsAuthorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.articles)[':article_id']['authors'][':author_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.account.articles[':article_id'].authors[':author_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountArticlesArticleIdAuthorsAuthorId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.articles)[':article_id']['authors'][':author_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountArticlesArticleIdAuthorsAuthorIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountArticlesArticleIdCategoriesQueryKey(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$get']>,
) {
  return ['account', '/account/articles/:article_id/categories', args] as const
}

export function getAccountArticlesArticleIdCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.articles)[':article_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.articles)[':article_id']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesArticleIdCategoriesQueryKey>
  >({
    queryKey: getAccountArticlesArticleIdCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.articles[':article_id'].categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountArticlesArticleIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.articles)[':article_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.articles)[':article_id']['categories']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.account.articles)[':article_id']['categories']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountArticlesArticleIdCategoriesQueryKey>
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
      ...getAccountArticlesArticleIdCategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAccountArticlesArticleIdCategoriesMutationKey() {
  return ['account', '/account/articles/:article_id/categories', 'PUT'] as const
}

export function getPutAccountArticlesArticleIdCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountArticlesArticleIdCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$put']>,
    ) {
      return parseResponse(client.account.articles[':article_id'].categories.$put(args, options))
    },
  })
}

export function createPutAccountArticlesArticleIdCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountArticlesArticleIdCategoriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountArticlesArticleIdCategoriesMutationKey() {
  return ['account', '/account/articles/:article_id/categories', 'POST'] as const
}

export function getPostAccountArticlesArticleIdCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountArticlesArticleIdCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.articles)[':article_id']['categories']['$post']
      >,
    ) {
      return parseResponse(client.account.articles[':article_id'].categories.$post(args, options))
    },
  })
}

export function createPostAccountArticlesArticleIdCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountArticlesArticleIdCategoriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountArticlesArticleIdCategoriesCategoryIdMutationKey() {
  return ['account', '/account/articles/:article_id/categories/:category_id', 'DELETE'] as const
}

export function getDeleteAccountArticlesArticleIdCategoriesCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.articles)[':article_id']['categories'][':category_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountArticlesArticleIdCategoriesCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.articles)[':article_id']['categories'][':category_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.account.articles[':article_id'].categories[':category_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountArticlesArticleIdCategoriesCategoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.articles)[':article_id']['categories'][':category_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountArticlesArticleIdCategoriesCategoryIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountArticlesArticleIdConfidentialityQueryKey(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['confidentiality']['$get']
  >,
) {
  return ['account', '/account/articles/:article_id/confidentiality', args] as const
}

export function getAccountArticlesArticleIdConfidentialityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.articles)[':article_id']['confidentiality']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['confidentiality']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.articles)[':article_id']['confidentiality']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesArticleIdConfidentialityQueryKey>
  >({
    queryKey: getAccountArticlesArticleIdConfidentialityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.articles[':article_id'].confidentiality.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountArticlesArticleIdConfidentiality<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.articles)[':article_id']['confidentiality']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.articles)[':article_id']['confidentiality']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.account.articles)[':article_id']['confidentiality']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountArticlesArticleIdConfidentialityQueryKey>
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
      ...getAccountArticlesArticleIdConfidentialityQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutAccountArticlesArticleIdConfidentialityMutationKey() {
  return ['account', '/account/articles/:article_id/confidentiality', 'PUT'] as const
}

export function getPutAccountArticlesArticleIdConfidentialityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.articles)[':article_id']['confidentiality']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountArticlesArticleIdConfidentialityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.articles)[':article_id']['confidentiality']['$put']
      >,
    ) {
      return parseResponse(
        client.account.articles[':article_id'].confidentiality.$put(args, options),
      )
    },
  })
}

export function createPutAccountArticlesArticleIdConfidentiality<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.account.articles)[':article_id']['confidentiality']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.account.articles)[':article_id']['confidentiality']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountArticlesArticleIdConfidentialityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountArticlesArticleIdConfidentialityMutationKey() {
  return ['account', '/account/articles/:article_id/confidentiality', 'DELETE'] as const
}

export function getDeleteAccountArticlesArticleIdConfidentialityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.articles)[':article_id']['confidentiality']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountArticlesArticleIdConfidentialityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.articles)[':article_id']['confidentiality']['$delete']
      >,
    ) {
      return parseResponse(
        client.account.articles[':article_id'].confidentiality.$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountArticlesArticleIdConfidentiality<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.articles)[':article_id']['confidentiality']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountArticlesArticleIdConfidentialityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountArticlesArticleIdEmbargoQueryKey(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$get']>,
) {
  return ['account', '/account/articles/:article_id/embargo', args] as const
}

export function getAccountArticlesArticleIdEmbargoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.articles)[':article_id']['embargo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.articles)[':article_id']['embargo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesArticleIdEmbargoQueryKey>
  >({
    queryKey: getAccountArticlesArticleIdEmbargoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.articles[':article_id'].embargo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountArticlesArticleIdEmbargo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.articles)[':article_id']['embargo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.account.articles)[':article_id']['embargo']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountArticlesArticleIdEmbargoQueryKey>
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
      ...getAccountArticlesArticleIdEmbargoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAccountArticlesArticleIdEmbargoMutationKey() {
  return ['account', '/account/articles/:article_id/embargo', 'PUT'] as const
}

export function getPutAccountArticlesArticleIdEmbargoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.articles)[':article_id']['embargo']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountArticlesArticleIdEmbargoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$put']>,
    ) {
      return parseResponse(client.account.articles[':article_id'].embargo.$put(args, options))
    },
  })
}

export function createPutAccountArticlesArticleIdEmbargo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.articles)[':article_id']['embargo']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountArticlesArticleIdEmbargoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountArticlesArticleIdEmbargoMutationKey() {
  return ['account', '/account/articles/:article_id/embargo', 'DELETE'] as const
}

export function getDeleteAccountArticlesArticleIdEmbargoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountArticlesArticleIdEmbargoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$delete']>,
    ) {
      return parseResponse(client.account.articles[':article_id'].embargo.$delete(args, options))
    },
  })
}

export function createDeleteAccountArticlesArticleIdEmbargo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountArticlesArticleIdEmbargoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountArticlesArticleIdFilesQueryKey(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['files']['$get']>,
) {
  return ['account', '/account/articles/:article_id/files', args] as const
}

export function getAccountArticlesArticleIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.articles)[':article_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.articles)[':article_id']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesArticleIdFilesQueryKey>
  >({
    queryKey: getAccountArticlesArticleIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.articles[':article_id'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountArticlesArticleIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.articles)[':article_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.articles)[':article_id']['files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.articles)[':article_id']['files']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountArticlesArticleIdFilesQueryKey>
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
      ...getAccountArticlesArticleIdFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountArticlesArticleIdFilesMutationKey() {
  return ['account', '/account/articles/:article_id/files', 'POST'] as const
}

export function getPostAccountArticlesArticleIdFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.articles)[':article_id']['files']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.articles)[':article_id']['files']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountArticlesArticleIdFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.articles)[':article_id']['files']['$post']>,
    ) {
      return parseResponse(client.account.articles[':article_id'].files.$post(args, options))
    },
  })
}

export function createPostAccountArticlesArticleIdFiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.articles)[':article_id']['files']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.articles)[':article_id']['files']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountArticlesArticleIdFilesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountArticlesArticleIdFilesFileIdQueryKey(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['files'][':file_id']['$get']
  >,
) {
  return ['account', '/account/articles/:article_id/files/:file_id', args] as const
}

export function getAccountArticlesArticleIdFilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.articles)[':article_id']['files'][':file_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['files'][':file_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.articles)[':article_id']['files'][':file_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesArticleIdFilesFileIdQueryKey>
  >({
    queryKey: getAccountArticlesArticleIdFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.articles[':article_id'].files[':file_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountArticlesArticleIdFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.articles)[':article_id']['files'][':file_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.articles)[':article_id']['files'][':file_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountArticlesArticleIdFilesFileIdQueryKey>
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
      ...getAccountArticlesArticleIdFilesFileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountArticlesArticleIdFilesFileIdMutationKey() {
  return ['account', '/account/articles/:article_id/files/:file_id', 'POST'] as const
}

export function getPostAccountArticlesArticleIdFilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.articles)[':article_id']['files'][':file_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountArticlesArticleIdFilesFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.articles)[':article_id']['files'][':file_id']['$post']
      >,
    ) {
      return parseResponse(
        client.account.articles[':article_id'].files[':file_id'].$post(args, options),
      )
    },
  })
}

export function createPostAccountArticlesArticleIdFilesFileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.articles)[':article_id']['files'][':file_id']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountArticlesArticleIdFilesFileIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountArticlesArticleIdFilesFileIdMutationKey() {
  return ['account', '/account/articles/:article_id/files/:file_id', 'DELETE'] as const
}

export function getDeleteAccountArticlesArticleIdFilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.articles)[':article_id']['files'][':file_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountArticlesArticleIdFilesFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.articles)[':article_id']['files'][':file_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.account.articles[':article_id'].files[':file_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountArticlesArticleIdFilesFileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.articles)[':article_id']['files'][':file_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountArticlesArticleIdFilesFileIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountArticlesArticleIdPrivateLinksQueryKey(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['private_links']['$get']>,
) {
  return ['account', '/account/articles/:article_id/private_links', args] as const
}

export function getAccountArticlesArticleIdPrivateLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.articles)[':article_id']['private_links']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['private_links']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.articles)[':article_id']['private_links']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesArticleIdPrivateLinksQueryKey>
  >({
    queryKey: getAccountArticlesArticleIdPrivateLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.articles[':article_id'].private_links.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountArticlesArticleIdPrivateLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.articles)[':article_id']['private_links']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.articles)[':article_id']['private_links']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.account.articles)[':article_id']['private_links']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountArticlesArticleIdPrivateLinksQueryKey>
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
      ...getAccountArticlesArticleIdPrivateLinksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountArticlesArticleIdPrivateLinksMutationKey() {
  return ['account', '/account/articles/:article_id/private_links', 'POST'] as const
}

export function getPostAccountArticlesArticleIdPrivateLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.articles)[':article_id']['private_links']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountArticlesArticleIdPrivateLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.articles)[':article_id']['private_links']['$post']
      >,
    ) {
      return parseResponse(
        client.account.articles[':article_id'].private_links.$post(args, options),
      )
    },
  })
}

export function createPostAccountArticlesArticleIdPrivateLinks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.account.articles)[':article_id']['private_links']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.articles)[':article_id']['private_links']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountArticlesArticleIdPrivateLinksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutAccountArticlesArticleIdPrivateLinksLinkIdMutationKey() {
  return ['account', '/account/articles/:article_id/private_links/:link_id', 'PUT'] as const
}

export function getPutAccountArticlesArticleIdPrivateLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.articles)[':article_id']['private_links'][':link_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountArticlesArticleIdPrivateLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.articles)[':article_id']['private_links'][':link_id']['$put']
      >,
    ) {
      return parseResponse(
        client.account.articles[':article_id'].private_links[':link_id'].$put(args, options),
      )
    },
  })
}

export function createPutAccountArticlesArticleIdPrivateLinksLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.articles)[':article_id']['private_links'][':link_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountArticlesArticleIdPrivateLinksLinkIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountArticlesArticleIdPrivateLinksLinkIdMutationKey() {
  return ['account', '/account/articles/:article_id/private_links/:link_id', 'DELETE'] as const
}

export function getDeleteAccountArticlesArticleIdPrivateLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.articles)[':article_id']['private_links'][':link_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountArticlesArticleIdPrivateLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.articles)[':article_id']['private_links'][':link_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.account.articles[':article_id'].private_links[':link_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountArticlesArticleIdPrivateLinksLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.articles)[':article_id']['private_links'][':link_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountArticlesArticleIdPrivateLinksLinkIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountArticlesArticleIdPublishMutationKey() {
  return ['account', '/account/articles/:article_id/publish', 'POST'] as const
}

export function getPostAccountArticlesArticleIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.articles)[':article_id']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.articles)[':article_id']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountArticlesArticleIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.articles)[':article_id']['publish']['$post']>,
    ) {
      return parseResponse(client.account.articles[':article_id'].publish.$post(args, options))
    },
  })
}

export function createPostAccountArticlesArticleIdPublish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.account.articles)[':article_id']['publish']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.articles)[':article_id']['publish']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountArticlesArticleIdPublishMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountArticlesArticleIdReserveDoiMutationKey() {
  return ['account', '/account/articles/:article_id/reserve_doi', 'POST'] as const
}

export function getPostAccountArticlesArticleIdReserveDoiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.articles)[':article_id']['reserve_doi']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountArticlesArticleIdReserveDoiMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.articles)[':article_id']['reserve_doi']['$post']
      >,
    ) {
      return parseResponse(client.account.articles[':article_id'].reserve_doi.$post(args, options))
    },
  })
}

export function createPostAccountArticlesArticleIdReserveDoi<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.account.articles)[':article_id']['reserve_doi']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountArticlesArticleIdReserveDoiMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountArticlesArticleIdReserveHandleMutationKey() {
  return ['account', '/account/articles/:article_id/reserve_handle', 'POST'] as const
}

export function getPostAccountArticlesArticleIdReserveHandleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.articles)[':article_id']['reserve_handle']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountArticlesArticleIdReserveHandleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.articles)[':article_id']['reserve_handle']['$post']
      >,
    ) {
      return parseResponse(
        client.account.articles[':article_id'].reserve_handle.$post(args, options),
      )
    },
  })
}

export function createPostAccountArticlesArticleIdReserveHandle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.account.articles)[':article_id']['reserve_handle']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.account.articles)[':article_id']['reserve_handle']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountArticlesArticleIdReserveHandleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountArticlesArticleIdResourceMutationKey() {
  return ['account', '/account/articles/:article_id/resource', 'POST'] as const
}

export function getPostAccountArticlesArticleIdResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.articles)[':article_id']['resource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountArticlesArticleIdResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.articles)[':article_id']['resource']['$post']>,
    ) {
      return parseResponse(client.account.articles[':article_id'].resource.$post(args, options))
    },
  })
}

export function createPostAccountArticlesArticleIdResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.account.articles)[':article_id']['resource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountArticlesArticleIdResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutAccountArticlesArticleIdVersionsVersionIdIndexMutationKey() {
  return ['account', '/account/articles/:article_id/versions/:version_id/', 'PUT'] as const
}

export function getPutAccountArticlesArticleIdVersionsVersionIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.articles)[':article_id']['versions'][':version_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountArticlesArticleIdVersionsVersionIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.articles)[':article_id']['versions'][':version_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.account.articles[':article_id'].versions[':version_id'].index.$put(args, options),
      )
    },
  })
}

export function createPutAccountArticlesArticleIdVersionsVersionIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.articles)[':article_id']['versions'][':version_id']['index']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountArticlesArticleIdVersionsVersionIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutAccountArticlesArticleIdVersionsVersionIdUpdateThumbMutationKey() {
  return [
    'account',
    '/account/articles/:article_id/versions/:version_id/update_thumb',
    'PUT',
  ] as const
}

export function getPutAccountArticlesArticleIdVersionsVersionIdUpdateThumbMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.articles)[':article_id']['versions'][':version_id']['update_thumb']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountArticlesArticleIdVersionsVersionIdUpdateThumbMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.articles)[':article_id']['versions'][':version_id']['update_thumb']['$put']
      >,
    ) {
      return parseResponse(
        client.account.articles[':article_id'].versions[':version_id'].update_thumb.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutAccountArticlesArticleIdVersionsVersionIdUpdateThumb<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.articles)[':article_id']['versions'][':version_id']['update_thumb']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAccountArticlesArticleIdVersionsVersionIdUpdateThumbMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountAuthorsSearchMutationKey() {
  return ['account', '/account/authors/search', 'POST'] as const
}

export function getPostAccountAuthorsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.authors.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.authors.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountAuthorsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.authors.search.$post>) {
      return parseResponse(client.account.authors.search.$post(args, options))
    },
  })
}

export function createPostAccountAuthorsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.authors.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account.authors.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountAuthorsSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountAuthorsAuthorIdQueryKey(
  args: InferRequestType<(typeof client.account.authors)[':author_id']['$get']>,
) {
  return ['account', '/account/authors/:author_id', args] as const
}

export function getAccountAuthorsAuthorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.authors)[':author_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.authors)[':author_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.authors)[':author_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountAuthorsAuthorIdQueryKey>
  >({
    queryKey: getAccountAuthorsAuthorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.authors[':author_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountAuthorsAuthorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.authors)[':author_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.authors)[':author_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.authors)[':author_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountAuthorsAuthorIdQueryKey>
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
      ...getAccountAuthorsAuthorIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountCategoriesQueryKey() {
  return ['account', '/account/categories'] as const
}

export function getAccountCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.categories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCategoriesQueryKey>
  >({
    queryKey: getAccountCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAccountCollectionsQueryKey(
  args: InferRequestType<typeof client.account.collections.$get>,
) {
  return ['account', '/account/collections', args] as const
}

export function getAccountCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.collections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCollectionsQueryKey>
  >({
    queryKey: getAccountCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.collections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.collections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountCollectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAccountCollectionsMutationKey() {
  return ['account', '/account/collections', 'POST'] as const
}

export function getPostAccountCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.collections.$post>) {
      return parseResponse(client.account.collections.$post(args, options))
    },
  })
}

export function createPostAccountCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account.collections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountCollectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountCollectionsSearchMutationKey() {
  return ['account', '/account/collections/search', 'POST'] as const
}

export function getPostAccountCollectionsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.collections.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountCollectionsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.collections.search.$post>) {
      return parseResponse(client.account.collections.search.$post(args, options))
    },
  })
}

export function createPostAccountCollectionsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.account.collections.search.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.account.collections.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountCollectionsSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountCollectionsCollectionIdQueryKey(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['$get']>,
) {
  return ['account', '/account/collections/:collection_id', args] as const
}

export function getAccountCollectionsCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCollectionsCollectionIdQueryKey>
  >({
    queryKey: getAccountCollectionsCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.collections[':collection_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountCollectionsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.collections)[':collection_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountCollectionsCollectionIdQueryKey>
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
      ...getAccountCollectionsCollectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAccountCollectionsCollectionIdMutationKey() {
  return ['account', '/account/collections/:collection_id', 'PUT'] as const
}

export function getPutAccountCollectionsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.collections)[':collection_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountCollectionsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.collections)[':collection_id']['$put']>,
    ) {
      return parseResponse(client.account.collections[':collection_id'].$put(args, options))
    },
  })
}

export function createPutAccountCollectionsCollectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.account.collections)[':collection_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountCollectionsCollectionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountCollectionsCollectionIdMutationKey() {
  return ['account', '/account/collections/:collection_id', 'DELETE'] as const
}

export function getDeleteAccountCollectionsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.collections)[':collection_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountCollectionsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.collections)[':collection_id']['$delete']>,
    ) {
      return parseResponse(client.account.collections[':collection_id'].$delete(args, options))
    },
  })
}

export function createDeleteAccountCollectionsCollectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.collections)[':collection_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.account.collections)[':collection_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountCollectionsCollectionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountCollectionsCollectionIdArticlesQueryKey(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['articles']['$get']>,
) {
  return ['account', '/account/collections/:collection_id/articles', args] as const
}

export function getAccountCollectionsCollectionIdArticlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.collections)[':collection_id']['articles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.collections)[':collection_id']['articles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCollectionsCollectionIdArticlesQueryKey>
  >({
    queryKey: getAccountCollectionsCollectionIdArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.collections[':collection_id'].articles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountCollectionsCollectionIdArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.collections)[':collection_id']['articles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.collections)[':collection_id']['articles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.account.collections)[':collection_id']['articles']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountCollectionsCollectionIdArticlesQueryKey>
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
      ...getAccountCollectionsCollectionIdArticlesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutAccountCollectionsCollectionIdArticlesMutationKey() {
  return ['account', '/account/collections/:collection_id/articles', 'PUT'] as const
}

export function getPutAccountCollectionsCollectionIdArticlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.collections)[':collection_id']['articles']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountCollectionsCollectionIdArticlesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.collections)[':collection_id']['articles']['$put']
      >,
    ) {
      return parseResponse(
        client.account.collections[':collection_id'].articles.$put(args, options),
      )
    },
  })
}

export function createPutAccountCollectionsCollectionIdArticles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.account.collections)[':collection_id']['articles']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.account.collections)[':collection_id']['articles']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountCollectionsCollectionIdArticlesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountCollectionsCollectionIdArticlesMutationKey() {
  return ['account', '/account/collections/:collection_id/articles', 'POST'] as const
}

export function getPostAccountCollectionsCollectionIdArticlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.collections)[':collection_id']['articles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountCollectionsCollectionIdArticlesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.collections)[':collection_id']['articles']['$post']
      >,
    ) {
      return parseResponse(
        client.account.collections[':collection_id'].articles.$post(args, options),
      )
    },
  })
}

export function createPostAccountCollectionsCollectionIdArticles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.account.collections)[':collection_id']['articles']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.account.collections)[':collection_id']['articles']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountCollectionsCollectionIdArticlesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountCollectionsCollectionIdArticlesArticleIdMutationKey() {
  return ['account', '/account/collections/:collection_id/articles/:article_id', 'DELETE'] as const
}

export function getDeleteAccountCollectionsCollectionIdArticlesArticleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.collections)[':collection_id']['articles'][':article_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountCollectionsCollectionIdArticlesArticleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.collections)[':collection_id']['articles'][':article_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.account.collections[':collection_id'].articles[':article_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountCollectionsCollectionIdArticlesArticleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.collections)[':collection_id']['articles'][':article_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountCollectionsCollectionIdArticlesArticleIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountCollectionsCollectionIdAuthorsQueryKey(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$get']>,
) {
  return ['account', '/account/collections/:collection_id/authors', args] as const
}

export function getAccountCollectionsCollectionIdAuthorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.collections)[':collection_id']['authors']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.collections)[':collection_id']['authors']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCollectionsCollectionIdAuthorsQueryKey>
  >({
    queryKey: getAccountCollectionsCollectionIdAuthorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.collections[':collection_id'].authors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountCollectionsCollectionIdAuthors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.collections)[':collection_id']['authors']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.collections)[':collection_id']['authors']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.account.collections)[':collection_id']['authors']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountCollectionsCollectionIdAuthorsQueryKey>
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
      ...getAccountCollectionsCollectionIdAuthorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAccountCollectionsCollectionIdAuthorsMutationKey() {
  return ['account', '/account/collections/:collection_id/authors', 'PUT'] as const
}

export function getPutAccountCollectionsCollectionIdAuthorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountCollectionsCollectionIdAuthorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.collections)[':collection_id']['authors']['$put']
      >,
    ) {
      return parseResponse(client.account.collections[':collection_id'].authors.$put(args, options))
    },
  })
}

export function createPutAccountCollectionsCollectionIdAuthors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.account.collections)[':collection_id']['authors']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountCollectionsCollectionIdAuthorsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountCollectionsCollectionIdAuthorsMutationKey() {
  return ['account', '/account/collections/:collection_id/authors', 'POST'] as const
}

export function getPostAccountCollectionsCollectionIdAuthorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountCollectionsCollectionIdAuthorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.collections)[':collection_id']['authors']['$post']
      >,
    ) {
      return parseResponse(
        client.account.collections[':collection_id'].authors.$post(args, options),
      )
    },
  })
}

export function createPostAccountCollectionsCollectionIdAuthors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.account.collections)[':collection_id']['authors']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountCollectionsCollectionIdAuthorsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountCollectionsCollectionIdAuthorsAuthorIdMutationKey() {
  return ['account', '/account/collections/:collection_id/authors/:author_id', 'DELETE'] as const
}

export function getDeleteAccountCollectionsCollectionIdAuthorsAuthorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.collections)[':collection_id']['authors'][':author_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountCollectionsCollectionIdAuthorsAuthorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.collections)[':collection_id']['authors'][':author_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.account.collections[':collection_id'].authors[':author_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountCollectionsCollectionIdAuthorsAuthorId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.collections)[':collection_id']['authors'][':author_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountCollectionsCollectionIdAuthorsAuthorIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountCollectionsCollectionIdCategoriesQueryKey(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['categories']['$get']
  >,
) {
  return ['account', '/account/collections/:collection_id/categories', args] as const
}

export function getAccountCollectionsCollectionIdCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.collections)[':collection_id']['categories']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.collections)[':collection_id']['categories']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCollectionsCollectionIdCategoriesQueryKey>
  >({
    queryKey: getAccountCollectionsCollectionIdCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.collections[':collection_id'].categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountCollectionsCollectionIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.collections)[':collection_id']['categories']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.collections)[':collection_id']['categories']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountCollectionsCollectionIdCategoriesQueryKey>
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
      ...getAccountCollectionsCollectionIdCategoriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutAccountCollectionsCollectionIdCategoriesMutationKey() {
  return ['account', '/account/collections/:collection_id/categories', 'PUT'] as const
}

export function getPutAccountCollectionsCollectionIdCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.collections)[':collection_id']['categories']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountCollectionsCollectionIdCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.collections)[':collection_id']['categories']['$put']
      >,
    ) {
      return parseResponse(
        client.account.collections[':collection_id'].categories.$put(args, options),
      )
    },
  })
}

export function createPutAccountCollectionsCollectionIdCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.collections)[':collection_id']['categories']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountCollectionsCollectionIdCategoriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountCollectionsCollectionIdCategoriesMutationKey() {
  return ['account', '/account/collections/:collection_id/categories', 'POST'] as const
}

export function getPostAccountCollectionsCollectionIdCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.collections)[':collection_id']['categories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountCollectionsCollectionIdCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.collections)[':collection_id']['categories']['$post']
      >,
    ) {
      return parseResponse(
        client.account.collections[':collection_id'].categories.$post(args, options),
      )
    },
  })
}

export function createPostAccountCollectionsCollectionIdCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.account.collections)[':collection_id']['categories']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.account.collections)[':collection_id']['categories']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountCollectionsCollectionIdCategoriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountCollectionsCollectionIdCategoriesCategoryIdMutationKey() {
  return [
    'account',
    '/account/collections/:collection_id/categories/:category_id',
    'DELETE',
  ] as const
}

export function getDeleteAccountCollectionsCollectionIdCategoriesCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.collections)[':collection_id']['categories'][':category_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountCollectionsCollectionIdCategoriesCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.collections)[':collection_id']['categories'][':category_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.account.collections[':collection_id'].categories[':category_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteAccountCollectionsCollectionIdCategoriesCategoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.collections)[':collection_id']['categories'][':category_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountCollectionsCollectionIdCategoriesCategoryIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountCollectionsCollectionIdPrivateLinksQueryKey(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['private_links']['$get']
  >,
) {
  return ['account', '/account/collections/:collection_id/private_links', args] as const
}

export function getAccountCollectionsCollectionIdPrivateLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.collections)[':collection_id']['private_links']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['private_links']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountCollectionsCollectionIdPrivateLinksQueryKey>
  >({
    queryKey: getAccountCollectionsCollectionIdPrivateLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.collections[':collection_id'].private_links.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountCollectionsCollectionIdPrivateLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.collections)[':collection_id']['private_links']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.collections)[':collection_id']['private_links']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountCollectionsCollectionIdPrivateLinksQueryKey>
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
      ...getAccountCollectionsCollectionIdPrivateLinksQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountCollectionsCollectionIdPrivateLinksMutationKey() {
  return ['account', '/account/collections/:collection_id/private_links', 'POST'] as const
}

export function getPostAccountCollectionsCollectionIdPrivateLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.collections)[':collection_id']['private_links']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountCollectionsCollectionIdPrivateLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.collections)[':collection_id']['private_links']['$post']
      >,
    ) {
      return parseResponse(
        client.account.collections[':collection_id'].private_links.$post(args, options),
      )
    },
  })
}

export function createPostAccountCollectionsCollectionIdPrivateLinks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.collections)[':collection_id']['private_links']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountCollectionsCollectionIdPrivateLinksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutAccountCollectionsCollectionIdPrivateLinksLinkIdMutationKey() {
  return ['account', '/account/collections/:collection_id/private_links/:link_id', 'PUT'] as const
}

export function getPutAccountCollectionsCollectionIdPrivateLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.collections)[':collection_id']['private_links'][':link_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountCollectionsCollectionIdPrivateLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.collections)[':collection_id']['private_links'][':link_id']['$put']
      >,
    ) {
      return parseResponse(
        client.account.collections[':collection_id'].private_links[':link_id'].$put(args, options),
      )
    },
  })
}

export function createPutAccountCollectionsCollectionIdPrivateLinksLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.collections)[':collection_id']['private_links'][':link_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountCollectionsCollectionIdPrivateLinksLinkIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountCollectionsCollectionIdPrivateLinksLinkIdMutationKey() {
  return [
    'account',
    '/account/collections/:collection_id/private_links/:link_id',
    'DELETE',
  ] as const
}

export function getDeleteAccountCollectionsCollectionIdPrivateLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.collections)[':collection_id']['private_links'][':link_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountCollectionsCollectionIdPrivateLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.collections)[':collection_id']['private_links'][':link_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.account.collections[':collection_id'].private_links[':link_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteAccountCollectionsCollectionIdPrivateLinksLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.collections)[':collection_id']['private_links'][':link_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountCollectionsCollectionIdPrivateLinksLinkIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountCollectionsCollectionIdPublishMutationKey() {
  return ['account', '/account/collections/:collection_id/publish', 'POST'] as const
}

export function getPostAccountCollectionsCollectionIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.collections)[':collection_id']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountCollectionsCollectionIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.collections)[':collection_id']['publish']['$post']
      >,
    ) {
      return parseResponse(
        client.account.collections[':collection_id'].publish.$post(args, options),
      )
    },
  })
}

export function createPostAccountCollectionsCollectionIdPublish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.account.collections)[':collection_id']['publish']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.collections)[':collection_id']['publish']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountCollectionsCollectionIdPublishMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountCollectionsCollectionIdReserveDoiMutationKey() {
  return ['account', '/account/collections/:collection_id/reserve_doi', 'POST'] as const
}

export function getPostAccountCollectionsCollectionIdReserveDoiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.collections)[':collection_id']['reserve_doi']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountCollectionsCollectionIdReserveDoiMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.collections)[':collection_id']['reserve_doi']['$post']
      >,
    ) {
      return parseResponse(
        client.account.collections[':collection_id'].reserve_doi.$post(args, options),
      )
    },
  })
}

export function createPostAccountCollectionsCollectionIdReserveDoi<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.collections)[':collection_id']['reserve_doi']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountCollectionsCollectionIdReserveDoiMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountCollectionsCollectionIdReserveHandleMutationKey() {
  return ['account', '/account/collections/:collection_id/reserve_handle', 'POST'] as const
}

export function getPostAccountCollectionsCollectionIdReserveHandleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.collections)[':collection_id']['reserve_handle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountCollectionsCollectionIdReserveHandleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.collections)[':collection_id']['reserve_handle']['$post']
      >,
    ) {
      return parseResponse(
        client.account.collections[':collection_id'].reserve_handle.$post(args, options),
      )
    },
  })
}

export function createPostAccountCollectionsCollectionIdReserveHandle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.collections)[':collection_id']['reserve_handle']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountCollectionsCollectionIdReserveHandleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountCollectionsCollectionIdResourceMutationKey() {
  return ['account', '/account/collections/:collection_id/resource', 'POST'] as const
}

export function getPostAccountCollectionsCollectionIdResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.collections)[':collection_id']['resource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountCollectionsCollectionIdResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.collections)[':collection_id']['resource']['$post']
      >,
    ) {
      return parseResponse(
        client.account.collections[':collection_id'].resource.$post(args, options),
      )
    },
  })
}

export function createPostAccountCollectionsCollectionIdResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.account.collections)[':collection_id']['resource']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.account.collections)[':collection_id']['resource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountCollectionsCollectionIdResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountFundingSearchMutationKey() {
  return ['account', '/account/funding/search', 'POST'] as const
}

export function getPostAccountFundingSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.funding.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.funding.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountFundingSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.funding.search.$post>) {
      return parseResponse(client.account.funding.search.$post(args, options))
    },
  })
}

export function createPostAccountFundingSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.funding.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account.funding.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountFundingSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountInstitutionQueryKey() {
  return ['account', '/account/institution'] as const
}

export function getAccountInstitutionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionQueryKey>
  >({
    queryKey: getAccountInstitutionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.institution.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountInstitution<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInstitutionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountInstitutionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAccountInstitutionAccountsQueryKey(
  args: InferRequestType<typeof client.account.institution.accounts.$get>,
) {
  return ['account', '/account/institution/accounts', args] as const
}

export function getAccountInstitutionAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.institution.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionAccountsQueryKey>
  >({
    queryKey: getAccountInstitutionAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.institution.accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountInstitutionAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.institution.accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.account.institution.accounts.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInstitutionAccountsQueryKey>
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
      ...getAccountInstitutionAccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountInstitutionAccountsMutationKey() {
  return ['account', '/account/institution/accounts', 'POST'] as const
}

export function getPostAccountInstitutionAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.accounts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.institution.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountInstitutionAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.institution.accounts.$post>) {
      return parseResponse(client.account.institution.accounts.$post(args, options))
    },
  })
}

export function createPostAccountInstitutionAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.account.institution.accounts.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.account.institution.accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountInstitutionAccountsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountInstitutionAccountsSearchMutationKey() {
  return ['account', '/account/institution/accounts/search', 'POST'] as const
}

export function getPostAccountInstitutionAccountsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.account.institution.accounts.search.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.account.institution.accounts.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountInstitutionAccountsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.account.institution.accounts.search.$post>,
    ) {
      return parseResponse(client.account.institution.accounts.search.$post(args, options))
    },
  })
}

export function createPostAccountInstitutionAccountsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.account.institution.accounts.search.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.account.institution.accounts.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountInstitutionAccountsSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutAccountInstitutionAccountsAccountIdMutationKey() {
  return ['account', '/account/institution/accounts/:account_id', 'PUT'] as const
}

export function getPutAccountInstitutionAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.institution.accounts)[':account_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.institution.accounts)[':account_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountInstitutionAccountsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.institution.accounts)[':account_id']['$put']>,
    ) {
      return parseResponse(client.account.institution.accounts[':account_id'].$put(args, options))
    },
  })
}

export function createPutAccountInstitutionAccountsAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.institution.accounts)[':account_id']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.account.institution.accounts)[':account_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountInstitutionAccountsAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountInstitutionArticlesQueryKey(
  args: InferRequestType<typeof client.account.institution.articles.$get>,
) {
  return ['account', '/account/institution/articles', args] as const
}

export function getAccountInstitutionArticlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.articles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.institution.articles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.articles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionArticlesQueryKey>
  >({
    queryKey: getAccountInstitutionArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.institution.articles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountInstitutionArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.articles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.institution.articles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.account.institution.articles.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInstitutionArticlesQueryKey>
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
      ...getAccountInstitutionArticlesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountInstitutionCustomFieldsQueryKey(
  args: InferRequestType<typeof client.account.institution.custom_fields.$get>,
) {
  return ['account', '/account/institution/custom_fields', args] as const
}

export function getAccountInstitutionCustomFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.account.institution.custom_fields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.institution.custom_fields.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.account.institution.custom_fields.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionCustomFieldsQueryKey>
  >({
    queryKey: getAccountInstitutionCustomFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.institution.custom_fields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountInstitutionCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.account.institution.custom_fields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.institution.custom_fields.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.account.institution.custom_fields.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInstitutionCustomFieldsQueryKey>
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
      ...getAccountInstitutionCustomFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountInstitutionCustomFieldsCustomFieldIdItemsUploadMutationKey() {
  return [
    'account',
    '/account/institution/custom_fields/:custom_field_id/items/upload',
    'POST',
  ] as const
}

export function getPostAccountInstitutionCustomFieldsCustomFieldIdItemsUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.institution.custom_fields)[':custom_field_id']['items']['upload']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountInstitutionCustomFieldsCustomFieldIdItemsUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.institution.custom_fields)[':custom_field_id']['items']['upload']['$post']
      >,
    ) {
      return parseResponse(
        client.account.institution.custom_fields[':custom_field_id'].items.upload.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostAccountInstitutionCustomFieldsCustomFieldIdItemsUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.institution.custom_fields)[':custom_field_id']['items']['upload']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAccountInstitutionCustomFieldsCustomFieldIdItemsUploadMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountInstitutionEmbargoOptionsQueryKey() {
  return ['account', '/account/institution/embargo_options'] as const
}

export function getAccountInstitutionEmbargoOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.account.institution.embargo_options.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.account.institution.embargo_options.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionEmbargoOptionsQueryKey>
  >({
    queryKey: getAccountInstitutionEmbargoOptionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.institution.embargo_options.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountInstitutionEmbargoOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.account.institution.embargo_options.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.account.institution.embargo_options.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInstitutionEmbargoOptionsQueryKey>
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
      ...getAccountInstitutionEmbargoOptionsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountInstitutionGroupsQueryKey() {
  return ['account', '/account/institution/groups'] as const
}

export function getAccountInstitutionGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.groups.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.groups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionGroupsQueryKey>
  >({
    queryKey: getAccountInstitutionGroupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.institution.groups.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountInstitutionGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.groups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInstitutionGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountInstitutionGroupsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAccountInstitutionGroupsGroupIdEmbargoOptionsQueryKey(
  args: InferRequestType<
    (typeof client.account.institution.groups)[':group_id']['embargo_options']['$get']
  >,
) {
  return ['account', '/account/institution/groups/:group_id/embargo_options', args] as const
}

export function getAccountInstitutionGroupsGroupIdEmbargoOptionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account.institution.groups)[':group_id']['embargo_options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionGroupsGroupIdEmbargoOptionsQueryKey>
  >({
    queryKey: getAccountInstitutionGroupsGroupIdEmbargoOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.institution.groups[':group_id'].embargo_options.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountInstitutionGroupsGroupIdEmbargoOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.institution.groups)[':group_id']['embargo_options']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountInstitutionGroupsGroupIdEmbargoOptionsQueryKey>
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
      ...getAccountInstitutionGroupsGroupIdEmbargoOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountInstitutionReviewCurationIdQueryKey(
  args: InferRequestType<(typeof client.account.institution.review)[':curation_id']['$get']>,
) {
  return ['account', '/account/institution/review/:curation_id', args] as const
}

export function getAccountInstitutionReviewCurationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.institution.review)[':curation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.institution.review)[':curation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.institution.review)[':curation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionReviewCurationIdQueryKey>
  >({
    queryKey: getAccountInstitutionReviewCurationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.institution.review[':curation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountInstitutionReviewCurationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.institution.review)[':curation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.institution.review)[':curation_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.account.institution.review)[':curation_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInstitutionReviewCurationIdQueryKey>
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
      ...getAccountInstitutionReviewCurationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountInstitutionReviewCurationIdCommentsQueryKey(
  args: InferRequestType<
    (typeof client.account.institution.review)[':curation_id']['comments']['$get']
  >,
) {
  return ['account', '/account/institution/review/:curation_id/comments', args] as const
}

export function getAccountInstitutionReviewCurationIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.institution.review)[':curation_id']['comments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account.institution.review)[':curation_id']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionReviewCurationIdCommentsQueryKey>
  >({
    queryKey: getAccountInstitutionReviewCurationIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.institution.review[':curation_id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountInstitutionReviewCurationIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.institution.review)[':curation_id']['comments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.institution.review)[':curation_id']['comments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountInstitutionReviewCurationIdCommentsQueryKey>
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
      ...getAccountInstitutionReviewCurationIdCommentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountInstitutionReviewCurationIdCommentsMutationKey() {
  return ['account', '/account/institution/review/:curation_id/comments', 'POST'] as const
}

export function getPostAccountInstitutionReviewCurationIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.institution.review)[':curation_id']['comments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountInstitutionReviewCurationIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.institution.review)[':curation_id']['comments']['$post']
      >,
    ) {
      return parseResponse(
        client.account.institution.review[':curation_id'].comments.$post(args, options),
      )
    },
  })
}

export function createPostAccountInstitutionReviewCurationIdComments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.institution.review)[':curation_id']['comments']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountInstitutionReviewCurationIdCommentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountInstitutionReviewsQueryKey(
  args: InferRequestType<typeof client.account.institution.reviews.$get>,
) {
  return ['account', '/account/institution/reviews', args] as const
}

export function getAccountInstitutionReviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.reviews.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.institution.reviews.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.reviews.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionReviewsQueryKey>
  >({
    queryKey: getAccountInstitutionReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.institution.reviews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountInstitutionReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.reviews.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.institution.reviews.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.account.institution.reviews.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInstitutionReviewsQueryKey>
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
      ...getAccountInstitutionReviewsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountInstitutionRolesQueryKey() {
  return ['account', '/account/institution/roles'] as const
}

export function getAccountInstitutionRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.roles.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.roles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionRolesQueryKey>
  >({
    queryKey: getAccountInstitutionRolesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.institution.roles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountInstitutionRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.roles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.roles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInstitutionRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountInstitutionRolesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAccountInstitutionRolesAccountIdQueryKey(
  args: InferRequestType<(typeof client.account.institution.roles)[':account_id']['$get']>,
) {
  return ['account', '/account/institution/roles/:account_id', args] as const
}

export function getAccountInstitutionRolesAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.institution.roles)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.institution.roles)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.institution.roles)[':account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionRolesAccountIdQueryKey>
  >({
    queryKey: getAccountInstitutionRolesAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.institution.roles[':account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountInstitutionRolesAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.institution.roles)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.institution.roles)[':account_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.institution.roles)[':account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInstitutionRolesAccountIdQueryKey>
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
      ...getAccountInstitutionRolesAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountInstitutionRolesAccountIdMutationKey() {
  return ['account', '/account/institution/roles/:account_id', 'POST'] as const
}

export function getPostAccountInstitutionRolesAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.institution.roles)[':account_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.institution.roles)[':account_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountInstitutionRolesAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.institution.roles)[':account_id']['$post']>,
    ) {
      return parseResponse(client.account.institution.roles[':account_id'].$post(args, options))
    },
  })
}

export function createPostAccountInstitutionRolesAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.institution.roles)[':account_id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.institution.roles)[':account_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountInstitutionRolesAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountInstitutionRolesAccountIdGroupIdRoleIdMutationKey() {
  return ['account', '/account/institution/roles/:account_id/:group_id/:role_id', 'DELETE'] as const
}

export function getDeleteAccountInstitutionRolesAccountIdGroupIdRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.institution.roles)[':account_id'][':group_id'][':role_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountInstitutionRolesAccountIdGroupIdRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.institution.roles)[':account_id'][':group_id'][':role_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.account.institution.roles[':account_id'][':group_id'][':role_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteAccountInstitutionRolesAccountIdGroupIdRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.institution.roles)[':account_id'][':group_id'][':role_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountInstitutionRolesAccountIdGroupIdRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountInstitutionUsersAccountIdQueryKey(
  args: InferRequestType<(typeof client.account.institution.users)[':account_id']['$get']>,
) {
  return ['account', '/account/institution/users/:account_id', args] as const
}

export function getAccountInstitutionUsersAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.institution.users)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.institution.users)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.institution.users)[':account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionUsersAccountIdQueryKey>
  >({
    queryKey: getAccountInstitutionUsersAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.institution.users[':account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountInstitutionUsersAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.institution.users)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.institution.users)[':account_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.institution.users)[':account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInstitutionUsersAccountIdQueryKey>
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
      ...getAccountInstitutionUsersAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountLicensesQueryKey() {
  return ['account', '/account/licenses'] as const
}

export function getAccountLicensesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.licenses.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.licenses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountLicensesQueryKey>
  >({
    queryKey: getAccountLicensesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.licenses.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountLicenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.licenses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountLicensesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountLicensesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAccountProjectsQueryKey(
  args: InferRequestType<typeof client.account.projects.$get>,
) {
  return ['account', '/account/projects', args] as const
}

export function getAccountProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProjectsQueryKey>
  >({
    queryKey: getAccountProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.projects.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAccountProjectsMutationKey() {
  return ['account', '/account/projects', 'POST'] as const
}

export function getPostAccountProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.projects.$post>) {
      return parseResponse(client.account.projects.$post(args, options))
    },
  })
}

export function createPostAccountProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account.projects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountProjectsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountProjectsSearchMutationKey() {
  return ['account', '/account/projects/search', 'POST'] as const
}

export function getPostAccountProjectsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.projects.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountProjectsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.projects.search.$post>) {
      return parseResponse(client.account.projects.search.$post(args, options))
    },
  })
}

export function createPostAccountProjectsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account.projects.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountProjectsSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountProjectsProjectIdQueryKey(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['$get']>,
) {
  return ['account', '/account/projects/:project_id', args] as const
}

export function getAccountProjectsProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProjectsProjectIdQueryKey>
  >({
    queryKey: getAccountProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.projects[':project_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.projects)[':project_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountProjectsProjectIdQueryKey>
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
      ...getAccountProjectsProjectIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAccountProjectsProjectIdMutationKey() {
  return ['account', '/account/projects/:project_id', 'PUT'] as const
}

export function getPutAccountProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.projects)[':project_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.projects)[':project_id']['$put']>,
    ) {
      return parseResponse(client.account.projects[':project_id'].$put(args, options))
    },
  })
}

export function createPutAccountProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.account.projects)[':project_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountProjectsProjectIdMutationKey() {
  return ['account', '/account/projects/:project_id', 'DELETE'] as const
}

export function getDeleteAccountProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.projects)[':project_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.projects)[':project_id']['$delete']>,
    ) {
      return parseResponse(client.account.projects[':project_id'].$delete(args, options))
    },
  })
}

export function createDeleteAccountProjectsProjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.account.projects)[':project_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountProjectsProjectIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountProjectsProjectIdArticlesQueryKey(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['articles']['$get']>,
) {
  return ['account', '/account/projects/:project_id/articles', args] as const
}

export function getAccountProjectsProjectIdArticlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.projects)[':project_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.projects)[':project_id']['articles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProjectsProjectIdArticlesQueryKey>
  >({
    queryKey: getAccountProjectsProjectIdArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.projects[':project_id'].articles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProjectsProjectIdArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.projects)[':project_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.projects)[':project_id']['articles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.account.projects)[':project_id']['articles']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountProjectsProjectIdArticlesQueryKey>
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
      ...getAccountProjectsProjectIdArticlesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountProjectsProjectIdArticlesMutationKey() {
  return ['account', '/account/projects/:project_id/articles', 'POST'] as const
}

export function getPostAccountProjectsProjectIdArticlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.projects)[':project_id']['articles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.projects)[':project_id']['articles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountProjectsProjectIdArticlesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.projects)[':project_id']['articles']['$post']>,
    ) {
      return parseResponse(client.account.projects[':project_id'].articles.$post(args, options))
    },
  })
}

export function createPostAccountProjectsProjectIdArticles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.account.projects)[':project_id']['articles']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.projects)[':project_id']['articles']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountProjectsProjectIdArticlesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountProjectsProjectIdArticlesArticleIdQueryKey(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['$get']
  >,
) {
  return ['account', '/account/projects/:project_id/articles/:article_id', args] as const
}

export function getAccountProjectsProjectIdArticlesArticleIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountProjectsProjectIdArticlesArticleIdQueryKey>
  >({
    queryKey: getAccountProjectsProjectIdArticlesArticleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.projects[':project_id'].articles[':article_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProjectsProjectIdArticlesArticleId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountProjectsProjectIdArticlesArticleIdQueryKey>
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
      ...getAccountProjectsProjectIdArticlesArticleIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteAccountProjectsProjectIdArticlesArticleIdMutationKey() {
  return ['account', '/account/projects/:project_id/articles/:article_id', 'DELETE'] as const
}

export function getDeleteAccountProjectsProjectIdArticlesArticleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.projects)[':project_id']['articles'][':article_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountProjectsProjectIdArticlesArticleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.projects)[':project_id']['articles'][':article_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.account.projects[':project_id'].articles[':article_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountProjectsProjectIdArticlesArticleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.projects)[':project_id']['articles'][':article_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountProjectsProjectIdArticlesArticleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountProjectsProjectIdArticlesArticleIdFilesQueryKey(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files']['$get']
  >,
) {
  return ['account', '/account/projects/:project_id/articles/:article_id/files', args] as const
}

export function getAccountProjectsProjectIdArticlesArticleIdFilesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountProjectsProjectIdArticlesArticleIdFilesQueryKey>
  >({
    queryKey: getAccountProjectsProjectIdArticlesArticleIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.projects[':project_id'].articles[':article_id'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProjectsProjectIdArticlesArticleIdFiles<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountProjectsProjectIdArticlesArticleIdFilesQueryKey>
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
      ...getAccountProjectsProjectIdArticlesArticleIdFilesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountProjectsProjectIdArticlesArticleIdFilesFileIdQueryKey(
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

export function getAccountProjectsProjectIdArticlesArticleIdFilesFileIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files'][':file_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountProjectsProjectIdArticlesArticleIdFilesFileIdQueryKey>
  >({
    queryKey: getAccountProjectsProjectIdArticlesArticleIdFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.projects[':project_id'].articles[':article_id'].files[':file_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createAccountProjectsProjectIdArticlesArticleIdFilesFileId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files'][':file_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountProjectsProjectIdArticlesArticleIdFilesFileIdQueryKey>
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
      ...getAccountProjectsProjectIdArticlesArticleIdFilesFileIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountProjectsProjectIdCollaboratorsQueryKey(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>,
) {
  return ['account', '/account/projects/:project_id/collaborators', args] as const
}

export function getAccountProjectsProjectIdCollaboratorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProjectsProjectIdCollaboratorsQueryKey>
  >({
    queryKey: getAccountProjectsProjectIdCollaboratorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.projects[':project_id'].collaborators.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProjectsProjectIdCollaborators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.projects)[':project_id']['collaborators']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountProjectsProjectIdCollaboratorsQueryKey>
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
      ...getAccountProjectsProjectIdCollaboratorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountProjectsProjectIdCollaboratorsMutationKey() {
  return ['account', '/account/projects/:project_id/collaborators', 'POST'] as const
}

export function getPostAccountProjectsProjectIdCollaboratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.projects)[':project_id']['collaborators']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountProjectsProjectIdCollaboratorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.projects)[':project_id']['collaborators']['$post']
      >,
    ) {
      return parseResponse(
        client.account.projects[':project_id'].collaborators.$post(args, options),
      )
    },
  })
}

export function createPostAccountProjectsProjectIdCollaborators<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.account.projects)[':project_id']['collaborators']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.projects)[':project_id']['collaborators']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountProjectsProjectIdCollaboratorsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountProjectsProjectIdCollaboratorsUserIdMutationKey() {
  return ['account', '/account/projects/:project_id/collaborators/:user_id', 'DELETE'] as const
}

export function getDeleteAccountProjectsProjectIdCollaboratorsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.projects)[':project_id']['collaborators'][':user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountProjectsProjectIdCollaboratorsUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.projects)[':project_id']['collaborators'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.account.projects[':project_id'].collaborators[':user_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountProjectsProjectIdCollaboratorsUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.projects)[':project_id']['collaborators'][':user_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountProjectsProjectIdCollaboratorsUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountProjectsProjectIdLeaveMutationKey() {
  return ['account', '/account/projects/:project_id/leave', 'POST'] as const
}

export function getPostAccountProjectsProjectIdLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.projects)[':project_id']['leave']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.projects)[':project_id']['leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountProjectsProjectIdLeaveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.projects)[':project_id']['leave']['$post']>,
    ) {
      return parseResponse(client.account.projects[':project_id'].leave.$post(args, options))
    },
  })
}

export function createPostAccountProjectsProjectIdLeave<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.projects)[':project_id']['leave']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.account.projects)[':project_id']['leave']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountProjectsProjectIdLeaveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountProjectsProjectIdNotesQueryKey(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$get']>,
) {
  return ['account', '/account/projects/:project_id/notes', args] as const
}

export function getAccountProjectsProjectIdNotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.projects)[':project_id']['notes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.projects)[':project_id']['notes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProjectsProjectIdNotesQueryKey>
  >({
    queryKey: getAccountProjectsProjectIdNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.projects[':project_id'].notes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProjectsProjectIdNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.projects)[':project_id']['notes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.projects)[':project_id']['notes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountProjectsProjectIdNotesQueryKey>
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
      ...getAccountProjectsProjectIdNotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountProjectsProjectIdNotesMutationKey() {
  return ['account', '/account/projects/:project_id/notes', 'POST'] as const
}

export function getPostAccountProjectsProjectIdNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.projects)[':project_id']['notes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountProjectsProjectIdNotesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$post']>,
    ) {
      return parseResponse(client.account.projects[':project_id'].notes.$post(args, options))
    },
  })
}

export function createPostAccountProjectsProjectIdNotes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.projects)[':project_id']['notes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountProjectsProjectIdNotesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountProjectsProjectIdNotesNoteIdQueryKey(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']
  >,
) {
  return ['account', '/account/projects/:project_id/notes/:note_id', args] as const
}

export function getAccountProjectsProjectIdNotesNoteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProjectsProjectIdNotesNoteIdQueryKey>
  >({
    queryKey: getAccountProjectsProjectIdNotesNoteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.projects[':project_id'].notes[':note_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProjectsProjectIdNotesNoteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountProjectsProjectIdNotesNoteIdQueryKey>
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
      ...getAccountProjectsProjectIdNotesNoteIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAccountProjectsProjectIdNotesNoteIdMutationKey() {
  return ['account', '/account/projects/:project_id/notes/:note_id', 'PUT'] as const
}

export function getPutAccountProjectsProjectIdNotesNoteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.account.projects)[':project_id']['notes'][':note_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountProjectsProjectIdNotesNoteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.projects)[':project_id']['notes'][':note_id']['$put']
      >,
    ) {
      return parseResponse(
        client.account.projects[':project_id'].notes[':note_id'].$put(args, options),
      )
    },
  })
}

export function createPutAccountProjectsProjectIdNotesNoteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.projects)[':project_id']['notes'][':note_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountProjectsProjectIdNotesNoteIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountProjectsProjectIdNotesNoteIdMutationKey() {
  return ['account', '/account/projects/:project_id/notes/:note_id', 'DELETE'] as const
}

export function getDeleteAccountProjectsProjectIdNotesNoteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account.projects)[':project_id']['notes'][':note_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountProjectsProjectIdNotesNoteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.projects)[':project_id']['notes'][':note_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.account.projects[':project_id'].notes[':note_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountProjectsProjectIdNotesNoteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.account.projects)[':project_id']['notes'][':note_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountProjectsProjectIdNotesNoteIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountProjectsProjectIdPublishMutationKey() {
  return ['account', '/account/projects/:project_id/publish', 'POST'] as const
}

export function getPostAccountProjectsProjectIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.projects)[':project_id']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.projects)[':project_id']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountProjectsProjectIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.projects)[':project_id']['publish']['$post']>,
    ) {
      return parseResponse(client.account.projects[':project_id'].publish.$post(args, options))
    },
  })
}

export function createPostAccountProjectsProjectIdPublish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.account.projects)[':project_id']['publish']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.projects)[':project_id']['publish']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountProjectsProjectIdPublishMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getArticlesQueryKey(args: InferRequestType<typeof client.articles.$get>) {
  const { header: _, ...keyArgs } = args
  return ['articles', '/articles', keyArgs] as const
}

export function getArticlesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.articles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getArticlesQueryKey>
  >({
    queryKey: getArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.articles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.articles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getArticlesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArticlesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostArticlesSearchMutationKey() {
  return ['articles', '/articles/search', 'POST'] as const
}

export function getPostArticlesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.articles.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostArticlesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.articles.search.$post>) {
      return parseResponse(client.articles.search.$post(args, options))
    },
  })
}

export function createPostArticlesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.articles.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostArticlesSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getArticlesArticleIdQueryKey(
  args: InferRequestType<(typeof client.articles)[':article_id']['$get']>,
) {
  return ['articles', '/articles/:article_id', args] as const
}

export function getArticlesArticleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':article_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdQueryKey>
  >({
    queryKey: getArticlesArticleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.articles[':article_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArticlesArticleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.articles)[':article_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArticlesArticleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArticlesArticleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getArticlesArticleIdFilesQueryKey(
  args: InferRequestType<(typeof client.articles)[':article_id']['files']['$get']>,
) {
  return ['articles', '/articles/:article_id/files', args] as const
}

export function getArticlesArticleIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.articles)[':article_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':article_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.articles)[':article_id']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdFilesQueryKey>
  >({
    queryKey: getArticlesArticleIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.articles[':article_id'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArticlesArticleIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.articles)[':article_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.articles)[':article_id']['files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.articles)[':article_id']['files']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArticlesArticleIdFilesQueryKey>
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
      ...getArticlesArticleIdFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getArticlesArticleIdFilesFileIdQueryKey(
  args: InferRequestType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>,
) {
  return ['articles', '/articles/:article_id/files/:file_id', args] as const
}

export function getArticlesArticleIdFilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdFilesFileIdQueryKey>
  >({
    queryKey: getArticlesArticleIdFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.articles[':article_id'].files[':file_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArticlesArticleIdFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.articles)[':article_id']['files'][':file_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArticlesArticleIdFilesFileIdQueryKey>
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
      ...getArticlesArticleIdFilesFileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getArticlesArticleIdVersionsQueryKey(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>,
) {
  return ['articles', '/articles/:article_id/versions', args] as const
}

export function getArticlesArticleIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdVersionsQueryKey>
  >({
    queryKey: getArticlesArticleIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.articles[':article_id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArticlesArticleIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArticlesArticleIdVersionsQueryKey>
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
      ...getArticlesArticleIdVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getArticlesArticleIdVersionsVNumberQueryKey(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>,
) {
  return ['articles', '/articles/:article_id/versions/:v_number', args] as const
}

export function getArticlesArticleIdVersionsVNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdVersionsVNumberQueryKey>
  >({
    queryKey: getArticlesArticleIdVersionsVNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.articles[':article_id'].versions[':v_number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArticlesArticleIdVersionsVNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.articles)[':article_id']['versions'][':v_number']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArticlesArticleIdVersionsVNumberQueryKey>
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
      ...getArticlesArticleIdVersionsVNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getArticlesArticleIdVersionsVNumberConfidentialityQueryKey(
  args: InferRequestType<
    (typeof client.articles)[':article_id']['versions'][':v_number']['confidentiality']['$get']
  >,
) {
  return ['articles', '/articles/:article_id/versions/:v_number/confidentiality', args] as const
}

export function getArticlesArticleIdVersionsVNumberConfidentialityQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.articles)[':article_id']['versions'][':v_number']['confidentiality']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdVersionsVNumberConfidentialityQueryKey>
  >({
    queryKey: getArticlesArticleIdVersionsVNumberConfidentialityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.articles[':article_id'].versions[':v_number'].confidentiality.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArticlesArticleIdVersionsVNumberConfidentiality<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.articles)[':article_id']['versions'][':v_number']['confidentiality']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getArticlesArticleIdVersionsVNumberConfidentialityQueryKey>
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
      ...getArticlesArticleIdVersionsVNumberConfidentialityQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getArticlesArticleIdVersionsVNumberEmbargoQueryKey(
  args: InferRequestType<
    (typeof client.articles)[':article_id']['versions'][':v_number']['embargo']['$get']
  >,
) {
  return ['articles', '/articles/:article_id/versions/:v_number/embargo', args] as const
}

export function getArticlesArticleIdVersionsVNumberEmbargoQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.articles)[':article_id']['versions'][':v_number']['embargo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdVersionsVNumberEmbargoQueryKey>
  >({
    queryKey: getArticlesArticleIdVersionsVNumberEmbargoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.articles[':article_id'].versions[':v_number'].embargo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArticlesArticleIdVersionsVNumberEmbargo<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.articles)[':article_id']['versions'][':v_number']['embargo']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getArticlesArticleIdVersionsVNumberEmbargoQueryKey>
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
      ...getArticlesArticleIdVersionsVNumberEmbargoQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCategoriesQueryKey() {
  return ['categories', '/categories'] as const
}

export function getCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >({
    queryKey: getCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.categories.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCollectionsQueryKey(args: InferRequestType<typeof client.collections.$get>) {
  const { header: _, ...keyArgs } = args
  return ['collections', '/collections', keyArgs] as const
}

export function getCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.collections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >({
    queryKey: getCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.collections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCollectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCollectionsSearchMutationKey() {
  return ['collections', '/collections/search', 'POST'] as const
}

export function getPostCollectionsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.collections.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.collections.search.$post>) {
      return parseResponse(client.collections.search.$post(args, options))
    },
  })
}

export function createPostCollectionsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.collections.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.collections.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCollectionsCollectionIdQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_id']['$get']>,
) {
  return ['collections', '/collections/:collection_id', args] as const
}

export function getCollectionsCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdQueryKey>
  >({
    queryKey: getCollectionsCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collections)[':collection_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdQueryKey>
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
      ...getCollectionsCollectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCollectionsCollectionIdArticlesQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_id']['articles']['$get']>,
) {
  return ['collections', '/collections/:collection_id/articles', args] as const
}

export function getCollectionsCollectionIdArticlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_id']['articles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdArticlesQueryKey>
  >({
    queryKey: getCollectionsCollectionIdArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_id'].articles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsCollectionIdArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collections)[':collection_id']['articles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection_id']['articles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdArticlesQueryKey>
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
      ...getCollectionsCollectionIdArticlesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCollectionsCollectionIdVersionsQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_id']['versions']['$get']>,
) {
  return ['collections', '/collections/:collection_id/versions', args] as const
}

export function getCollectionsCollectionIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdVersionsQueryKey>
  >({
    queryKey: getCollectionsCollectionIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsCollectionIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collections)[':collection_id']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection_id']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdVersionsQueryKey>
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
      ...getCollectionsCollectionIdVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCollectionsCollectionIdVersionsVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['versions'][':version_id']['$get']
  >,
) {
  return ['collections', '/collections/:collection_id/versions/:version_id', args] as const
}

export function getCollectionsCollectionIdVersionsVersionIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['versions'][':version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdVersionsVersionIdQueryKey>
  >({
    queryKey: getCollectionsCollectionIdVersionsVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_id'].versions[':version_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsCollectionIdVersionsVersionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.collections)[':collection_id']['versions'][':version_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdVersionsVersionIdQueryKey>
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
      ...getCollectionsCollectionIdVersionsVersionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFileDownloadFileIdQueryKey(
  args: InferRequestType<(typeof client.file.download)[':file_id']['$get']>,
) {
  return ['file', '/file/download/:file_id', args] as const
}

export function getFileDownloadFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.file.download)[':file_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.file.download)[':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.file.download)[':file_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileDownloadFileIdQueryKey>
  >({
    queryKey: getFileDownloadFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.file.download[':file_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFileDownloadFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.file.download)[':file_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.file.download)[':file_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.file.download)[':file_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileDownloadFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFileDownloadFileIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostInstitutionHrfeedUploadMutationKey() {
  return ['institution', '/institution/hrfeed/upload', 'POST'] as const
}

export function getPostInstitutionHrfeedUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.institution.hrfeed.upload.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.institution.hrfeed.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInstitutionHrfeedUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.institution.hrfeed.upload.$post>) {
      return parseResponse(client.institution.hrfeed.upload.$post(args, options))
    },
  })
}

export function createPostInstitutionHrfeedUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.institution.hrfeed.upload.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.institution.hrfeed.upload.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInstitutionHrfeedUploadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInstitutionsInstitutionStringIdArticlesFilterByQueryKey(
  args: InferRequestType<
    (typeof client.institutions)[':institution_string_id']['articles']['filter-by']['$get']
  >,
) {
  return ['institutions', '/institutions/:institution_string_id/articles/filter-by', args] as const
}

export function getInstitutionsInstitutionStringIdArticlesFilterByQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.institutions)[':institution_string_id']['articles']['filter-by']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getInstitutionsInstitutionStringIdArticlesFilterByQueryKey>
  >({
    queryKey: getInstitutionsInstitutionStringIdArticlesFilterByQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.institutions[':institution_string_id'].articles['filter-by'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInstitutionsInstitutionStringIdArticlesFilterBy<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.institutions)[':institution_string_id']['articles']['filter-by']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getInstitutionsInstitutionStringIdArticlesFilterByQueryKey>
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
      ...getInstitutionsInstitutionStringIdArticlesFilterByQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getItemTypesQueryKey(args: InferRequestType<typeof client.item_types.$get>) {
  return ['item_types', '/item_types', args] as const
}

export function getItemTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_types.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.item_types.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemTypesQueryKey>
  >({
    queryKey: getItemTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.item_types.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.item_types.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getItemTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLicensesQueryKey() {
  return ['licenses', '/licenses'] as const
}

export function getLicensesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLicensesQueryKey>
  >({
    queryKey: getLicensesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.licenses.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLicenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLicensesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLicensesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getProjectsQueryKey(args: InferRequestType<typeof client.projects.$get>) {
  const { header: _, ...keyArgs } = args
  return ['projects', '/projects', keyArgs] as const
}

export function getProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >({
    queryKey: getProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.projects.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostProjectsSearchMutationKey() {
  return ['projects', '/projects/search', 'POST'] as const
}

export function getPostProjectsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.projects.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.projects.search.$post>) {
      return parseResponse(client.projects.search.$post(args, options))
    },
  })
}

export function createPostProjectsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.projects.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['$get']>,
) {
  return ['projects', '/projects/:project_id', args] as const
}

export function getProjectsProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdQueryKey>
  >({
    queryKey: getProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':project_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsProjectIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProjectsProjectIdArticlesQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['articles']['$get']>,
) {
  return ['projects', '/projects/:project_id/articles', args] as const
}

export function getProjectsProjectIdArticlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['articles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdArticlesQueryKey>
  >({
    queryKey: getProjectsProjectIdArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].articles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':project_id']['articles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['articles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdArticlesQueryKey>
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
      ...getProjectsProjectIdArticlesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
