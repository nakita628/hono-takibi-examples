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

export function getPutApiArticleMutationKey() {
  return ['api', '/api/Article', 'PUT'] as const
}

export function getPutApiArticleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.$put>>>>>,
    TError,
    InferRequestType<typeof client.api.Article.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiArticleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Article.$put>) {
      return parseResponse(client.api.Article.$put(args, options))
    },
  })
}

export function usePutApiArticle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.api.Article.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiArticleMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiArticleMutationKey() {
  return ['api', '/api/Article', 'POST'] as const
}

export function getPostApiArticleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.Article.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiArticleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Article.$post>) {
      return parseResponse(client.api.Article.$post(args, options))
    },
  })
}

export function usePostApiArticle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.Article.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiArticleMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiArticleMutationKey() {
  return ['api', '/api/Article', 'DELETE'] as const
}

export function getDeleteApiArticleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.Article.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiArticleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Article.$delete>) {
      return parseResponse(client.api.Article.$delete(args, options))
    },
  })
}

export function useDeleteApiArticle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.api.Article.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiArticleMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiArticleArticleGymDetailsMutationKey() {
  return ['api', '/api/Article/ArticleGymDetails', 'PUT'] as const
}

export function getPutApiArticleArticleGymDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.ArticleGymDetails.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.Article.ArticleGymDetails.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiArticleArticleGymDetailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Article.ArticleGymDetails.$put>) {
      return parseResponse(client.api.Article.ArticleGymDetails.$put(args, options))
    },
  })
}

export function usePutApiArticleArticleGymDetails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.Article.ArticleGymDetails.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.Article.ArticleGymDetails.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiArticleArticleGymDetailsMutationOptions<
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

export function getApiArticleGetAddonsQueryKey(
  args: InferRequestType<typeof client.api.Article.GetAddons.$get>,
) {
  return ['api', '/api/Article/GetAddons', args] as const
}

export function getApiArticleGetAddonsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.GetAddons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Article.GetAddons.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.GetAddons.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticleGetAddonsQueryKey>
  >({
    queryKey: getApiArticleGetAddonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Article.GetAddons.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiArticleGetAddons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.GetAddons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Article.GetAddons.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.GetAddons.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticleGetAddonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiArticleGetAddonsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiArticleGetAddons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.GetAddons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Article.GetAddons.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.GetAddons.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticleGetAddonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiArticleGetAddonsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiArticleGymArticleArticleIdGymIdQueryKey(
  args: InferRequestType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>,
) {
  return ['api', '/api/Article/GymArticle/:articleId/:gymId', args] as const
}

export function getApiArticleGymArticleArticleIdGymIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticleGymArticleArticleIdGymIdQueryKey>
  >({
    queryKey: getApiArticleGymArticleArticleIdGymIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Article.GymArticle[':articleId'][':gymId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiArticleGymArticleArticleIdGymId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticleGymArticleArticleIdGymIdQueryKey>
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
      ...getApiArticleGymArticleArticleIdGymIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiArticleGymArticleArticleIdGymId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticleGymArticleArticleIdGymIdQueryKey>
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
      ...getApiArticleGymArticleArticleIdGymIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiArticleMeasureUnitMutationKey() {
  return ['api', '/api/Article/MeasureUnit', 'POST'] as const
}

export function getPostApiArticleMeasureUnitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.MeasureUnit.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.Article.MeasureUnit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiArticleMeasureUnitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Article.MeasureUnit.$post>) {
      return parseResponse(client.api.Article.MeasureUnit.$post(args, options))
    },
  })
}

export function usePostApiArticleMeasureUnit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.MeasureUnit.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.Article.MeasureUnit.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiArticleMeasureUnitMutationOptions<TError, TOnMutateResult>(
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

export function getApiArticleMeasureUnitsQueryKey(
  args: InferRequestType<typeof client.api.Article.MeasureUnits.$get>,
) {
  return ['api', '/api/Article/MeasureUnits', args] as const
}

export function getApiArticleMeasureUnitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.MeasureUnits.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Article.MeasureUnits.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.MeasureUnits.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticleMeasureUnitsQueryKey>
  >({
    queryKey: getApiArticleMeasureUnitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Article.MeasureUnits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiArticleMeasureUnits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.MeasureUnits.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Article.MeasureUnits.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.MeasureUnits.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticleMeasureUnitsQueryKey>
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
      ...getApiArticleMeasureUnitsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiArticleMeasureUnits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.MeasureUnits.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Article.MeasureUnits.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.MeasureUnits.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticleMeasureUnitsQueryKey>
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
      ...getApiArticleMeasureUnitsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiArticleRevenueAccountsQueryKey() {
  return ['api', '/api/Article/RevenueAccounts'] as const
}

export function getApiArticleRevenueAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.RevenueAccounts.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.RevenueAccounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticleRevenueAccountsQueryKey>
  >({
    queryKey: getApiArticleRevenueAccountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Article.RevenueAccounts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiArticleRevenueAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.RevenueAccounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.Article.RevenueAccounts.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticleRevenueAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiArticleRevenueAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiArticleRevenueAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.RevenueAccounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.Article.RevenueAccounts.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticleRevenueAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiArticleRevenueAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiArticleSearchQueryKey(
  args: InferRequestType<typeof client.api.Article.Search.$get>,
) {
  return ['api', '/api/Article/Search', args] as const
}

export function getApiArticleSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.Search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Article.Search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.Search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticleSearchQueryKey>
  >({
    queryKey: getApiArticleSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Article.Search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiArticleSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.Search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Article.Search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.Search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticleSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiArticleSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiArticleSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.Search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Article.Search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.Search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticleSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiArticleSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiArticleUpdateStatusMutationKey() {
  return ['api', '/api/Article/UpdateStatus', 'PUT'] as const
}

export function getPutApiArticleUpdateStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.UpdateStatus.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.Article.UpdateStatus.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiArticleUpdateStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Article.UpdateStatus.$put>) {
      return parseResponse(client.api.Article.UpdateStatus.$put(args, options))
    },
  })
}

export function usePutApiArticleUpdateStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.UpdateStatus.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.Article.UpdateStatus.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiArticleUpdateStatusMutationOptions<TError, TOnMutateResult>(
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

export function getApiArticleArticleIDQueryKey(
  args: InferRequestType<(typeof client.api.Article)[':articleID']['$get']>,
) {
  return ['api', '/api/Article/:articleID', args] as const
}

export function getApiArticleArticleIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Article)[':articleID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Article)[':articleID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Article)[':articleID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticleArticleIDQueryKey>
  >({
    queryKey: getApiArticleArticleIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Article[':articleID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiArticleArticleID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Article)[':articleID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Article)[':articleID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Article)[':articleID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticleArticleIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiArticleArticleIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiArticleArticleID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Article)[':articleID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Article)[':articleID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Article)[':articleID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArticleArticleIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiArticleArticleIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAuthLoginMutationKey() {
  return ['api', '/api/Auth/login', 'POST'] as const
}

export function getPostApiAuthLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Auth.login.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.Auth.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAuthLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Auth.login.$post>) {
      return parseResponse(client.api.Auth.login.$post(args, options))
    },
  })
}

export function usePostApiAuthLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Auth.login.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.Auth.login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAuthLoginMutationOptions<TError, TOnMutateResult>(
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

export function getApiGymGymIDQueryKey(
  args: InferRequestType<(typeof client.api.Gym)[':gymID']['$get']>,
) {
  return ['api', '/api/Gym/:gymID', args] as const
}

export function getApiGymGymIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Gym)[':gymID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Gym)[':gymID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Gym)[':gymID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGymGymIDQueryKey>
  >({
    queryKey: getApiGymGymIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Gym[':gymID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiGymGymID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Gym)[':gymID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Gym)[':gymID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Gym)[':gymID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGymGymIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiGymGymIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiGymGymID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Gym)[':gymID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Gym)[':gymID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Gym)[':gymID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGymGymIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiGymGymIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMembershipQueryKey() {
  return ['api', '/api/Membership'] as const
}

export function getApiMembershipQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Membership.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Membership.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiMembershipQueryKey>
  >({
    queryKey: getApiMembershipQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Membership.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiMembership<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Membership.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Membership.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembershipQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMembershipQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMembership<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Membership.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Membership.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiMembershipQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMembershipQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiMembershipMutationKey() {
  return ['api', '/api/Membership', 'POST'] as const
}

export function getPostApiMembershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Membership.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.Membership.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMembershipMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Membership.$post>) {
      return parseResponse(client.api.Membership.$post(args, options))
    },
  })
}

export function usePostApiMembership<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Membership.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.Membership.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiMembershipMutationOptions<TError, TOnMutateResult>(
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

export function getApiPackageQueryKey(args: InferRequestType<typeof client.api.Package.$get>) {
  return ['api', '/api/Package', args] as const
}

export function getApiPackageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Package.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPackageQueryKey>
  >({
    queryKey: getApiPackageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Package.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPackage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Package.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPackageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPackageQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPackage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Package.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPackageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPackageQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiPackageMutationKey() {
  return ['api', '/api/Package', 'PUT'] as const
}

export function getPutApiPackageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$put>>>>>,
    TError,
    InferRequestType<typeof client.api.Package.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPackageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Package.$put>) {
      return parseResponse(client.api.Package.$put(args, options))
    },
  })
}

export function usePutApiPackage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.api.Package.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPackageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiPackageMutationKey() {
  return ['api', '/api/Package', 'POST'] as const
}

export function getPostApiPackageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.Package.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPackageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Package.$post>) {
      return parseResponse(client.api.Package.$post(args, options))
    },
  })
}

export function usePostApiPackage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.Package.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPackageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiPackageMutationKey() {
  return ['api', '/api/Package', 'DELETE'] as const
}

export function getDeleteApiPackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.Package.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPackageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Package.$delete>) {
      return parseResponse(client.api.Package.$delete(args, options))
    },
  })
}

export function useDeleteApiPackage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.api.Package.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPackageMutationOptions<TError, TOnMutateResult>(
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

export function getApiPackageSearchQueryKey(
  args: InferRequestType<typeof client.api.Package.Search.$get>,
) {
  return ['api', '/api/Package/Search', args] as const
}

export function getApiPackageSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.Search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Package.Search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.Search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPackageSearchQueryKey>
  >({
    queryKey: getApiPackageSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Package.Search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPackageSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.Search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Package.Search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.Search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPackageSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPackageSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPackageSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.Search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Package.Search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.Search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPackageSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPackageSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiPackageUpdateStatusMutationKey() {
  return ['api', '/api/Package/UpdateStatus', 'PUT'] as const
}

export function getPutApiPackageUpdateStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.UpdateStatus.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.Package.UpdateStatus.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPackageUpdateStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.Package.UpdateStatus.$put>) {
      return parseResponse(client.api.Package.UpdateStatus.$put(args, options))
    },
  })
}

export function usePutApiPackageUpdateStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.UpdateStatus.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.Package.UpdateStatus.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPackageUpdateStatusMutationOptions<TError, TOnMutateResult>(
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

export function getApiStatusQueryKey(args: InferRequestType<typeof client.api.Status.$get>) {
  return ['api', '/api/Status', args] as const
}

export function getApiStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiStatusQueryKey>
  >({
    queryKey: getApiStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTestQueryKey() {
  return ['api', '/api/Test'] as const
}

export function getApiTestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Test.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Test.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTestQueryKey>
  >({
    queryKey: getApiTestQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Test.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Test.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Test.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiTestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTestQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Test.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Test.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiTestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTestQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiUserQueryKey() {
  return ['api', '/api/User'] as const
}

export function getApiUserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUserQueryKey>
  >({
    queryKey: getApiUserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.User.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUserQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUserQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiUserRegisterUserMutationKey() {
  return ['api', '/api/User/registerUser', 'POST'] as const
}

export function getPostApiUserRegisterUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.User.registerUser.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.User.registerUser.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserRegisterUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.User.registerUser.$post>) {
      return parseResponse(client.api.User.registerUser.$post(args, options))
    },
  })
}

export function usePostApiUserRegisterUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.User.registerUser.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.User.registerUser.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUserRegisterUserMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiUserUpdateuserMutationKey() {
  return ['api', '/api/User/updateuser', 'PUT'] as const
}

export function getPutApiUserUpdateuserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.updateuser.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.User.updateuser.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiUserUpdateuserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.User.updateuser.$put>) {
      return parseResponse(client.api.User.updateuser.$put(args, options))
    },
  })
}

export function usePutApiUserUpdateuser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.User.updateuser.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.User.updateuser.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiUserUpdateuserMutationOptions<TError, TOnMutateResult>(
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
