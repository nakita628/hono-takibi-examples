import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCacheKey() {
  return ['cache'] as const
}

export function getCatalogKey() {
  return ['catalog'] as const
}

export function getFontKey() {
  return ['font'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getOgcKey() {
  return ['ogc'] as const
}

export function getSdfSpriteKey() {
  return ['sdf_sprite'] as const
}

export function getSpriteKey() {
  return ['sprite'] as const
}

export function getStyleKey() {
  return ['style'] as const
}

export function getSourceIdsKey() {
  return ['{source_ids}'] as const
}

export function getGetSourceIdsKey(args: InferRequestType<(typeof client)[':source_ids']['$get']>) {
  return [':source_ids', '/:source_ids', args] as const
}

export function useGetSourceIds<TError = unknown>(
  args: InferRequestType<(typeof client)[':source_ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':source_ids']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSourceIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':source_ids']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':source_ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSourceIds<TError = unknown>(
  args: InferRequestType<(typeof client)[':source_ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':source_ids']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSourceIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':source_ids']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':source_ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSourceIdsZXYKey(
  args: InferRequestType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>,
) {
  return [':source_ids', '/:source_ids/:z/:x/:y', args] as const
}

export function useGetSourceIdsZXY<TError = unknown>(
  args: InferRequestType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetSourceIdsZXYKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':source_ids'][':z'][':x'][':y'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSourceIdsZXY<TError = unknown>(
  args: InferRequestType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetSourceIdsZXYKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':source_ids'][':z'][':x'][':y'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCacheSourceIdKey() {
  return ['cache', '/cache/:source_id', 'DELETE'] as const
}

export function useDeleteCacheSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':source_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cache)[':source_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCacheSourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cache)[':source_id']['$delete']> },
      ) => parseResponse(client.cache[':source_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogKey() {
  return ['catalog', '/catalog'] as const
}

export function useGetCatalog<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCatalogKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalog.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalog<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCatalogKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalog.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFontFontstackStartEndKey(
  args: InferRequestType<(typeof client.font)[':fontstack'][':start-:end']['$get']>,
) {
  return ['font', '/font/:fontstack/:start-:end', args] as const
}

export function useGetFontFontstackStartEnd<TError = unknown>(
  args: InferRequestType<(typeof client.font)[':fontstack'][':start-:end']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.font)[':fontstack'][':start-:end']['$get']>>
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
        ? getGetFontFontstackStartEndKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.font)[':fontstack'][':start-:end']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.font[':fontstack'][':start-:end'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFontFontstackStartEnd<TError = unknown>(
  args: InferRequestType<(typeof client.font)[':fontstack'][':start-:end']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.font)[':fontstack'][':start-:end']['$get']>>
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
        ? getGetFontFontstackStartEndKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.font)[':fontstack'][':start-:end']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.font[':fontstack'][':start-:end'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthKey() {
  return ['health', '/health'] as const
}

export function useGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOgcKey() {
  return ['ogc', '/ogc'] as const
}

export function useGetOgc<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetOgcKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ogc.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetOgc<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetOgcKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ogc.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getGetOgcApiKey() {
  return ['ogc', '/ogc/api'] as const
}

export function useGetOgcApi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.api.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOgcApiKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.api.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.api.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcApi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.api.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOgcApiKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.api.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.api.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOgcCollectionsKey() {
  return ['ogc', '/ogc/collections'] as const
}

export function useGetOgcCollections<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.collections.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOgcCollectionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.collections.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcCollections<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.collections.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOgcCollectionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.collections.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOgcCollectionsCollectionIdKey(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['$get']>,
) {
  return ['ogc', '/ogc/collections/:collection_id', args] as const
}

export function useGetOgcCollectionsCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['$get']>>
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
        ? getGetOgcCollectionsCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.collections[':collection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcCollectionsCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['$get']>>
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
        ? getGetOgcCollectionsCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.collections[':collection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOgcCollectionsCollectionIdMapKey(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>,
) {
  return ['ogc', '/ogc/collections/:collection_id/map', args] as const
}

export function useGetOgcCollectionsCollectionIdMap<TError = unknown>(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>>
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
        ? getGetOgcCollectionsCollectionIdMapKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ogc.collections[':collection_id'].map.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcCollectionsCollectionIdMap<TError = unknown>(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>>
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
        ? getGetOgcCollectionsCollectionIdMapKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ogc.collections[':collection_id'].map.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOgcCollectionsCollectionIdTilesKey(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>,
) {
  return ['ogc', '/ogc/collections/:collection_id/tiles', args] as const
}

export function useGetOgcCollectionsCollectionIdTiles<TError = unknown>(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>>
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
        ? getGetOgcCollectionsCollectionIdTilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ogc.collections[':collection_id'].tiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcCollectionsCollectionIdTiles<TError = unknown>(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>>
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
        ? getGetOgcCollectionsCollectionIdTilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ogc.collections[':collection_id'].tiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOgcCollectionsCollectionIdTilesTileMatrixSetIdKey(
  args: InferRequestType<
    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
  >,
) {
  return ['ogc', '/ogc/collections/:collection_id/tiles/:tile_matrix_set_id', args] as const
}

export function useGetOgcCollectionsCollectionIdTilesTileMatrixSetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
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
        ? getGetOgcCollectionsCollectionIdTilesTileMatrixSetIdKey(args)
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
                (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
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
          client.ogc.collections[':collection_id'].tiles[':tile_matrix_set_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcCollectionsCollectionIdTilesTileMatrixSetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
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
        ? getGetOgcCollectionsCollectionIdTilesTileMatrixSetIdKey(args)
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
                (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
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
          client.ogc.collections[':collection_id'].tiles[':tile_matrix_set_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColKey(
  args: InferRequestType<
    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
) {
  return [
    'ogc',
    '/ogc/collections/:collection_id/tiles/:tile_matrix_set_id/:tile_matrix/:tile_row/:tile_col',
    args,
  ] as const
}

export function useGetOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileCol<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
        ? getGetOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColKey(args)
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
                (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
          client.ogc.collections[':collection_id'].tiles[':tile_matrix_set_id'][':tile_matrix'][
            ':tile_row'
          ][':tile_col'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileCol<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
        ? getGetOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColKey(args)
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
                (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
          client.ogc.collections[':collection_id'].tiles[':tile_matrix_set_id'][':tile_matrix'][
            ':tile_row'
          ][':tile_col'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOgcConformanceKey() {
  return ['ogc', '/ogc/conformance'] as const
}

export function useGetOgcConformance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.conformance.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOgcConformanceKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.conformance.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.conformance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcConformance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.conformance.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOgcConformanceKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.conformance.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.conformance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOgcMapKey(args: InferRequestType<typeof client.ogc.map.$get>) {
  return ['ogc', '/ogc/map', args] as const
}

export function useGetOgcMap<TError = unknown>(
  args: InferRequestType<typeof client.ogc.map.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOgcMapKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ogc.map.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetOgcMap<TError = unknown>(
  args: InferRequestType<typeof client.ogc.map.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOgcMapKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ogc.map.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetOgcMapTilesKey() {
  return ['ogc', '/ogc/map/tiles'] as const
}

export function useGetOgcMapTiles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.tiles.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOgcMapTilesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.tiles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.map.tiles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcMapTiles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.tiles.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOgcMapTilesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.tiles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.map.tiles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOgcMapTilesTileMatrixSetIdKey(
  args: InferRequestType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>,
) {
  return ['ogc', '/ogc/map/tiles/:tile_matrix_set_id', args] as const
}

export function useGetOgcMapTilesTileMatrixSetId<TError = unknown>(
  args: InferRequestType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>>
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
        ? getGetOgcMapTilesTileMatrixSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ogc.map.tiles[':tile_matrix_set_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcMapTilesTileMatrixSetId<TError = unknown>(
  args: InferRequestType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>>
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
        ? getGetOgcMapTilesTileMatrixSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ogc.map.tiles[':tile_matrix_set_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColKey(
  args: InferRequestType<
    (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
) {
  return [
    'ogc',
    '/ogc/map/tiles/:tile_matrix_set_id/:tile_matrix/:tile_row/:tile_col',
    args,
  ] as const
}

export function useGetOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileCol<TError = unknown>(
  args: InferRequestType<
    (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
        ? getGetOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColKey(args)
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
                (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
          client.ogc.map.tiles[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][
            ':tile_col'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileCol<TError = unknown>(
  args: InferRequestType<
    (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
        ? getGetOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColKey(args)
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
                (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
          client.ogc.map.tiles[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][
            ':tile_col'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOgcStylesKey() {
  return ['ogc', '/ogc/styles'] as const
}

export function useGetOgcStyles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.styles.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOgcStylesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.styles.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.styles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcStyles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.styles.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOgcStylesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.styles.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.styles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOgcStylesStyleIdKey(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['$get']>,
) {
  return ['ogc', '/ogc/styles/:style_id', args] as const
}

export function useGetOgcStylesStyleId<TError = unknown>(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['$get']>>>
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
        ? getGetOgcStylesStyleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.styles[':style_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcStylesStyleId<TError = unknown>(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['$get']>>>
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
        ? getGetOgcStylesStyleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.styles[':style_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOgcStylesStyleIdMapKey(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['$get']>,
) {
  return ['ogc', '/ogc/styles/:style_id/map', args] as const
}

export function useGetOgcStylesStyleIdMap<TError = unknown>(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['$get']>>
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
        ? getGetOgcStylesStyleIdMapKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.styles[':style_id'].map.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcStylesStyleIdMap<TError = unknown>(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['$get']>>
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
        ? getGetOgcStylesStyleIdMapKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.styles[':style_id'].map.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOgcStylesStyleIdMapTilesKey(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>,
) {
  return ['ogc', '/ogc/styles/:style_id/map/tiles', args] as const
}

export function useGetOgcStylesStyleIdMapTiles<TError = unknown>(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>>
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
        ? getGetOgcStylesStyleIdMapTilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.styles[':style_id'].map.tiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcStylesStyleIdMapTiles<TError = unknown>(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>>
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
        ? getGetOgcStylesStyleIdMapTilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.styles[':style_id'].map.tiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOgcStylesStyleIdMapTilesTileMatrixSetIdKey(
  args: InferRequestType<
    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
  >,
) {
  return ['ogc', '/ogc/styles/:style_id/map/tiles/:tile_matrix_set_id', args] as const
}

export function useGetOgcStylesStyleIdMapTilesTileMatrixSetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
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
        ? getGetOgcStylesStyleIdMapTilesTileMatrixSetIdKey(args)
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
                (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
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
          client.ogc.styles[':style_id'].map.tiles[':tile_matrix_set_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcStylesStyleIdMapTilesTileMatrixSetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
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
        ? getGetOgcStylesStyleIdMapTilesTileMatrixSetIdKey(args)
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
                (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
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
          client.ogc.styles[':style_id'].map.tiles[':tile_matrix_set_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColKey(
  args: InferRequestType<
    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
) {
  return [
    'ogc',
    '/ogc/styles/:style_id/map/tiles/:tile_matrix_set_id/:tile_matrix/:tile_row/:tile_col',
    args,
  ] as const
}

export function useGetOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileCol<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
        ? getGetOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColKey(args)
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
                (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
          client.ogc.styles[':style_id'].map.tiles[':tile_matrix_set_id'][':tile_matrix'][
            ':tile_row'
          ][':tile_col'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileCol<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
        ? getGetOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColKey(args)
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
                (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
          client.ogc.styles[':style_id'].map.tiles[':tile_matrix_set_id'][':tile_matrix'][
            ':tile_row'
          ][':tile_col'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOgcTileMatrixSetsKey() {
  return ['ogc', '/ogc/tileMatrixSets'] as const
}

export function useGetOgcTileMatrixSets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.tileMatrixSets.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOgcTileMatrixSetsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.tileMatrixSets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.tileMatrixSets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcTileMatrixSets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.tileMatrixSets.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOgcTileMatrixSetsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.tileMatrixSets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ogc.tileMatrixSets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOgcTileMatrixSetsTileMatrixSetIdKey(
  args: InferRequestType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>,
) {
  return ['ogc', '/ogc/tileMatrixSets/:tile_matrix_set_id', args] as const
}

export function useGetOgcTileMatrixSetsTileMatrixSetId<TError = unknown>(
  args: InferRequestType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>>
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
        ? getGetOgcTileMatrixSetsTileMatrixSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ogc.tileMatrixSets[':tile_matrix_set_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOgcTileMatrixSetsTileMatrixSetId<TError = unknown>(
  args: InferRequestType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>>
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
        ? getGetOgcTileMatrixSetsTileMatrixSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ogc.tileMatrixSets[':tile_matrix_set_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSdfSpriteSourceIdsJsonKey(
  args: InferRequestType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>,
) {
  return ['sdf_sprite', '/sdf_sprite/:source_ids.json', args] as const
}

export function useGetSdfSpriteSourceIdsJson<TError = unknown>(
  args: InferRequestType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>>
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
        ? getGetSdfSpriteSourceIdsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sdf_sprite[':source_ids.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSdfSpriteSourceIdsJson<TError = unknown>(
  args: InferRequestType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>>
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
        ? getGetSdfSpriteSourceIdsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sdf_sprite[':source_ids.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSdfSpriteSourceIdsPngKey(
  args: InferRequestType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>,
) {
  return ['sdf_sprite', '/sdf_sprite/:source_ids.png', args] as const
}

export function useGetSdfSpriteSourceIdsPng<TError = unknown>(
  args: InferRequestType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>>
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
        ? getGetSdfSpriteSourceIdsPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sdf_sprite[':source_ids.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSdfSpriteSourceIdsPng<TError = unknown>(
  args: InferRequestType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>>
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
        ? getGetSdfSpriteSourceIdsPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sdf_sprite[':source_ids.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpriteSourceIdsJsonKey(
  args: InferRequestType<(typeof client.sprite)[':source_ids.json']['$get']>,
) {
  return ['sprite', '/sprite/:source_ids.json', args] as const
}

export function useGetSpriteSourceIdsJson<TError = unknown>(
  args: InferRequestType<(typeof client.sprite)[':source_ids.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sprite)[':source_ids.json']['$get']>>
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
        ? getGetSpriteSourceIdsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sprite)[':source_ids.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sprite[':source_ids.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpriteSourceIdsJson<TError = unknown>(
  args: InferRequestType<(typeof client.sprite)[':source_ids.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sprite)[':source_ids.json']['$get']>>
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
        ? getGetSpriteSourceIdsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sprite)[':source_ids.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sprite[':source_ids.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpriteSourceIdsPngKey(
  args: InferRequestType<(typeof client.sprite)[':source_ids.png']['$get']>,
) {
  return ['sprite', '/sprite/:source_ids.png', args] as const
}

export function useGetSpriteSourceIdsPng<TError = unknown>(
  args: InferRequestType<(typeof client.sprite)[':source_ids.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sprite)[':source_ids.png']['$get']>>
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
        ? getGetSpriteSourceIdsPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sprite)[':source_ids.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sprite[':source_ids.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpriteSourceIdsPng<TError = unknown>(
  args: InferRequestType<(typeof client.sprite)[':source_ids.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sprite)[':source_ids.png']['$get']>>
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
        ? getGetSpriteSourceIdsPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sprite)[':source_ids.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sprite[':source_ids.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStyleStyleIdKey(
  args: InferRequestType<(typeof client.style)[':style_id']['$get']>,
) {
  return ['style', '/style/:style_id', args] as const
}

export function useGetStyleStyleId<TError = unknown>(
  args: InferRequestType<(typeof client.style)[':style_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.style)[':style_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStyleStyleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.style)[':style_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.style[':style_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStyleStyleId<TError = unknown>(
  args: InferRequestType<(typeof client.style)[':style_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.style)[':style_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStyleStyleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.style)[':style_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.style[':style_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStyleStyleIdZXYFormatKey(
  args: InferRequestType<(typeof client.style)[':style_id'][':z'][':x'][':y.:format']['$get']>,
) {
  return ['style', '/style/:style_id/:z/:x/:y.:format', args] as const
}

export function useGetStyleStyleIdZXYFormat<TError = unknown>(
  args: InferRequestType<(typeof client.style)[':style_id'][':z'][':x'][':y.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.style)[':style_id'][':z'][':x'][':y.:format']['$get']>
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
        ? getGetStyleStyleIdZXYFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.style)[':style_id'][':z'][':x'][':y.:format']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.style[':style_id'][':z'][':x'][':y.:format'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStyleStyleIdZXYFormat<TError = unknown>(
  args: InferRequestType<(typeof client.style)[':style_id'][':z'][':x'][':y.:format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.style)[':style_id'][':z'][':x'][':y.:format']['$get']>
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
        ? getGetStyleStyleIdZXYFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.style)[':style_id'][':z'][':x'][':y.:format']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.style[':style_id'][':z'][':x'][':y.:format'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStyleStyleIdStaticCameraSizeFormatKey(
  args: InferRequestType<
    (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$get']
  >,
) {
  return ['style', '/style/:style_id/static/:camera/:size.:format', args] as const
}

export function useGetStyleStyleIdStaticCameraSizeFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$get']
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
        ? getGetStyleStyleIdStaticCameraSizeFormatKey(args)
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
                (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$get']
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
          client.style[':style_id'].static[':camera'][':size.:format'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStyleStyleIdStaticCameraSizeFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$get']
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
        ? getGetStyleStyleIdStaticCameraSizeFormatKey(args)
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
                (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$get']
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
          client.style[':style_id'].static[':camera'][':size.:format'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostStyleStyleIdStaticCameraSizeFormatKey() {
  return ['style', '/style/:style_id/static/:camera/:size.:format', 'POST'] as const
}

export function usePostStyleStyleIdStaticCameraSizeFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStyleStyleIdStaticCameraSizeFormatKey()
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
            (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$post']
          >
        },
      ) =>
        parseResponse(
          client.style[':style_id'].static[':camera'][':size.:format'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
