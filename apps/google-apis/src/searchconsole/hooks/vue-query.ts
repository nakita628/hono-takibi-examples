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

export function getV1Key() {
  return ['v1'] as const
}

export function getWebmastersKey() {
  return ['webmasters'] as const
}

export function getPostV1UrlInspectionIndexInspectMutationKey() {
  return ['v1', '/v1/urlInspection/index:inspect', 'POST'] as const
}

export function getPostV1UrlInspectionIndexInspectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.urlInspection)['index:inspect']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.urlInspection)['index:inspect']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UrlInspectionIndexInspectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.urlInspection)['index:inspect']['$post']>,
    ) {
      return parseResponse(client.v1.urlInspection['index:inspect'].$post(args, options))
    },
  })
}

export function usePostV1UrlInspectionIndexInspect<
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
                Awaited<ReturnType<(typeof client.v1.urlInspection)['index:inspect']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.urlInspection)['index:inspect']['$post']>,
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
  const mutationDefaults = getPostV1UrlInspectionIndexInspectMutationOptions<
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

export function getPostV1UrlTestingToolsMobileFriendlyTestRunMutationKey() {
  return ['v1', '/v1/urlTestingTools/mobileFriendlyTest:run', 'POST'] as const
}

export function getPostV1UrlTestingToolsMobileFriendlyTestRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.urlTestingTools)['mobileFriendlyTest:run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.urlTestingTools)['mobileFriendlyTest:run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UrlTestingToolsMobileFriendlyTestRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.urlTestingTools)['mobileFriendlyTest:run']['$post']>,
    ) {
      return parseResponse(client.v1.urlTestingTools['mobileFriendlyTest:run'].$post(args, options))
    },
  })
}

export function usePostV1UrlTestingToolsMobileFriendlyTestRun<
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
                  ReturnType<(typeof client.v1.urlTestingTools)['mobileFriendlyTest:run']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.urlTestingTools)['mobileFriendlyTest:run']['$post']>,
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
  const mutationDefaults = getPostV1UrlTestingToolsMobileFriendlyTestRunMutationOptions<
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

export function getWebmastersV3SitesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webmasters.v3.sites.$get>>,
) {
  return ['webmasters', '/webmasters/v3/sites', toValue(args)] as const
}

export function getWebmastersV3SitesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webmasters.v3.sites.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebmastersV3SitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webmasters.v3.sites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebmastersV3Sites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webmasters.v3.sites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webmasters.v3.sites.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webmasters.v3.sites.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webmasters.v3.sites.$get>>>
            >
          >,
          ReturnType<typeof getWebmastersV3SitesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webmasters.v3.sites.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebmastersV3SitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebmastersV3SitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webmasters.v3.sites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebmastersV3SitesSiteUrlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>>,
) {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl', toValue(args)] as const
}

export function getWebmastersV3SitesSiteUrlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebmastersV3SitesSiteUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webmasters.v3.sites[':siteUrl'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebmastersV3SitesSiteUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebmastersV3SitesSiteUrlQueryKey>
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
          Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebmastersV3SitesSiteUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebmastersV3SitesSiteUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webmasters.v3.sites[':siteUrl'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWebmastersV3SitesSiteUrlMutationKey() {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl', 'PUT'] as const
}

export function getPutWebmastersV3SitesSiteUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebmastersV3SitesSiteUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$put']>,
    ) {
      return parseResponse(client.webmasters.v3.sites[':siteUrl'].$put(args, options))
    },
  })
}

export function usePutWebmastersV3SitesSiteUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$put']>,
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
  const mutationDefaults = getPutWebmastersV3SitesSiteUrlMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWebmastersV3SitesSiteUrlMutationKey() {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl', 'DELETE'] as const
}

export function getDeleteWebmastersV3SitesSiteUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebmastersV3SitesSiteUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$delete']>,
    ) {
      return parseResponse(client.webmasters.v3.sites[':siteUrl'].$delete(args, options))
    },
  })
}

export function useDeleteWebmastersV3SitesSiteUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$delete']>,
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
  const mutationDefaults = getDeleteWebmastersV3SitesSiteUrlMutationOptions<
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

export function getPostWebmastersV3SitesSiteUrlSearchAnalyticsQueryMutationKey() {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl/searchAnalytics/query', 'POST'] as const
}

export function getPostWebmastersV3SitesSiteUrlSearchAnalyticsQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.webmasters.v3.sites)[':siteUrl']['searchAnalytics']['query']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.webmasters.v3.sites)[':siteUrl']['searchAnalytics']['query']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWebmastersV3SitesSiteUrlSearchAnalyticsQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webmasters.v3.sites)[':siteUrl']['searchAnalytics']['query']['$post']
      >,
    ) {
      return parseResponse(
        client.webmasters.v3.sites[':siteUrl'].searchAnalytics.query.$post(args, options),
      )
    },
  })
}

export function usePostWebmastersV3SitesSiteUrlSearchAnalyticsQuery<
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
                    (typeof client.webmasters.v3.sites)[':siteUrl']['searchAnalytics']['query']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.webmasters.v3.sites)[':siteUrl']['searchAnalytics']['query']['$post']
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
  const mutationDefaults = getPostWebmastersV3SitesSiteUrlSearchAnalyticsQueryMutationOptions<
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

export function getWebmastersV3SitesSiteUrlSitemapsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>
  >,
) {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl/sitemaps', toValue(args)] as const
}

export function getWebmastersV3SitesSiteUrlSitemapsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebmastersV3SitesSiteUrlSitemapsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webmasters.v3.sites[':siteUrl'].sitemaps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebmastersV3SitesSiteUrlSitemaps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>
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
                  ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWebmastersV3SitesSiteUrlSitemapsQueryKey>
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
          Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebmastersV3SitesSiteUrlSitemapsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebmastersV3SitesSiteUrlSitemapsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webmasters.v3.sites[':siteUrl'].sitemaps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebmastersV3SitesSiteUrlSitemapsFeedpathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']
    >
  >,
) {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl/sitemaps/:feedpath', toValue(args)] as const
}

export function getWebmastersV3SitesSiteUrlSitemapsFeedpathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebmastersV3SitesSiteUrlSitemapsFeedpathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webmasters.v3.sites[':siteUrl'].sitemaps[':feedpath'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebmastersV3SitesSiteUrlSitemapsFeedpath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']
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
                    (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']
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
                    (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebmastersV3SitesSiteUrlSitemapsFeedpathQueryKey>
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
              (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebmastersV3SitesSiteUrlSitemapsFeedpathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebmastersV3SitesSiteUrlSitemapsFeedpathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webmasters.v3.sites[':siteUrl'].sitemaps[':feedpath'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWebmastersV3SitesSiteUrlSitemapsFeedpathMutationKey() {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl/sitemaps/:feedpath', 'PUT'] as const
}

export function getPutWebmastersV3SitesSiteUrlSitemapsFeedpathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutWebmastersV3SitesSiteUrlSitemapsFeedpathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']
      >,
    ) {
      return parseResponse(
        client.webmasters.v3.sites[':siteUrl'].sitemaps[':feedpath'].$put(args, options),
      )
    },
  })
}

export function usePutWebmastersV3SitesSiteUrlSitemapsFeedpath<
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
                    (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']
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
  const mutationDefaults = getPutWebmastersV3SitesSiteUrlSitemapsFeedpathMutationOptions<
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

export function getDeleteWebmastersV3SitesSiteUrlSitemapsFeedpathMutationKey() {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl/sitemaps/:feedpath', 'DELETE'] as const
}

export function getDeleteWebmastersV3SitesSiteUrlSitemapsFeedpathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebmastersV3SitesSiteUrlSitemapsFeedpathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']
      >,
    ) {
      return parseResponse(
        client.webmasters.v3.sites[':siteUrl'].sitemaps[':feedpath'].$delete(args, options),
      )
    },
  })
}

export function useDeleteWebmastersV3SitesSiteUrlSitemapsFeedpath<
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
                    (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']
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
  const mutationDefaults = getDeleteWebmastersV3SitesSiteUrlSitemapsFeedpathMutationOptions<
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
