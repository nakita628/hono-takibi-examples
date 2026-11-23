import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionsKey() {
  return ['actions'] as const
}

export function getAddonsKey() {
  return ['addons'] as const
}

export function getCitationsKey() {
  return ['citations'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getCommentsKey() {
  return ['comments'] as const
}

export function getDraftRegistrationsKey() {
  return ['draft_registrations'] as const
}

export function getFilesKey() {
  return ['files'] as const
}

export function getInstitutionsKey() {
  return ['institutions'] as const
}

export function getLicenseKey() {
  return ['license'] as const
}

export function getLicensesKey() {
  return ['licenses'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getNodesKey() {
  return ['nodes'] as const
}

export function getPreprintProvidersKey() {
  return ['preprint_providers'] as const
}

export function getPreprintsKey() {
  return ['preprints'] as const
}

export function getRegistrationsKey() {
  return ['registrations'] as const
}

export function getSchemaResponsesKey() {
  return ['schema_responses'] as const
}

export function getSchemasKey() {
  return ['schemas'] as const
}

export function getTaxonomiesKey() {
  return ['taxonomies'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getViewOnlyLinksKey() {
  return ['view_only_links'] as const
}

export function getWikisKey() {
  return ['wikis'] as const
}

export function getGetKey() {
  return ['', '/'] as const
}

export function useGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIndexKey() {
  return ['actions', '/actions/'] as const
}

export function useGetActionsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAddonsIndexKey() {
  return ['addons', '/addons/'] as const
}

export function useGetAddonsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddonsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addons.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddonsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddonsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addons.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCitationsStylesIndexKey() {
  return ['citations', '/citations/styles/'] as const
}

export function useGetCitationsStylesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.citations.styles.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCitationsStylesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.citations.styles.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.citations.styles.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCitationsStylesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.citations.styles.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCitationsStylesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.citations.styles.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.citations.styles.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCitationsStylesStyleIdIndexKey(
  args: InferRequestType<(typeof client.citations.styles)[':style_id']['index']['$get']>,
) {
  return ['citations', '/citations/styles/:style_id/', args] as const
}

export function useGetCitationsStylesStyleIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.citations.styles)[':style_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.citations.styles)[':style_id']['index']['$get']>>
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
        ? getGetCitationsStylesStyleIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.citations.styles)[':style_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.citations.styles[':style_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCitationsStylesStyleIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.citations.styles)[':style_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.citations.styles)[':style_id']['index']['$get']>>
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
        ? getGetCitationsStylesStyleIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.citations.styles)[':style_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.citations.styles[':style_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionsIndexKey() {
  return ['collections', '/collections/'] as const
}

export function useGetCollectionsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsIndexKey() {
  return ['collections', '/collections/', 'POST'] as const
}

export function usePostCollectionsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.collections.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.collections.index.$post> }) =>
        parseResponse(client.collections.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionIdIndexKey(
  args: InferRequestType<(typeof client.collections)[':collection_id']['index']['$get']>,
) {
  return ['collections', '/collections/:collection_id/', args] as const
}

export function useGetCollectionsCollectionIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['index']['$get']>>
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
        ? getGetCollectionsCollectionIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['index']['$get']>>
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
        ? getGetCollectionsCollectionIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionIdIndexKey() {
  return ['collections', '/collections/:collection_id/', 'DELETE'] as const
}

export function useDeleteCollectionsCollectionIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection_id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollectionsCollectionIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.collections)[':collection_id']['index']['$delete']>
        },
      ) => parseResponse(client.collections[':collection_id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionIdCollectedMetadataIndexKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
  >,
) {
  return ['collections', '/collections/:collection_id/collected_metadata/', args] as const
}

export function useGetCollectionsCollectionIdCollectedMetadataIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
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
        ? getGetCollectionsCollectionIdCollectedMetadataIndexKey(args)
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
                (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
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
          client.collections[':collection_id'].collected_metadata.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionIdCollectedMetadataIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
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
        ? getGetCollectionsCollectionIdCollectedMetadataIndexKey(args)
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
                (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
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
          client.collections[':collection_id'].collected_metadata.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsCollectionIdCollectedMetadataIndexKey() {
  return ['collections', '/collections/:collection_id/collected_metadata/', 'POST'] as const
}

export function usePostCollectionsCollectionIdCollectedMetadataIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['collected_metadata']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionIdCollectedMetadataIndexKey()
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
            (typeof client.collections)[':collection_id']['collected_metadata']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_id'].collected_metadata.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionIdCollectedMetadataCgmIdKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
  >,
) {
  return ['collections', '/collections/:collection_id/collected_metadata/:cgm_id', args] as const
}

export function useGetCollectionsCollectionIdCollectedMetadataCgmId<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
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
        ? getGetCollectionsCollectionIdCollectedMetadataCgmIdKey(args)
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
                (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
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
          client.collections[':collection_id'].collected_metadata[':cgm_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionIdCollectedMetadataCgmId<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
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
        ? getGetCollectionsCollectionIdCollectedMetadataCgmIdKey(args)
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
                (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
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
          client.collections[':collection_id'].collected_metadata[':cgm_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsCollectionIdCollectedMetadataCgmIdKey() {
  return ['collections', '/collections/:collection_id/collected_metadata/:cgm_id', 'POST'] as const
}

export function usePostCollectionsCollectionIdCollectedMetadataCgmId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionIdCollectedMetadataCgmIdKey()
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
            (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_id'].collected_metadata[':cgm_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionIdCollectedMetadataCgmIdKey() {
  return [
    'collections',
    '/collections/:collection_id/collected_metadata/:cgm_id',
    'DELETE',
  ] as const
}

export function useDeleteCollectionsCollectionIdCollectedMetadataCgmId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollectionsCollectionIdCollectedMetadataCgmIdKey()
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
            (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_id'].collected_metadata[':cgm_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
  >,
) {
  return [
    'collections',
    '/collections/:collection_id/collected_metadata/:cgm_id/relationships/subjects/',
    args,
  ] as const
}

export function useGetCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
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
        ? getGetCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexKey(args)
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
                (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
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
          client.collections[':collection_id'].collected_metadata[
            ':cgm_id'
          ].relationships.subjects.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
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
        ? getGetCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexKey(args)
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
                (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
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
          client.collections[':collection_id'].collected_metadata[
            ':cgm_id'
          ].relationships.subjects.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexKey() {
  return [
    'collections',
    '/collections/:collection_id/collected_metadata/:cgm_id/relationships/subjects/',
    'POST',
  ] as const
}

export function usePostCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexKey()
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
            (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_id'].collected_metadata[
            ':cgm_id'
          ].relationships.subjects.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
  >,
) {
  return [
    'collections',
    '/collections/:collection_id/collected_metadata/:cgm_id/subjects/',
    args,
  ] as const
}

export function useGetCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
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
        ? getGetCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexKey(args)
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
                (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
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
          client.collections[':collection_id'].collected_metadata[':cgm_id'].subjects.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
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
        ? getGetCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexKey(args)
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
                (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
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
          client.collections[':collection_id'].collected_metadata[':cgm_id'].subjects.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionsCollectionIdLinkedNodesKey(
  args: InferRequestType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>,
) {
  return ['collections', '/collections/:collection_id/linked_nodes', args] as const
}

export function useGetCollectionsCollectionIdLinkedNodes<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>
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
        ? getGetCollectionsCollectionIdLinkedNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_id'].linked_nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionIdLinkedNodes<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>
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
        ? getGetCollectionsCollectionIdLinkedNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_id'].linked_nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionsCollectionIdLinkedNodesRelationshipsIndexKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
  >,
) {
  return ['collections', '/collections/:collection_id/linked_nodes/relationships/', args] as const
}

export function useGetCollectionsCollectionIdLinkedNodesRelationshipsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
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
        ? getGetCollectionsCollectionIdLinkedNodesRelationshipsIndexKey(args)
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
                (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
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
          client.collections[':collection_id'].linked_nodes.relationships.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionIdLinkedNodesRelationshipsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
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
        ? getGetCollectionsCollectionIdLinkedNodesRelationshipsIndexKey(args)
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
                (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
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
          client.collections[':collection_id'].linked_nodes.relationships.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsCollectionIdLinkedNodesRelationshipsIndexKey() {
  return ['collections', '/collections/:collection_id/linked_nodes/relationships/', 'POST'] as const
}

export function usePostCollectionsCollectionIdLinkedNodesRelationshipsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionIdLinkedNodesRelationshipsIndexKey()
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
            (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_id'].linked_nodes.relationships.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionIdLinkedNodesRelationshipsIndexKey() {
  return [
    'collections',
    '/collections/:collection_id/linked_nodes/relationships/',
    'DELETE',
  ] as const
}

export function useDeleteCollectionsCollectionIdLinkedNodesRelationshipsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollectionsCollectionIdLinkedNodesRelationshipsIndexKey()
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
            (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_id'].linked_nodes.relationships.index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionIdLinkedPreprintsIndexKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
  >,
) {
  return ['collections', '/collections/:collection_id/linked_preprints/', args] as const
}

export function useGetCollectionsCollectionIdLinkedPreprintsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
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
        ? getGetCollectionsCollectionIdLinkedPreprintsIndexKey(args)
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
                (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
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
          client.collections[':collection_id'].linked_preprints.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionIdLinkedPreprintsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
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
        ? getGetCollectionsCollectionIdLinkedPreprintsIndexKey(args)
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
                (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
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
          client.collections[':collection_id'].linked_preprints.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionsCollectionIdLinkedRegistrationsIndexKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
  >,
) {
  return ['collections', '/collections/:collection_id/linked_registrations/', args] as const
}

export function useGetCollectionsCollectionIdLinkedRegistrationsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
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
        ? getGetCollectionsCollectionIdLinkedRegistrationsIndexKey(args)
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
                (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
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
          client.collections[':collection_id'].linked_registrations.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionIdLinkedRegistrationsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
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
        ? getGetCollectionsCollectionIdLinkedRegistrationsIndexKey(args)
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
                (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
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
          client.collections[':collection_id'].linked_registrations.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
  >,
) {
  return [
    'collections',
    '/collections/:collection_id/linked_registrations/relationships/',
    args,
  ] as const
}

export function useGetCollectionsCollectionIdLinkedRegistrationsRelationshipsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
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
        ? getGetCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexKey(args)
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
                (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
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
          client.collections[':collection_id'].linked_registrations.relationships.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionIdLinkedRegistrationsRelationshipsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
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
        ? getGetCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexKey(args)
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
                (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
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
          client.collections[':collection_id'].linked_registrations.relationships.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexKey() {
  return [
    'collections',
    '/collections/:collection_id/linked_registrations/relationships/',
    'POST',
  ] as const
}

export function usePostCollectionsCollectionIdLinkedRegistrationsRelationshipsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexKey()
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
            (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_id'].linked_registrations.relationships.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexKey() {
  return [
    'collections',
    '/collections/:collection_id/linked_registrations/relationships/',
    'DELETE',
  ] as const
}

export function useDeleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexKey()
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
            (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_id'].linked_registrations.relationships.index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCommentsCommentIdIndexKey(
  args: InferRequestType<(typeof client.comments)[':comment_id']['index']['$get']>,
) {
  return ['comments', '/comments/:comment_id/', args] as const
}

export function useGetCommentsCommentIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':comment_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':comment_id']['index']['$get']>>
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
        ? getGetCommentsCommentIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':comment_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':comment_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommentsCommentIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':comment_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':comment_id']['index']['$get']>>
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
        ? getGetCommentsCommentIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':comment_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':comment_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCommentsCommentIdIndexKey() {
  return ['comments', '/comments/:comment_id/', 'PUT'] as const
}

export function usePutCommentsCommentIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.comments)[':comment_id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.comments)[':comment_id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCommentsCommentIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.comments)[':comment_id']['index']['$put']> },
      ) => parseResponse(client.comments[':comment_id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCommentsCommentIdIndexKey() {
  return ['comments', '/comments/:comment_id/', 'DELETE'] as const
}

export function useDeleteCommentsCommentIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':comment_id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.comments)[':comment_id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCommentsCommentIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.comments)[':comment_id']['index']['$delete']> },
      ) => parseResponse(client.comments[':comment_id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDraftRegistrationsIndexKey() {
  return ['draft_registrations', '/draft_registrations/'] as const
}

export function useGetDraftRegistrationsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.draft_registrations.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDraftRegistrationsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.draft_registrations.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.draft_registrations.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDraftRegistrationsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.draft_registrations.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDraftRegistrationsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.draft_registrations.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.draft_registrations.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDraftRegistrationsIndexKey() {
  return ['draft_registrations', '/draft_registrations/', 'POST'] as const
}

export function usePostDraftRegistrationsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.draft_registrations.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.draft_registrations.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDraftRegistrationsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.draft_registrations.index.$post> },
      ) => parseResponse(client.draft_registrations.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDraftRegistrationsDraftIdIndexKey(
  args: InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>,
) {
  return ['draft_registrations', '/draft_registrations/:draft_id/', args] as const
}

export function useGetDraftRegistrationsDraftIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>>
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
        ? getGetDraftRegistrationsDraftIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.draft_registrations[':draft_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDraftRegistrationsDraftIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>>
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
        ? getGetDraftRegistrationsDraftIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.draft_registrations[':draft_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDraftRegistrationsDraftIdIndexKey() {
  return ['draft_registrations', '/draft_registrations/:draft_id/', 'DELETE'] as const
}

export function useDeleteDraftRegistrationsDraftIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.draft_registrations)[':draft_id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDraftRegistrationsDraftIdIndexKey()
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
            (typeof client.draft_registrations)[':draft_id']['index']['$delete']
          >
        },
      ) => parseResponse(client.draft_registrations[':draft_id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDraftRegistrationsDraftIdIndexKey() {
  return ['draft_registrations', '/draft_registrations/:draft_id/', 'PATCH'] as const
}

export function usePatchDraftRegistrationsDraftIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.draft_registrations)[':draft_id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDraftRegistrationsDraftIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$patch']>
        },
      ) => parseResponse(client.draft_registrations[':draft_id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDraftRegistrationsDraftIdContributorsIndexKey(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
  >,
) {
  return ['draft_registrations', '/draft_registrations/:draft_id/contributors/', args] as const
}

export function useGetDraftRegistrationsDraftIdContributorsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
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
        ? getGetDraftRegistrationsDraftIdContributorsIndexKey(args)
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
                (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
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
          client.draft_registrations[':draft_id'].contributors.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDraftRegistrationsDraftIdContributorsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
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
        ? getGetDraftRegistrationsDraftIdContributorsIndexKey(args)
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
                (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
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
          client.draft_registrations[':draft_id'].contributors.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDraftRegistrationsDraftIdContributorsIndexKey() {
  return ['draft_registrations', '/draft_registrations/:draft_id/contributors/', 'POST'] as const
}

export function usePostDraftRegistrationsDraftIdContributorsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDraftRegistrationsDraftIdContributorsIndexKey()
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
            (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.draft_registrations[':draft_id'].contributors.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDraftRegistrationsDraftIdContributorsUserIdIndexKey(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
  >,
) {
  return [
    'draft_registrations',
    '/draft_registrations/:draft_id/contributors/:user_id/',
    args,
  ] as const
}

export function useGetDraftRegistrationsDraftIdContributorsUserIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
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
        ? getGetDraftRegistrationsDraftIdContributorsUserIdIndexKey(args)
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
                (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
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
          client.draft_registrations[':draft_id'].contributors[':user_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDraftRegistrationsDraftIdContributorsUserIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
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
        ? getGetDraftRegistrationsDraftIdContributorsUserIdIndexKey(args)
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
                (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
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
          client.draft_registrations[':draft_id'].contributors[':user_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDraftRegistrationsDraftIdInstitutionsIndexKey(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
  >,
) {
  return ['draft_registrations', '/draft_registrations/:draft_id/institutions/', args] as const
}

export function useGetDraftRegistrationsDraftIdInstitutionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
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
        ? getGetDraftRegistrationsDraftIdInstitutionsIndexKey(args)
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
                (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
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
          client.draft_registrations[':draft_id'].institutions.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDraftRegistrationsDraftIdInstitutionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
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
        ? getGetDraftRegistrationsDraftIdInstitutionsIndexKey(args)
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
                (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
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
          client.draft_registrations[':draft_id'].institutions.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDraftRegistrationsDraftIdSubjectsIndexKey(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']
  >,
) {
  return ['draft_registrations', '/draft_registrations/:draft_id/subjects/', args] as const
}

export function useGetDraftRegistrationsDraftIdSubjectsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']
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
        ? getGetDraftRegistrationsDraftIdSubjectsIndexKey(args)
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
                (typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']
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
          client.draft_registrations[':draft_id'].subjects.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDraftRegistrationsDraftIdSubjectsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']
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
        ? getGetDraftRegistrationsDraftIdSubjectsIndexKey(args)
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
                (typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']
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
          client.draft_registrations[':draft_id'].subjects.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFilesFileIdIndexKey(
  args: InferRequestType<(typeof client.files)[':file_id']['index']['$get']>,
) {
  return ['files', '/files/:file_id/', args] as const
}

export function useGetFilesFileIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['index']['$get']>>
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
        ? getGetFilesFileIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['index']['$get']>>
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
        ? getGetFilesFileIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchFilesFileIdIndexKey() {
  return ['files', '/files/:file_id/', 'PATCH'] as const
}

export function usePatchFilesFileIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFilesFileIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)[':file_id']['index']['$patch']> },
      ) => parseResponse(client.files[':file_id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdVersionsIndexKey(
  args: InferRequestType<(typeof client.files)[':file_id']['versions']['index']['$get']>,
) {
  return ['files', '/files/:file_id/versions/', args] as const
}

export function useGetFilesFileIdVersionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['versions']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['index']['$get']>>
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
        ? getGetFilesFileIdVersionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].versions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdVersionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['versions']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['index']['$get']>>
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
        ? getGetFilesFileIdVersionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].versions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesFileIdVersionsVersionIdIndexKey(
  args: InferRequestType<
    (typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']
  >,
) {
  return ['files', '/files/:file_id/versions/:version_id/', args] as const
}

export function useGetFilesFileIdVersionsVersionIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']
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
        ? getGetFilesFileIdVersionsVersionIdIndexKey(args)
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
                (typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']
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
          client.files[':file_id'].versions[':version_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdVersionsVersionIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']
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
        ? getGetFilesFileIdVersionsVersionIdIndexKey(args)
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
                (typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']
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
          client.files[':file_id'].versions[':version_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInstitutionsIndexKey() {
  return ['institutions', '/institutions/'] as const
}

export function useGetInstitutionsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutions.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstitutionsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutions.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.institutions.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstitutionsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutions.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstitutionsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutions.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.institutions.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstitutionsInstitutionIdIndexKey(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['index']['$get']>,
) {
  return ['institutions', '/institutions/:institution_id/', args] as const
}

export function useGetInstitutionsInstitutionIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.institutions)[':institution_id']['index']['$get']>>
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
        ? getGetInstitutionsInstitutionIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.institutions)[':institution_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.institutions[':institution_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstitutionsInstitutionIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.institutions)[':institution_id']['index']['$get']>>
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
        ? getGetInstitutionsInstitutionIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.institutions)[':institution_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.institutions[':institution_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstitutionsInstitutionIdNodesIndexKey(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['nodes']['index']['$get']>,
) {
  return ['institutions', '/institutions/:institution_id/nodes/', args] as const
}

export function useGetInstitutionsInstitutionIdNodesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['nodes']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.institutions)[':institution_id']['nodes']['index']['$get']>
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
        ? getGetInstitutionsInstitutionIdNodesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.institutions)[':institution_id']['nodes']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.institutions[':institution_id'].nodes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstitutionsInstitutionIdNodesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['nodes']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.institutions)[':institution_id']['nodes']['index']['$get']>
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
        ? getGetInstitutionsInstitutionIdNodesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.institutions)[':institution_id']['nodes']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.institutions[':institution_id'].nodes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstitutionsInstitutionIdRegistrationsIndexKey(
  args: InferRequestType<
    (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
  >,
) {
  return ['institutions', '/institutions/:institution_id/registrations/', args] as const
}

export function useGetInstitutionsInstitutionIdRegistrationsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
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
        ? getGetInstitutionsInstitutionIdRegistrationsIndexKey(args)
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
                (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
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
          client.institutions[':institution_id'].registrations.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstitutionsInstitutionIdRegistrationsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
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
        ? getGetInstitutionsInstitutionIdRegistrationsIndexKey(args)
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
                (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
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
          client.institutions[':institution_id'].registrations.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInstitutionsInstitutionIdUsersIndexKey(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['users']['index']['$get']>,
) {
  return ['institutions', '/institutions/:institution_id/users/', args] as const
}

export function useGetInstitutionsInstitutionIdUsersIndex<TError = unknown>(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['users']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.institutions)[':institution_id']['users']['index']['$get']>
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
        ? getGetInstitutionsInstitutionIdUsersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.institutions)[':institution_id']['users']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.institutions[':institution_id'].users.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstitutionsInstitutionIdUsersIndex<TError = unknown>(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['users']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.institutions)[':institution_id']['users']['index']['$get']>
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
        ? getGetInstitutionsInstitutionIdUsersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.institutions)[':institution_id']['users']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.institutions[':institution_id'].users.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLicenseLicenseIdIndexKey(
  args: InferRequestType<(typeof client.license)[':license_id']['index']['$get']>,
) {
  return ['license', '/license/:license_id/', args] as const
}

export function useGetLicenseLicenseIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.license)[':license_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.license)[':license_id']['index']['$get']>>
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
        ? getGetLicenseLicenseIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.license)[':license_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.license[':license_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLicenseLicenseIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.license)[':license_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.license)[':license_id']['index']['$get']>>
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
        ? getGetLicenseLicenseIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.license)[':license_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.license[':license_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLicensesIndexKey() {
  return ['licenses', '/licenses/'] as const
}

export function useGetLicensesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicensesIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.licenses.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLicensesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicensesIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.licenses.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogsLogIdIndexKey(
  args: InferRequestType<(typeof client.logs)[':log_id']['index']['$get']>,
) {
  return ['logs', '/logs/:log_id/', args] as const
}

export function useGetLogsLogIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':log_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)[':log_id']['index']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetLogsLogIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)[':log_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':log_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsLogIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':log_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)[':log_id']['index']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetLogsLogIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)[':log_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':log_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodesIndexKey() {
  return ['nodes', '/nodes/'] as const
}

export function useGetNodesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodesIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodesIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNodesIndexKey() {
  return ['nodes', '/nodes/', 'POST'] as const
}

export function usePostNodesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.nodes.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.nodes.index.$post> }) =>
        parseResponse(client.nodes.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodesNodeIdIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/', args] as const
}

export function useGetNodesNodeIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$get']>>
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
        ? getGetNodesNodeIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$get']>>
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
        ? getGetNodesNodeIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteNodesNodeIdIndexKey() {
  return ['nodes', '/nodes/:node_id/', 'DELETE'] as const
}

export function useDeleteNodesNodeIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.nodes)[':node_id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNodesNodeIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.nodes)[':node_id']['index']['$delete']> },
      ) => parseResponse(client.nodes[':node_id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchNodesNodeIdIndexKey() {
  return ['nodes', '/nodes/:node_id/', 'PATCH'] as const
}

export function usePatchNodesNodeIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nodes)[':node_id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNodesNodeIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.nodes)[':node_id']['index']['$patch']> },
      ) => parseResponse(client.nodes[':node_id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodesNodeIdAddonsIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/addons/', args] as const
}

export function useGetNodesNodeIdAddonsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>>
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
        ? getGetNodesNodeIdAddonsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].addons.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdAddonsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>>
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
        ? getGetNodesNodeIdAddonsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].addons.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdAddonsProviderIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/addons/:provider/', args] as const
}

export function useGetNodesNodeIdAddonsProviderIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']>
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
        ? getGetNodesNodeIdAddonsProviderIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].addons[':provider'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdAddonsProviderIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']>
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
        ? getGetNodesNodeIdAddonsProviderIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].addons[':provider'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchNodesNodeIdAddonsProviderIndexKey() {
  return ['nodes', '/nodes/:node_id/addons/:provider/', 'PATCH'] as const
}

export function usePatchNodesNodeIdAddonsProviderIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNodesNodeIdAddonsProviderIndexKey()
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
            (typeof client.nodes)[':node_id']['addons'][':provider']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.nodes[':node_id'].addons[':provider'].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNodesNodeIdAddonsProviderFoldersIndexKey(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
  >,
) {
  return ['nodes', '/nodes/:node_id/addons/:provider/folders/', args] as const
}

export function useGetNodesNodeIdAddonsProviderFoldersIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
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
        ? getGetNodesNodeIdAddonsProviderFoldersIndexKey(args)
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
                (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
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
          client.nodes[':node_id'].addons[':provider'].folders.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdAddonsProviderFoldersIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
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
        ? getGetNodesNodeIdAddonsProviderFoldersIndexKey(args)
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
                (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
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
          client.nodes[':node_id'].addons[':provider'].folders.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdChildrenIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['children']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/children/', args] as const
}

export function useGetNodesNodeIdChildrenIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['children']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['children']['index']['$get']>>
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
        ? getGetNodesNodeIdChildrenIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['children']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].children.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdChildrenIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['children']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['children']['index']['$get']>>
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
        ? getGetNodesNodeIdChildrenIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['children']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].children.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNodesNodeIdChildrenIndexKey() {
  return ['nodes', '/nodes/:node_id/children/', 'POST'] as const
}

export function usePostNodesNodeIdChildrenIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['children']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nodes)[':node_id']['children']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodesNodeIdChildrenIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.nodes)[':node_id']['children']['index']['$post']>
        },
      ) => parseResponse(client.nodes[':node_id'].children.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodesNodeIdCitationIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/citation/', args] as const
}

export function useGetNodesNodeIdCitationIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>>
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
        ? getGetNodesNodeIdCitationIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].citation.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdCitationIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>>
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
        ? getGetNodesNodeIdCitationIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].citation.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdCitationStyleIdIndexKey(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']
  >,
) {
  return ['nodes', '/nodes/:node_id/citation/:style_id/', args] as const
}

export function useGetNodesNodeIdCitationStyleIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']
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
        ? getGetNodesNodeIdCitationStyleIdIndexKey(args)
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
                (typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']
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
          client.nodes[':node_id'].citation[':style_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdCitationStyleIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']
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
        ? getGetNodesNodeIdCitationStyleIdIndexKey(args)
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
                (typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']
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
          client.nodes[':node_id'].citation[':style_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdCommentsIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/comments/', args] as const
}

export function useGetNodesNodeIdCommentsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>>
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
        ? getGetNodesNodeIdCommentsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].comments.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdCommentsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>>
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
        ? getGetNodesNodeIdCommentsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].comments.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNodesNodeIdCommentsIndexKey() {
  return ['nodes', '/nodes/:node_id/comments/', 'POST'] as const
}

export function usePostNodesNodeIdCommentsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['comments']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nodes)[':node_id']['comments']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodesNodeIdCommentsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.nodes)[':node_id']['comments']['index']['$post']>
        },
      ) => parseResponse(client.nodes[':node_id'].comments.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodesNodeIdContributorsIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/contributors/', args] as const
}

export function useGetNodesNodeIdContributorsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>>
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
        ? getGetNodesNodeIdContributorsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].contributors.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdContributorsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>>
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
        ? getGetNodesNodeIdContributorsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].contributors.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNodesNodeIdContributorsIndexKey() {
  return ['nodes', '/nodes/:node_id/contributors/', 'POST'] as const
}

export function usePostNodesNodeIdContributorsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['contributors']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nodes)[':node_id']['contributors']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodesNodeIdContributorsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.nodes)[':node_id']['contributors']['index']['$post']>
        },
      ) => parseResponse(client.nodes[':node_id'].contributors.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodesNodeIdContributorsUserIdIndexKey(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']
  >,
) {
  return ['nodes', '/nodes/:node_id/contributors/:user_id/', args] as const
}

export function useGetNodesNodeIdContributorsUserIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']
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
        ? getGetNodesNodeIdContributorsUserIdIndexKey(args)
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
                (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']
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
          client.nodes[':node_id'].contributors[':user_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdContributorsUserIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']
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
        ? getGetNodesNodeIdContributorsUserIdIndexKey(args)
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
                (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']
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
          client.nodes[':node_id'].contributors[':user_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteNodesNodeIdContributorsUserIdIndexKey() {
  return ['nodes', '/nodes/:node_id/contributors/:user_id/', 'DELETE'] as const
}

export function useDeleteNodesNodeIdContributorsUserIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNodesNodeIdContributorsUserIdIndexKey()
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
            (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.nodes[':node_id'].contributors[':user_id'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchNodesNodeIdContributorsUserIdIndexKey() {
  return ['nodes', '/nodes/:node_id/contributors/:user_id/', 'PATCH'] as const
}

export function usePatchNodesNodeIdContributorsUserIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNodesNodeIdContributorsUserIdIndexKey()
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
            (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.nodes[':node_id'].contributors[':user_id'].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNodesNodeIdDraftRegistrationsIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/draft_registrations/', args] as const
}

export function useGetNodesNodeIdDraftRegistrationsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']>
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
        ? getGetNodesNodeIdDraftRegistrationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].draft_registrations.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdDraftRegistrationsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']>
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
        ? getGetNodesNodeIdDraftRegistrationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].draft_registrations.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNodesNodeIdDraftRegistrationsIndexKey() {
  return ['nodes', '/nodes/:node_id/draft_registrations/', 'POST'] as const
}

export function usePostNodesNodeIdDraftRegistrationsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodesNodeIdDraftRegistrationsIndexKey()
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
            (typeof client.nodes)[':node_id']['draft_registrations']['index']['$post']
          >
        },
      ) =>
        parseResponse(client.nodes[':node_id'].draft_registrations.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodesNodeIdDraftRegistrationsDraftIdIndexKey(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
  >,
) {
  return ['nodes', '/nodes/:node_id/draft_registrations/:draft_id/', args] as const
}

export function useGetNodesNodeIdDraftRegistrationsDraftIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
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
        ? getGetNodesNodeIdDraftRegistrationsDraftIdIndexKey(args)
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
                (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
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
          client.nodes[':node_id'].draft_registrations[':draft_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdDraftRegistrationsDraftIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
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
        ? getGetNodesNodeIdDraftRegistrationsDraftIdIndexKey(args)
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
                (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
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
          client.nodes[':node_id'].draft_registrations[':draft_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteNodesNodeIdDraftRegistrationsDraftIdIndexKey() {
  return ['nodes', '/nodes/:node_id/draft_registrations/:draft_id/', 'DELETE'] as const
}

export function useDeleteNodesNodeIdDraftRegistrationsDraftIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNodesNodeIdDraftRegistrationsDraftIdIndexKey()
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
            (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.nodes[':node_id'].draft_registrations[':draft_id'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchNodesNodeIdDraftRegistrationsDraftIdIndexKey() {
  return ['nodes', '/nodes/:node_id/draft_registrations/:draft_id/', 'PATCH'] as const
}

export function usePatchNodesNodeIdDraftRegistrationsDraftIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNodesNodeIdDraftRegistrationsDraftIdIndexKey()
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
            (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.nodes[':node_id'].draft_registrations[':draft_id'].index.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNodesNodeIdFilesIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['files']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/files/', args] as const
}

export function useGetNodesNodeIdFilesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['files']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['files']['index']['$get']>>
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
        ? getGetNodesNodeIdFilesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['files']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].files.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdFilesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['files']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['files']['index']['$get']>>
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
        ? getGetNodesNodeIdFilesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['files']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].files.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdFilesProvidersProviderIndexKey(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
  >,
) {
  return ['nodes', '/nodes/:node_id/files/providers/:provider/', args] as const
}

export function useGetNodesNodeIdFilesProvidersProviderIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
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
        ? getGetNodesNodeIdFilesProvidersProviderIndexKey(args)
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
                (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
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
          client.nodes[':node_id'].files.providers[':provider'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdFilesProvidersProviderIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
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
        ? getGetNodesNodeIdFilesProvidersProviderIndexKey(args)
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
                (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
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
          client.nodes[':node_id'].files.providers[':provider'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdFilesProviderIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/files/:provider/', args] as const
}

export function useGetNodesNodeIdFilesProviderIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>
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
        ? getGetNodesNodeIdFilesProviderIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].files[':provider'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdFilesProviderIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>
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
        ? getGetNodesNodeIdFilesProviderIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].files[':provider'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdFilesProviderPathIndexKey(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
  >,
) {
  return ['nodes', '/nodes/:node_id/files/:provider/:path/', args] as const
}

export function useGetNodesNodeIdFilesProviderPathIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
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
        ? getGetNodesNodeIdFilesProviderPathIndexKey(args)
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
                (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
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
          client.nodes[':node_id'].files[':provider'][':path'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdFilesProviderPathIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
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
        ? getGetNodesNodeIdFilesProviderPathIndexKey(args)
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
                (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
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
          client.nodes[':node_id'].files[':provider'][':path'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdForksIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/forks/', args] as const
}

export function useGetNodesNodeIdForksIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>>
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
        ? getGetNodesNodeIdForksIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].forks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdForksIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>>
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
        ? getGetNodesNodeIdForksIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].forks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNodesNodeIdForksIndexKey() {
  return ['nodes', '/nodes/:node_id/forks/', 'POST'] as const
}

export function usePostNodesNodeIdForksIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['forks']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nodes)[':node_id']['forks']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodesNodeIdForksIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.nodes)[':node_id']['forks']['index']['$post']> },
      ) => parseResponse(client.nodes[':node_id'].forks.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodesNodeIdIdentifiersIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/identifiers/', args] as const
}

export function useGetNodesNodeIdIdentifiersIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>>
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
        ? getGetNodesNodeIdIdentifiersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].identifiers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdIdentifiersIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>>
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
        ? getGetNodesNodeIdIdentifiersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].identifiers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdInstitutionsIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/institutions/', args] as const
}

export function useGetNodesNodeIdInstitutionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>>
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
        ? getGetNodesNodeIdInstitutionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].institutions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdInstitutionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>>
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
        ? getGetNodesNodeIdInstitutionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].institutions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdLinkedNodesIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/linked_nodes/', args] as const
}

export function useGetNodesNodeIdLinkedNodesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>>
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
        ? getGetNodesNodeIdLinkedNodesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].linked_nodes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdLinkedNodesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>>
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
        ? getGetNodesNodeIdLinkedNodesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].linked_nodes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdLogsIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/logs/', args] as const
}

export function useGetNodesNodeIdLogsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>>
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
        ? getGetNodesNodeIdLogsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].logs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdLogsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>>
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
        ? getGetNodesNodeIdLogsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].logs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdPreprintsIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/preprints/', args] as const
}

export function useGetNodesNodeIdPreprintsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>>
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
        ? getGetNodesNodeIdPreprintsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].preprints.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdPreprintsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>>
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
        ? getGetNodesNodeIdPreprintsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].preprints.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdRegistrationsIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/registrations/', args] as const
}

export function useGetNodesNodeIdRegistrationsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>>
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
        ? getGetNodesNodeIdRegistrationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].registrations.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdRegistrationsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>>
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
        ? getGetNodesNodeIdRegistrationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].registrations.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdViewOnlyLinksIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/view_only_links/', args] as const
}

export function useGetNodesNodeIdViewOnlyLinksIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>
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
        ? getGetNodesNodeIdViewOnlyLinksIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].view_only_links.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdViewOnlyLinksIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>
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
        ? getGetNodesNodeIdViewOnlyLinksIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':node_id'].view_only_links.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdViewOnlyLinksLinkIdIndexKey(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
  >,
) {
  return ['nodes', '/nodes/:node_id/view_only_links/:link_id/', args] as const
}

export function useGetNodesNodeIdViewOnlyLinksLinkIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
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
        ? getGetNodesNodeIdViewOnlyLinksLinkIdIndexKey(args)
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
                (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
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
          client.nodes[':node_id'].view_only_links[':link_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdViewOnlyLinksLinkIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
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
        ? getGetNodesNodeIdViewOnlyLinksLinkIdIndexKey(args)
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
                (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
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
          client.nodes[':node_id'].view_only_links[':link_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdWikisIndexKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/wikis/', args] as const
}

export function useGetNodesNodeIdWikisIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>>
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
        ? getGetNodesNodeIdWikisIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].wikis.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdWikisIndex<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>>
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
        ? getGetNodesNodeIdWikisIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':node_id'].wikis.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPreprintProvidersIndexKey() {
  return ['preprint_providers', '/preprint_providers/'] as const
}

export function useGetPreprintProvidersIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.preprint_providers.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPreprintProvidersIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.preprint_providers.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.preprint_providers.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreprintProvidersIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.preprint_providers.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPreprintProvidersIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.preprint_providers.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.preprint_providers.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPreprintProvidersPreprintProviderIdIndexKey(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']
  >,
) {
  return ['preprint_providers', '/preprint_providers/:preprint_provider_id/', args] as const
}

export function useGetPreprintProvidersPreprintProviderIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']
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
        ? getGetPreprintProvidersPreprintProviderIdIndexKey(args)
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
                (typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']
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
          client.preprint_providers[':preprint_provider_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreprintProvidersPreprintProviderIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']
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
        ? getGetPreprintProvidersPreprintProviderIdIndexKey(args)
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
                (typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']
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
          client.preprint_providers[':preprint_provider_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPreprintProvidersPreprintProviderIdLicensesIndexKey(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
  >,
) {
  return [
    'preprint_providers',
    '/preprint_providers/:preprint_provider_id/licenses/',
    args,
  ] as const
}

export function useGetPreprintProvidersPreprintProviderIdLicensesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
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
        ? getGetPreprintProvidersPreprintProviderIdLicensesIndexKey(args)
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
                (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
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
          client.preprint_providers[':preprint_provider_id'].licenses.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreprintProvidersPreprintProviderIdLicensesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
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
        ? getGetPreprintProvidersPreprintProviderIdLicensesIndexKey(args)
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
                (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
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
          client.preprint_providers[':preprint_provider_id'].licenses.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPreprintProvidersPreprintProviderIdPreprintsIndexKey(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
  >,
) {
  return [
    'preprint_providers',
    '/preprint_providers/:preprint_provider_id/preprints/',
    args,
  ] as const
}

export function useGetPreprintProvidersPreprintProviderIdPreprintsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
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
        ? getGetPreprintProvidersPreprintProviderIdPreprintsIndexKey(args)
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
                (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
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
          client.preprint_providers[':preprint_provider_id'].preprints.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreprintProvidersPreprintProviderIdPreprintsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
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
        ? getGetPreprintProvidersPreprintProviderIdPreprintsIndexKey(args)
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
                (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
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
          client.preprint_providers[':preprint_provider_id'].preprints.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPreprintProvidersPreprintProviderIdTaxonomiesIndexKey(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
  >,
) {
  return [
    'preprint_providers',
    '/preprint_providers/:preprint_provider_id/taxonomies/',
    args,
  ] as const
}

export function useGetPreprintProvidersPreprintProviderIdTaxonomiesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
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
        ? getGetPreprintProvidersPreprintProviderIdTaxonomiesIndexKey(args)
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
                (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
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
          client.preprint_providers[':preprint_provider_id'].taxonomies.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreprintProvidersPreprintProviderIdTaxonomiesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
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
        ? getGetPreprintProvidersPreprintProviderIdTaxonomiesIndexKey(args)
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
                (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
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
          client.preprint_providers[':preprint_provider_id'].taxonomies.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPreprintsIndexKey() {
  return ['preprints', '/preprints/'] as const
}

export function useGetPreprintsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPreprintsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.preprints.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreprintsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPreprintsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.preprints.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPreprintsIndexKey() {
  return ['preprints', '/preprints/', 'POST'] as const
}

export function usePostPreprintsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.preprints.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPreprintsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.preprints.index.$post> }) =>
        parseResponse(client.preprints.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPreprintsPreprintIdIndexKey(
  args: InferRequestType<(typeof client.preprints)[':preprint_id']['index']['$get']>,
) {
  return ['preprints', '/preprints/:preprint_id/', args] as const
}

export function useGetPreprintsPreprintIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.preprints)[':preprint_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preprints)[':preprint_id']['index']['$get']>>
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
        ? getGetPreprintsPreprintIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preprints)[':preprint_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.preprints[':preprint_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreprintsPreprintIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.preprints)[':preprint_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preprints)[':preprint_id']['index']['$get']>>
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
        ? getGetPreprintsPreprintIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preprints)[':preprint_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.preprints[':preprint_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchPreprintsPreprintIdIndexKey() {
  return ['preprints', '/preprints/:preprint_id/', 'PATCH'] as const
}

export function usePatchPreprintsPreprintIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.preprints)[':preprint_id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.preprints)[':preprint_id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPreprintsPreprintIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.preprints)[':preprint_id']['index']['$patch']> },
      ) => parseResponse(client.preprints[':preprint_id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPreprintsPreprintIdBibliographicContributorsIndexKey(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
  >,
) {
  return ['preprints', '/preprints/:preprint_id/bibliographic_contributors/', args] as const
}

export function useGetPreprintsPreprintIdBibliographicContributorsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
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
        ? getGetPreprintsPreprintIdBibliographicContributorsIndexKey(args)
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
                (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
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
          client.preprints[':preprint_id'].bibliographic_contributors.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreprintsPreprintIdBibliographicContributorsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
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
        ? getGetPreprintsPreprintIdBibliographicContributorsIndexKey(args)
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
                (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
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
          client.preprints[':preprint_id'].bibliographic_contributors.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPreprintsPreprintIdCitationIndexKey(
  args: InferRequestType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>,
) {
  return ['preprints', '/preprints/:preprint_id/citation/', args] as const
}

export function useGetPreprintsPreprintIdCitationIndex<TError = unknown>(
  args: InferRequestType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>
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
        ? getGetPreprintsPreprintIdCitationIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.preprints[':preprint_id'].citation.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreprintsPreprintIdCitationIndex<TError = unknown>(
  args: InferRequestType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>
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
        ? getGetPreprintsPreprintIdCitationIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.preprints[':preprint_id'].citation.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPreprintsPreprintIdCitationStyleIdIndexKey(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
  >,
) {
  return ['preprints', '/preprints/:preprint_id/citation/:style_id/', args] as const
}

export function useGetPreprintsPreprintIdCitationStyleIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
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
        ? getGetPreprintsPreprintIdCitationStyleIdIndexKey(args)
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
                (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
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
          client.preprints[':preprint_id'].citation[':style_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreprintsPreprintIdCitationStyleIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
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
        ? getGetPreprintsPreprintIdCitationStyleIdIndexKey(args)
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
                (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
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
          client.preprints[':preprint_id'].citation[':style_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPreprintsPreprintIdContributorsIndexKey(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['contributors']['index']['$get']
  >,
) {
  return ['preprints', '/preprints/:preprint_id/contributors/', args] as const
}

export function useGetPreprintsPreprintIdContributorsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['contributors']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.preprints)[':preprint_id']['contributors']['index']['$get']>
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
        ? getGetPreprintsPreprintIdContributorsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.preprints)[':preprint_id']['contributors']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.preprints[':preprint_id'].contributors.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreprintsPreprintIdContributorsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['contributors']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.preprints)[':preprint_id']['contributors']['index']['$get']>
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
        ? getGetPreprintsPreprintIdContributorsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.preprints)[':preprint_id']['contributors']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.preprints[':preprint_id'].contributors.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPreprintsPreprintIdContributorsIndexKey() {
  return ['preprints', '/preprints/:preprint_id/contributors/', 'POST'] as const
}

export function usePostPreprintsPreprintIdContributorsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.preprints)[':preprint_id']['contributors']['index']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.preprints)[':preprint_id']['contributors']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPreprintsPreprintIdContributorsIndexKey()
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
            (typeof client.preprints)[':preprint_id']['contributors']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.preprints[':preprint_id'].contributors.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPreprintsPreprintIdContributorsUserIdIndexKey(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
  >,
) {
  return ['preprints', '/preprints/:preprint_id/contributors/:user_id/', args] as const
}

export function useGetPreprintsPreprintIdContributorsUserIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
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
        ? getGetPreprintsPreprintIdContributorsUserIdIndexKey(args)
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
                (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
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
          client.preprints[':preprint_id'].contributors[':user_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreprintsPreprintIdContributorsUserIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
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
        ? getGetPreprintsPreprintIdContributorsUserIdIndexKey(args)
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
                (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
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
          client.preprints[':preprint_id'].contributors[':user_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsIndexKey() {
  return ['registrations', '/registrations/'] as const
}

export function useGetRegistrationsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrations.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegistrationsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.registrations.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registrations.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrations.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegistrationsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.registrations.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registrations.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdIndexKey(
  args: InferRequestType<(typeof client.registrations)[':registration_id']['index']['$get']>,
) {
  return ['registrations', '/registrations/:registration_id/', args] as const
}

export function useGetRegistrationsRegistrationIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.registrations)[':registration_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registrations)[':registration_id']['index']['$get']>>
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
        ? getGetRegistrationsRegistrationIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registrations)[':registration_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.registrations[':registration_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.registrations)[':registration_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registrations)[':registration_id']['index']['$get']>>
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
        ? getGetRegistrationsRegistrationIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registrations)[':registration_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.registrations[':registration_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchRegistrationsRegistrationIdIndexKey() {
  return ['registrations', '/registrations/:registration_id/', 'PATCH'] as const
}

export function usePatchRegistrationsRegistrationIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registrations)[':registration_id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.registrations)[':registration_id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRegistrationsRegistrationIdIndexKey()
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
            (typeof client.registrations)[':registration_id']['index']['$patch']
          >
        },
      ) => parseResponse(client.registrations[':registration_id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdChildrenIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['children']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/children/', args] as const
}

export function useGetRegistrationsRegistrationIdChildrenIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['children']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['children']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdChildrenIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['children']['index']['$get']
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
          client.registrations[':registration_id'].children.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdChildrenIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['children']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['children']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdChildrenIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['children']['index']['$get']
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
          client.registrations[':registration_id'].children.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdCitationsIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['citations']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/citations/', args] as const
}

export function useGetRegistrationsRegistrationIdCitationsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['citations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['citations']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdCitationsIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['citations']['index']['$get']
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
          client.registrations[':registration_id'].citations.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdCitationsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['citations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['citations']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdCitationsIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['citations']['index']['$get']
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
          client.registrations[':registration_id'].citations.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdCitationsCitationIdIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/citations/:citation_id/', args] as const
}

export function useGetRegistrationsRegistrationIdCitationsCitationIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdCitationsCitationIdIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
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
          client.registrations[':registration_id'].citations[':citation_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdCitationsCitationIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdCitationsCitationIdIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
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
          client.registrations[':registration_id'].citations[':citation_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdCommentsIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['comments']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/comments/', args] as const
}

export function useGetRegistrationsRegistrationIdCommentsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['comments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['comments']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdCommentsIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['comments']['index']['$get']
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
          client.registrations[':registration_id'].comments.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdCommentsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['comments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['comments']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdCommentsIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['comments']['index']['$get']
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
          client.registrations[':registration_id'].comments.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdContributorsIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/contributors/', args] as const
}

export function useGetRegistrationsRegistrationIdContributorsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdContributorsIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
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
          client.registrations[':registration_id'].contributors.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdContributorsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdContributorsIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
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
          client.registrations[':registration_id'].contributors.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdContributorsUserIdIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/contributors/:user_id/', args] as const
}

export function useGetRegistrationsRegistrationIdContributorsUserIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdContributorsUserIdIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
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
          client.registrations[':registration_id'].contributors[':user_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdContributorsUserIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdContributorsUserIdIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
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
          client.registrations[':registration_id'].contributors[':user_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdFilesIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/files/', args] as const
}

export function useGetRegistrationsRegistrationIdFilesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['files']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdFilesIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['files']['index']['$get']
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
          client.registrations[':registration_id'].files.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdFilesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['files']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdFilesIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['files']['index']['$get']
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
          client.registrations[':registration_id'].files.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdFilesProviderIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/files/:provider/', args] as const
}

export function useGetRegistrationsRegistrationIdFilesProviderIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdFilesProviderIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
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
          client.registrations[':registration_id'].files[':provider'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdFilesProviderIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdFilesProviderIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
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
          client.registrations[':registration_id'].files[':provider'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdFilesProviderPathIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/files/:provider/:path/', args] as const
}

export function useGetRegistrationsRegistrationIdFilesProviderPathIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdFilesProviderPathIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
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
          client.registrations[':registration_id'].files[':provider'][':path'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdFilesProviderPathIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdFilesProviderPathIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
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
          client.registrations[':registration_id'].files[':provider'][':path'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdForksIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['forks']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/forks/', args] as const
}

export function useGetRegistrationsRegistrationIdForksIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['forks']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['forks']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdForksIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['forks']['index']['$get']
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
          client.registrations[':registration_id'].forks.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdForksIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['forks']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['forks']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdForksIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['forks']['index']['$get']
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
          client.registrations[':registration_id'].forks.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRegistrationsRegistrationIdForksIndexKey() {
  return ['registrations', '/registrations/:registration_id/forks/', 'POST'] as const
}

export function usePostRegistrationsRegistrationIdForksIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.registrations)[':registration_id']['forks']['index']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.registrations)[':registration_id']['forks']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegistrationsRegistrationIdForksIndexKey()
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
            (typeof client.registrations)[':registration_id']['forks']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.registrations[':registration_id'].forks.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdIdentifiersIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/identifiers/', args] as const
}

export function useGetRegistrationsRegistrationIdIdentifiersIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdIdentifiersIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
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
          client.registrations[':registration_id'].identifiers.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdIdentifiersIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdIdentifiersIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
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
          client.registrations[':registration_id'].identifiers.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdInstitutionsIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/institutions/', args] as const
}

export function useGetRegistrationsRegistrationIdInstitutionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdInstitutionsIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
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
          client.registrations[':registration_id'].institutions.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdInstitutionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdInstitutionsIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
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
          client.registrations[':registration_id'].institutions.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdLinkedNodesIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/linked_nodes/', args] as const
}

export function useGetRegistrationsRegistrationIdLinkedNodesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdLinkedNodesIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
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
          client.registrations[':registration_id'].linked_nodes.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdLinkedNodesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdLinkedNodesIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
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
          client.registrations[':registration_id'].linked_nodes.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdLogsIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['logs']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/logs/', args] as const
}

export function useGetRegistrationsRegistrationIdLogsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['logs']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrations)[':registration_id']['logs']['index']['$get']>
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
        ? getGetRegistrationsRegistrationIdLogsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrations)[':registration_id']['logs']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.registrations[':registration_id'].logs.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdLogsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['logs']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrations)[':registration_id']['logs']['index']['$get']>
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
        ? getGetRegistrationsRegistrationIdLogsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrations)[':registration_id']['logs']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.registrations[':registration_id'].logs.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdViewOnlyLinksIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/view_only_links/', args] as const
}

export function useGetRegistrationsRegistrationIdViewOnlyLinksIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdViewOnlyLinksIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
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
          client.registrations[':registration_id'].view_only_links.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdViewOnlyLinksIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdViewOnlyLinksIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
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
          client.registrations[':registration_id'].view_only_links.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
  >,
) {
  return [
    'registrations',
    '/registrations/:registration_id/view_only_links/:link_id/',
    args,
  ] as const
}

export function useGetRegistrationsRegistrationIdViewOnlyLinksLinkIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
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
          client.registrations[':registration_id'].view_only_links[':link_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdViewOnlyLinksLinkIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
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
          client.registrations[':registration_id'].view_only_links[':link_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrationsRegistrationIdWikisIndexKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['wikis']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/wikis/', args] as const
}

export function useGetRegistrationsRegistrationIdWikisIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['wikis']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['wikis']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdWikisIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['wikis']['index']['$get']
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
          client.registrations[':registration_id'].wikis.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationsRegistrationIdWikisIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['wikis']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.registrations)[':registration_id']['wikis']['index']['$get']
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
        ? getGetRegistrationsRegistrationIdWikisIndexKey(args)
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
                (typeof client.registrations)[':registration_id']['wikis']['index']['$get']
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
          client.registrations[':registration_id'].wikis.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSchemaResponsesIndexKey() {
  return ['schema_responses', '/schema_responses/'] as const
}

export function useGetSchemaResponsesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchemaResponsesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schema_responses.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchemaResponsesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchemaResponsesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schema_responses.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSchemaResponsesIndexKey() {
  return ['schema_responses', '/schema_responses/', 'POST'] as const
}

export function usePostSchemaResponsesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.schema_responses.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSchemaResponsesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.schema_responses.index.$post> },
      ) => parseResponse(client.schema_responses.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSchemaResponsesSchemaResponseIdKey(
  args: InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$get']>,
) {
  return ['schema_responses', '/schema_responses/:schema_response_id', args] as const
}

export function useGetSchemaResponsesSchemaResponseId<TError = unknown>(
  args: InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schema_responses)[':schema_response_id']['$get']>>
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
        ? getGetSchemaResponsesSchemaResponseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schema_responses)[':schema_response_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schema_responses[':schema_response_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchemaResponsesSchemaResponseId<TError = unknown>(
  args: InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schema_responses)[':schema_response_id']['$get']>>
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
        ? getGetSchemaResponsesSchemaResponseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schema_responses)[':schema_response_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schema_responses[':schema_response_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSchemaResponsesSchemaResponseIdKey() {
  return ['schema_responses', '/schema_responses/:schema_response_id', 'DELETE'] as const
}

export function useDeleteSchemaResponsesSchemaResponseId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schema_responses)[':schema_response_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSchemaResponsesSchemaResponseIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$delete']>
        },
      ) =>
        parseResponse(client.schema_responses[':schema_response_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSchemaResponsesSchemaResponseIdKey() {
  return ['schema_responses', '/schema_responses/:schema_response_id', 'PATCH'] as const
}

export function usePatchSchemaResponsesSchemaResponseId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schema_responses)[':schema_response_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSchemaResponsesSchemaResponseIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$patch']>
        },
      ) => parseResponse(client.schema_responses[':schema_response_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSchemaResponsesSchemaResponseIdActionsIndexKey(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
  >,
) {
  return ['schema_responses', '/schema_responses/:schema_response_id/actions/', args] as const
}

export function useGetSchemaResponsesSchemaResponseIdActionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
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
        ? getGetSchemaResponsesSchemaResponseIdActionsIndexKey(args)
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
                (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
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
          client.schema_responses[':schema_response_id'].actions.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchemaResponsesSchemaResponseIdActionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
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
        ? getGetSchemaResponsesSchemaResponseIdActionsIndexKey(args)
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
                (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
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
          client.schema_responses[':schema_response_id'].actions.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSchemaResponsesSchemaResponseIdActionsIndexKey() {
  return ['schema_responses', '/schema_responses/:schema_response_id/actions/', 'POST'] as const
}

export function usePostSchemaResponsesSchemaResponseIdActionsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSchemaResponsesSchemaResponseIdActionsIndexKey()
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
            (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.schema_responses[':schema_response_id'].actions.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdKey(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
  >,
) {
  return [
    'schema_responses',
    '/schema_responses/:schema_response_id/actions/:schema_response_action_id',
    args,
  ] as const
}

export function useGetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
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
        ? getGetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdKey(args)
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
                (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
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
          client.schema_responses[':schema_response_id'].actions[':schema_response_action_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
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
        ? getGetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdKey(args)
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
                (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
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
          client.schema_responses[':schema_response_id'].actions[':schema_response_action_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSchemaResponsesSchemaResponseIdSchemaBlocksIndexKey(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
  >,
) {
  return ['schema_responses', '/schema_responses/:schema_response_id/schema_blocks/', args] as const
}

export function useGetSchemaResponsesSchemaResponseIdSchemaBlocksIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
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
        ? getGetSchemaResponsesSchemaResponseIdSchemaBlocksIndexKey(args)
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
                (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
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
          client.schema_responses[':schema_response_id'].schema_blocks.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchemaResponsesSchemaResponseIdSchemaBlocksIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
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
        ? getGetSchemaResponsesSchemaResponseIdSchemaBlocksIndexKey(args)
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
                (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
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
          client.schema_responses[':schema_response_id'].schema_blocks.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdKey(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
  >,
) {
  return [
    'schema_responses',
    '/schema_responses/:schema_response_id/schema_blocks/:schema_response_block_id',
    args,
  ] as const
}

export function useGetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
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
        ? getGetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdKey(args)
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
                (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
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
          client.schema_responses[':schema_response_id'].schema_blocks[
            ':schema_response_block_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
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
        ? getGetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdKey(args)
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
                (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
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
          client.schema_responses[':schema_response_id'].schema_blocks[
            ':schema_response_block_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSchemasRegistrationsIndexKey() {
  return ['schemas', '/schemas/registrations/'] as const
}

export function useGetSchemasRegistrationsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schemas.registrations.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchemasRegistrationsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schemas.registrations.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schemas.registrations.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchemasRegistrationsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schemas.registrations.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchemasRegistrationsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schemas.registrations.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schemas.registrations.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchemasRegistrationsRegistrationSchemaIdKey(
  args: InferRequestType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>,
) {
  return ['schemas', '/schemas/registrations/:registration_schema_id', args] as const
}

export function useGetSchemasRegistrationsRegistrationSchemaId<TError = unknown>(
  args: InferRequestType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>
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
        ? getGetSchemasRegistrationsRegistrationSchemaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.schemas.registrations[':registration_schema_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchemasRegistrationsRegistrationSchemaId<TError = unknown>(
  args: InferRequestType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>
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
        ? getGetSchemasRegistrationsRegistrationSchemaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.schemas.registrations[':registration_schema_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTaxonomiesIndexKey() {
  return ['taxonomies', '/taxonomies/'] as const
}

export function useGetTaxonomiesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaxonomiesIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.taxonomies.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaxonomiesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaxonomiesIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.taxonomies.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaxonomiesTaxonomyIdIndexKey(
  args: InferRequestType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>,
) {
  return ['taxonomies', '/taxonomies/:taxonomy_id/', args] as const
}

export function useGetTaxonomiesTaxonomyIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>>
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
        ? getGetTaxonomiesTaxonomyIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.taxonomies[':taxonomy_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaxonomiesTaxonomyIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>>
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
        ? getGetTaxonomiesTaxonomyIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.taxonomies[':taxonomy_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIndexKey() {
  return ['users', '/users/'] as const
}

export function useGetUsersIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdIndexKey(
  args: InferRequestType<(typeof client.users)[':user_id']['index']['$get']>,
) {
  return ['users', '/users/:user_id/', args] as const
}

export function useGetUsersUserIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>
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
        ? getGetUsersUserIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>
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
        ? getGetUsersUserIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchUsersUserIdIndexKey() {
  return ['users', '/users/:user_id/', 'PATCH'] as const
}

export function usePatchUsersUserIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['index']['$patch']> },
      ) => parseResponse(client.users[':user_id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdAddonsIndexKey(
  args: InferRequestType<(typeof client.users)[':user_id']['addons']['index']['$get']>,
) {
  return ['users', '/users/:user_id/addons/', args] as const
}

export function useGetUsersUserIdAddonsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['addons']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['addons']['index']['$get']>>
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
        ? getGetUsersUserIdAddonsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['addons']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].addons.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdAddonsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['addons']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['addons']['index']['$get']>>
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
        ? getGetUsersUserIdAddonsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['addons']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].addons.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdAddonsProviderIndexKey(
  args: InferRequestType<(typeof client.users)[':user_id']['addons'][':provider']['index']['$get']>,
) {
  return ['users', '/users/:user_id/addons/:provider/', args] as const
}

export function useGetUsersUserIdAddonsProviderIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['addons'][':provider']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['addons'][':provider']['index']['$get']>
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
        ? getGetUsersUserIdAddonsProviderIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['addons'][':provider']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].addons[':provider'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdAddonsProviderIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['addons'][':provider']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['addons'][':provider']['index']['$get']>
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
        ? getGetUsersUserIdAddonsProviderIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['addons'][':provider']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].addons[':provider'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdAddonsProviderAccountsIndexKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
  >,
) {
  return ['users', '/users/:user_id/addons/:provider/accounts/', args] as const
}

export function useGetUsersUserIdAddonsProviderAccountsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
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
        ? getGetUsersUserIdAddonsProviderAccountsIndexKey(args)
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
                (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
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
          client.users[':user_id'].addons[':provider'].accounts.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdAddonsProviderAccountsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
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
        ? getGetUsersUserIdAddonsProviderAccountsIndexKey(args)
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
                (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
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
          client.users[':user_id'].addons[':provider'].accounts.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdAddonsProviderAccountsAccountIdIndexKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
  >,
) {
  return ['users', '/users/:user_id/addons/:provider/accounts/:account_id/', args] as const
}

export function useGetUsersUserIdAddonsProviderAccountsAccountIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
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
        ? getGetUsersUserIdAddonsProviderAccountsAccountIdIndexKey(args)
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
                (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
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
          client.users[':user_id'].addons[':provider'].accounts[':account_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdAddonsProviderAccountsAccountIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
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
        ? getGetUsersUserIdAddonsProviderAccountsAccountIdIndexKey(args)
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
                (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
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
          client.users[':user_id'].addons[':provider'].accounts[':account_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdInstitutionsIndexKey(
  args: InferRequestType<(typeof client.users)[':user_id']['institutions']['index']['$get']>,
) {
  return ['users', '/users/:user_id/institutions/', args] as const
}

export function useGetUsersUserIdInstitutionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['institutions']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['institutions']['index']['$get']>>
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
        ? getGetUsersUserIdInstitutionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['institutions']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].institutions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdInstitutionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['institutions']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['institutions']['index']['$get']>>
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
        ? getGetUsersUserIdInstitutionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['institutions']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].institutions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdNodesIndexKey(
  args: InferRequestType<(typeof client.users)[':user_id']['nodes']['index']['$get']>,
) {
  return ['users', '/users/:user_id/nodes/', args] as const
}

export function useGetUsersUserIdNodesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['nodes']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['nodes']['index']['$get']>>
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
        ? getGetUsersUserIdNodesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['nodes']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].nodes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdNodesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['nodes']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['nodes']['index']['$get']>>
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
        ? getGetUsersUserIdNodesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['nodes']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].nodes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdPreprintsIndexKey(
  args: InferRequestType<(typeof client.users)[':user_id']['preprints']['index']['$get']>,
) {
  return ['users', '/users/:user_id/preprints/', args] as const
}

export function useGetUsersUserIdPreprintsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['preprints']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['preprints']['index']['$get']>>
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
        ? getGetUsersUserIdPreprintsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['preprints']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].preprints.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPreprintsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['preprints']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['preprints']['index']['$get']>>
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
        ? getGetUsersUserIdPreprintsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['preprints']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].preprints.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdRegistrationsIndexKey(
  args: InferRequestType<(typeof client.users)[':user_id']['registrations']['index']['$get']>,
) {
  return ['users', '/users/:user_id/registrations/', args] as const
}

export function useGetUsersUserIdRegistrationsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['registrations']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['registrations']['index']['$get']>>
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
        ? getGetUsersUserIdRegistrationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['registrations']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].registrations.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdRegistrationsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['registrations']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['registrations']['index']['$get']>>
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
        ? getGetUsersUserIdRegistrationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['registrations']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].registrations.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetViewOnlyLinksLinkIdIndexKey(
  args: InferRequestType<(typeof client.view_only_links)[':link_id']['index']['$get']>,
) {
  return ['view_only_links', '/view_only_links/:link_id/', args] as const
}

export function useGetViewOnlyLinksLinkIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.view_only_links)[':link_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.view_only_links)[':link_id']['index']['$get']>>
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
        ? getGetViewOnlyLinksLinkIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.view_only_links)[':link_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.view_only_links[':link_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetViewOnlyLinksLinkIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.view_only_links)[':link_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.view_only_links)[':link_id']['index']['$get']>>
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
        ? getGetViewOnlyLinksLinkIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.view_only_links)[':link_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.view_only_links[':link_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetViewOnlyLinksLinkIdNodesIndexKey(
  args: InferRequestType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>,
) {
  return ['view_only_links', '/view_only_links/:link_id/nodes/', args] as const
}

export function useGetViewOnlyLinksLinkIdNodesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>
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
        ? getGetViewOnlyLinksLinkIdNodesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.view_only_links[':link_id'].nodes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetViewOnlyLinksLinkIdNodesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>
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
        ? getGetViewOnlyLinksLinkIdNodesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.view_only_links[':link_id'].nodes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikisWikiIdIndexKey(
  args: InferRequestType<(typeof client.wikis)[':wiki_id']['index']['$get']>,
) {
  return ['wikis', '/wikis/:wiki_id/', args] as const
}

export function useGetWikisWikiIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.wikis)[':wiki_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['index']['$get']>>
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
        ? getGetWikisWikiIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wikis[':wiki_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikisWikiIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.wikis)[':wiki_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['index']['$get']>>
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
        ? getGetWikisWikiIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wikis[':wiki_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikisWikiIdContentIndexKey(
  args: InferRequestType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>,
) {
  return ['wikis', '/wikis/:wiki_id/content/', args] as const
}

export function useGetWikisWikiIdContentIndex<TError = unknown>(
  args: InferRequestType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>>
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
        ? getGetWikisWikiIdContentIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wikis[':wiki_id'].content.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikisWikiIdContentIndex<TError = unknown>(
  args: InferRequestType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>>
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
        ? getGetWikisWikiIdContentIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wikis[':wiki_id'].content.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
