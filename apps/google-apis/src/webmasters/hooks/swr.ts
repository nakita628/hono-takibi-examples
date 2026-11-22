import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSitesKey() {
  return ['sites'] as const
}

export function getGetSitesKey(args: InferRequestType<typeof client.sites.$get>) {
  return ['sites', '/sites', args] as const
}

export function useGetSites<TError = unknown>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sites.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSites<TError = unknown>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sites.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSitesSiteUrlKey(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['$get']>,
) {
  return ['sites', '/sites/:siteUrl', args] as const
}

export function useGetSitesSiteUrl<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSitesSiteUrlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':siteUrl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteUrl<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSitesSiteUrlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':siteUrl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSitesSiteUrlKey() {
  return ['sites', '/sites/:siteUrl', 'PUT'] as const
}

export function usePutSitesSiteUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':siteUrl']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':siteUrl']['$put']> },
      ) => parseResponse(client.sites[':siteUrl'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSitesSiteUrlKey() {
  return ['sites', '/sites/:siteUrl', 'DELETE'] as const
}

export function useDeleteSitesSiteUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteUrl']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':siteUrl']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':siteUrl']['$delete']> },
      ) => parseResponse(client.sites[':siteUrl'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSitesSiteUrlSearchAnalyticsQueryKey() {
  return ['sites', '/sites/:siteUrl/searchAnalytics/query', 'POST'] as const
}

export function usePostSitesSiteUrlSearchAnalyticsQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sites)[':siteUrl']['searchAnalytics']['query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteUrlSearchAnalyticsQueryKey()
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
            (typeof client.sites)[':siteUrl']['searchAnalytics']['query']['$post']
          >
        },
      ) => parseResponse(client.sites[':siteUrl'].searchAnalytics.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteUrlSitemapsKey(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>,
) {
  return ['sites', '/sites/:siteUrl/sitemaps', args] as const
}

export function useGetSitesSiteUrlSitemaps<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>>
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
        ? getGetSitesSiteUrlSitemapsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':siteUrl'].sitemaps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteUrlSitemaps<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>>
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
        ? getGetSitesSiteUrlSitemapsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':siteUrl'].sitemaps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteUrlSitemapsFeedpathKey(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>,
) {
  return ['sites', '/sites/:siteUrl/sitemaps/:feedpath', args] as const
}

export function useGetSitesSiteUrlSitemapsFeedpath<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>>
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
        ? getGetSitesSiteUrlSitemapsFeedpathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':siteUrl'].sitemaps[':feedpath'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteUrlSitemapsFeedpath<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>>
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
        ? getGetSitesSiteUrlSitemapsFeedpathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':siteUrl'].sitemaps[':feedpath'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSitesSiteUrlSitemapsFeedpathKey() {
  return ['sites', '/sites/:siteUrl/sitemaps/:feedpath', 'PUT'] as const
}

export function usePutSitesSiteUrlSitemapsFeedpath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteUrlSitemapsFeedpathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']>
        },
      ) => parseResponse(client.sites[':siteUrl'].sitemaps[':feedpath'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSitesSiteUrlSitemapsFeedpathKey() {
  return ['sites', '/sites/:siteUrl/sitemaps/:feedpath', 'DELETE'] as const
}

export function useDeleteSitesSiteUrlSitemapsFeedpath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteUrlSitemapsFeedpathKey()
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
            (typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']
          >
        },
      ) =>
        parseResponse(client.sites[':siteUrl'].sitemaps[':feedpath'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
