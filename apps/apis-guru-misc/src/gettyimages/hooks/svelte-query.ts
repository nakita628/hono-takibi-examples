import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV3Key() {
  return ['v3'] as const
}

export function getV3AffiliatesSearchImagesQueryKey(
  args: InferRequestType<typeof client.v3.affiliates.search.images.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/affiliates/search/images', keyArgs] as const
}

export function getV3AffiliatesSearchImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.affiliates.search.images.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.affiliates.search.images.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.affiliates.search.images.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3AffiliatesSearchImagesQueryKey>
  >({
    queryKey: getV3AffiliatesSearchImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.affiliates.search.images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3AffiliatesSearchImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.affiliates.search.images.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.affiliates.search.images.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v3.affiliates.search.images.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3AffiliatesSearchImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3AffiliatesSearchImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3AffiliatesSearchVideosQueryKey(
  args: InferRequestType<typeof client.v3.affiliates.search.videos.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/affiliates/search/videos', keyArgs] as const
}

export function getV3AffiliatesSearchVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.affiliates.search.videos.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.affiliates.search.videos.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.affiliates.search.videos.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3AffiliatesSearchVideosQueryKey>
  >({
    queryKey: getV3AffiliatesSearchVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.affiliates.search.videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3AffiliatesSearchVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.affiliates.search.videos.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.affiliates.search.videos.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v3.affiliates.search.videos.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3AffiliatesSearchVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3AffiliatesSearchVideosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3ArtistsImagesQueryKey(
  args: InferRequestType<typeof client.v3.artists.images.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/artists/images', keyArgs] as const
}

export function getV3ArtistsImagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.artists.images.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.artists.images.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.artists.images.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3ArtistsImagesQueryKey>
  >({
    queryKey: getV3ArtistsImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.artists.images.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3ArtistsImages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.artists.images.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.artists.images.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.artists.images.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3ArtistsImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3ArtistsImagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3ArtistsVideosQueryKey(
  args: InferRequestType<typeof client.v3.artists.videos.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/artists/videos', keyArgs] as const
}

export function getV3ArtistsVideosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.artists.videos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.artists.videos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.artists.videos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3ArtistsVideosQueryKey>
  >({
    queryKey: getV3ArtistsVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.artists.videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3ArtistsVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.artists.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.artists.videos.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.artists.videos.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3ArtistsVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3ArtistsVideosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV3AssetChangesChangeSetsMutationKey() {
  return ['v3', '/v3/asset-changes/change-sets', 'PUT'] as const
}

export function getPutV3AssetChangesChangeSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)['asset-changes']['change-sets']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)['asset-changes']['change-sets']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV3AssetChangesChangeSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)['asset-changes']['change-sets']['$put']>,
    ) {
      return parseResponse(client.v3['asset-changes']['change-sets'].$put(args, options))
    },
  })
}

export function createPutV3AssetChangesChangeSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3)['asset-changes']['change-sets']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3)['asset-changes']['change-sets']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV3AssetChangesChangeSetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV3AssetChangesChangeSetsChangeSetIdMutationKey() {
  return ['v3', '/v3/asset-changes/change-sets/:change-set-id', 'DELETE'] as const
}

export function getDeleteV3AssetChangesChangeSetsChangeSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v3)['asset-changes']['change-sets'][':change-set-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3AssetChangesChangeSetsChangeSetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3)['asset-changes']['change-sets'][':change-set-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v3['asset-changes']['change-sets'][':change-set-id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV3AssetChangesChangeSetsChangeSetId<
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
                  (typeof client.v3)['asset-changes']['change-sets'][':change-set-id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v3)['asset-changes']['change-sets'][':change-set-id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV3AssetChangesChangeSetsChangeSetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3AssetChangesChannelsQueryKey() {
  return ['v3', '/v3/asset-changes/channels'] as const
}

export function getV3AssetChangesChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)['asset-changes']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)['asset-changes']['channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3AssetChangesChannelsQueryKey>
  >({
    queryKey: getV3AssetChangesChannelsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v3['asset-changes'].channels.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3AssetChangesChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)['asset-changes']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3)['asset-changes']['channels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3AssetChangesChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3AssetChangesChannelsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV3AssetLicensingAssetIdMutationKey() {
  return ['v3', '/v3/asset-licensing/:assetId', 'POST'] as const
}

export function getPostV3AssetLicensingAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)['asset-licensing'][':assetId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)['asset-licensing'][':assetId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3AssetLicensingAssetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)['asset-licensing'][':assetId']['$post']>,
    ) {
      return parseResponse(client.v3['asset-licensing'][':assetId'].$post(args, options))
    },
  })
}

export function createPostV3AssetLicensingAssetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3)['asset-licensing'][':assetId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3)['asset-licensing'][':assetId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3AssetLicensingAssetIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3AssetManagementAssetsSendEventsQueryKey(
  args: InferRequestType<(typeof client.v3)['asset-management']['assets']['send-events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/asset-management/assets/send-events', keyArgs] as const
}

export function getV3AssetManagementAssetsSendEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)['asset-management']['assets']['send-events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)['asset-management']['assets']['send-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3)['asset-management']['assets']['send-events']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3AssetManagementAssetsSendEventsQueryKey>
  >({
    queryKey: getV3AssetManagementAssetsSendEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3['asset-management'].assets['send-events'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3AssetManagementAssetsSendEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)['asset-management']['assets']['send-events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3)['asset-management']['assets']['send-events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v3)['asset-management']['assets']['send-events']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3AssetManagementAssetsSendEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3AssetManagementAssetsSendEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3BoardsQueryKey(args: InferRequestType<typeof client.v3.boards.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/boards', keyArgs] as const
}

export function getV3BoardsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.boards.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.boards.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.boards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3BoardsQueryKey>
  >({
    queryKey: getV3BoardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.boards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Boards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.boards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.boards.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.boards.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3BoardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3BoardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV3BoardsMutationKey() {
  return ['v3', '/v3/boards', 'POST'] as const
}

export function getPostV3BoardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.boards.$post>>>>>,
    TError,
    InferRequestType<typeof client.v3.boards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3BoardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.boards.$post>) {
      return parseResponse(client.v3.boards.$post(args, options))
    },
  })
}

export function createPostV3Boards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.boards.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v3.boards.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3BoardsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3BoardsBoardIdQueryKey(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/boards/:board_id', keyArgs] as const
}

export function getV3BoardsBoardIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BoardsBoardIdQueryKey>
  >({
    queryKey: getV3BoardsBoardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.boards[':board_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3BoardsBoardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.boards)[':board_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3BoardsBoardIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3BoardsBoardIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV3BoardsBoardIdMutationKey() {
  return ['v3', '/v3/boards/:board_id', 'PUT'] as const
}

export function getPutV3BoardsBoardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3.boards)[':board_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV3BoardsBoardIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.boards)[':board_id']['$put']>) {
      return parseResponse(client.v3.boards[':board_id'].$put(args, options))
    },
  })
}

export function createPutV3BoardsBoardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v3.boards)[':board_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV3BoardsBoardIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV3BoardsBoardIdMutationKey() {
  return ['v3', '/v3/boards/:board_id', 'DELETE'] as const
}

export function getDeleteV3BoardsBoardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3.boards)[':board_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3BoardsBoardIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.boards)[':board_id']['$delete']>) {
      return parseResponse(client.v3.boards[':board_id'].$delete(args, options))
    },
  })
}

export function createDeleteV3BoardsBoardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v3.boards)[':board_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV3BoardsBoardIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV3BoardsBoardIdAssetsMutationKey() {
  return ['v3', '/v3/boards/:board_id/assets', 'PUT'] as const
}

export function getPutV3BoardsBoardIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['assets']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.boards)[':board_id']['assets']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV3BoardsBoardIdAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.boards)[':board_id']['assets']['$put']>,
    ) {
      return parseResponse(client.v3.boards[':board_id'].assets.$put(args, options))
    },
  })
}

export function createPutV3BoardsBoardIdAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['assets']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.boards)[':board_id']['assets']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV3BoardsBoardIdAssetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV3BoardsBoardIdAssetsMutationKey() {
  return ['v3', '/v3/boards/:board_id/assets', 'DELETE'] as const
}

export function getDeleteV3BoardsBoardIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['assets']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.boards)[':board_id']['assets']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3BoardsBoardIdAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.boards)[':board_id']['assets']['$delete']>,
    ) {
      return parseResponse(client.v3.boards[':board_id'].assets.$delete(args, options))
    },
  })
}

export function createDeleteV3BoardsBoardIdAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['assets']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.boards)[':board_id']['assets']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV3BoardsBoardIdAssetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV3BoardsBoardIdAssetsAssetIdMutationKey() {
  return ['v3', '/v3/boards/:board_id/assets/:asset_id', 'PUT'] as const
}

export function getPutV3BoardsBoardIdAssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV3BoardsBoardIdAssetsAssetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$put']>,
    ) {
      return parseResponse(client.v3.boards[':board_id'].assets[':asset_id'].$put(args, options))
    },
  })
}

export function createPutV3BoardsBoardIdAssetsAssetId<
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
                ReturnType<(typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV3BoardsBoardIdAssetsAssetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV3BoardsBoardIdAssetsAssetIdMutationKey() {
  return ['v3', '/v3/boards/:board_id/assets/:asset_id', 'DELETE'] as const
}

export function getDeleteV3BoardsBoardIdAssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3BoardsBoardIdAssetsAssetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$delete']
      >,
    ) {
      return parseResponse(client.v3.boards[':board_id'].assets[':asset_id'].$delete(args, options))
    },
  })
}

export function createDeleteV3BoardsBoardIdAssetsAssetId<
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
                ReturnType<(typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV3BoardsBoardIdAssetsAssetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3BoardsBoardIdCommentsQueryKey(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['comments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/boards/:board_id/comments', keyArgs] as const
}

export function getV3BoardsBoardIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BoardsBoardIdCommentsQueryKey>
  >({
    queryKey: getV3BoardsBoardIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.boards[':board_id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3BoardsBoardIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.boards)[':board_id']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3BoardsBoardIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3BoardsBoardIdCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV3BoardsBoardIdCommentsMutationKey() {
  return ['v3', '/v3/boards/:board_id/comments', 'POST'] as const
}

export function getPostV3BoardsBoardIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.boards)[':board_id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3BoardsBoardIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.boards)[':board_id']['comments']['$post']>,
    ) {
      return parseResponse(client.v3.boards[':board_id'].comments.$post(args, options))
    },
  })
}

export function createPostV3BoardsBoardIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.boards)[':board_id']['comments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.boards)[':board_id']['comments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3BoardsBoardIdCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV3BoardsBoardIdCommentsCommentIdMutationKey() {
  return ['v3', '/v3/boards/:board_id/comments/:comment_id', 'DELETE'] as const
}

export function getDeleteV3BoardsBoardIdCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v3.boards)[':board_id']['comments'][':comment_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3BoardsBoardIdCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.boards)[':board_id']['comments'][':comment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v3.boards[':board_id'].comments[':comment_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV3BoardsBoardIdCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v3.boards)[':board_id']['comments'][':comment_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV3BoardsBoardIdCommentsCommentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3CollectionsQueryKey(
  args: InferRequestType<typeof client.v3.collections.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/collections', keyArgs] as const
}

export function getV3CollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.collections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.collections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.collections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3CollectionsQueryKey>
  >({
    queryKey: getV3CollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.collections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Collections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.collections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.collections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3CollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3CollectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3CountriesQueryKey(args: InferRequestType<typeof client.v3.countries.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/countries', keyArgs] as const
}

export function getV3CountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.countries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.countries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.countries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3CountriesQueryKey>
  >({
    queryKey: getV3CountriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.countries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Countries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.countries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.countries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3CountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3CountriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3CustomersCurrentQueryKey(
  args: InferRequestType<typeof client.v3.customers.current.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/customers/current', keyArgs] as const
}

export function getV3CustomersCurrentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.customers.current.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.customers.current.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.customers.current.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3CustomersCurrentQueryKey>
  >({
    queryKey: getV3CustomersCurrentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.customers.current.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3CustomersCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.customers.current.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.customers.current.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.customers.current.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3CustomersCurrentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3CustomersCurrentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3DownloadsQueryKey(args: InferRequestType<typeof client.v3.downloads.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/downloads', keyArgs] as const
}

export function getV3DownloadsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.downloads.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.downloads.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.downloads.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3DownloadsQueryKey>
  >({
    queryKey: getV3DownloadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.downloads.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Downloads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.downloads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.downloads.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.downloads.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3DownloadsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3DownloadsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV3DownloadsImagesIdMutationKey() {
  return ['v3', '/v3/downloads/images/:id', 'POST'] as const
}

export function getPostV3DownloadsImagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.downloads.images)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.downloads.images)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3DownloadsImagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.downloads.images)[':id']['$post']>) {
      return parseResponse(client.v3.downloads.images[':id'].$post(args, options))
    },
  })
}

export function createPostV3DownloadsImagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.downloads.images)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.downloads.images)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3DownloadsImagesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV3DownloadsVideosIdMutationKey() {
  return ['v3', '/v3/downloads/videos/:id', 'POST'] as const
}

export function getPostV3DownloadsVideosIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.downloads.videos)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.downloads.videos)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3DownloadsVideosIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.downloads.videos)[':id']['$post']>) {
      return parseResponse(client.v3.downloads.videos[':id'].$post(args, options))
    },
  })
}

export function createPostV3DownloadsVideosId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.downloads.videos)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.downloads.videos)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3DownloadsVideosIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3EventsQueryKey(args: InferRequestType<typeof client.v3.events.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/events', keyArgs] as const
}

export function getV3EventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3EventsQueryKey>
  >({
    queryKey: getV3EventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3EventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3EventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3EventsIdQueryKey(
  args: InferRequestType<(typeof client.v3.events)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/events/:id', keyArgs] as const
}

export function getV3EventsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.events)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.events)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3EventsIdQueryKey>
  >({
    queryKey: getV3EventsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.events[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3EventsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.events)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.events)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3.events)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3EventsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3EventsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3ImagesQueryKey(args: InferRequestType<typeof client.v3.images.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/images', keyArgs] as const
}

export function getV3ImagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.images.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.images.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.images.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3ImagesQueryKey>
  >({
    queryKey: getV3ImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.images.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Images<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.images.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.images.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.images.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3ImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3ImagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3ImagesIdQueryKey(
  args: InferRequestType<(typeof client.v3.images)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/images/:id', keyArgs] as const
}

export function getV3ImagesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.images)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.images)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ImagesIdQueryKey>
  >({
    queryKey: getV3ImagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.images[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3ImagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.images)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3.images)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3ImagesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3ImagesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3ImagesIdDownloadhistoryQueryKey(
  args: InferRequestType<(typeof client.v3.images)[':id']['downloadhistory']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/images/:id/downloadhistory', keyArgs] as const
}

export function getV3ImagesIdDownloadhistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.images)[':id']['downloadhistory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.images)[':id']['downloadhistory']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.images)[':id']['downloadhistory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ImagesIdDownloadhistoryQueryKey>
  >({
    queryKey: getV3ImagesIdDownloadhistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.images[':id'].downloadhistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ImagesIdDownloadhistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.images)[':id']['downloadhistory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.images)[':id']['downloadhistory']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.images)[':id']['downloadhistory']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3ImagesIdDownloadhistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3ImagesIdDownloadhistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3ImagesIdSameSeriesQueryKey(
  args: InferRequestType<(typeof client.v3.images)[':id']['same-series']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/images/:id/same-series', keyArgs] as const
}

export function getV3ImagesIdSameSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.images)[':id']['same-series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.images)[':id']['same-series']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.images)[':id']['same-series']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ImagesIdSameSeriesQueryKey>
  >({
    queryKey: getV3ImagesIdSameSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.images[':id']['same-series'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ImagesIdSameSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.images)[':id']['same-series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.images)[':id']['same-series']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.images)[':id']['same-series']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3ImagesIdSameSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3ImagesIdSameSeriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3ImagesIdSimilarQueryKey(
  args: InferRequestType<(typeof client.v3.images)[':id']['similar']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/images/:id/similar', keyArgs] as const
}

export function getV3ImagesIdSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.images)[':id']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.images)[':id']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.images)[':id']['similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ImagesIdSimilarQueryKey>
  >({
    queryKey: getV3ImagesIdSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.images[':id'].similar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ImagesIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.images)[':id']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.images)[':id']['similar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.images)[':id']['similar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3ImagesIdSimilarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3ImagesIdSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3OrdersIdQueryKey(
  args: InferRequestType<(typeof client.v3.orders)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/orders/:id', keyArgs] as const
}

export function getV3OrdersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.orders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3OrdersIdQueryKey>
  >({
    queryKey: getV3OrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.orders[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3OrdersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.orders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.orders)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3.orders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3OrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3OrdersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3ProductsQueryKey(args: InferRequestType<typeof client.v3.products.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/products', keyArgs] as const
}

export function getV3ProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3ProductsQueryKey>
  >({
    queryKey: getV3ProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Products<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.products.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.products.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3ProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3ProductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3PurchasedAssetsQueryKey(
  args: InferRequestType<(typeof client.v3)['purchased-assets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/purchased-assets', keyArgs] as const
}

export function getV3PurchasedAssetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['purchased-assets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)['purchased-assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['purchased-assets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PurchasedAssetsQueryKey>
  >({
    queryKey: getV3PurchasedAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3['purchased-assets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3PurchasedAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['purchased-assets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3)['purchased-assets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3)['purchased-assets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3PurchasedAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3PurchasedAssetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV3SearchByImageUploadsFileNameMutationKey() {
  return ['v3', '/v3/search/by-image/uploads/:file-name', 'PUT'] as const
}

export function getPutV3SearchByImageUploadsFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v3.search)['by-image']['uploads'][':file-name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV3SearchByImageUploadsFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.search)['by-image']['uploads'][':file-name']['$put']
      >,
    ) {
      return parseResponse(client.v3.search['by-image'].uploads[':file-name'].$put(args, options))
    },
  })
}

export function createPutV3SearchByImageUploadsFileName<
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
                ReturnType<(typeof client.v3.search)['by-image']['uploads'][':file-name']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.search)['by-image']['uploads'][':file-name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV3SearchByImageUploadsFileNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3SearchEventsQueryKey(
  args: InferRequestType<typeof client.v3.search.events.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/search/events', keyArgs] as const
}

export function getV3SearchEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.search.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3SearchEventsQueryKey>
  >({
    queryKey: getV3SearchEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.search.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3SearchEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.search.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3SearchEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3SearchEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3SearchImagesQueryKey(
  args: InferRequestType<typeof client.v3.search.images.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/search/images', keyArgs] as const
}

export function getV3SearchImagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.search.images.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3SearchImagesQueryKey>
  >({
    queryKey: getV3SearchImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.search.images.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3SearchImages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.search.images.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3SearchImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3SearchImagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3SearchImagesCreativeQueryKey(
  args: InferRequestType<typeof client.v3.search.images.creative.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/search/images/creative', keyArgs] as const
}

export function getV3SearchImagesCreativeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.creative.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.search.images.creative.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.creative.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SearchImagesCreativeQueryKey>
  >({
    queryKey: getV3SearchImagesCreativeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.search.images.creative.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3SearchImagesCreative<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.creative.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.search.images.creative.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.creative.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3SearchImagesCreativeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3SearchImagesCreativeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3SearchImagesCreativeByImageQueryKey(
  args: InferRequestType<(typeof client.v3.search.images.creative)['by-image']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/search/images/creative/by-image', keyArgs] as const
}

export function getV3SearchImagesCreativeByImageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.search.images.creative)['by-image']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.search.images.creative)['by-image']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.search.images.creative)['by-image']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SearchImagesCreativeByImageQueryKey>
  >({
    queryKey: getV3SearchImagesCreativeByImageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.search.images.creative['by-image'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3SearchImagesCreativeByImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.search.images.creative)['by-image']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.search.images.creative)['by-image']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.search.images.creative)['by-image']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3SearchImagesCreativeByImageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3SearchImagesCreativeByImageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3SearchImagesEditorialQueryKey(
  args: InferRequestType<typeof client.v3.search.images.editorial.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/search/images/editorial', keyArgs] as const
}

export function getV3SearchImagesEditorialQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.editorial.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.search.images.editorial.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.editorial.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SearchImagesEditorialQueryKey>
  >({
    queryKey: getV3SearchImagesEditorialQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.search.images.editorial.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3SearchImagesEditorial<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.editorial.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.search.images.editorial.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.images.editorial.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3SearchImagesEditorialQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3SearchImagesEditorialQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3SearchVideosCreativeQueryKey(
  args: InferRequestType<typeof client.v3.search.videos.creative.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/search/videos/creative', keyArgs] as const
}

export function getV3SearchVideosCreativeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.videos.creative.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.search.videos.creative.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.videos.creative.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SearchVideosCreativeQueryKey>
  >({
    queryKey: getV3SearchVideosCreativeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.search.videos.creative.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3SearchVideosCreative<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.videos.creative.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.search.videos.creative.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.videos.creative.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3SearchVideosCreativeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3SearchVideosCreativeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3SearchVideosCreativeByImageQueryKey(
  args: InferRequestType<(typeof client.v3.search.videos.creative)['by-image']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/search/videos/creative/by-image', keyArgs] as const
}

export function getV3SearchVideosCreativeByImageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.search.videos.creative)['by-image']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.search.videos.creative)['by-image']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.search.videos.creative)['by-image']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SearchVideosCreativeByImageQueryKey>
  >({
    queryKey: getV3SearchVideosCreativeByImageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.search.videos.creative['by-image'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3SearchVideosCreativeByImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.search.videos.creative)['by-image']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.search.videos.creative)['by-image']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.search.videos.creative)['by-image']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3SearchVideosCreativeByImageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3SearchVideosCreativeByImageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3SearchVideosEditorialQueryKey(
  args: InferRequestType<typeof client.v3.search.videos.editorial.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/search/videos/editorial', keyArgs] as const
}

export function getV3SearchVideosEditorialQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.videos.editorial.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.search.videos.editorial.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.videos.editorial.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SearchVideosEditorialQueryKey>
  >({
    queryKey: getV3SearchVideosEditorialQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.search.videos.editorial.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3SearchVideosEditorial<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.videos.editorial.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.search.videos.editorial.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.search.videos.editorial.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3SearchVideosEditorialQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3SearchVideosEditorialQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV3UsageBatchesIdMutationKey() {
  return ['v3', '/v3/usage-batches/:id', 'PUT'] as const
}

export function getPutV3UsageBatchesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)['usage-batches'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)['usage-batches'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV3UsageBatchesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)['usage-batches'][':id']['$put']>) {
      return parseResponse(client.v3['usage-batches'][':id'].$put(args, options))
    },
  })
}

export function createPutV3UsageBatchesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3)['usage-batches'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3)['usage-batches'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV3UsageBatchesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3VideosQueryKey(args: InferRequestType<typeof client.v3.videos.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/videos', keyArgs] as const
}

export function getV3VideosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.videos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.videos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.videos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3VideosQueryKey>
  >({
    queryKey: getV3VideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Videos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.videos.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.videos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3VideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3VideosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3VideosIdQueryKey(
  args: InferRequestType<(typeof client.v3.videos)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/videos/:id', keyArgs] as const
}

export function getV3VideosIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.videos)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.videos)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.videos)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3VideosIdQueryKey>
  >({
    queryKey: getV3VideosIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.videos[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3VideosId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.videos)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.videos)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3.videos)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3VideosIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3VideosIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3VideosIdDownloadhistoryQueryKey(
  args: InferRequestType<(typeof client.v3.videos)[':id']['downloadhistory']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/videos/:id/downloadhistory', keyArgs] as const
}

export function getV3VideosIdDownloadhistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.videos)[':id']['downloadhistory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.videos)[':id']['downloadhistory']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.videos)[':id']['downloadhistory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3VideosIdDownloadhistoryQueryKey>
  >({
    queryKey: getV3VideosIdDownloadhistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.videos[':id'].downloadhistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3VideosIdDownloadhistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.videos)[':id']['downloadhistory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.videos)[':id']['downloadhistory']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.videos)[':id']['downloadhistory']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3VideosIdDownloadhistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3VideosIdDownloadhistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3VideosIdSameSeriesQueryKey(
  args: InferRequestType<(typeof client.v3.videos)[':id']['same-series']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/videos/:id/same-series', keyArgs] as const
}

export function getV3VideosIdSameSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.videos)[':id']['same-series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.videos)[':id']['same-series']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.videos)[':id']['same-series']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3VideosIdSameSeriesQueryKey>
  >({
    queryKey: getV3VideosIdSameSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.videos[':id']['same-series'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3VideosIdSameSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.videos)[':id']['same-series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.videos)[':id']['same-series']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.videos)[':id']['same-series']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3VideosIdSameSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3VideosIdSameSeriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3VideosIdSimilarQueryKey(
  args: InferRequestType<(typeof client.v3.videos)[':id']['similar']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/videos/:id/similar', keyArgs] as const
}

export function getV3VideosIdSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.videos)[':id']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.videos)[':id']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.videos)[':id']['similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3VideosIdSimilarQueryKey>
  >({
    queryKey: getV3VideosIdSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.videos[':id'].similar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3VideosIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.videos)[':id']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.videos)[':id']['similar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.videos)[':id']['similar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3VideosIdSimilarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3VideosIdSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
