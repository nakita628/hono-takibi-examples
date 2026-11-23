import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getWebmastersKey() {
  return ['webmasters'] as const
}

export function getPostV1UrlInspectionIndexInspectKey() {
  return ['v1', '/v1/urlInspection/index:inspect', 'POST'] as const
}

export function usePostV1UrlInspectionIndexInspect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.urlInspection)['index:inspect']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.urlInspection)['index:inspect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UrlInspectionIndexInspectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.urlInspection)['index:inspect']['$post']> },
      ) => parseResponse(client.v1.urlInspection['index:inspect'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UrlTestingToolsMobileFriendlyTestRunKey() {
  return ['v1', '/v1/urlTestingTools/mobileFriendlyTest:run', 'POST'] as const
}

export function usePostV1UrlTestingToolsMobileFriendlyTestRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.urlTestingTools)['mobileFriendlyTest:run']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.urlTestingTools)['mobileFriendlyTest:run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UrlTestingToolsMobileFriendlyTestRunKey()
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
            (typeof client.v1.urlTestingTools)['mobileFriendlyTest:run']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.urlTestingTools['mobileFriendlyTest:run'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebmastersV3SitesKey(
  args: InferRequestType<typeof client.webmasters.v3.sites.$get>,
) {
  return ['webmasters', '/webmasters/v3/sites', args] as const
}

export function useGetWebmastersV3Sites<TError = unknown>(
  args: InferRequestType<typeof client.webmasters.v3.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webmasters.v3.sites.$get>>>
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
        ? getGetWebmastersV3SitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webmasters.v3.sites.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webmasters.v3.sites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebmastersV3Sites<TError = unknown>(
  args: InferRequestType<typeof client.webmasters.v3.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webmasters.v3.sites.$get>>>
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
        ? getGetWebmastersV3SitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webmasters.v3.sites.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webmasters.v3.sites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebmastersV3SitesSiteUrlKey(
  args: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>,
) {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl', args] as const
}

export function useGetWebmastersV3SitesSiteUrl<TError = unknown>(
  args: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>>
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
        ? getGetWebmastersV3SitesSiteUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webmasters.v3.sites[':siteUrl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebmastersV3SitesSiteUrl<TError = unknown>(
  args: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>>
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
        ? getGetWebmastersV3SitesSiteUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webmasters.v3.sites[':siteUrl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebmastersV3SitesSiteUrlKey() {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl', 'PUT'] as const
}

export function usePutWebmastersV3SitesSiteUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebmastersV3SitesSiteUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$put']> },
      ) => parseResponse(client.webmasters.v3.sites[':siteUrl'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebmastersV3SitesSiteUrlKey() {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl', 'DELETE'] as const
}

export function useDeleteWebmastersV3SitesSiteUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebmastersV3SitesSiteUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$delete']> },
      ) => parseResponse(client.webmasters.v3.sites[':siteUrl'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebmastersV3SitesSiteUrlSearchAnalyticsQueryKey() {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl/searchAnalytics/query', 'POST'] as const
}

export function usePostWebmastersV3SitesSiteUrlSearchAnalyticsQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.webmasters.v3.sites)[':siteUrl']['searchAnalytics']['query']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebmastersV3SitesSiteUrlSearchAnalyticsQueryKey()
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
            (typeof client.webmasters.v3.sites)[':siteUrl']['searchAnalytics']['query']['$post']
          >
        },
      ) =>
        parseResponse(
          client.webmasters.v3.sites[':siteUrl'].searchAnalytics.query.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebmastersV3SitesSiteUrlSitemapsKey(
  args: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>,
) {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl/sitemaps', args] as const
}

export function useGetWebmastersV3SitesSiteUrlSitemaps<TError = unknown>(
  args: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>>
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
        ? getGetWebmastersV3SitesSiteUrlSitemapsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webmasters.v3.sites[':siteUrl'].sitemaps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebmastersV3SitesSiteUrlSitemaps<TError = unknown>(
  args: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>>
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
        ? getGetWebmastersV3SitesSiteUrlSitemapsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webmasters.v3.sites[':siteUrl'].sitemaps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebmastersV3SitesSiteUrlSitemapsFeedpathKey(
  args: InferRequestType<
    (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']
  >,
) {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl/sitemaps/:feedpath', args] as const
}

export function useGetWebmastersV3SitesSiteUrlSitemapsFeedpath<TError = unknown>(
  args: InferRequestType<
    (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWebmastersV3SitesSiteUrlSitemapsFeedpathKey(args)
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
                (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']
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
          client.webmasters.v3.sites[':siteUrl'].sitemaps[':feedpath'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebmastersV3SitesSiteUrlSitemapsFeedpath<TError = unknown>(
  args: InferRequestType<
    (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWebmastersV3SitesSiteUrlSitemapsFeedpathKey(args)
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
                (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']
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
          client.webmasters.v3.sites[':siteUrl'].sitemaps[':feedpath'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWebmastersV3SitesSiteUrlSitemapsFeedpathKey() {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl/sitemaps/:feedpath', 'PUT'] as const
}

export function usePutWebmastersV3SitesSiteUrlSitemapsFeedpath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebmastersV3SitesSiteUrlSitemapsFeedpathKey()
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
            (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']
          >
        },
      ) =>
        parseResponse(
          client.webmasters.v3.sites[':siteUrl'].sitemaps[':feedpath'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebmastersV3SitesSiteUrlSitemapsFeedpathKey() {
  return ['webmasters', '/webmasters/v3/sites/:siteUrl/sitemaps/:feedpath', 'DELETE'] as const
}

export function useDeleteWebmastersV3SitesSiteUrlSitemapsFeedpath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebmastersV3SitesSiteUrlSitemapsFeedpathKey()
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
            (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.webmasters.v3.sites[':siteUrl'].sitemaps[':feedpath'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
