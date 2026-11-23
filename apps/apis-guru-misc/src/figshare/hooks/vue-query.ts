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

export function getAccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          ReturnType<typeof getAccountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountArticlesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.articles.$get>>,
) {
  return ['account', '/account/articles', toValue(args)] as const
}

export function getAccountArticlesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.articles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.articles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.articles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.$get>>>
            >
          >,
          ReturnType<typeof getAccountArticlesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountArticles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.articles.$post>,
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
  const mutationDefaults = getPostAccountArticlesMutationOptions<TError, TOnMutateResult>(
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

export function getAccountArticlesExportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.articles.export.$get>>,
) {
  return ['account', '/account/articles/export', toValue(args)] as const
}

export function getAccountArticlesExportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.articles.export.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountArticlesExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.articles.export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountArticlesExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.export.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.articles.export.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.export.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.export.$get>>>
            >
          >,
          ReturnType<typeof getAccountArticlesExportQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.export.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountArticlesExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.articles.export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountArticlesExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.export.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAccountArticlesExportMutationOptions<TError, TOnMutateResult>(
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

export function usePostAccountArticlesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.articles.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.articles.search.$post>,
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
  const mutationDefaults = getPostAccountArticlesSearchMutationOptions<TError, TOnMutateResult>(
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

export function getAccountArticlesArticleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.articles)[':article_id']['$get']>>,
) {
  return ['account', '/account/articles/:article_id', toValue(args)] as const
}

export function getAccountArticlesArticleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.articles)[':article_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountArticlesArticleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.articles[':article_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountArticlesArticleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.articles)[':article_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountArticlesArticleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account.articles)[':article_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesArticleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountArticlesArticleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.articles[':article_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccountArticlesArticleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountArticlesArticleIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteAccountArticlesArticleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountArticlesArticleIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountArticlesArticleIdAuthorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$get']>
  >,
) {
  return ['account', '/account/articles/:article_id/authors', toValue(args)] as const
}

export function getAccountArticlesArticleIdAuthorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountArticlesArticleIdAuthorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.articles[':article_id'].authors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountArticlesArticleIdAuthors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.articles)[':article_id']['authors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.articles)[':article_id']['authors']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountArticlesArticleIdAuthorsQueryKey>
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
          Awaited<ReturnType<(typeof client.account.articles)[':article_id']['authors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesArticleIdAuthorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountArticlesArticleIdAuthorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.articles[':article_id'].authors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccountArticlesArticleIdAuthors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountArticlesArticleIdAuthorsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountArticlesArticleIdAuthors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountArticlesArticleIdAuthorsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAccountArticlesArticleIdAuthorsAuthorId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountArticlesArticleIdAuthorsAuthorIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountArticlesArticleIdCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$get']>
  >,
) {
  return ['account', '/account/articles/:article_id/categories', toValue(args)] as const
}

export function getAccountArticlesArticleIdCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountArticlesArticleIdCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.articles[':article_id'].categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountArticlesArticleIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.articles)[':article_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.articles)[':article_id']['categories']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountArticlesArticleIdCategoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.account.articles)[':article_id']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesArticleIdCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountArticlesArticleIdCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.articles[':article_id'].categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccountArticlesArticleIdCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.account.articles)[':article_id']['categories']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$put']>,
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
  const mutationDefaults = getPutAccountArticlesArticleIdCategoriesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountArticlesArticleIdCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.account.articles)[':article_id']['categories']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$post']>,
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
  const mutationDefaults = getPostAccountArticlesArticleIdCategoriesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAccountArticlesArticleIdCategoriesCategoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountArticlesArticleIdCategoriesCategoryIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountArticlesArticleIdConfidentialityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['confidentiality']['$get']>
  >,
) {
  return ['account', '/account/articles/:article_id/confidentiality', toValue(args)] as const
}

export function getAccountArticlesArticleIdConfidentialityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['confidentiality']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountArticlesArticleIdConfidentialityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.articles[':article_id'].confidentiality.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountArticlesArticleIdConfidentiality<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['confidentiality']['$get']>
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
                    (typeof client.account.articles)[':article_id']['confidentiality']['$get']
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
                    (typeof client.account.articles)[':article_id']['confidentiality']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountArticlesArticleIdConfidentialityQueryKey>
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
            ReturnType<(typeof client.account.articles)[':article_id']['confidentiality']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesArticleIdConfidentialityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountArticlesArticleIdConfidentialityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.articles[':article_id'].confidentiality.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccountArticlesArticleIdConfidentiality<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountArticlesArticleIdConfidentialityMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAccountArticlesArticleIdConfidentiality<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountArticlesArticleIdConfidentialityMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountArticlesArticleIdEmbargoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$get']>
  >,
) {
  return ['account', '/account/articles/:article_id/embargo', toValue(args)] as const
}

export function getAccountArticlesArticleIdEmbargoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountArticlesArticleIdEmbargoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.articles[':article_id'].embargo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountArticlesArticleIdEmbargo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.articles)[':article_id']['embargo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.articles)[':article_id']['embargo']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountArticlesArticleIdEmbargoQueryKey>
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
          Awaited<ReturnType<(typeof client.account.articles)[':article_id']['embargo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesArticleIdEmbargoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountArticlesArticleIdEmbargoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.articles[':article_id'].embargo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccountArticlesArticleIdEmbargo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountArticlesArticleIdEmbargoMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAccountArticlesArticleIdEmbargo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.account.articles)[':article_id']['embargo']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$delete']>,
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
  const mutationDefaults = getDeleteAccountArticlesArticleIdEmbargoMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountArticlesArticleIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['files']['$get']>
  >,
) {
  return ['account', '/account/articles/:article_id/files', toValue(args)] as const
}

export function getAccountArticlesArticleIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountArticlesArticleIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.articles[':article_id'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountArticlesArticleIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.articles)[':article_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.articles)[':article_id']['files']['$get']>
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
                  ReturnType<(typeof client.account.articles)[':article_id']['files']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountArticlesArticleIdFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.account.articles)[':article_id']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesArticleIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountArticlesArticleIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.articles[':article_id'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountArticlesArticleIdFiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.articles)[':article_id']['files']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.articles)[':article_id']['files']['$post']>,
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
  const mutationDefaults = getPostAccountArticlesArticleIdFilesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountArticlesArticleIdFilesFileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['files'][':file_id']['$get']>
  >,
) {
  return ['account', '/account/articles/:article_id/files/:file_id', toValue(args)] as const
}

export function getAccountArticlesArticleIdFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['files'][':file_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountArticlesArticleIdFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.articles[':article_id'].files[':file_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountArticlesArticleIdFilesFileId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['files'][':file_id']['$get']>
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
                    (typeof client.account.articles)[':article_id']['files'][':file_id']['$get']
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
                    (typeof client.account.articles)[':article_id']['files'][':file_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountArticlesArticleIdFilesFileIdQueryKey>
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
            ReturnType<(typeof client.account.articles)[':article_id']['files'][':file_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesArticleIdFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountArticlesArticleIdFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.articles[':article_id'].files[':file_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountArticlesArticleIdFilesFileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountArticlesArticleIdFilesFileIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAccountArticlesArticleIdFilesFileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountArticlesArticleIdFilesFileIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountArticlesArticleIdPrivateLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['private_links']['$get']>
  >,
) {
  return ['account', '/account/articles/:article_id/private_links', toValue(args)] as const
}

export function getAccountArticlesArticleIdPrivateLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['private_links']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountArticlesArticleIdPrivateLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.articles[':article_id'].private_links.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountArticlesArticleIdPrivateLinks<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.articles)[':article_id']['private_links']['$get']>
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
                    (typeof client.account.articles)[':article_id']['private_links']['$get']
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
                    (typeof client.account.articles)[':article_id']['private_links']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountArticlesArticleIdPrivateLinksQueryKey>
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
            ReturnType<(typeof client.account.articles)[':article_id']['private_links']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountArticlesArticleIdPrivateLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountArticlesArticleIdPrivateLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.articles[':article_id'].private_links.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountArticlesArticleIdPrivateLinks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.account.articles)[':article_id']['private_links']['$post']
          >,
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
  const mutationDefaults = getPostAccountArticlesArticleIdPrivateLinksMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutAccountArticlesArticleIdPrivateLinksLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountArticlesArticleIdPrivateLinksLinkIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAccountArticlesArticleIdPrivateLinksLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountArticlesArticleIdPrivateLinksLinkIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountArticlesArticleIdPublish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountArticlesArticleIdPublishMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountArticlesArticleIdReserveDoi<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.account.articles)[':article_id']['reserve_doi']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.articles)[':article_id']['reserve_doi']['$post']>,
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
  const mutationDefaults = getPostAccountArticlesArticleIdReserveDoiMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountArticlesArticleIdReserveHandle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountArticlesArticleIdReserveHandleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountArticlesArticleIdResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountArticlesArticleIdResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutAccountArticlesArticleIdVersionsVersionIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountArticlesArticleIdVersionsVersionIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutAccountArticlesArticleIdVersionsVersionIdUpdateThumb<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutAccountArticlesArticleIdVersionsVersionIdUpdateThumbMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountAuthorsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.authors.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.authors.search.$post>,
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
  const mutationDefaults = getPostAccountAuthorsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getAccountAuthorsAuthorIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.authors)[':author_id']['$get']>>,
) {
  return ['account', '/account/authors/:author_id', toValue(args)] as const
}

export function getAccountAuthorsAuthorIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.authors)[':author_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountAuthorsAuthorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.authors[':author_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountAuthorsAuthorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.authors)[':author_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.authors)[':author_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.authors)[':author_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.authors)[':author_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountAuthorsAuthorIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account.authors)[':author_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountAuthorsAuthorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountAuthorsAuthorIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.authors[':author_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountCategoriesQueryKey() {
  return ['account', '/account/categories'] as const
}

export function getAccountCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.categories.$get>>>
            >
          >,
          ReturnType<typeof getAccountCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountCollectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.collections.$get>>,
) {
  return ['account', '/account/collections', toValue(args)] as const
}

export function getAccountCollectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.collections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.collections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.$get>>>
            >
          >,
          ReturnType<typeof getAccountCollectionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.collections.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.collections.$post>,
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
  const mutationDefaults = getPostAccountCollectionsMutationOptions<TError, TOnMutateResult>(
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

export function usePostAccountCollectionsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountCollectionsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getAccountCollectionsCollectionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.collections)[':collection_id']['$get']>
  >,
) {
  return ['account', '/account/collections/:collection_id', toValue(args)] as const
}

export function getAccountCollectionsCollectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.collections)[':collection_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountCollectionsCollectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.collections[':collection_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountCollectionsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.collections)[':collection_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountCollectionsCollectionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account.collections)[':collection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCollectionsCollectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountCollectionsCollectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.collections[':collection_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccountCollectionsCollectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountCollectionsCollectionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAccountCollectionsCollectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountCollectionsCollectionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountCollectionsCollectionIdArticlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.collections)[':collection_id']['articles']['$get']>
  >,
) {
  return ['account', '/account/collections/:collection_id/articles', toValue(args)] as const
}

export function getAccountCollectionsCollectionIdArticlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.collections)[':collection_id']['articles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountCollectionsCollectionIdArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.collections[':collection_id'].articles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountCollectionsCollectionIdArticles<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.collections)[':collection_id']['articles']['$get']>
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
                    (typeof client.account.collections)[':collection_id']['articles']['$get']
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
                    (typeof client.account.collections)[':collection_id']['articles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountCollectionsCollectionIdArticlesQueryKey>
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
            ReturnType<(typeof client.account.collections)[':collection_id']['articles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCollectionsCollectionIdArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountCollectionsCollectionIdArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.collections[':collection_id'].articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccountCollectionsCollectionIdArticles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.account.collections)[':collection_id']['articles']['$put']
          >,
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
  const mutationDefaults = getPutAccountCollectionsCollectionIdArticlesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountCollectionsCollectionIdArticles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountCollectionsCollectionIdArticlesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAccountCollectionsCollectionIdArticlesArticleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountCollectionsCollectionIdArticlesArticleIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountCollectionsCollectionIdAuthorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$get']>
  >,
) {
  return ['account', '/account/collections/:collection_id/authors', toValue(args)] as const
}

export function getAccountCollectionsCollectionIdAuthorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountCollectionsCollectionIdAuthorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.collections[':collection_id'].authors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountCollectionsCollectionIdAuthors<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$get']>
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
                    (typeof client.account.collections)[':collection_id']['authors']['$get']
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
                    (typeof client.account.collections)[':collection_id']['authors']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountCollectionsCollectionIdAuthorsQueryKey>
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
            ReturnType<(typeof client.account.collections)[':collection_id']['authors']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCollectionsCollectionIdAuthorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountCollectionsCollectionIdAuthorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.collections[':collection_id'].authors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccountCollectionsCollectionIdAuthors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.account.collections)[':collection_id']['authors']['$put']
          >,
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
  const mutationDefaults = getPutAccountCollectionsCollectionIdAuthorsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountCollectionsCollectionIdAuthors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.account.collections)[':collection_id']['authors']['$post']
          >,
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
  const mutationDefaults = getPostAccountCollectionsCollectionIdAuthorsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAccountCollectionsCollectionIdAuthorsAuthorId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountCollectionsCollectionIdAuthorsAuthorIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountCollectionsCollectionIdCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.collections)[':collection_id']['categories']['$get']>
  >,
) {
  return ['account', '/account/collections/:collection_id/categories', toValue(args)] as const
}

export function getAccountCollectionsCollectionIdCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.collections)[':collection_id']['categories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountCollectionsCollectionIdCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.collections[':collection_id'].categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountCollectionsCollectionIdCategories<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.collections)[':collection_id']['categories']['$get']>
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
                    (typeof client.account.collections)[':collection_id']['categories']['$get']
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
                    (typeof client.account.collections)[':collection_id']['categories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountCollectionsCollectionIdCategoriesQueryKey>
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
            ReturnType<(typeof client.account.collections)[':collection_id']['categories']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCollectionsCollectionIdCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountCollectionsCollectionIdCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.collections[':collection_id'].categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccountCollectionsCollectionIdCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountCollectionsCollectionIdCategoriesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountCollectionsCollectionIdCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountCollectionsCollectionIdCategoriesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAccountCollectionsCollectionIdCategoriesCategoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAccountCollectionsCollectionIdCategoriesCategoryIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountCollectionsCollectionIdPrivateLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.collections)[':collection_id']['private_links']['$get']>
  >,
) {
  return ['account', '/account/collections/:collection_id/private_links', toValue(args)] as const
}

export function getAccountCollectionsCollectionIdPrivateLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.collections)[':collection_id']['private_links']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountCollectionsCollectionIdPrivateLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.collections[':collection_id'].private_links.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountCollectionsCollectionIdPrivateLinks<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.collections)[':collection_id']['private_links']['$get']>
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
                    (typeof client.account.collections)[':collection_id']['private_links']['$get']
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
                    (typeof client.account.collections)[':collection_id']['private_links']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountCollectionsCollectionIdPrivateLinksQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountCollectionsCollectionIdPrivateLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.collections[':collection_id'].private_links.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountCollectionsCollectionIdPrivateLinks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountCollectionsCollectionIdPrivateLinksMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutAccountCollectionsCollectionIdPrivateLinksLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountCollectionsCollectionIdPrivateLinksLinkIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAccountCollectionsCollectionIdPrivateLinksLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountCollectionsCollectionIdPrivateLinksLinkIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountCollectionsCollectionIdPublish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.account.collections)[':collection_id']['publish']['$post']
          >,
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
  const mutationDefaults = getPostAccountCollectionsCollectionIdPublishMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountCollectionsCollectionIdReserveDoi<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountCollectionsCollectionIdReserveDoiMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountCollectionsCollectionIdReserveHandle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountCollectionsCollectionIdReserveHandleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountCollectionsCollectionIdResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountCollectionsCollectionIdResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountFundingSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.funding.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.funding.search.$post>,
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
  const mutationDefaults = getPostAccountFundingSearchMutationOptions<TError, TOnMutateResult>(
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

export function getAccountInstitutionQueryKey() {
  return ['account', '/account/institution'] as const
}

export function getAccountInstitutionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountInstitutionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.institution.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInstitution<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.$get>>>
            >
          >,
          ReturnType<typeof getAccountInstitutionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountInstitutionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.institution.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountInstitutionAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.institution.accounts.$get>>,
) {
  return ['account', '/account/institution/accounts', toValue(args)] as const
}

export function getAccountInstitutionAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.institution.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountInstitutionAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.institution.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInstitutionAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.institution.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.institution.accounts.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.institution.accounts.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountInstitutionAccountsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountInstitutionAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.institution.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountInstitutionAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountInstitutionAccountsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountInstitutionAccountsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountInstitutionAccountsSearchMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutAccountInstitutionAccountsAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountInstitutionAccountsAccountIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountInstitutionArticlesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.institution.articles.$get>>,
) {
  return ['account', '/account/institution/articles', toValue(args)] as const
}

export function getAccountInstitutionArticlesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.institution.articles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountInstitutionArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.institution.articles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInstitutionArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.articles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.institution.articles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.institution.articles.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.institution.articles.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountInstitutionArticlesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.articles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountInstitutionArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.institution.articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountInstitutionCustomFieldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.institution.custom_fields.$get>>,
) {
  return ['account', '/account/institution/custom_fields', toValue(args)] as const
}

export function getAccountInstitutionCustomFieldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.institution.custom_fields.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountInstitutionCustomFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.institution.custom_fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInstitutionCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.account.institution.custom_fields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.institution.custom_fields.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.institution.custom_fields.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.institution.custom_fields.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountInstitutionCustomFieldsQueryKey>
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
          Awaited<ReturnType<typeof client.account.institution.custom_fields.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionCustomFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountInstitutionCustomFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.institution.custom_fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountInstitutionCustomFieldsCustomFieldIdItemsUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAccountInstitutionCustomFieldsCustomFieldIdItemsUploadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountInstitutionEmbargoOptionsQueryKey() {
  return ['account', '/account/institution/embargo_options'] as const
}

export function getAccountInstitutionEmbargoOptionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountInstitutionEmbargoOptionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.institution.embargo_options.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInstitutionEmbargoOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.account.institution.embargo_options.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.institution.embargo_options.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.institution.embargo_options.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountInstitutionEmbargoOptionsQueryKey>
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
          Awaited<ReturnType<typeof client.account.institution.embargo_options.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionEmbargoOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountInstitutionEmbargoOptionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.institution.embargo_options.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountInstitutionGroupsQueryKey() {
  return ['account', '/account/institution/groups'] as const
}

export function getAccountInstitutionGroupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountInstitutionGroupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.institution.groups.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInstitutionGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.institution.groups.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.institution.groups.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountInstitutionGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.groups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountInstitutionGroupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.institution.groups.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountInstitutionGroupsGroupIdEmbargoOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.account.institution.groups)[':group_id']['embargo_options']['$get']
    >
  >,
) {
  return [
    'account',
    '/account/institution/groups/:group_id/embargo_options',
    toValue(args),
  ] as const
}

export function getAccountInstitutionGroupsGroupIdEmbargoOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.account.institution.groups)[':group_id']['embargo_options']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountInstitutionGroupsGroupIdEmbargoOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.institution.groups[':group_id'].embargo_options.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInstitutionGroupsGroupIdEmbargoOptions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.account.institution.groups)[':group_id']['embargo_options']['$get']
    >
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
                    (typeof client.account.institution.groups)[':group_id']['embargo_options']['$get']
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
                    (typeof client.account.institution.groups)[':group_id']['embargo_options']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountInstitutionGroupsGroupIdEmbargoOptionsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountInstitutionGroupsGroupIdEmbargoOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.institution.groups[':group_id'].embargo_options.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountInstitutionReviewCurationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.institution.review)[':curation_id']['$get']>
  >,
) {
  return ['account', '/account/institution/review/:curation_id', toValue(args)] as const
}

export function getAccountInstitutionReviewCurationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.institution.review)[':curation_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountInstitutionReviewCurationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.institution.review[':curation_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInstitutionReviewCurationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.institution.review)[':curation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.institution.review)[':curation_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.institution.review)[':curation_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountInstitutionReviewCurationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account.institution.review)[':curation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionReviewCurationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountInstitutionReviewCurationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.institution.review[':curation_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountInstitutionReviewCurationIdCommentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.institution.review)[':curation_id']['comments']['$get']>
  >,
) {
  return ['account', '/account/institution/review/:curation_id/comments', toValue(args)] as const
}

export function getAccountInstitutionReviewCurationIdCommentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.institution.review)[':curation_id']['comments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountInstitutionReviewCurationIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.institution.review[':curation_id'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInstitutionReviewCurationIdComments<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.institution.review)[':curation_id']['comments']['$get']>
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
                    (typeof client.account.institution.review)[':curation_id']['comments']['$get']
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
                    (typeof client.account.institution.review)[':curation_id']['comments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountInstitutionReviewCurationIdCommentsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountInstitutionReviewCurationIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.institution.review[':curation_id'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountInstitutionReviewCurationIdComments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountInstitutionReviewCurationIdCommentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountInstitutionReviewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.institution.reviews.$get>>,
) {
  return ['account', '/account/institution/reviews', toValue(args)] as const
}

export function getAccountInstitutionReviewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.institution.reviews.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountInstitutionReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.institution.reviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInstitutionReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.reviews.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.institution.reviews.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.institution.reviews.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.institution.reviews.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountInstitutionReviewsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.reviews.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountInstitutionReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.institution.reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountInstitutionRolesQueryKey() {
  return ['account', '/account/institution/roles'] as const
}

export function getAccountInstitutionRolesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountInstitutionRolesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.institution.roles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInstitutionRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.roles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.institution.roles.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.institution.roles.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountInstitutionRolesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.account.institution.roles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountInstitutionRolesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.institution.roles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountInstitutionRolesAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.institution.roles)[':account_id']['$get']>
  >,
) {
  return ['account', '/account/institution/roles/:account_id', toValue(args)] as const
}

export function getAccountInstitutionRolesAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.institution.roles)[':account_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountInstitutionRolesAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.institution.roles[':account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInstitutionRolesAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.institution.roles)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.institution.roles)[':account_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.institution.roles)[':account_id']['$get']>
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
                  ReturnType<(typeof client.account.institution.roles)[':account_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountInstitutionRolesAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account.institution.roles)[':account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionRolesAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountInstitutionRolesAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.institution.roles[':account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountInstitutionRolesAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.institution.roles)[':account_id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.institution.roles)[':account_id']['$post']>,
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
  const mutationDefaults = getPostAccountInstitutionRolesAccountIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAccountInstitutionRolesAccountIdGroupIdRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountInstitutionRolesAccountIdGroupIdRoleIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountInstitutionUsersAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.institution.users)[':account_id']['$get']>
  >,
) {
  return ['account', '/account/institution/users/:account_id', toValue(args)] as const
}

export function getAccountInstitutionUsersAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.institution.users)[':account_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountInstitutionUsersAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.institution.users[':account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInstitutionUsersAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.institution.users)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.institution.users)[':account_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.institution.users)[':account_id']['$get']>
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
                  ReturnType<(typeof client.account.institution.users)[':account_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountInstitutionUsersAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account.institution.users)[':account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInstitutionUsersAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountInstitutionUsersAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.institution.users[':account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountLicensesQueryKey() {
  return ['account', '/account/licenses'] as const
}

export function getAccountLicensesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountLicensesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.licenses.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountLicenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.licenses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.licenses.$get>>>
            >
          >,
          ReturnType<typeof getAccountLicensesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.licenses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountLicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountLicensesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.licenses.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.projects.$get>>,
) {
  return ['account', '/account/projects', toValue(args)] as const
}

export function getAccountProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.projects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.$get>>>
            >
          >,
          ReturnType<typeof getAccountProjectsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.projects.$post>,
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
  const mutationDefaults = getPostAccountProjectsMutationOptions<TError, TOnMutateResult>(
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

export function usePostAccountProjectsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.projects.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.projects.search.$post>,
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
  const mutationDefaults = getPostAccountProjectsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getAccountProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.projects)[':project_id']['$get']>>,
) {
  return ['account', '/account/projects/:project_id', toValue(args)] as const
}

export function getAccountProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.projects)[':project_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProjectsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.projects[':project_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.projects)[':project_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountProjectsProjectIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account.projects)[':project_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProjectsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProjectsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.projects[':project_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccountProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteAccountProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountProjectsProjectIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountProjectsProjectIdArticlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.projects)[':project_id']['articles']['$get']>
  >,
) {
  return ['account', '/account/projects/:project_id/articles', toValue(args)] as const
}

export function getAccountProjectsProjectIdArticlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.projects)[':project_id']['articles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProjectsProjectIdArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.projects[':project_id'].articles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProjectsProjectIdArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.projects)[':project_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.projects)[':project_id']['articles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.projects)[':project_id']['articles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountProjectsProjectIdArticlesQueryKey>
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
          Awaited<ReturnType<(typeof client.account.projects)[':project_id']['articles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProjectsProjectIdArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProjectsProjectIdArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.projects[':project_id'].articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountProjectsProjectIdArticles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountProjectsProjectIdArticlesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountProjectsProjectIdArticlesArticleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.account.projects)[':project_id']['articles'][':article_id']['$get']
    >
  >,
) {
  return ['account', '/account/projects/:project_id/articles/:article_id', toValue(args)] as const
}

export function getAccountProjectsProjectIdArticlesArticleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.account.projects)[':project_id']['articles'][':article_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProjectsProjectIdArticlesArticleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.projects[':project_id'].articles[':article_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProjectsProjectIdArticlesArticleId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.account.projects)[':project_id']['articles'][':article_id']['$get']
    >
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
                    (typeof client.account.projects)[':project_id']['articles'][':article_id']['$get']
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
                    (typeof client.account.projects)[':project_id']['articles'][':article_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountProjectsProjectIdArticlesArticleIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProjectsProjectIdArticlesArticleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.projects[':project_id'].articles[':article_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountProjectsProjectIdArticlesArticleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountProjectsProjectIdArticlesArticleIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountProjectsProjectIdArticlesArticleIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.account.projects)[':project_id']['articles'][':article_id']['files']['$get']
    >
  >,
) {
  return [
    'account',
    '/account/projects/:project_id/articles/:article_id/files',
    toValue(args),
  ] as const
}

export function getAccountProjectsProjectIdArticlesArticleIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.account.projects)[':project_id']['articles'][':article_id']['files']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProjectsProjectIdArticlesArticleIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.projects[':project_id'].articles[':article_id'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProjectsProjectIdArticlesArticleIdFiles<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.account.projects)[':project_id']['articles'][':article_id']['files']['$get']
    >
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
                    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files']['$get']
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
                    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountProjectsProjectIdArticlesArticleIdFilesQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProjectsProjectIdArticlesArticleIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.projects[':project_id'].articles[':article_id'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountProjectsProjectIdArticlesArticleIdFilesFileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.account.projects)[':project_id']['articles'][':article_id']['files'][':file_id']['$get']
    >
  >,
) {
  return [
    'account',
    '/account/projects/:project_id/articles/:article_id/files/:file_id',
    toValue(args),
  ] as const
}

export function getAccountProjectsProjectIdArticlesArticleIdFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.account.projects)[':project_id']['articles'][':article_id']['files'][':file_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProjectsProjectIdArticlesArticleIdFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.projects[':project_id'].articles[':article_id'].files[':file_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountProjectsProjectIdArticlesArticleIdFilesFileId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.account.projects)[':project_id']['articles'][':article_id']['files'][':file_id']['$get']
    >
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
                    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files'][':file_id']['$get']
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
                    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files'][':file_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountProjectsProjectIdArticlesArticleIdFilesFileIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountProjectsProjectIdArticlesArticleIdFilesFileIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.account.projects[':project_id'].articles[':article_id'].files[':file_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAccountProjectsProjectIdCollaboratorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>
  >,
) {
  return ['account', '/account/projects/:project_id/collaborators', toValue(args)] as const
}

export function getAccountProjectsProjectIdCollaboratorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProjectsProjectIdCollaboratorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.projects[':project_id'].collaborators.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProjectsProjectIdCollaborators<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>
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
                    (typeof client.account.projects)[':project_id']['collaborators']['$get']
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
                    (typeof client.account.projects)[':project_id']['collaborators']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountProjectsProjectIdCollaboratorsQueryKey>
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
            ReturnType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProjectsProjectIdCollaboratorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProjectsProjectIdCollaboratorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.projects[':project_id'].collaborators.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountProjectsProjectIdCollaborators<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.account.projects)[':project_id']['collaborators']['$post']
          >,
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
  const mutationDefaults = getPostAccountProjectsProjectIdCollaboratorsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAccountProjectsProjectIdCollaboratorsUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountProjectsProjectIdCollaboratorsUserIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountProjectsProjectIdLeave<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountProjectsProjectIdLeaveMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountProjectsProjectIdNotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$get']>
  >,
) {
  return ['account', '/account/projects/:project_id/notes', toValue(args)] as const
}

export function getAccountProjectsProjectIdNotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProjectsProjectIdNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.projects[':project_id'].notes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProjectsProjectIdNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.projects)[':project_id']['notes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.projects)[':project_id']['notes']['$get']>
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
                  ReturnType<(typeof client.account.projects)[':project_id']['notes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountProjectsProjectIdNotesQueryKey>
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
          Awaited<ReturnType<(typeof client.account.projects)[':project_id']['notes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProjectsProjectIdNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProjectsProjectIdNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.projects[':project_id'].notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountProjectsProjectIdNotes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.projects)[':project_id']['notes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$post']>,
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
  const mutationDefaults = getPostAccountProjectsProjectIdNotesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountProjectsProjectIdNotesNoteIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']>
  >,
) {
  return ['account', '/account/projects/:project_id/notes/:note_id', toValue(args)] as const
}

export function getAccountProjectsProjectIdNotesNoteIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProjectsProjectIdNotesNoteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.projects[':project_id'].notes[':note_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProjectsProjectIdNotesNoteId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']>
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
                    (typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']
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
                    (typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountProjectsProjectIdNotesNoteIdQueryKey>
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
            ReturnType<(typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProjectsProjectIdNotesNoteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProjectsProjectIdNotesNoteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.projects[':project_id'].notes[':note_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccountProjectsProjectIdNotesNoteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountProjectsProjectIdNotesNoteIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAccountProjectsProjectIdNotesNoteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountProjectsProjectIdNotesNoteIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountProjectsProjectIdPublish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountProjectsProjectIdPublishMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getArticlesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.articles.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['articles', '/articles', keyArgs] as const
}

export function getArticlesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.articles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.articles.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.articles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>
          >,
          ReturnType<typeof getArticlesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.articles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostArticlesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.articles.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.articles.search.$post>,
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
  const mutationDefaults = getPostArticlesSearchMutationOptions<TError, TOnMutateResult>(
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

export function getArticlesArticleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.articles)[':article_id']['$get']>>,
) {
  return ['articles', '/articles/:article_id', toValue(args)] as const
}

export function getArticlesArticleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.articles)[':article_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticlesArticleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.articles[':article_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticlesArticleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.articles)[':article_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArticlesArticleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.articles)[':article_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticlesArticleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.articles[':article_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArticlesArticleIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['files']['$get']>
  >,
) {
  return ['articles', '/articles/:article_id/files', toValue(args)] as const
}

export function getArticlesArticleIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticlesArticleIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.articles[':article_id'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticlesArticleIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.articles)[':article_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.articles)[':article_id']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.articles)[':article_id']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArticlesArticleIdFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.articles)[':article_id']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticlesArticleIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.articles[':article_id'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArticlesArticleIdFilesFileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>
  >,
) {
  return ['articles', '/articles/:article_id/files/:file_id', toValue(args)] as const
}

export function getArticlesArticleIdFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticlesArticleIdFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.articles[':article_id'].files[':file_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticlesArticleIdFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getArticlesArticleIdFilesFileIdQueryKey>
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
          Awaited<ReturnType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticlesArticleIdFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.articles[':article_id'].files[':file_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArticlesArticleIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>
  >,
) {
  return ['articles', '/articles/:article_id/versions', toValue(args)] as const
}

export function getArticlesArticleIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticlesArticleIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.articles[':article_id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticlesArticleIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArticlesArticleIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.articles)[':article_id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticlesArticleIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.articles[':article_id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArticlesArticleIdVersionsVNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>
  >,
) {
  return ['articles', '/articles/:article_id/versions/:v_number', toValue(args)] as const
}

export function getArticlesArticleIdVersionsVNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticlesArticleIdVersionsVNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.articles[':article_id'].versions[':v_number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticlesArticleIdVersionsVNumber<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>
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
                    (typeof client.articles)[':article_id']['versions'][':v_number']['$get']
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
                    (typeof client.articles)[':article_id']['versions'][':v_number']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getArticlesArticleIdVersionsVNumberQueryKey>
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
            ReturnType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesArticleIdVersionsVNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticlesArticleIdVersionsVNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.articles[':article_id'].versions[':v_number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArticlesArticleIdVersionsVNumberConfidentialityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.articles)[':article_id']['versions'][':v_number']['confidentiality']['$get']
    >
  >,
) {
  return [
    'articles',
    '/articles/:article_id/versions/:v_number/confidentiality',
    toValue(args),
  ] as const
}

export function getArticlesArticleIdVersionsVNumberConfidentialityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.articles)[':article_id']['versions'][':v_number']['confidentiality']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticlesArticleIdVersionsVNumberConfidentialityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.articles[':article_id'].versions[':v_number'].confidentiality.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticlesArticleIdVersionsVNumberConfidentiality<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.articles)[':article_id']['versions'][':v_number']['confidentiality']['$get']
    >
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
                    (typeof client.articles)[':article_id']['versions'][':v_number']['confidentiality']['$get']
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
                    (typeof client.articles)[':article_id']['versions'][':v_number']['confidentiality']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getArticlesArticleIdVersionsVNumberConfidentialityQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticlesArticleIdVersionsVNumberConfidentialityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.articles[':article_id'].versions[':v_number'].confidentiality.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArticlesArticleIdVersionsVNumberEmbargoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.articles)[':article_id']['versions'][':v_number']['embargo']['$get']
    >
  >,
) {
  return ['articles', '/articles/:article_id/versions/:v_number/embargo', toValue(args)] as const
}

export function getArticlesArticleIdVersionsVNumberEmbargoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.articles)[':article_id']['versions'][':v_number']['embargo']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticlesArticleIdVersionsVNumberEmbargoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.articles[':article_id'].versions[':v_number'].embargo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticlesArticleIdVersionsVNumberEmbargo<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.articles)[':article_id']['versions'][':v_number']['embargo']['$get']
    >
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
                    (typeof client.articles)[':article_id']['versions'][':v_number']['embargo']['$get']
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
                    (typeof client.articles)[':article_id']['versions'][':v_number']['embargo']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getArticlesArticleIdVersionsVNumberEmbargoQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticlesArticleIdVersionsVNumberEmbargoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.articles[':article_id'].versions[':v_number'].embargo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesQueryKey() {
  return ['categories', '/categories'] as const
}

export function getCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          ReturnType<typeof getCategoriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collections.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['collections', '/collections', keyArgs] as const
}

export function getCollectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
          >,
          ReturnType<typeof getCollectionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCollectionsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.collections.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.collections.search.$post>,
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
  const mutationDefaults = getPostCollectionsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getCollectionsCollectionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collections)[':collection_id']['$get']>>,
) {
  return ['collections', '/collections/:collection_id', toValue(args)] as const
}

export function getCollectionsCollectionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collections)[':collection_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collections)[':collection_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionsCollectionIdArticlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_id']['articles']['$get']>
  >,
) {
  return ['collections', '/collections/:collection_id/articles', toValue(args)] as const
}

export function getCollectionsCollectionIdArticlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_id']['articles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionIdArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_id'].articles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionIdArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_id']['articles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.collections)[':collection_id']['articles']['$get']>
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
                  ReturnType<(typeof client.collections)[':collection_id']['articles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionIdArticlesQueryKey>
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
          Awaited<ReturnType<(typeof client.collections)[':collection_id']['articles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionIdArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_id'].articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionsCollectionIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_id']['versions']['$get']>
  >,
) {
  return ['collections', '/collections/:collection_id/versions', toValue(args)] as const
}

export function getCollectionsCollectionIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_id']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_id']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.collections)[':collection_id']['versions']['$get']>
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
                  ReturnType<(typeof client.collections)[':collection_id']['versions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.collections)[':collection_id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionsCollectionIdVersionsVersionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['versions'][':version_id']['$get']
    >
  >,
) {
  return ['collections', '/collections/:collection_id/versions/:version_id', toValue(args)] as const
}

export function getCollectionsCollectionIdVersionsVersionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['versions'][':version_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionIdVersionsVersionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_id'].versions[':version_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionIdVersionsVersionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['versions'][':version_id']['$get']
    >
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
                    (typeof client.collections)[':collection_id']['versions'][':version_id']['$get']
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
                    (typeof client.collections)[':collection_id']['versions'][':version_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionIdVersionsVersionIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionIdVersionsVersionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_id'].versions[':version_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFileDownloadFileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.file.download)[':file_id']['$get']>>,
) {
  return ['file', '/file/download/:file_id', toValue(args)] as const
}

export function getFileDownloadFileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.file.download)[':file_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileDownloadFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.file.download[':file_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFileDownloadFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.file.download)[':file_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.file.download)[':file_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.file.download)[':file_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.file.download)[':file_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFileDownloadFileIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.file.download)[':file_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileDownloadFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileDownloadFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.file.download[':file_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostInstitutionHrfeedUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.institution.hrfeed.upload.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.institution.hrfeed.upload.$post>,
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
  const mutationDefaults = getPostInstitutionHrfeedUploadMutationOptions<TError, TOnMutateResult>(
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

export function getInstitutionsInstitutionStringIdArticlesFilterByQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.institutions)[':institution_string_id']['articles']['filter-by']['$get']
    >
  >,
) {
  return [
    'institutions',
    '/institutions/:institution_string_id/articles/filter-by',
    toValue(args),
  ] as const
}

export function getInstitutionsInstitutionStringIdArticlesFilterByQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.institutions)[':institution_string_id']['articles']['filter-by']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstitutionsInstitutionStringIdArticlesFilterByQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.institutions[':institution_string_id'].articles['filter-by'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstitutionsInstitutionStringIdArticlesFilterBy<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.institutions)[':institution_string_id']['articles']['filter-by']['$get']
    >
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
                    (typeof client.institutions)[':institution_string_id']['articles']['filter-by']['$get']
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
                    (typeof client.institutions)[':institution_string_id']['articles']['filter-by']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstitutionsInstitutionStringIdArticlesFilterByQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstitutionsInstitutionStringIdArticlesFilterByQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.institutions[':institution_string_id'].articles['filter-by'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item_types.$get>>,
) {
  return ['item_types', '/item_types', toValue(args)] as const
}

export function getItemTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item_types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.item_types.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useItemTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.item_types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_types.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_types.$get>>>>
          >,
          ReturnType<typeof getItemTypesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.item_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLicensesQueryKey() {
  return ['licenses', '/licenses'] as const
}

export function getLicensesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLicensesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.licenses.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLicenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>
          >,
          ReturnType<typeof getLicensesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLicensesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.licenses.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['projects', '/projects', keyArgs] as const
}

export function getProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          ReturnType<typeof getProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.projects.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.projects.search.$post>,
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
  const mutationDefaults = getPostProjectsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':project_id']['$get']>>,
) {
  return ['projects', '/projects/:project_id', toValue(args)] as const
}

export function getProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':project_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':project_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdArticlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['articles']['$get']>
  >,
) {
  return ['projects', '/projects/:project_id/articles', toValue(args)] as const
}

export function getProjectsProjectIdArticlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['articles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id'].articles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['articles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_id']['articles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_id']['articles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdArticlesQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':project_id']['articles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id'].articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
