import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getResourcesKey() {
  return ['resources'] as const
}

export function getResourcesJsonKey() {
  return ['resources.json'] as const
}

export function getGetResourcesJsonKey(
  args: InferRequestType<(typeof client)['resources.json']['$get']>,
) {
  return ['resources.json', '/resources.json', args] as const
}

export function useGetResourcesJson<TError = unknown>(
  args: InferRequestType<(typeof client)['resources.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['resources.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetResourcesJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['resources.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['resources.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesJson<TError = unknown>(
  args: InferRequestType<(typeof client)['resources.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['resources.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetResourcesJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['resources.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['resources.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesCampaignsJsonKey(
  args: InferRequestType<(typeof client.resources)['campaigns.json']['$get']>,
) {
  return ['resources', '/resources/campaigns.json', args] as const
}

export function useGetResourcesCampaignsJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources)['campaigns.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['campaigns.json']['$get']>>
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
        ? getGetResourcesCampaignsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['campaigns.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources['campaigns.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesCampaignsJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources)['campaigns.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['campaigns.json']['$get']>>
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
        ? getGetResourcesCampaignsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['campaigns.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources['campaigns.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesCampaignsIdJsonKey(
  args: InferRequestType<(typeof client.resources.campaigns)[':id.json']['$get']>,
) {
  return ['resources', '/resources/campaigns/:id.json', args] as const
}

export function useGetResourcesCampaignsIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.campaigns)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.campaigns)[':id.json']['$get']>>
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
        ? getGetResourcesCampaignsIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.campaigns)[':id.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.campaigns[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesCampaignsIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.campaigns)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.campaigns)[':id.json']['$get']>>
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
        ? getGetResourcesCampaignsIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.campaigns)[':id.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.campaigns[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesCampaignsIdMediaJsonKey(
  args: InferRequestType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>,
) {
  return ['resources', '/resources/campaigns/:id/media.json', args] as const
}

export function useGetResourcesCampaignsIdMediaJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>>
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
        ? getGetResourcesCampaignsIdMediaJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.campaigns[':id']['media.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesCampaignsIdMediaJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>>
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
        ? getGetResourcesCampaignsIdMediaJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.campaigns[':id']['media.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesCampaignsIdSyndicateFormatKey(
  args: InferRequestType<(typeof client.resources.campaigns)[':id']['syndicate.:format']['$get']>,
) {
  return ['resources', '/resources/campaigns/:id/syndicate.:format', args] as const
}

export function useGetResourcesCampaignsIdSyndicateFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.campaigns)[':id']['syndicate.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.campaigns)[':id']['syndicate.:format']['$get']>
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
        ? getGetResourcesCampaignsIdSyndicateFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.campaigns)[':id']['syndicate.:format']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.resources.campaigns[':id']['syndicate.:format'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesCampaignsIdSyndicateFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.campaigns)[':id']['syndicate.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.campaigns)[':id']['syndicate.:format']['$get']>
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
        ? getGetResourcesCampaignsIdSyndicateFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.campaigns)[':id']['syndicate.:format']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.resources.campaigns[':id']['syndicate.:format'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesLanguagesJsonKey(
  args: InferRequestType<(typeof client.resources)['languages.json']['$get']>,
) {
  return ['resources', '/resources/languages.json', args] as const
}

export function useGetResourcesLanguagesJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources)['languages.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['languages.json']['$get']>>
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
        ? getGetResourcesLanguagesJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['languages.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources['languages.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesLanguagesJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources)['languages.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['languages.json']['$get']>>
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
        ? getGetResourcesLanguagesJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['languages.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources['languages.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesLanguagesIdJsonKey(
  args: InferRequestType<(typeof client.resources.languages)[':id.json']['$get']>,
) {
  return ['resources', '/resources/languages/:id.json', args] as const
}

export function useGetResourcesLanguagesIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.languages)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.languages)[':id.json']['$get']>>
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
        ? getGetResourcesLanguagesIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.languages)[':id.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.languages[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesLanguagesIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.languages)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.languages)[':id.json']['$get']>>
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
        ? getGetResourcesLanguagesIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.languages)[':id.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.languages[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesMediaJsonKey(
  args: InferRequestType<(typeof client.resources)['media.json']['$get']>,
) {
  return ['resources', '/resources/media.json', args] as const
}

export function useGetResourcesMediaJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources)['media.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['media.json']['$get']>>>
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
        ? getGetResourcesMediaJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['media.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources['media.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesMediaJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources)['media.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['media.json']['$get']>>>
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
        ? getGetResourcesMediaJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['media.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources['media.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesMediaFeaturedJsonKey(
  args: InferRequestType<(typeof client.resources.media)['featured.json']['$get']>,
) {
  return ['resources', '/resources/media/featured.json', args] as const
}

export function useGetResourcesMediaFeaturedJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)['featured.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)['featured.json']['$get']>>
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
        ? getGetResourcesMediaFeaturedJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)['featured.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.media['featured.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesMediaFeaturedJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)['featured.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)['featured.json']['$get']>>
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
        ? getGetResourcesMediaFeaturedJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)['featured.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.media['featured.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesMediaMostPopularMediaFormatKey(
  args: InferRequestType<(typeof client.resources.media)['mostPopularMedia.:format']['$get']>,
) {
  return ['resources', '/resources/media/mostPopularMedia.:format', args] as const
}

export function useGetResourcesMediaMostPopularMediaFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)['mostPopularMedia.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)['mostPopularMedia.:format']['$get']>>
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
        ? getGetResourcesMediaMostPopularMediaFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)['mostPopularMedia.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.media['mostPopularMedia.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesMediaMostPopularMediaFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)['mostPopularMedia.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)['mostPopularMedia.:format']['$get']>>
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
        ? getGetResourcesMediaMostPopularMediaFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)['mostPopularMedia.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.media['mostPopularMedia.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesMediaSearchResultsJsonKey(
  args: InferRequestType<(typeof client.resources.media)['searchResults.json']['$get']>,
) {
  return ['resources', '/resources/media/searchResults.json', args] as const
}

export function useGetResourcesMediaSearchResultsJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)['searchResults.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)['searchResults.json']['$get']>>
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
        ? getGetResourcesMediaSearchResultsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)['searchResults.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.media['searchResults.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesMediaSearchResultsJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)['searchResults.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)['searchResults.json']['$get']>>
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
        ? getGetResourcesMediaSearchResultsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)['searchResults.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.media['searchResults.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesMediaIdJsonKey(
  args: InferRequestType<(typeof client.resources.media)[':id.json']['$get']>,
) {
  return ['resources', '/resources/media/:id.json', args] as const
}

export function useGetResourcesMediaIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id.json']['$get']>>
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
        ? getGetResourcesMediaIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.media[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesMediaIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id.json']['$get']>>
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
        ? getGetResourcesMediaIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.media[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesMediaIdContentKey(
  args: InferRequestType<(typeof client.resources.media)[':id']['content']['$get']>,
) {
  return ['resources', '/resources/media/:id/content', args] as const
}

export function useGetResourcesMediaIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)[':id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['content']['$get']>>
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
        ? getGetResourcesMediaIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.media[':id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesMediaIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)[':id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['content']['$get']>>
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
        ? getGetResourcesMediaIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.media[':id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesMediaIdEmbedJsonKey(
  args: InferRequestType<(typeof client.resources.media)[':id']['embed.json']['$get']>,
) {
  return ['resources', '/resources/media/:id/embed.json', args] as const
}

export function useGetResourcesMediaIdEmbedJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)[':id']['embed.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['embed.json']['$get']>>
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
        ? getGetResourcesMediaIdEmbedJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['embed.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.media[':id']['embed.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesMediaIdEmbedJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)[':id']['embed.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['embed.json']['$get']>>
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
        ? getGetResourcesMediaIdEmbedJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['embed.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.media[':id']['embed.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesMediaIdPreviewJpgKey(
  args: InferRequestType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>,
) {
  return ['resources', '/resources/media/:id/preview.jpg', args] as const
}

export function useGetResourcesMediaIdPreviewJpg<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>>
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
        ? getGetResourcesMediaIdPreviewJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.media[':id']['preview.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesMediaIdPreviewJpg<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>>
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
        ? getGetResourcesMediaIdPreviewJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.media[':id']['preview.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesMediaIdRelatedMediaFormatKey(
  args: InferRequestType<(typeof client.resources.media)[':id']['relatedMedia.:format']['$get']>,
) {
  return ['resources', '/resources/media/:id/relatedMedia.:format', args] as const
}

export function useGetResourcesMediaIdRelatedMediaFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)[':id']['relatedMedia.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.media)[':id']['relatedMedia.:format']['$get']>
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
        ? getGetResourcesMediaIdRelatedMediaFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.media)[':id']['relatedMedia.:format']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.resources.media[':id']['relatedMedia.:format'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesMediaIdRelatedMediaFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)[':id']['relatedMedia.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.media)[':id']['relatedMedia.:format']['$get']>
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
        ? getGetResourcesMediaIdRelatedMediaFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.media)[':id']['relatedMedia.:format']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.resources.media[':id']['relatedMedia.:format'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesMediaIdSyndicateFormatKey(
  args: InferRequestType<(typeof client.resources.media)[':id']['syndicate.:format']['$get']>,
) {
  return ['resources', '/resources/media/:id/syndicate.:format', args] as const
}

export function useGetResourcesMediaIdSyndicateFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)[':id']['syndicate.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['syndicate.:format']['$get']>>
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
        ? getGetResourcesMediaIdSyndicateFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['syndicate.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.media[':id']['syndicate.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesMediaIdSyndicateFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)[':id']['syndicate.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['syndicate.:format']['$get']>>
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
        ? getGetResourcesMediaIdSyndicateFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['syndicate.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.media[':id']['syndicate.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesMediaIdThumbnailJpgKey(
  args: InferRequestType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>,
) {
  return ['resources', '/resources/media/:id/thumbnail.jpg', args] as const
}

export function useGetResourcesMediaIdThumbnailJpg<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>>
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
        ? getGetResourcesMediaIdThumbnailJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.media[':id']['thumbnail.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesMediaIdThumbnailJpg<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>>
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
        ? getGetResourcesMediaIdThumbnailJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.media[':id']['thumbnail.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesMediaIdYoutubeMetaDataJsonKey(
  args: InferRequestType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>,
) {
  return ['resources', '/resources/media/:id/youtubeMetaData.json', args] as const
}

export function useGetResourcesMediaIdYoutubeMetaDataJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>
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
        ? getGetResourcesMediaIdYoutubeMetaDataJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.resources.media[':id']['youtubeMetaData.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesMediaIdYoutubeMetaDataJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>
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
        ? getGetResourcesMediaIdYoutubeMetaDataJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.resources.media[':id']['youtubeMetaData.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesMediaTypesFormatKey(
  args: InferRequestType<(typeof client.resources)['mediaTypes.:format']['$get']>,
) {
  return ['resources', '/resources/mediaTypes.:format', args] as const
}

export function useGetResourcesMediaTypesFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources)['mediaTypes.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['mediaTypes.:format']['$get']>>
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
        ? getGetResourcesMediaTypesFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['mediaTypes.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources['mediaTypes.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesMediaTypesFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources)['mediaTypes.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['mediaTypes.:format']['$get']>>
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
        ? getGetResourcesMediaTypesFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['mediaTypes.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources['mediaTypes.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesSourcesJsonKey(
  args: InferRequestType<(typeof client.resources)['sources.json']['$get']>,
) {
  return ['resources', '/resources/sources.json', args] as const
}

export function useGetResourcesSourcesJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources)['sources.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['sources.json']['$get']>>
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
        ? getGetResourcesSourcesJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['sources.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources['sources.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesSourcesJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources)['sources.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['sources.json']['$get']>>
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
        ? getGetResourcesSourcesJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['sources.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources['sources.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesSourcesIdJsonKey(
  args: InferRequestType<(typeof client.resources.sources)[':id.json']['$get']>,
) {
  return ['resources', '/resources/sources/:id.json', args] as const
}

export function useGetResourcesSourcesIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.sources)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.sources)[':id.json']['$get']>>
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
        ? getGetResourcesSourcesIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.sources)[':id.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.sources[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesSourcesIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.sources)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.sources)[':id.json']['$get']>>
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
        ? getGetResourcesSourcesIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.sources)[':id.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.sources[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesSourcesIdSyndicateFormatKey(
  args: InferRequestType<(typeof client.resources.sources)[':id']['syndicate.:format']['$get']>,
) {
  return ['resources', '/resources/sources/:id/syndicate.:format', args] as const
}

export function useGetResourcesSourcesIdSyndicateFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.sources)[':id']['syndicate.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.sources)[':id']['syndicate.:format']['$get']>
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
        ? getGetResourcesSourcesIdSyndicateFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.sources)[':id']['syndicate.:format']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.resources.sources[':id']['syndicate.:format'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesSourcesIdSyndicateFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.sources)[':id']['syndicate.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.sources)[':id']['syndicate.:format']['$get']>
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
        ? getGetResourcesSourcesIdSyndicateFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources.sources)[':id']['syndicate.:format']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.resources.sources[':id']['syndicate.:format'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesTagsFormatKey(
  args: InferRequestType<(typeof client.resources)['tags.:format']['$get']>,
) {
  return ['resources', '/resources/tags.:format', args] as const
}

export function useGetResourcesTagsFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources)['tags.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['tags.:format']['$get']>>
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
        ? getGetResourcesTagsFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['tags.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources['tags.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesTagsFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources)['tags.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['tags.:format']['$get']>>
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
        ? getGetResourcesTagsFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)['tags.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources['tags.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesTagsTagLanguagesFormatKey(
  args: InferRequestType<(typeof client.resources.tags)['tagLanguages.:format']['$get']>,
) {
  return ['resources', '/resources/tags/tagLanguages.:format', args] as const
}

export function useGetResourcesTagsTagLanguagesFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.tags)['tagLanguages.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)['tagLanguages.:format']['$get']>>
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
        ? getGetResourcesTagsTagLanguagesFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)['tagLanguages.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.tags['tagLanguages.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesTagsTagLanguagesFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.tags)['tagLanguages.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)['tagLanguages.:format']['$get']>>
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
        ? getGetResourcesTagsTagLanguagesFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)['tagLanguages.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.tags['tagLanguages.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesTagsTagTypesFormatKey(
  args: InferRequestType<(typeof client.resources.tags)['tagTypes.:format']['$get']>,
) {
  return ['resources', '/resources/tags/tagTypes.:format', args] as const
}

export function useGetResourcesTagsTagTypesFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.tags)['tagTypes.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)['tagTypes.:format']['$get']>>
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
        ? getGetResourcesTagsTagTypesFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)['tagTypes.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.tags['tagTypes.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesTagsTagTypesFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.tags)['tagTypes.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)['tagTypes.:format']['$get']>>
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
        ? getGetResourcesTagsTagTypesFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)['tagTypes.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.tags['tagTypes.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesTagsIdFormatKey(
  args: InferRequestType<(typeof client.resources.tags)[':id.:format']['$get']>,
) {
  return ['resources', '/resources/tags/:id.:format', args] as const
}

export function useGetResourcesTagsIdFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.tags)[':id.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)[':id.:format']['$get']>>
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
        ? getGetResourcesTagsIdFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)[':id.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.tags[':id.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesTagsIdFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.tags)[':id.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)[':id.:format']['$get']>>
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
        ? getGetResourcesTagsIdFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)[':id.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.tags[':id.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesTagsIdMediaFormatKey(
  args: InferRequestType<(typeof client.resources.tags)[':id']['media.:format']['$get']>,
) {
  return ['resources', '/resources/tags/:id/media.:format', args] as const
}

export function useGetResourcesTagsIdMediaFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.tags)[':id']['media.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)[':id']['media.:format']['$get']>>
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
        ? getGetResourcesTagsIdMediaFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)[':id']['media.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.tags[':id']['media.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesTagsIdMediaFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.tags)[':id']['media.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)[':id']['media.:format']['$get']>>
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
        ? getGetResourcesTagsIdMediaFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)[':id']['media.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.tags[':id']['media.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesTagsIdRelatedFormatKey(
  args: InferRequestType<(typeof client.resources.tags)[':id']['related.:format']['$get']>,
) {
  return ['resources', '/resources/tags/:id/related.:format', args] as const
}

export function useGetResourcesTagsIdRelatedFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.tags)[':id']['related.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)[':id']['related.:format']['$get']>>
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
        ? getGetResourcesTagsIdRelatedFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)[':id']['related.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.tags[':id']['related.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesTagsIdRelatedFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.tags)[':id']['related.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)[':id']['related.:format']['$get']>>
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
        ? getGetResourcesTagsIdRelatedFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)[':id']['related.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.tags[':id']['related.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesTagsIdSyndicateFormatKey(
  args: InferRequestType<(typeof client.resources.tags)[':id']['syndicate.:format']['$get']>,
) {
  return ['resources', '/resources/tags/:id/syndicate.:format', args] as const
}

export function useGetResourcesTagsIdSyndicateFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.tags)[':id']['syndicate.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)[':id']['syndicate.:format']['$get']>>
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
        ? getGetResourcesTagsIdSyndicateFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)[':id']['syndicate.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.tags[':id']['syndicate.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesTagsIdSyndicateFormat<TError = unknown>(
  args: InferRequestType<(typeof client.resources.tags)[':id']['syndicate.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)[':id']['syndicate.:format']['$get']>>
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
        ? getGetResourcesTagsIdSyndicateFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.tags)[':id']['syndicate.:format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.tags[':id']['syndicate.:format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesUserMediaListsIdJsonKey(
  args: InferRequestType<(typeof client.resources.userMediaLists)[':id.json']['$get']>,
) {
  return ['resources', '/resources/userMediaLists/:id.json', args] as const
}

export function useGetResourcesUserMediaListsIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.userMediaLists)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.userMediaLists)[':id.json']['$get']>>
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
        ? getGetResourcesUserMediaListsIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.userMediaLists)[':id.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.userMediaLists[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesUserMediaListsIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.resources.userMediaLists)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.userMediaLists)[':id.json']['$get']>>
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
        ? getGetResourcesUserMediaListsIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources.userMediaLists)[':id.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources.userMediaLists[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
