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

export function injectSites<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sites.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSitesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSitesSiteUrl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sites)[':siteUrl']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSitesSiteUrlQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutSitesSiteUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSitesSiteUrlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSitesSiteUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSitesSiteUrlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSitesSiteUrlSearchAnalyticsQuery<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSitesSiteUrlSearchAnalyticsQueryMutationOptions<
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

export function injectSitesSiteUrlSitemaps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSitesSiteUrlSitemapsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSitesSiteUrlSitemapsFeedpath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSitesSiteUrlSitemapsFeedpathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutSitesSiteUrlSitemapsFeedpath<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSitesSiteUrlSitemapsFeedpathMutationOptions<
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

export function injectDeleteSitesSiteUrlSitemapsFeedpath<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSitesSiteUrlSitemapsFeedpathMutationOptions<
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
