import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAssetKey() {
  return ['asset'] as const
}

export function getCatalogueKey() {
  return ['catalogue'] as const
}

export function getChannelKey() {
  return ['channel'] as const
}

export function getContributorKey() {
  return ['contributor'] as const
}

export function getFeatureKey() {
  return ['feature'] as const
}

export function getFeatureTypeKey() {
  return ['feature-type'] as const
}

export function getPlatformKey() {
  return ['platform'] as const
}

export function getScheduleKey() {
  return ['schedule'] as const
}

export function getGetAssetKey(args: InferRequestType<typeof client.asset.$get>) {
  return ['asset', '/asset', args] as const
}

export function useGetAsset<TError = unknown>(
  args: InferRequestType<typeof client.asset.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.asset.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAsset<TError = unknown>(
  args: InferRequestType<typeof client.asset.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.asset.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAssetAssetIdKey(
  args: InferRequestType<(typeof client.asset)[':assetId']['$get']>,
) {
  return ['asset', '/asset/:assetId', args] as const
}

export function useGetAssetAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.asset)[':assetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.asset)[':assetId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAssetAssetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.asset)[':assetId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.asset[':assetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.asset)[':assetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.asset)[':assetId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAssetAssetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.asset)[':assetId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.asset[':assetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssetAssetIdContributorKey(
  args: InferRequestType<(typeof client.asset)[':assetId']['contributor']['$get']>,
) {
  return ['asset', '/asset/:assetId/contributor', args] as const
}

export function useGetAssetAssetIdContributor<TError = unknown>(
  args: InferRequestType<(typeof client.asset)[':assetId']['contributor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asset)[':assetId']['contributor']['$get']>>
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
        ? getGetAssetAssetIdContributorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asset)[':assetId']['contributor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.asset[':assetId'].contributor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetAssetIdContributor<TError = unknown>(
  args: InferRequestType<(typeof client.asset)[':assetId']['contributor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asset)[':assetId']['contributor']['$get']>>
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
        ? getGetAssetAssetIdContributorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.asset)[':assetId']['contributor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.asset[':assetId'].contributor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCatalogueKey() {
  return ['catalogue', '/catalogue'] as const
}

export function useGetCatalogue<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogue.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCatalogueKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogue.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogue.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogue<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogue.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCatalogueKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogue.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogue.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCatalogueCatalogueIdKey(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['$get']>,
) {
  return ['catalogue', '/catalogue/:catalogueId', args] as const
}

export function useGetCatalogueCatalogueId<TError = unknown>(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['$get']>>
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
        ? getGetCatalogueCatalogueIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogue[':catalogueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogueCatalogueId<TError = unknown>(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['$get']>>
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
        ? getGetCatalogueCatalogueIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogue[':catalogueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCatalogueCatalogueIdAssetKey(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>,
) {
  return ['catalogue', '/catalogue/:catalogueId/asset', args] as const
}

export function useGetCatalogueCatalogueIdAsset<TError = unknown>(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>>
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
        ? getGetCatalogueCatalogueIdAssetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogue[':catalogueId'].asset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogueCatalogueIdAsset<TError = unknown>(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>>
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
        ? getGetCatalogueCatalogueIdAssetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogue[':catalogueId'].asset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCatalogueCatalogueIdAssetAssetIdKey(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>,
) {
  return ['catalogue', '/catalogue/:catalogueId/asset/:assetId', args] as const
}

export function useGetCatalogueCatalogueIdAssetAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>
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
        ? getGetCatalogueCatalogueIdAssetAssetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.catalogue[':catalogueId'].asset[':assetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogueCatalogueIdAssetAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>
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
        ? getGetCatalogueCatalogueIdAssetAssetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.catalogue[':catalogueId'].asset[':assetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelKey(args: InferRequestType<typeof client.channel.$get>) {
  return ['channel', '/channel', args] as const
}

export function useGetChannel<TError = unknown>(
  args: InferRequestType<typeof client.channel.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.channel.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChannel<TError = unknown>(
  args: InferRequestType<typeof client.channel.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.channel.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetChannelChannelIdKey(
  args: InferRequestType<(typeof client.channel)[':channelId']['$get']>,
) {
  return ['channel', '/channel/:channelId', args] as const
}

export function useGetChannelChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.channel)[':channelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':channelId']['$get']>>>
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
        ? getGetChannelChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':channelId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel[':channelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.channel)[':channelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':channelId']['$get']>>>
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
        ? getGetChannelChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':channelId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel[':channelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContributorKey(args: InferRequestType<typeof client.contributor.$get>) {
  return ['contributor', '/contributor', args] as const
}

export function useGetContributor<TError = unknown>(
  args: InferRequestType<typeof client.contributor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contributor.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContributorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contributor.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contributor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContributor<TError = unknown>(
  args: InferRequestType<typeof client.contributor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contributor.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContributorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contributor.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contributor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContributorContributorIdKey(
  args: InferRequestType<(typeof client.contributor)[':contributorId']['$get']>,
) {
  return ['contributor', '/contributor/:contributorId', args] as const
}

export function useGetContributorContributorId<TError = unknown>(
  args: InferRequestType<(typeof client.contributor)[':contributorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contributor)[':contributorId']['$get']>>
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
        ? getGetContributorContributorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contributor)[':contributorId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contributor[':contributorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContributorContributorId<TError = unknown>(
  args: InferRequestType<(typeof client.contributor)[':contributorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contributor)[':contributorId']['$get']>>
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
        ? getGetContributorContributorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contributor)[':contributorId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contributor[':contributorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFeatureKey(args: InferRequestType<typeof client.feature.$get>) {
  return ['feature', '/feature', args] as const
}

export function useGetFeature<TError = unknown>(
  args: InferRequestType<typeof client.feature.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feature.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeatureKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feature.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.feature.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFeature<TError = unknown>(
  args: InferRequestType<typeof client.feature.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feature.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeatureKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feature.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.feature.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetFeatureTypeKey() {
  return ['feature-type', '/feature-type'] as const
}

export function useGetFeatureType<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-type']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeatureTypeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['feature-type'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeatureType<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-type']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeatureTypeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['feature-type'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFeatureFeatureIdKey(
  args: InferRequestType<(typeof client.feature)[':featureId']['$get']>,
) {
  return ['feature', '/feature/:featureId', args] as const
}

export function useGetFeatureFeatureId<TError = unknown>(
  args: InferRequestType<(typeof client.feature)[':featureId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feature)[':featureId']['$get']>>>
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
        ? getGetFeatureFeatureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feature)[':featureId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feature[':featureId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeatureFeatureId<TError = unknown>(
  args: InferRequestType<(typeof client.feature)[':featureId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feature)[':featureId']['$get']>>>
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
        ? getGetFeatureFeatureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feature)[':featureId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feature[':featureId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlatformKey(args: InferRequestType<typeof client.platform.$get>) {
  return ['platform', '/platform', args] as const
}

export function useGetPlatform<TError = unknown>(
  args: InferRequestType<typeof client.platform.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlatformKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.platform.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPlatform<TError = unknown>(
  args: InferRequestType<typeof client.platform.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlatformKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.platform.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPlatformPlatformIdKey(
  args: InferRequestType<(typeof client.platform)[':platformId']['$get']>,
) {
  return ['platform', '/platform/:platformId', args] as const
}

export function useGetPlatformPlatformId<TError = unknown>(
  args: InferRequestType<(typeof client.platform)[':platformId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.platform)[':platformId']['$get']>>>
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
        ? getGetPlatformPlatformIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.platform)[':platformId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform[':platformId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPlatformId<TError = unknown>(
  args: InferRequestType<(typeof client.platform)[':platformId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.platform)[':platformId']['$get']>>>
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
        ? getGetPlatformPlatformIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.platform)[':platformId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform[':platformId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlatformPlatformIdRegionKey(
  args: InferRequestType<(typeof client.platform)[':platformId']['region']['$get']>,
) {
  return ['platform', '/platform/:platformId/region', args] as const
}

export function useGetPlatformPlatformIdRegion<TError = unknown>(
  args: InferRequestType<(typeof client.platform)[':platformId']['region']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform)[':platformId']['region']['$get']>>
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
        ? getGetPlatformPlatformIdRegionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform)[':platformId']['region']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform[':platformId'].region.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPlatformIdRegion<TError = unknown>(
  args: InferRequestType<(typeof client.platform)[':platformId']['region']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform)[':platformId']['region']['$get']>>
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
        ? getGetPlatformPlatformIdRegionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform)[':platformId']['region']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform[':platformId'].region.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScheduleKey(args: InferRequestType<typeof client.schedule.$get>) {
  return ['schedule', '/schedule', args] as const
}

export function useGetSchedule<TError = unknown>(
  args: InferRequestType<typeof client.schedule.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScheduleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.schedule.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSchedule<TError = unknown>(
  args: InferRequestType<typeof client.schedule.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScheduleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.schedule.$get(args, clientOptions)), restSwrOptions),
  }
}
