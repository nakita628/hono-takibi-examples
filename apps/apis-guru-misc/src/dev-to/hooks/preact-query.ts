import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiAdminUsersMutationKey() {
  return ['api', '/api/admin/users', 'POST'] as const
}

export function getPostApiAdminUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.admin.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.users.$post>) {
      return parseResponse(client.api.admin.users.$post(args, options))
    },
  })
}

export function usePostApiAdminUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.users.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.admin.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminUsersMutationOptions<TError, TOnMutateResult>(
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

export function getApiArticlesQueryKey(args: InferRequestType<typeof client.api.articles.$get>) {
  return ['api', '/api/articles', args] as const
}

export function getApiArticlesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.articles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiArticlesQueryKey>
  >({
    queryKey: getApiArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.articles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.articles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticlesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiArticlesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.articles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticlesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiArticlesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiArticlesMutationKey() {
  return ['api', '/api/articles', 'POST'] as const
}

export function getPostApiArticlesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.articles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiArticlesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.articles.$post>) {
      return parseResponse(client.api.articles.$post(args, options))
    },
  })
}

export function usePostApiArticles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.articles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiArticlesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiArticlesLatestQueryKey(
  args: InferRequestType<typeof client.api.articles.latest.$get>,
) {
  return ['api', '/api/articles/latest', args] as const
}

export function getApiArticlesLatestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.articles.latest.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesLatestQueryKey>
  >({
    queryKey: getApiArticlesLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.articles.latest.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiArticlesLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.articles.latest.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticlesLatestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiArticlesLatestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiArticlesLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.articles.latest.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticlesLatestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiArticlesLatestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiArticlesMeQueryKey(
  args: InferRequestType<typeof client.api.articles.me.$get>,
) {
  return ['api', '/api/articles/me', args] as const
}

export function getApiArticlesMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.articles.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesMeQueryKey>
  >({
    queryKey: getApiArticlesMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.articles.me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiArticlesMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.articles.me.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticlesMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiArticlesMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiArticlesMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.articles.me.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticlesMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiArticlesMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiArticlesMeAllQueryKey(
  args: InferRequestType<typeof client.api.articles.me.all.$get>,
) {
  return ['api', '/api/articles/me/all', args] as const
}

export function getApiArticlesMeAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.articles.me.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesMeAllQueryKey>
  >({
    queryKey: getApiArticlesMeAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.articles.me.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiArticlesMeAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.articles.me.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticlesMeAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiArticlesMeAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiArticlesMeAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.articles.me.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticlesMeAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiArticlesMeAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiArticlesMePublishedQueryKey(
  args: InferRequestType<typeof client.api.articles.me.published.$get>,
) {
  return ['api', '/api/articles/me/published', args] as const
}

export function getApiArticlesMePublishedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.published.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.articles.me.published.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.published.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesMePublishedQueryKey>
  >({
    queryKey: getApiArticlesMePublishedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.articles.me.published.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiArticlesMePublished<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.published.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.articles.me.published.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.published.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticlesMePublishedQueryKey>
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
      ...getApiArticlesMePublishedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiArticlesMePublished<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.published.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.articles.me.published.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.published.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticlesMePublishedQueryKey>
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
      ...getApiArticlesMePublishedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiArticlesMeUnpublishedQueryKey(
  args: InferRequestType<typeof client.api.articles.me.unpublished.$get>,
) {
  return ['api', '/api/articles/me/unpublished', args] as const
}

export function getApiArticlesMeUnpublishedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.articles.me.unpublished.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesMeUnpublishedQueryKey>
  >({
    queryKey: getApiArticlesMeUnpublishedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.articles.me.unpublished.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiArticlesMeUnpublished<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.articles.me.unpublished.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticlesMeUnpublishedQueryKey>
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
      ...getApiArticlesMeUnpublishedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiArticlesMeUnpublished<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.articles.me.unpublished.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticlesMeUnpublishedQueryKey>
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
      ...getApiArticlesMeUnpublishedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiArticlesIdQueryKey(
  args: InferRequestType<(typeof client.api.articles)[':id']['$get']>,
) {
  return ['api', '/api/articles/:id', args] as const
}

export function getApiArticlesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.articles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesIdQueryKey>
  >({
    queryKey: getApiArticlesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.articles[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiArticlesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.articles)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticlesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiArticlesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiArticlesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.articles)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticlesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiArticlesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiArticlesIdMutationKey() {
  return ['api', '/api/articles/:id', 'PUT'] as const
}

export function getPutApiArticlesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.articles)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiArticlesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.articles)[':id']['$put']>) {
      return parseResponse(client.api.articles[':id'].$put(args, options))
    },
  })
}

export function usePutApiArticlesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.articles)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiArticlesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiArticlesIdUnpublishMutationKey() {
  return ['api', '/api/articles/:id/unpublish', 'PUT'] as const
}

export function getPutApiArticlesIdUnpublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.articles)[':id']['unpublish']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.articles)[':id']['unpublish']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiArticlesIdUnpublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.articles)[':id']['unpublish']['$put']>,
    ) {
      return parseResponse(client.api.articles[':id'].unpublish.$put(args, options))
    },
  })
}

export function usePutApiArticlesIdUnpublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.articles)[':id']['unpublish']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.articles)[':id']['unpublish']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiArticlesIdUnpublishMutationOptions<TError, TOnMutateResult>(
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

export function getApiArticlesUsernameSlugQueryKey(
  args: InferRequestType<(typeof client.api.articles)[':username'][':slug']['$get']>,
) {
  return ['api', '/api/articles/:username/:slug', args] as const
}

export function getApiArticlesUsernameSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.articles)[':username'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesUsernameSlugQueryKey>
  >({
    queryKey: getApiArticlesUsernameSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.articles[':username'][':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiArticlesUsernameSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.articles)[':username'][':slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticlesUsernameSlugQueryKey>
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
      ...getApiArticlesUsernameSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiArticlesUsernameSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.articles)[':username'][':slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticlesUsernameSlugQueryKey>
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
      ...getApiArticlesUsernameSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCommentsQueryKey(args: InferRequestType<typeof client.api.comments.$get>) {
  return ['api', '/api/comments', args] as const
}

export function getApiCommentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.comments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiCommentsQueryKey>
  >({
    queryKey: getApiCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.comments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.comments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.comments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiCommentsIdQueryKey(
  args: InferRequestType<(typeof client.api.comments)[':id']['$get']>,
) {
  return ['api', '/api/comments/:id', args] as const
}

export function getApiCommentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.comments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCommentsIdQueryKey>
  >({
    queryKey: getApiCommentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.comments[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiCommentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.comments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCommentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiCommentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiCommentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.comments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCommentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiCommentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiDisplayAdsQueryKey() {
  return ['api', '/api/display_ads'] as const
}

export function getApiDisplayAdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDisplayAdsQueryKey>
  >({
    queryKey: getApiDisplayAdsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.display_ads.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiDisplayAds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiDisplayAdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiDisplayAdsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiDisplayAds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiDisplayAdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiDisplayAdsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiDisplayAdsMutationKey() {
  return ['api', '/api/display_ads', 'POST'] as const
}

export function getPostApiDisplayAdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.display_ads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDisplayAdsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.display_ads.$post>) {
      return parseResponse(client.api.display_ads.$post(args, options))
    },
  })
}

export function usePostApiDisplayAds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.display_ads.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiDisplayAdsMutationOptions<TError, TOnMutateResult>(
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

export function getApiDisplayAdsIdQueryKey(
  args: InferRequestType<(typeof client.api.display_ads)[':id']['$get']>,
) {
  return ['api', '/api/display_ads/:id', args] as const
}

export function getApiDisplayAdsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.display_ads)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDisplayAdsIdQueryKey>
  >({
    queryKey: getApiDisplayAdsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.display_ads[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDisplayAdsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.display_ads)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDisplayAdsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiDisplayAdsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiDisplayAdsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.display_ads)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDisplayAdsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiDisplayAdsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiDisplayAdsIdMutationKey() {
  return ['api', '/api/display_ads/:id', 'PUT'] as const
}

export function getPutApiDisplayAdsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.display_ads)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiDisplayAdsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.display_ads)[':id']['$put']>) {
      return parseResponse(client.api.display_ads[':id'].$put(args, options))
    },
  })
}

export function usePutApiDisplayAdsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.display_ads)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiDisplayAdsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiDisplayAdsIdUnpublishMutationKey() {
  return ['api', '/api/display_ads/:id/unpublish', 'PUT'] as const
}

export function getPutApiDisplayAdsIdUnpublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.display_ads)[':id']['unpublish']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.display_ads)[':id']['unpublish']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiDisplayAdsIdUnpublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.display_ads)[':id']['unpublish']['$put']>,
    ) {
      return parseResponse(client.api.display_ads[':id'].unpublish.$put(args, options))
    },
  })
}

export function usePutApiDisplayAdsIdUnpublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.display_ads)[':id']['unpublish']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.display_ads)[':id']['unpublish']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiDisplayAdsIdUnpublishMutationOptions<TError, TOnMutateResult>(
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

export function getApiFollowersUsersQueryKey(
  args: InferRequestType<typeof client.api.followers.users.$get>,
) {
  return ['api', '/api/followers/users', args] as const
}

export function getApiFollowersUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.followers.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiFollowersUsersQueryKey>
  >({
    queryKey: getApiFollowersUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.followers.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiFollowersUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.followers.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFollowersUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFollowersUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFollowersUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.followers.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFollowersUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFollowersUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiFollowsTagsQueryKey() {
  return ['api', '/api/follows/tags'] as const
}

export function getApiFollowsTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiFollowsTagsQueryKey>
  >({
    queryKey: getApiFollowsTagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.follows.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiFollowsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiFollowsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFollowsTagsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFollowsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiFollowsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFollowsTagsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiOrganizationsUsernameQueryKey(
  args: InferRequestType<(typeof client.api.organizations)[':username']['$get']>,
) {
  return ['api', '/api/organizations/:username', args] as const
}

export function getApiOrganizationsUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsUsernameQueryKey>
  >({
    queryKey: getApiOrganizationsUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiOrganizationsUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsUsernameQueryKey>
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
      ...getApiOrganizationsUsernameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiOrganizationsUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsUsernameQueryKey>
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
      ...getApiOrganizationsUsernameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiOrganizationsUsernameArticlesQueryKey(
  args: InferRequestType<(typeof client.api.organizations)[':username']['articles']['$get']>,
) {
  return ['api', '/api/organizations/:username/articles', args] as const
}

export function getApiOrganizationsUsernameArticlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsUsernameArticlesQueryKey>
  >({
    queryKey: getApiOrganizationsUsernameArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':username'].articles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiOrganizationsUsernameArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['articles']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsUsernameArticlesQueryKey>
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
      ...getApiOrganizationsUsernameArticlesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiOrganizationsUsernameArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['articles']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsUsernameArticlesQueryKey>
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
      ...getApiOrganizationsUsernameArticlesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiOrganizationsUsernameUsersQueryKey(
  args: InferRequestType<(typeof client.api.organizations)[':username']['users']['$get']>,
) {
  return ['api', '/api/organizations/:username/users', args] as const
}

export function getApiOrganizationsUsernameUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsUsernameUsersQueryKey>
  >({
    queryKey: getApiOrganizationsUsernameUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':username'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiOrganizationsUsernameUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['users']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsUsernameUsersQueryKey>
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
      ...getApiOrganizationsUsernameUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiOrganizationsUsernameUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['users']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsUsernameUsersQueryKey>
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
      ...getApiOrganizationsUsernameUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPagesQueryKey() {
  return ['api', '/api/pages'] as const
}

export function getApiPagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPagesQueryKey>
  >({
    queryKey: getApiPagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPagesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPagesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiPagesMutationKey() {
  return ['api', '/api/pages', 'POST'] as const
}

export function getPostApiPagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.pages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.pages.$post>) {
      return parseResponse(client.api.pages.$post(args, options))
    },
  })
}

export function usePostApiPages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.pages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiPagesIdQueryKey(
  args: InferRequestType<(typeof client.api.pages)[':id']['$get']>,
) {
  return ['api', '/api/pages/:id', args] as const
}

export function getApiPagesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPagesIdQueryKey>
  >({
    queryKey: getApiPagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pages[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pages)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPagesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPagesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pages)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPagesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPagesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiPagesIdMutationKey() {
  return ['api', '/api/pages/:id', 'PUT'] as const
}

export function getPutApiPagesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pages)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.pages)[':id']['$put']>) {
      return parseResponse(client.api.pages[':id'].$put(args, options))
    },
  })
}

export function usePutApiPagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.pages)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPagesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiPagesIdMutationKey() {
  return ['api', '/api/pages/:id', 'DELETE'] as const
}

export function getDeleteApiPagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pages)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.pages)[':id']['$delete']>) {
      return parseResponse(client.api.pages[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiPagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.pages)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPagesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiPodcastEpisodesQueryKey(
  args: InferRequestType<typeof client.api.podcast_episodes.$get>,
) {
  return ['api', '/api/podcast_episodes', args] as const
}

export function getApiPodcastEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.podcast_episodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPodcastEpisodesQueryKey>
  >({
    queryKey: getApiPodcastEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.podcast_episodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPodcastEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.podcast_episodes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPodcastEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPodcastEpisodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPodcastEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.podcast_episodes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPodcastEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPodcastEpisodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiProfileImagesUsernameQueryKey(
  args: InferRequestType<(typeof client.api.profile_images)[':username']['$get']>,
) {
  return ['api', '/api/profile_images/:username', args] as const
}

export function getApiProfileImagesUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.profile_images)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProfileImagesUsernameQueryKey>
  >({
    queryKey: getApiProfileImagesUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.profile_images[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiProfileImagesUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.profile_images)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProfileImagesUsernameQueryKey>
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
      ...getApiProfileImagesUsernameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiProfileImagesUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.profile_images)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProfileImagesUsernameQueryKey>
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
      ...getApiProfileImagesUsernameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiReactionsMutationKey() {
  return ['api', '/api/reactions', 'POST'] as const
}

export function getPostApiReactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.reactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiReactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.reactions.$post>) {
      return parseResponse(client.api.reactions.$post(args, options))
    },
  })
}

export function usePostApiReactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.reactions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiReactionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiReactionsToggleMutationKey() {
  return ['api', '/api/reactions/toggle', 'POST'] as const
}

export function getPostApiReactionsToggleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.reactions.toggle.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.reactions.toggle.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiReactionsToggleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.reactions.toggle.$post>) {
      return parseResponse(client.api.reactions.toggle.$post(args, options))
    },
  })
}

export function usePostApiReactionsToggle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.reactions.toggle.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.reactions.toggle.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiReactionsToggleMutationOptions<TError, TOnMutateResult>(
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

export function getApiReadinglistQueryKey(
  args: InferRequestType<typeof client.api.readinglist.$get>,
) {
  return ['api', '/api/readinglist', args] as const
}

export function getApiReadinglistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.readinglist.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiReadinglistQueryKey>
  >({
    queryKey: getApiReadinglistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.readinglist.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiReadinglist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.readinglist.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiReadinglistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiReadinglistQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiReadinglist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.readinglist.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiReadinglistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiReadinglistQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTagsQueryKey(args: InferRequestType<typeof client.api.tags.$get>) {
  return ['api', '/api/tags', args] as const
}

export function getApiTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTagsQueryKey>
  >({
    queryKey: getApiTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tags.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tags.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiUsersMeQueryKey() {
  return ['api', '/api/users/me'] as const
}

export function getApiUsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsersMeQueryKey>
  >({
    queryKey: getApiUsersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUsersMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUsersMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiUsersIdQueryKey(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
) {
  return ['api', '/api/users/:id', args] as const
}

export function getApiUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdQueryKey>
  >({
    queryKey: getApiUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiUsersIdSuspendMutationKey() {
  return ['api', '/api/users/:id/suspend', 'PUT'] as const
}

export function getPutApiUsersIdSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':id']['suspend']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.users)[':id']['suspend']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiUsersIdSuspendMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.users)[':id']['suspend']['$put']>) {
      return parseResponse(client.api.users[':id'].suspend.$put(args, options))
    },
  })
}

export function usePutApiUsersIdSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['suspend']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.users)[':id']['suspend']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiUsersIdSuspendMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiUsersIdUnpublishMutationKey() {
  return ['api', '/api/users/:id/unpublish', 'PUT'] as const
}

export function getPutApiUsersIdUnpublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':id']['unpublish']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.users)[':id']['unpublish']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiUsersIdUnpublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users)[':id']['unpublish']['$put']>,
    ) {
      return parseResponse(client.api.users[':id'].unpublish.$put(args, options))
    },
  })
}

export function usePutApiUsersIdUnpublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['unpublish']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.users)[':id']['unpublish']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiUsersIdUnpublishMutationOptions<TError, TOnMutateResult>(
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

export function getApiVideosQueryKey(args: InferRequestType<typeof client.api.videos.$get>) {
  return ['api', '/api/videos', args] as const
}

export function getApiVideosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.videos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiVideosQueryKey>
  >({
    queryKey: getApiVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.videos.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.videos.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
