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

export function getSitesKey() {
  return ['sites'] as const
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

export function getSitesSiteUrlQueryKey(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['$get']>,
) {
  return ['sites', '/sites/:siteUrl', args] as const
}

export function getSitesSiteUrlQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteUrlQueryKey>
  >({
    queryKey: getSitesSiteUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':siteUrl'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSitesSiteUrl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteUrlQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteUrl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteUrlQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSitesSiteUrlMutationKey() {
  return ['sites', '/sites/:siteUrl', 'PUT'] as const
}

export function getPutSitesSiteUrlMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':siteUrl']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteUrlMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':siteUrl']['$put']>) {
      return parseResponse(client.sites[':siteUrl'].$put(args, options))
    },
  })
}

export function usePutSitesSiteUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':siteUrl']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSitesSiteUrlMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSitesSiteUrlMutationKey() {
  return ['sites', '/sites/:siteUrl', 'DELETE'] as const
}

export function getDeleteSitesSiteUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':siteUrl']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteUrlMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':siteUrl']['$delete']>) {
      return parseResponse(client.sites[':siteUrl'].$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':siteUrl']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSitesSiteUrlMutationOptions<TError, TOnMutateResult>(
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

export function getPostSitesSiteUrlSearchAnalyticsQueryMutationKey() {
  return ['sites', '/sites/:siteUrl/searchAnalytics/query', 'POST'] as const
}

export function getPostSitesSiteUrlSearchAnalyticsQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sites)[':siteUrl']['searchAnalytics']['query']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':siteUrl']['searchAnalytics']['query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteUrlSearchAnalyticsQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':siteUrl']['searchAnalytics']['query']['$post']
      >,
    ) {
      return parseResponse(client.sites[':siteUrl'].searchAnalytics.query.$post(args, options))
    },
  })
}

export function usePostSitesSiteUrlSearchAnalyticsQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sites)[':siteUrl']['searchAnalytics']['query']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':siteUrl']['searchAnalytics']['query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSitesSiteUrlSearchAnalyticsQueryMutationOptions<
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

export function getSitesSiteUrlSitemapsQueryKey(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>,
) {
  return ['sites', '/sites/:siteUrl/sitemaps', args] as const
}

export function getSitesSiteUrlSitemapsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteUrlSitemapsQueryKey>
  >({
    queryKey: getSitesSiteUrlSitemapsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':siteUrl'].sitemaps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSitesSiteUrlSitemaps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteUrlSitemapsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteUrlSitemapsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteUrlSitemaps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteUrlSitemapsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteUrlSitemapsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSitesSiteUrlSitemapsFeedpathQueryKey(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>,
) {
  return ['sites', '/sites/:siteUrl/sitemaps/:feedpath', args] as const
}

export function getSitesSiteUrlSitemapsFeedpathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteUrlSitemapsFeedpathQueryKey>
  >({
    queryKey: getSitesSiteUrlSitemapsFeedpathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':siteUrl'].sitemaps[':feedpath'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSitesSiteUrlSitemapsFeedpath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteUrlSitemapsFeedpathQueryKey>
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
      ...getSitesSiteUrlSitemapsFeedpathQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteUrlSitemapsFeedpath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteUrlSitemapsFeedpathQueryKey>
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
      ...getSitesSiteUrlSitemapsFeedpathQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSitesSiteUrlSitemapsFeedpathMutationKey() {
  return ['sites', '/sites/:siteUrl/sitemaps/:feedpath', 'PUT'] as const
}

export function getPutSitesSiteUrlSitemapsFeedpathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteUrlSitemapsFeedpathMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']>,
    ) {
      return parseResponse(client.sites[':siteUrl'].sitemaps[':feedpath'].$put(args, options))
    },
  })
}

export function usePutSitesSiteUrlSitemapsFeedpath<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSitesSiteUrlSitemapsFeedpathMutationOptions<
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

export function getDeleteSitesSiteUrlSitemapsFeedpathMutationKey() {
  return ['sites', '/sites/:siteUrl/sitemaps/:feedpath', 'DELETE'] as const
}

export function getDeleteSitesSiteUrlSitemapsFeedpathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteUrlSitemapsFeedpathMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']>,
    ) {
      return parseResponse(client.sites[':siteUrl'].sitemaps[':feedpath'].$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteUrlSitemapsFeedpath<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSitesSiteUrlSitemapsFeedpathMutationOptions<
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
