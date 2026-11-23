import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostV1UrlInspectionIndexInspect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1UrlInspectionIndexInspectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV1UrlTestingToolsMobileFriendlyTestRun<
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
                ReturnType<(typeof client.v1.urlTestingTools)['mobileFriendlyTest:run']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.urlTestingTools)['mobileFriendlyTest:run']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1UrlTestingToolsMobileFriendlyTestRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebmastersV3SitesQueryKey(
  args: InferRequestType<typeof client.webmasters.v3.sites.$get>,
) {
  return ['webmasters', '/webmasters/v3/sites', args] as const
}

export function getWebmastersV3SitesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webmasters.v3.sites.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webmasters.v3.sites.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webmasters.v3.sites.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebmastersV3SitesQueryKey>
  >({
    queryKey: getWebmastersV3SitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webmasters.v3.sites.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebmastersV3Sites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webmasters.v3.sites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.webmasters.v3.sites.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.webmasters.v3.sites.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebmastersV3SitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebmastersV3SitesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWebmastersV3SitesSiteUrlQueryKey(
  args: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>,
) {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl', args] as const
}

export function getWebmastersV3SitesSiteUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWebmastersV3SitesSiteUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webmasters.v3.sites[':siteUrl'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebmastersV3SitesSiteUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWebmastersV3SitesSiteUrlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutWebmastersV3SitesSiteUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWebmastersV3SitesSiteUrlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteWebmastersV3SitesSiteUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebmastersV3SitesSiteUrlMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostWebmastersV3SitesSiteUrlSearchAnalyticsQuery<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebmastersV3SitesSiteUrlSearchAnalyticsQueryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebmastersV3SitesSiteUrlSitemapsQueryKey(
  args: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>,
) {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl/sitemaps', args] as const
}

export function getWebmastersV3SitesSiteUrlSitemapsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWebmastersV3SitesSiteUrlSitemapsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webmasters.v3.sites[':siteUrl'].sitemaps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebmastersV3SitesSiteUrlSitemaps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getWebmastersV3SitesSiteUrlSitemapsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWebmastersV3SitesSiteUrlSitemapsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWebmastersV3SitesSiteUrlSitemapsFeedpathQueryKey(
  args: InferRequestType<
    (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']
  >,
) {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl/sitemaps/:feedpath', args] as const
}

export function getWebmastersV3SitesSiteUrlSitemapsFeedpathQueryOptions<
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
  args: InferRequestType<
    (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWebmastersV3SitesSiteUrlSitemapsFeedpathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webmasters.v3.sites[':siteUrl'].sitemaps[':feedpath'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebmastersV3SitesSiteUrlSitemapsFeedpath<
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
  args: () => InferRequestType<
    (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWebmastersV3SitesSiteUrlSitemapsFeedpathQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutWebmastersV3SitesSiteUrlSitemapsFeedpath<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWebmastersV3SitesSiteUrlSitemapsFeedpathMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteWebmastersV3SitesSiteUrlSitemapsFeedpath<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebmastersV3SitesSiteUrlSitemapsFeedpathMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
