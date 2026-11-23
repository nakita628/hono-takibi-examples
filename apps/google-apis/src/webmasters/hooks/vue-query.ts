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

export function getSitesKey() {
  return ['sites'] as const
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

export function getSitesSiteUrlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteUrl']['$get']>>,
) {
  return ['sites', '/sites/:siteUrl', toValue(args)] as const
}

export function getSitesSiteUrlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteUrl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':siteUrl'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteUrl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteUrl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$get']>>>
            >
          >,
          ReturnType<typeof getSitesSiteUrlQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':siteUrl'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':siteUrl']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>>,
) {
  return ['sites', '/sites/:siteUrl/sitemaps', toValue(args)] as const
}

export function getSitesSiteUrlSitemapsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteUrlSitemapsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':siteUrl'].sitemaps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteUrlSitemapsQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteUrlSitemapsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteUrlSitemapsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':siteUrl'].sitemaps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSiteUrlSitemapsFeedpathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>
  >,
) {
  return ['sites', '/sites/:siteUrl/sitemaps/:feedpath', toValue(args)] as const
}

export function getSitesSiteUrlSitemapsFeedpathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteUrlSitemapsFeedpathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':siteUrl'].sitemaps[':feedpath'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteUrlSitemapsFeedpathQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteUrlSitemapsFeedpathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteUrlSitemapsFeedpathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':siteUrl'].sitemaps[':feedpath'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
