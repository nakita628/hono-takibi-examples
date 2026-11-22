import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV3Key() {
  return ['v3'] as const
}

export function getGetV3AffiliatesSearchImagesKey(
  args: InferRequestType<typeof client.v3.affiliates.search.images.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/affiliates/search/images', keyArgs] as const
}

export function useGetV3AffiliatesSearchImages<TError = unknown>(
  args: InferRequestType<typeof client.v3.affiliates.search.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.affiliates.search.images.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3AffiliatesSearchImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.affiliates.search.images.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.affiliates.search.images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3AffiliatesSearchImages<TError = unknown>(
  args: InferRequestType<typeof client.v3.affiliates.search.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.affiliates.search.images.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3AffiliatesSearchImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.affiliates.search.images.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.affiliates.search.images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3AffiliatesSearchVideosKey(
  args: InferRequestType<typeof client.v3.affiliates.search.videos.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/affiliates/search/videos', keyArgs] as const
}

export function useGetV3AffiliatesSearchVideos<TError = unknown>(
  args: InferRequestType<typeof client.v3.affiliates.search.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.affiliates.search.videos.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3AffiliatesSearchVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.affiliates.search.videos.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.affiliates.search.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3AffiliatesSearchVideos<TError = unknown>(
  args: InferRequestType<typeof client.v3.affiliates.search.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.affiliates.search.videos.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3AffiliatesSearchVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.affiliates.search.videos.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.affiliates.search.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ArtistsImagesKey(
  args: InferRequestType<typeof client.v3.artists.images.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/artists/images', keyArgs] as const
}

export function useGetV3ArtistsImages<TError = unknown>(
  args: InferRequestType<typeof client.v3.artists.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.artists.images.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ArtistsImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.artists.images.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.artists.images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ArtistsImages<TError = unknown>(
  args: InferRequestType<typeof client.v3.artists.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.artists.images.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ArtistsImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.artists.images.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.artists.images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ArtistsVideosKey(
  args: InferRequestType<typeof client.v3.artists.videos.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/artists/videos', keyArgs] as const
}

export function useGetV3ArtistsVideos<TError = unknown>(
  args: InferRequestType<typeof client.v3.artists.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.artists.videos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ArtistsVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.artists.videos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.artists.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ArtistsVideos<TError = unknown>(
  args: InferRequestType<typeof client.v3.artists.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.artists.videos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ArtistsVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.artists.videos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.artists.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV3AssetChangesChangeSetsKey() {
  return ['v3', '/v3/asset-changes/change-sets', 'PUT'] as const
}

export function usePutV3AssetChangesChangeSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)['asset-changes']['change-sets']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)['asset-changes']['change-sets']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV3AssetChangesChangeSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3)['asset-changes']['change-sets']['$put']> },
      ) => parseResponse(client.v3['asset-changes']['change-sets'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3AssetChangesChangeSetsChangeSetIdKey() {
  return ['v3', '/v3/asset-changes/change-sets/:change-set-id', 'DELETE'] as const
}

export function useDeleteV3AssetChangesChangeSetsChangeSetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3)['asset-changes']['change-sets'][':change-set-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v3)['asset-changes']['change-sets'][':change-set-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3AssetChangesChangeSetsChangeSetIdKey()
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
            (typeof client.v3)['asset-changes']['change-sets'][':change-set-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v3['asset-changes']['change-sets'][':change-set-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV3AssetChangesChannelsKey() {
  return ['v3', '/v3/asset-changes/channels'] as const
}

export function useGetV3AssetChangesChannels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)['asset-changes']['channels']['$get']>>
        >
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
        ? getGetV3AssetChangesChannelsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)['asset-changes']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3['asset-changes'].channels.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3AssetChangesChannels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)['asset-changes']['channels']['$get']>>
        >
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
        ? getGetV3AssetChangesChannelsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)['asset-changes']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3['asset-changes'].channels.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3AssetLicensingAssetIdKey() {
  return ['v3', '/v3/asset-licensing/:assetId', 'POST'] as const
}

export function usePostV3AssetLicensingAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)['asset-licensing'][':assetId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)['asset-licensing'][':assetId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3AssetLicensingAssetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3)['asset-licensing'][':assetId']['$post']> },
      ) => parseResponse(client.v3['asset-licensing'][':assetId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3AssetManagementAssetsSendEventsKey(
  args: InferRequestType<(typeof client.v3)['asset-management']['assets']['send-events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/asset-management/assets/send-events', keyArgs] as const
}

export function useGetV3AssetManagementAssetsSendEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v3)['asset-management']['assets']['send-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)['asset-management']['assets']['send-events']['$get']>
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
        ? getGetV3AssetManagementAssetsSendEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)['asset-management']['assets']['send-events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3['asset-management'].assets['send-events'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3AssetManagementAssetsSendEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v3)['asset-management']['assets']['send-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)['asset-management']['assets']['send-events']['$get']>
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
        ? getGetV3AssetManagementAssetsSendEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)['asset-management']['assets']['send-events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3['asset-management'].assets['send-events'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3BoardsKey(args: InferRequestType<typeof client.v3.boards.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/boards', keyArgs] as const
}

export function useGetV3Boards<TError = unknown>(
  args: InferRequestType<typeof client.v3.boards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.boards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3BoardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.boards.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.boards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Boards<TError = unknown>(
  args: InferRequestType<typeof client.v3.boards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.boards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3BoardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.boards.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.boards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3BoardsKey() {
  return ['v3', '/v3/boards', 'POST'] as const
}

export function usePostV3Boards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.boards.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v3.boards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3BoardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v3.boards.$post> }) =>
        parseResponse(client.v3.boards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3BoardsBoardIdKey(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/boards/:board_id', keyArgs] as const
}

export function useGetV3BoardsBoardId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BoardsBoardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.boards[':board_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3BoardsBoardId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BoardsBoardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.boards[':board_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV3BoardsBoardIdKey() {
  return ['v3', '/v3/boards/:board_id', 'PUT'] as const
}

export function usePutV3BoardsBoardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.boards)[':board_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV3BoardsBoardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.boards)[':board_id']['$put']> },
      ) => parseResponse(client.v3.boards[':board_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3BoardsBoardIdKey() {
  return ['v3', '/v3/boards/:board_id', 'DELETE'] as const
}

export function useDeleteV3BoardsBoardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.boards)[':board_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3BoardsBoardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.boards)[':board_id']['$delete']> },
      ) => parseResponse(client.v3.boards[':board_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV3BoardsBoardIdAssetsKey() {
  return ['v3', '/v3/boards/:board_id/assets', 'PUT'] as const
}

export function usePutV3BoardsBoardIdAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['assets']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.boards)[':board_id']['assets']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV3BoardsBoardIdAssetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3.boards)[':board_id']['assets']['$put']> },
      ) => parseResponse(client.v3.boards[':board_id'].assets.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3BoardsBoardIdAssetsKey() {
  return ['v3', '/v3/boards/:board_id/assets', 'DELETE'] as const
}

export function useDeleteV3BoardsBoardIdAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['assets']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.boards)[':board_id']['assets']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3BoardsBoardIdAssetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3.boards)[':board_id']['assets']['$delete']> },
      ) => parseResponse(client.v3.boards[':board_id'].assets.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV3BoardsBoardIdAssetsAssetIdKey() {
  return ['v3', '/v3/boards/:board_id/assets/:asset_id', 'PUT'] as const
}

export function usePutV3BoardsBoardIdAssetsAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV3BoardsBoardIdAssetsAssetIdKey()
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
            (typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$put']
          >
        },
      ) =>
        parseResponse(client.v3.boards[':board_id'].assets[':asset_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3BoardsBoardIdAssetsAssetIdKey() {
  return ['v3', '/v3/boards/:board_id/assets/:asset_id', 'DELETE'] as const
}

export function useDeleteV3BoardsBoardIdAssetsAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3BoardsBoardIdAssetsAssetIdKey()
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
            (typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v3.boards[':board_id'].assets[':asset_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV3BoardsBoardIdCommentsKey(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['comments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/boards/:board_id/comments', keyArgs] as const
}

export function useGetV3BoardsBoardIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BoardsBoardIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.boards[':board_id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3BoardsBoardIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BoardsBoardIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.boards[':board_id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3BoardsBoardIdCommentsKey() {
  return ['v3', '/v3/boards/:board_id/comments', 'POST'] as const
}

export function usePostV3BoardsBoardIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.boards)[':board_id']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3BoardsBoardIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3.boards)[':board_id']['comments']['$post']> },
      ) => parseResponse(client.v3.boards[':board_id'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3BoardsBoardIdCommentsCommentIdKey() {
  return ['v3', '/v3/boards/:board_id/comments/:comment_id', 'DELETE'] as const
}

export function useDeleteV3BoardsBoardIdCommentsCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.boards)[':board_id']['comments'][':comment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.boards)[':board_id']['comments'][':comment_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3BoardsBoardIdCommentsCommentIdKey()
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
            (typeof client.v3.boards)[':board_id']['comments'][':comment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v3.boards[':board_id'].comments[':comment_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV3CollectionsKey(args: InferRequestType<typeof client.v3.collections.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/collections', keyArgs] as const
}

export function useGetV3Collections<TError = unknown>(
  args: InferRequestType<typeof client.v3.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.collections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3CollectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Collections<TError = unknown>(
  args: InferRequestType<typeof client.v3.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.collections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3CollectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3CountriesKey(args: InferRequestType<typeof client.v3.countries.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/countries', keyArgs] as const
}

export function useGetV3Countries<TError = unknown>(
  args: InferRequestType<typeof client.v3.countries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.countries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3CountriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.countries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.countries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Countries<TError = unknown>(
  args: InferRequestType<typeof client.v3.countries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.countries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3CountriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.countries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.countries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3CustomersCurrentKey(
  args: InferRequestType<typeof client.v3.customers.current.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/customers/current', keyArgs] as const
}

export function useGetV3CustomersCurrent<TError = unknown>(
  args: InferRequestType<typeof client.v3.customers.current.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.customers.current.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3CustomersCurrentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.customers.current.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.customers.current.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3CustomersCurrent<TError = unknown>(
  args: InferRequestType<typeof client.v3.customers.current.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.customers.current.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3CustomersCurrentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.customers.current.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.customers.current.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3DownloadsKey(args: InferRequestType<typeof client.v3.downloads.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/downloads', keyArgs] as const
}

export function useGetV3Downloads<TError = unknown>(
  args: InferRequestType<typeof client.v3.downloads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.downloads.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3DownloadsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.downloads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.downloads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Downloads<TError = unknown>(
  args: InferRequestType<typeof client.v3.downloads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.downloads.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3DownloadsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.downloads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.downloads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3DownloadsImagesIdKey() {
  return ['v3', '/v3/downloads/images/:id', 'POST'] as const
}

export function usePostV3DownloadsImagesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.downloads.images)[':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.downloads.images)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3DownloadsImagesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.downloads.images)[':id']['$post']> },
      ) => parseResponse(client.v3.downloads.images[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3DownloadsVideosIdKey() {
  return ['v3', '/v3/downloads/videos/:id', 'POST'] as const
}

export function usePostV3DownloadsVideosId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.downloads.videos)[':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.downloads.videos)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3DownloadsVideosIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.downloads.videos)[':id']['$post']> },
      ) => parseResponse(client.v3.downloads.videos[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3EventsKey(args: InferRequestType<typeof client.v3.events.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/events', keyArgs] as const
}

export function useGetV3Events<TError = unknown>(
  args: InferRequestType<typeof client.v3.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Events<TError = unknown>(
  args: InferRequestType<typeof client.v3.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3EventsIdKey(
  args: InferRequestType<(typeof client.v3.events)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/events/:id', keyArgs] as const
}

export function useGetV3EventsId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.events)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3EventsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.events)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3EventsId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.events)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3EventsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.events)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ImagesKey(args: InferRequestType<typeof client.v3.images.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/images', keyArgs] as const
}

export function useGetV3Images<TError = unknown>(
  args: InferRequestType<typeof client.v3.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.images.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3ImagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.images.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Images<TError = unknown>(
  args: InferRequestType<typeof client.v3.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.images.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3ImagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.images.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ImagesIdKey(
  args: InferRequestType<(typeof client.v3.images)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/images/:id', keyArgs] as const
}

export function useGetV3ImagesId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.images)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.images)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3ImagesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.images)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.images[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ImagesId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.images)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.images)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3ImagesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.images)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.images[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ImagesIdDownloadhistoryKey(
  args: InferRequestType<(typeof client.v3.images)[':id']['downloadhistory']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/images/:id/downloadhistory', keyArgs] as const
}

export function useGetV3ImagesIdDownloadhistory<TError = unknown>(
  args: InferRequestType<(typeof client.v3.images)[':id']['downloadhistory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.images)[':id']['downloadhistory']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ImagesIdDownloadhistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.images)[':id']['downloadhistory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.images[':id'].downloadhistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ImagesIdDownloadhistory<TError = unknown>(
  args: InferRequestType<(typeof client.v3.images)[':id']['downloadhistory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.images)[':id']['downloadhistory']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ImagesIdDownloadhistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.images)[':id']['downloadhistory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.images[':id'].downloadhistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ImagesIdSameSeriesKey(
  args: InferRequestType<(typeof client.v3.images)[':id']['same-series']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/images/:id/same-series', keyArgs] as const
}

export function useGetV3ImagesIdSameSeries<TError = unknown>(
  args: InferRequestType<(typeof client.v3.images)[':id']['same-series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.images)[':id']['same-series']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ImagesIdSameSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.images)[':id']['same-series']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.images[':id']['same-series'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ImagesIdSameSeries<TError = unknown>(
  args: InferRequestType<(typeof client.v3.images)[':id']['same-series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.images)[':id']['same-series']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ImagesIdSameSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.images)[':id']['same-series']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.images[':id']['same-series'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ImagesIdSimilarKey(
  args: InferRequestType<(typeof client.v3.images)[':id']['similar']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/images/:id/similar', keyArgs] as const
}

export function useGetV3ImagesIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.v3.images)[':id']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.images)[':id']['similar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ImagesIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.images)[':id']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.images[':id'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ImagesIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.v3.images)[':id']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.images)[':id']['similar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ImagesIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.images)[':id']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.images[':id'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3OrdersIdKey(
  args: InferRequestType<(typeof client.v3.orders)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/orders/:id', keyArgs] as const
}

export function useGetV3OrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.orders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3OrdersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3OrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.orders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3OrdersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ProductsKey(args: InferRequestType<typeof client.v3.products.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/products', keyArgs] as const
}

export function useGetV3Products<TError = unknown>(
  args: InferRequestType<typeof client.v3.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3ProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Products<TError = unknown>(
  args: InferRequestType<typeof client.v3.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3ProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3PurchasedAssetsKey(
  args: InferRequestType<(typeof client.v3)['purchased-assets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/purchased-assets', keyArgs] as const
}

export function useGetV3PurchasedAssets<TError = unknown>(
  args: InferRequestType<(typeof client.v3)['purchased-assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['purchased-assets']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3PurchasedAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['purchased-assets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3['purchased-assets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3PurchasedAssets<TError = unknown>(
  args: InferRequestType<(typeof client.v3)['purchased-assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['purchased-assets']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3PurchasedAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['purchased-assets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3['purchased-assets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV3SearchByImageUploadsFileNameKey() {
  return ['v3', '/v3/search/by-image/uploads/:file-name', 'PUT'] as const
}

export function usePutV3SearchByImageUploadsFileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.search)['by-image']['uploads'][':file-name']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.search)['by-image']['uploads'][':file-name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV3SearchByImageUploadsFileNameKey()
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
            (typeof client.v3.search)['by-image']['uploads'][':file-name']['$put']
          >
        },
      ) =>
        parseResponse(client.v3.search['by-image'].uploads[':file-name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3SearchEventsKey(
  args: InferRequestType<typeof client.v3.search.events.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/search/events', keyArgs] as const
}

export function useGetV3SearchEvents<TError = unknown>(
  args: InferRequestType<typeof client.v3.search.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3SearchEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.search.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SearchEvents<TError = unknown>(
  args: InferRequestType<typeof client.v3.search.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3SearchEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.search.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3SearchImagesKey(
  args: InferRequestType<typeof client.v3.search.images.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/search/images', keyArgs] as const
}

export function useGetV3SearchImages<TError = unknown>(
  args: InferRequestType<typeof client.v3.search.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3SearchImagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.search.images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SearchImages<TError = unknown>(
  args: InferRequestType<typeof client.v3.search.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3SearchImagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.search.images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3SearchImagesCreativeKey(
  args: InferRequestType<typeof client.v3.search.images.creative.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/search/images/creative', keyArgs] as const
}

export function useGetV3SearchImagesCreative<TError = unknown>(
  args: InferRequestType<typeof client.v3.search.images.creative.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.creative.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SearchImagesCreativeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.creative.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.search.images.creative.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SearchImagesCreative<TError = unknown>(
  args: InferRequestType<typeof client.v3.search.images.creative.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.creative.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SearchImagesCreativeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.creative.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.search.images.creative.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3SearchImagesCreativeByImageKey(
  args: InferRequestType<(typeof client.v3.search.images.creative)['by-image']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/search/images/creative/by-image', keyArgs] as const
}

export function useGetV3SearchImagesCreativeByImage<TError = unknown>(
  args: InferRequestType<(typeof client.v3.search.images.creative)['by-image']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.search.images.creative)['by-image']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SearchImagesCreativeByImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.search.images.creative)['by-image']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.search.images.creative['by-image'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SearchImagesCreativeByImage<TError = unknown>(
  args: InferRequestType<(typeof client.v3.search.images.creative)['by-image']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.search.images.creative)['by-image']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SearchImagesCreativeByImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.search.images.creative)['by-image']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.search.images.creative['by-image'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3SearchImagesEditorialKey(
  args: InferRequestType<typeof client.v3.search.images.editorial.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/search/images/editorial', keyArgs] as const
}

export function useGetV3SearchImagesEditorial<TError = unknown>(
  args: InferRequestType<typeof client.v3.search.images.editorial.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.editorial.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SearchImagesEditorialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.editorial.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.search.images.editorial.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SearchImagesEditorial<TError = unknown>(
  args: InferRequestType<typeof client.v3.search.images.editorial.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.editorial.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SearchImagesEditorialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.editorial.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.search.images.editorial.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3SearchVideosCreativeKey(
  args: InferRequestType<typeof client.v3.search.videos.creative.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/search/videos/creative', keyArgs] as const
}

export function useGetV3SearchVideosCreative<TError = unknown>(
  args: InferRequestType<typeof client.v3.search.videos.creative.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.videos.creative.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SearchVideosCreativeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.videos.creative.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.search.videos.creative.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SearchVideosCreative<TError = unknown>(
  args: InferRequestType<typeof client.v3.search.videos.creative.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.videos.creative.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SearchVideosCreativeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.videos.creative.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.search.videos.creative.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3SearchVideosCreativeByImageKey(
  args: InferRequestType<(typeof client.v3.search.videos.creative)['by-image']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/search/videos/creative/by-image', keyArgs] as const
}

export function useGetV3SearchVideosCreativeByImage<TError = unknown>(
  args: InferRequestType<(typeof client.v3.search.videos.creative)['by-image']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.search.videos.creative)['by-image']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SearchVideosCreativeByImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.search.videos.creative)['by-image']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.search.videos.creative['by-image'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SearchVideosCreativeByImage<TError = unknown>(
  args: InferRequestType<(typeof client.v3.search.videos.creative)['by-image']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.search.videos.creative)['by-image']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SearchVideosCreativeByImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.search.videos.creative)['by-image']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.search.videos.creative['by-image'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3SearchVideosEditorialKey(
  args: InferRequestType<typeof client.v3.search.videos.editorial.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/search/videos/editorial', keyArgs] as const
}

export function useGetV3SearchVideosEditorial<TError = unknown>(
  args: InferRequestType<typeof client.v3.search.videos.editorial.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.videos.editorial.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SearchVideosEditorialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.videos.editorial.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.search.videos.editorial.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SearchVideosEditorial<TError = unknown>(
  args: InferRequestType<typeof client.v3.search.videos.editorial.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.videos.editorial.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SearchVideosEditorialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.videos.editorial.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.search.videos.editorial.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV3UsageBatchesIdKey() {
  return ['v3', '/v3/usage-batches/:id', 'PUT'] as const
}

export function usePutV3UsageBatchesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)['usage-batches'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)['usage-batches'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV3UsageBatchesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3)['usage-batches'][':id']['$put']> },
      ) => parseResponse(client.v3['usage-batches'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3VideosKey(args: InferRequestType<typeof client.v3.videos.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/videos', keyArgs] as const
}

export function useGetV3Videos<TError = unknown>(
  args: InferRequestType<typeof client.v3.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.videos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3VideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.videos.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Videos<TError = unknown>(
  args: InferRequestType<typeof client.v3.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.videos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3VideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.videos.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3VideosIdKey(
  args: InferRequestType<(typeof client.v3.videos)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/videos/:id', keyArgs] as const
}

export function useGetV3VideosId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.videos)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.videos)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3VideosIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.videos)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.videos[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3VideosId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.videos)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.videos)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3VideosIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.videos)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.videos[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3VideosIdDownloadhistoryKey(
  args: InferRequestType<(typeof client.v3.videos)[':id']['downloadhistory']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/videos/:id/downloadhistory', keyArgs] as const
}

export function useGetV3VideosIdDownloadhistory<TError = unknown>(
  args: InferRequestType<(typeof client.v3.videos)[':id']['downloadhistory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.videos)[':id']['downloadhistory']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3VideosIdDownloadhistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.videos)[':id']['downloadhistory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.videos[':id'].downloadhistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3VideosIdDownloadhistory<TError = unknown>(
  args: InferRequestType<(typeof client.v3.videos)[':id']['downloadhistory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.videos)[':id']['downloadhistory']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3VideosIdDownloadhistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.videos)[':id']['downloadhistory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.videos[':id'].downloadhistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3VideosIdSameSeriesKey(
  args: InferRequestType<(typeof client.v3.videos)[':id']['same-series']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/videos/:id/same-series', keyArgs] as const
}

export function useGetV3VideosIdSameSeries<TError = unknown>(
  args: InferRequestType<(typeof client.v3.videos)[':id']['same-series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.videos)[':id']['same-series']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3VideosIdSameSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.videos)[':id']['same-series']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.videos[':id']['same-series'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3VideosIdSameSeries<TError = unknown>(
  args: InferRequestType<(typeof client.v3.videos)[':id']['same-series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.videos)[':id']['same-series']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3VideosIdSameSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.videos)[':id']['same-series']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.videos[':id']['same-series'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3VideosIdSimilarKey(
  args: InferRequestType<(typeof client.v3.videos)[':id']['similar']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/videos/:id/similar', keyArgs] as const
}

export function useGetV3VideosIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.v3.videos)[':id']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.videos)[':id']['similar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3VideosIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.videos)[':id']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.videos[':id'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3VideosIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.v3.videos)[':id']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.videos)[':id']['similar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3VideosIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.videos)[':id']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.videos[':id'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
