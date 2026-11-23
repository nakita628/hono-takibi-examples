import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1DesignsDesignIdAnalyticsQueryKey(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['$get']>,
) {
  return ['v1', '/v1/designs/:designId/analytics', args] as const
}

export function getV1DesignsDesignIdAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DesignsDesignIdAnalyticsQueryKey>
  >({
    queryKey: getV1DesignsDesignIdAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.designs[':designId'].analytics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DesignsDesignIdAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1DesignsDesignIdAnalyticsQueryKey>
        >
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
      ...getV1DesignsDesignIdAnalyticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1DesignsDesignIdAnalyticsViewersQueryKey(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>,
) {
  return ['v1', '/v1/designs/:designId/analytics/viewers', args] as const
}

export function getV1DesignsDesignIdAnalyticsViewersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DesignsDesignIdAnalyticsViewersQueryKey>
  >({
    queryKey: getV1DesignsDesignIdAnalyticsViewersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.designs[':designId'].analytics.viewers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DesignsDesignIdAnalyticsViewers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1DesignsDesignIdAnalyticsViewersQueryKey>
        >
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
      ...getV1DesignsDesignIdAnalyticsViewersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1DesignsDesignIdAnalyticsViewsOverTimeQueryKey(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['analytics']['views-over-time']['$get']
  >,
) {
  return ['v1', '/v1/designs/:designId/analytics/views-over-time', args] as const
}

export function getV1DesignsDesignIdAnalyticsViewsOverTimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.designs)[':designId']['analytics']['views-over-time']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['analytics']['views-over-time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.designs)[':designId']['analytics']['views-over-time']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DesignsDesignIdAnalyticsViewsOverTimeQueryKey>
  >({
    queryKey: getV1DesignsDesignIdAnalyticsViewsOverTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.designs[':designId'].analytics['views-over-time'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DesignsDesignIdAnalyticsViewsOverTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.designs)[':designId']['analytics']['views-over-time']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.designs)[':designId']['analytics']['views-over-time']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.designs)[':designId']['analytics']['views-over-time']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1DesignsDesignIdAnalyticsViewsOverTimeQueryKey>
        >
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
      ...getV1DesignsDesignIdAnalyticsViewsOverTimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1DesignsDesignIdAnalyticsPageViewsMutationKey() {
  return ['v1', '/v1/designs/:designId/analytics/page-views', 'POST'] as const
}

export function getPostV1DesignsDesignIdAnalyticsPageViewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.designs)[':designId']['analytics']['page-views']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['page-views']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DesignsDesignIdAnalyticsPageViewsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.designs)[':designId']['analytics']['page-views']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.designs[':designId'].analytics['page-views'].$post(args, options),
      )
    },
  })
}

export function createPostV1DesignsDesignIdAnalyticsPageViews<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.designs)[':designId']['analytics']['page-views']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.designs)[':designId']['analytics']['page-views']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1DesignsDesignIdAnalyticsPageViewsMutationOptions<
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

export function getV1DesignsDesignIdAnalyticsLinksQueryKey(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>,
) {
  return ['v1', '/v1/designs/:designId/analytics/links', args] as const
}

export function getV1DesignsDesignIdAnalyticsLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DesignsDesignIdAnalyticsLinksQueryKey>
  >({
    queryKey: getV1DesignsDesignIdAnalyticsLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.designs[':designId'].analytics.links.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DesignsDesignIdAnalyticsLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.designs)[':designId']['analytics']['links']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1DesignsDesignIdAnalyticsLinksQueryKey>
        >
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
      ...getV1DesignsDesignIdAnalyticsLinksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1AppsAppIdJwksQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':appId']['jwks']['$get']>,
) {
  return ['v1', '/v1/apps/:appId/jwks', args] as const
}

export function getV1AppsAppIdJwksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':appId']['jwks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':appId']['jwks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':appId']['jwks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsAppIdJwksQueryKey>
  >({
    queryKey: getV1AppsAppIdJwksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':appId'].jwks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AppsAppIdJwks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':appId']['jwks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.apps)[':appId']['jwks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':appId']['jwks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1AppsAppIdJwksQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AppsAppIdJwksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1AssetsAssetIdQueryKey(
  args: InferRequestType<(typeof client.v1.assets)[':assetId']['$get']>,
) {
  return ['v1', '/v1/assets/:assetId', args] as const
}

export function getV1AssetsAssetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.assets)[':assetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AssetsAssetIdQueryKey>
  >({
    queryKey: getV1AssetsAssetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.assets[':assetId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1AssetsAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.assets)[':assetId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1AssetsAssetIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AssetsAssetIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1AssetsAssetIdMutationKey() {
  return ['v1', '/v1/assets/:assetId', 'DELETE'] as const
}

export function getDeleteV1AssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.assets)[':assetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AssetsAssetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.assets)[':assetId']['$delete']>) {
      return parseResponse(client.v1.assets[':assetId'].$delete(args, options))
    },
  })
}

export function createDeleteV1AssetsAssetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.assets)[':assetId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AssetsAssetIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV1AssetsAssetIdMutationKey() {
  return ['v1', '/v1/assets/:assetId', 'PATCH'] as const
}

export function getPatchV1AssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.assets)[':assetId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AssetsAssetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.assets)[':assetId']['$patch']>) {
      return parseResponse(client.v1.assets[':assetId'].$patch(args, options))
    },
  })
}

export function createPatchV1AssetsAssetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.assets)[':assetId']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1AssetsAssetIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1AssetUploadsMutationKey() {
  return ['v1', '/v1/asset-uploads', 'POST'] as const
}

export function getPostV1AssetUploadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['asset-uploads']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['asset-uploads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AssetUploadsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['asset-uploads']['$post']>) {
      return parseResponse(client.v1['asset-uploads'].$post(args, options))
    },
  })
}

export function createPostV1AssetUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['asset-uploads']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['asset-uploads']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AssetUploadsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AssetUploadsJobIdQueryKey(
  args: InferRequestType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>,
) {
  return ['v1', '/v1/asset-uploads/:jobId', args] as const
}

export function getV1AssetUploadsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AssetUploadsJobIdQueryKey>
  >({
    queryKey: getV1AssetUploadsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['asset-uploads'][':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AssetUploadsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1AssetUploadsJobIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AssetUploadsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1UrlAssetUploadsMutationKey() {
  return ['v1', '/v1/url-asset-uploads', 'POST'] as const
}

export function getPostV1UrlAssetUploadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['url-asset-uploads']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['url-asset-uploads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UrlAssetUploadsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['url-asset-uploads']['$post']>) {
      return parseResponse(client.v1['url-asset-uploads'].$post(args, options))
    },
  })
}

export function createPostV1UrlAssetUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['url-asset-uploads']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['url-asset-uploads']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1UrlAssetUploadsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1UrlAssetUploadsJobIdQueryKey(
  args: InferRequestType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>,
) {
  return ['v1', '/v1/url-asset-uploads/:jobId', args] as const
}

export function getV1UrlAssetUploadsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UrlAssetUploadsJobIdQueryKey>
  >({
    queryKey: getV1UrlAssetUploadsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['url-asset-uploads'][':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UrlAssetUploadsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1UrlAssetUploadsJobIdQueryKey>
        >
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
      ...getV1UrlAssetUploadsJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1AutofillsMutationKey() {
  return ['v1', '/v1/autofills', 'POST'] as const
}

export function getPostV1AutofillsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.autofills.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.autofills.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AutofillsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.autofills.$post>) {
      return parseResponse(client.v1.autofills.$post(args, options))
    },
  })
}

export function createPostV1Autofills<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.autofills.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.autofills.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AutofillsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AutofillsJobIdQueryKey(
  args: InferRequestType<(typeof client.v1.autofills)[':jobId']['$get']>,
) {
  return ['v1', '/v1/autofills/:jobId', args] as const
}

export function getV1AutofillsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.autofills)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.autofills)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.autofills)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AutofillsJobIdQueryKey>
  >({
    queryKey: getV1AutofillsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.autofills[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AutofillsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.autofills)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.autofills)[':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.autofills)[':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1AutofillsJobIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AutofillsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1BrandTemplatesQueryKey(
  args: InferRequestType<(typeof client.v1)['brand-templates']['$get']>,
) {
  return ['v1', '/v1/brand-templates', args] as const
}

export function getV1BrandTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['brand-templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['brand-templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['brand-templates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BrandTemplatesQueryKey>
  >({
    queryKey: getV1BrandTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['brand-templates'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1BrandTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['brand-templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['brand-templates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['brand-templates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1BrandTemplatesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BrandTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1BrandTemplatesMutationKey() {
  return ['v1', '/v1/brand-templates', 'POST'] as const
}

export function getPostV1BrandTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['brand-templates']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['brand-templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BrandTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['brand-templates']['$post']>) {
      return parseResponse(client.v1['brand-templates'].$post(args, options))
    },
  })
}

export function createPostV1BrandTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['brand-templates']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['brand-templates']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1BrandTemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1BrandTemplatesBrandTemplateIdQueryKey(
  args: InferRequestType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>,
) {
  return ['v1', '/v1/brand-templates/:brandTemplateId', args] as const
}

export function getV1BrandTemplatesBrandTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BrandTemplatesBrandTemplateIdQueryKey>
  >({
    queryKey: getV1BrandTemplatesBrandTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['brand-templates'][':brandTemplateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BrandTemplatesBrandTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1BrandTemplatesBrandTemplateIdQueryKey>
        >
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
      ...getV1BrandTemplatesBrandTemplateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1BrandTemplatesBrandTemplateIdDatasetQueryKey(
  args: InferRequestType<
    (typeof client.v1)['brand-templates'][':brandTemplateId']['dataset']['$get']
  >,
) {
  return ['v1', '/v1/brand-templates/:brandTemplateId/dataset', args] as const
}

export function getV1BrandTemplatesBrandTemplateIdDatasetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)['brand-templates'][':brandTemplateId']['dataset']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)['brand-templates'][':brandTemplateId']['dataset']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['brand-templates'][':brandTemplateId']['dataset']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BrandTemplatesBrandTemplateIdDatasetQueryKey>
  >({
    queryKey: getV1BrandTemplatesBrandTemplateIdDatasetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['brand-templates'][':brandTemplateId'].dataset.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BrandTemplatesBrandTemplateIdDataset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)['brand-templates'][':brandTemplateId']['dataset']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['brand-templates'][':brandTemplateId']['dataset']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)['brand-templates'][':brandTemplateId']['dataset']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1BrandTemplatesBrandTemplateIdDatasetQueryKey>
        >
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
      ...getV1BrandTemplatesBrandTemplateIdDatasetQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1CommentsMutationKey() {
  return ['v1', '/v1/comments', 'POST'] as const
}

export function getPostV1CommentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.comments.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.comments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.comments.$post>) {
      return parseResponse(client.v1.comments.$post(args, options))
    },
  })
}

export function createPostV1Comments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.comments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.comments.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1DesignsDesignIdCommentsThreadIdRepliesQueryKey(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$get']
  >,
) {
  return ['v1', '/v1/designs/:designId/comments/:threadId/replies', args] as const
}

export function getV1DesignsDesignIdCommentsThreadIdRepliesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DesignsDesignIdCommentsThreadIdRepliesQueryKey>
  >({
    queryKey: getV1DesignsDesignIdCommentsThreadIdRepliesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.designs[':designId'].comments[':threadId'].replies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DesignsDesignIdCommentsThreadIdReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1DesignsDesignIdCommentsThreadIdRepliesQueryKey>
        >
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
      ...getV1DesignsDesignIdCommentsThreadIdRepliesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1DesignsDesignIdCommentsThreadIdRepliesMutationKey() {
  return ['v1', '/v1/designs/:designId/comments/:threadId/replies', 'POST'] as const
}

export function getPostV1DesignsDesignIdCommentsThreadIdRepliesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1DesignsDesignIdCommentsThreadIdRepliesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.designs[':designId'].comments[':threadId'].replies.$post(args, options),
      )
    },
  })
}

export function createPostV1DesignsDesignIdCommentsThreadIdReplies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1DesignsDesignIdCommentsThreadIdRepliesMutationOptions<
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

export function getV1DesignsDesignIdCommentsThreadIdQueryKey(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']>,
) {
  return ['v1', '/v1/designs/:designId/comments/:threadId', args] as const
}

export function getV1DesignsDesignIdCommentsThreadIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DesignsDesignIdCommentsThreadIdQueryKey>
  >({
    queryKey: getV1DesignsDesignIdCommentsThreadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.designs[':designId'].comments[':threadId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DesignsDesignIdCommentsThreadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1DesignsDesignIdCommentsThreadIdQueryKey>
        >
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
      ...getV1DesignsDesignIdCommentsThreadIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies'][':replyId']['$get']
  >,
) {
  return ['v1', '/v1/designs/:designId/comments/:threadId/replies/:replyId', args] as const
}

export function getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies'][':replyId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies'][':replyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies'][':replyId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdQueryKey>
  >({
    queryKey: getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.designs[':designId'].comments[':threadId'].replies[':replyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DesignsDesignIdCommentsThreadIdRepliesReplyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies'][':replyId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies'][':replyId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies'][':replyId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdQueryKey>
        >
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
      ...getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1DesignsDesignIdCommentsMutationKey() {
  return ['v1', '/v1/designs/:designId/comments', 'POST'] as const
}

export function getPostV1DesignsDesignIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.designs)[':designId']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.designs)[':designId']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DesignsDesignIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.designs)[':designId']['comments']['$post']>,
    ) {
      return parseResponse(client.v1.designs[':designId'].comments.$post(args, options))
    },
  })
}

export function createPostV1DesignsDesignIdComments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.designs)[':designId']['comments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.designs)[':designId']['comments']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1DesignsDesignIdCommentsMutationOptions<
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

export function getV1ConnectKeysQueryKey() {
  return ['v1', '/v1/connect/keys'] as const
}

export function getV1ConnectKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.keys.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.keys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectKeysQueryKey>
  >({
    queryKey: getV1ConnectKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.connect.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ConnectKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.keys.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ConnectKeysQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ConnectKeysQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1DesignsQueryKey(args: InferRequestType<typeof client.v1.designs.$get>) {
  return ['v1', '/v1/designs', args] as const
}

export function getV1DesignsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.designs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.designs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.designs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1DesignsQueryKey>
  >({
    queryKey: getV1DesignsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.designs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Designs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.designs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.designs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.designs.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1DesignsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DesignsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1DesignsMutationKey() {
  return ['v1', '/v1/designs', 'POST'] as const
}

export function getPostV1DesignsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.designs.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.designs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DesignsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.designs.$post>) {
      return parseResponse(client.v1.designs.$post(args, options))
    },
  })
}

export function createPostV1Designs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.designs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.designs.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1DesignsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1DesignsDesignIdQueryKey(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['$get']>,
) {
  return ['v1', '/v1/designs/:designId', args] as const
}

export function getV1DesignsDesignIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.designs)[':designId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.designs)[':designId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DesignsDesignIdQueryKey>
  >({
    queryKey: getV1DesignsDesignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.designs[':designId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DesignsDesignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.designs)[':designId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.designs)[':designId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.designs)[':designId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1DesignsDesignIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DesignsDesignIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1DesignsDesignIdPagesQueryKey(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['pages']['$get']>,
) {
  return ['v1', '/v1/designs/:designId/pages', args] as const
}

export function getV1DesignsDesignIdPagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.designs)[':designId']['pages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DesignsDesignIdPagesQueryKey>
  >({
    queryKey: getV1DesignsDesignIdPagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.designs[':designId'].pages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DesignsDesignIdPages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.designs)[':designId']['pages']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.designs)[':designId']['pages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1DesignsDesignIdPagesQueryKey>
        >
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
      ...getV1DesignsDesignIdPagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1DesignsDesignIdExportFormatsQueryKey(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>,
) {
  return ['v1', '/v1/designs/:designId/export-formats', args] as const
}

export function getV1DesignsDesignIdExportFormatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DesignsDesignIdExportFormatsQueryKey>
  >({
    queryKey: getV1DesignsDesignIdExportFormatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.designs[':designId']['export-formats'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DesignsDesignIdExportFormats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1DesignsDesignIdExportFormatsQueryKey>
        >
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
      ...getV1DesignsDesignIdExportFormatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1DesignsDesignIdDatasetQueryKey(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['dataset']['$get']>,
) {
  return ['v1', '/v1/designs/:designId/dataset', args] as const
}

export function getV1DesignsDesignIdDatasetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['dataset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['dataset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.designs)[':designId']['dataset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DesignsDesignIdDatasetQueryKey>
  >({
    queryKey: getV1DesignsDesignIdDatasetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.designs[':designId'].dataset.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DesignsDesignIdDataset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['dataset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.designs)[':designId']['dataset']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.designs)[':designId']['dataset']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1DesignsDesignIdDatasetQueryKey>
        >
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
      ...getV1DesignsDesignIdDatasetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1PrintPartnerDesignsMutationKey() {
  return ['v1', '/v1/print-partner/designs', 'POST'] as const
}

export function getPostV1PrintPartnerDesignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['print-partner']['designs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['print-partner']['designs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrintPartnerDesignsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['print-partner']['designs']['$post']>,
    ) {
      return parseResponse(client.v1['print-partner'].designs.$post(args, options))
    },
  })
}

export function createPostV1PrintPartnerDesigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['print-partner']['designs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['print-partner']['designs']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PrintPartnerDesignsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PrintPartnerDesignsDesignIdQueryKey(
  args: InferRequestType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>,
) {
  return ['v1', '/v1/print-partner/designs/:designId', args] as const
}

export function getV1PrintPartnerDesignsDesignIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrintPartnerDesignsDesignIdQueryKey>
  >({
    queryKey: getV1PrintPartnerDesignsDesignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['print-partner'].designs[':designId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PrintPartnerDesignsDesignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1PrintPartnerDesignsDesignIdQueryKey>
        >
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
      ...getV1PrintPartnerDesignsDesignIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1GenerationsMutationKey() {
  return ['v1', '/v1/generations', 'POST'] as const
}

export function getPostV1GenerationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.generations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.generations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GenerationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.generations.$post>) {
      return parseResponse(client.v1.generations.$post(args, options))
    },
  })
}

export function createPostV1Generations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.generations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.generations.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GenerationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1GenerationsJobIdQueryKey(
  args: InferRequestType<(typeof client.v1.generations)[':jobId']['$get']>,
) {
  return ['v1', '/v1/generations/:jobId', args] as const
}

export function getV1GenerationsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.generations)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.generations)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.generations)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GenerationsJobIdQueryKey>
  >({
    queryKey: getV1GenerationsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.generations[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1GenerationsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.generations)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.generations)[':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.generations)[':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1GenerationsJobIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1GenerationsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ImportsMutationKey() {
  return ['v1', '/v1/imports', 'POST'] as const
}

export function getPostV1ImportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.imports.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.imports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ImportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.imports.$post>) {
      return parseResponse(client.v1.imports.$post(args, options))
    },
  })
}

export function createPostV1Imports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.imports.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.imports.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ImportsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ImportsJobIdQueryKey(
  args: InferRequestType<(typeof client.v1.imports)[':jobId']['$get']>,
) {
  return ['v1', '/v1/imports/:jobId', args] as const
}

export function getV1ImportsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.imports)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.imports)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.imports)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ImportsJobIdQueryKey>
  >({
    queryKey: getV1ImportsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.imports[':jobId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ImportsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.imports)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.imports)[':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.imports)[':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ImportsJobIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ImportsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1UrlImportsMutationKey() {
  return ['v1', '/v1/url-imports', 'POST'] as const
}

export function getPostV1UrlImportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['url-imports']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['url-imports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UrlImportsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['url-imports']['$post']>) {
      return parseResponse(client.v1['url-imports'].$post(args, options))
    },
  })
}

export function createPostV1UrlImports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['url-imports']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['url-imports']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1UrlImportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1UrlImportsJobIdQueryKey(
  args: InferRequestType<(typeof client.v1)['url-imports'][':jobId']['$get']>,
) {
  return ['v1', '/v1/url-imports/:jobId', args] as const
}

export function getV1UrlImportsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['url-imports'][':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['url-imports'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['url-imports'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UrlImportsJobIdQueryKey>
  >({
    queryKey: getV1UrlImportsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['url-imports'][':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UrlImportsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['url-imports'][':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['url-imports'][':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['url-imports'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1UrlImportsJobIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UrlImportsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ImageToDesignImportsMutationKey() {
  return ['v1', '/v1/image-to-design-imports', 'POST'] as const
}

export function getPostV1ImageToDesignImportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['image-to-design-imports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['image-to-design-imports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ImageToDesignImportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['image-to-design-imports']['$post']>,
    ) {
      return parseResponse(client.v1['image-to-design-imports'].$post(args, options))
    },
  })
}

export function createPostV1ImageToDesignImports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['image-to-design-imports']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['image-to-design-imports']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ImageToDesignImportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ImageToDesignImportsJobIdQueryKey(
  args: InferRequestType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>,
) {
  return ['v1', '/v1/image-to-design-imports/:jobId', args] as const
}

export function getV1ImageToDesignImportsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ImageToDesignImportsJobIdQueryKey>
  >({
    queryKey: getV1ImageToDesignImportsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['image-to-design-imports'][':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ImageToDesignImportsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ImageToDesignImportsJobIdQueryKey>
        >
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
      ...getV1ImageToDesignImportsJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ExportsMutationKey() {
  return ['v1', '/v1/exports', 'POST'] as const
}

export function getPostV1ExportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.exports.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.exports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ExportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.exports.$post>) {
      return parseResponse(client.v1.exports.$post(args, options))
    },
  })
}

export function createPostV1Exports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.exports.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.exports.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ExportsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PrintPartnerExportsMutationKey() {
  return ['v1', '/v1/print-partner/exports', 'POST'] as const
}

export function getPostV1PrintPartnerExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['print-partner']['exports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['print-partner']['exports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrintPartnerExportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['print-partner']['exports']['$post']>,
    ) {
      return parseResponse(client.v1['print-partner'].exports.$post(args, options))
    },
  })
}

export function createPostV1PrintPartnerExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['print-partner']['exports']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['print-partner']['exports']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PrintPartnerExportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ExportsExportIdQueryKey(
  args: InferRequestType<(typeof client.v1.exports)[':exportId']['$get']>,
) {
  return ['v1', '/v1/exports/:exportId', args] as const
}

export function getV1ExportsExportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.exports)[':exportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.exports)[':exportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.exports)[':exportId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ExportsExportIdQueryKey>
  >({
    queryKey: getV1ExportsExportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.exports[':exportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ExportsExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.exports)[':exportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.exports)[':exportId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.exports)[':exportId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ExportsExportIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ExportsExportIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1FoldersFolderIdQueryKey(
  args: InferRequestType<(typeof client.v1.folders)[':folderId']['$get']>,
) {
  return ['v1', '/v1/folders/:folderId', args] as const
}

export function getV1FoldersFolderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.folders)[':folderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FoldersFolderIdQueryKey>
  >({
    queryKey: getV1FoldersFolderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.folders[':folderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FoldersFolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.folders)[':folderId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1FoldersFolderIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FoldersFolderIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1FoldersFolderIdMutationKey() {
  return ['v1', '/v1/folders/:folderId', 'DELETE'] as const
}

export function getDeleteV1FoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.folders)[':folderId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FoldersFolderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.folders)[':folderId']['$delete']>) {
      return parseResponse(client.v1.folders[':folderId'].$delete(args, options))
    },
  })
}

export function createDeleteV1FoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.folders)[':folderId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1FoldersFolderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV1FoldersFolderIdMutationKey() {
  return ['v1', '/v1/folders/:folderId', 'PATCH'] as const
}

export function getPatchV1FoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.folders)[':folderId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1FoldersFolderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.folders)[':folderId']['$patch']>) {
      return parseResponse(client.v1.folders[':folderId'].$patch(args, options))
    },
  })
}

export function createPatchV1FoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.folders)[':folderId']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1FoldersFolderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1FoldersFolderIdItemsQueryKey(
  args: InferRequestType<(typeof client.v1.folders)[':folderId']['items']['$get']>,
) {
  return ['v1', '/v1/folders/:folderId/items', args] as const
}

export function getV1FoldersFolderIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.folders)[':folderId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FoldersFolderIdItemsQueryKey>
  >({
    queryKey: getV1FoldersFolderIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.folders[':folderId'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FoldersFolderIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.folders)[':folderId']['items']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1FoldersFolderIdItemsQueryKey>
        >
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
      ...getV1FoldersFolderIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1FoldersMoveMutationKey() {
  return ['v1', '/v1/folders/move', 'POST'] as const
}

export function getPostV1FoldersMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.move.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.folders.move.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FoldersMoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.folders.move.$post>) {
      return parseResponse(client.v1.folders.move.$post(args, options))
    },
  })
}

export function createPostV1FoldersMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.move.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.folders.move.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1FoldersMoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1FoldersMutationKey() {
  return ['v1', '/v1/folders', 'POST'] as const
}

export function getPostV1FoldersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.folders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.folders.$post>) {
      return parseResponse(client.v1.folders.$post(args, options))
    },
  })
}

export function createPostV1Folders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.folders.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1FoldersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ImageGenerationsMutationKey() {
  return ['v1', '/v1/image-generations', 'POST'] as const
}

export function getPostV1ImageGenerationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['image-generations']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['image-generations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ImageGenerationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['image-generations']['$post']>) {
      return parseResponse(client.v1['image-generations'].$post(args, options))
    },
  })
}

export function createPostV1ImageGenerations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['image-generations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['image-generations']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ImageGenerationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ImageGenerationsJobIdQueryKey(
  args: InferRequestType<(typeof client.v1)['image-generations'][':jobId']['$get']>,
) {
  return ['v1', '/v1/image-generations/:jobId', args] as const
}

export function getV1ImageGenerationsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['image-generations'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['image-generations'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['image-generations'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ImageGenerationsJobIdQueryKey>
  >({
    queryKey: getV1ImageGenerationsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['image-generations'][':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ImageGenerationsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['image-generations'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['image-generations'][':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['image-generations'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ImageGenerationsJobIdQueryKey>
        >
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
      ...getV1ImageGenerationsJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ImageTransformationsMutationKey() {
  return ['v1', '/v1/image-transformations', 'POST'] as const
}

export function getPostV1ImageTransformationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['image-transformations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['image-transformations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ImageTransformationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['image-transformations']['$post']>) {
      return parseResponse(client.v1['image-transformations'].$post(args, options))
    },
  })
}

export function createPostV1ImageTransformations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['image-transformations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['image-transformations']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ImageTransformationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ImageTransformationsJobIdQueryKey(
  args: InferRequestType<(typeof client.v1)['image-transformations'][':jobId']['$get']>,
) {
  return ['v1', '/v1/image-transformations/:jobId', args] as const
}

export function getV1ImageTransformationsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['image-transformations'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['image-transformations'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['image-transformations'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ImageTransformationsJobIdQueryKey>
  >({
    queryKey: getV1ImageTransformationsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['image-transformations'][':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ImageTransformationsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['image-transformations'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['image-transformations'][':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['image-transformations'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ImageTransformationsJobIdQueryKey>
        >
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
      ...getV1ImageTransformationsJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1MergesMutationKey() {
  return ['v1', '/v1/merges', 'POST'] as const
}

export function getPostV1MergesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.merges.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.merges.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MergesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.merges.$post>) {
      return parseResponse(client.v1.merges.$post(args, options))
    },
  })
}

export function createPostV1Merges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.merges.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.merges.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1MergesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1MergesJobIdQueryKey(
  args: InferRequestType<(typeof client.v1.merges)[':jobId']['$get']>,
) {
  return ['v1', '/v1/merges/:jobId', args] as const
}

export function getV1MergesJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.merges)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.merges)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.merges)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MergesJobIdQueryKey>
  >({
    queryKey: getV1MergesJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.merges[':jobId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1MergesJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.merges)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.merges)[':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.merges)[':jobId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1MergesJobIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1MergesJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1OauthTokenMutationKey() {
  return ['v1', '/v1/oauth/token', 'POST'] as const
}

export function getPostV1OauthTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.oauth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OauthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.oauth.token.$post>) {
      return parseResponse(client.v1.oauth.token.$post(args, options))
    },
  })
}

export function createPostV1OauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.oauth.token.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OauthTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OauthIntrospectMutationKey() {
  return ['v1', '/v1/oauth/introspect', 'POST'] as const
}

export function getPostV1OauthIntrospectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.introspect.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.oauth.introspect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OauthIntrospectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.oauth.introspect.$post>) {
      return parseResponse(client.v1.oauth.introspect.$post(args, options))
    },
  })
}

export function createPostV1OauthIntrospect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.introspect.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.oauth.introspect.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OauthIntrospectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OauthRevokeMutationKey() {
  return ['v1', '/v1/oauth/revoke', 'POST'] as const
}

export function getPostV1OauthRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.revoke.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.oauth.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OauthRevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.oauth.revoke.$post>) {
      return parseResponse(client.v1.oauth.revoke.$post(args, options))
    },
  })
}

export function createPostV1OauthRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.revoke.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.oauth.revoke.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OauthRevokeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1OidcJwksQueryKey() {
  return ['v1', '/v1/oidc/jwks'] as const
}

export function getV1OidcJwksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.jwks.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.jwks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1OidcJwksQueryKey>
  >({
    queryKey: getV1OidcJwksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.oidc.jwks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OidcJwks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.jwks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.jwks.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1OidcJwksQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OidcJwksQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1OidcUserinfoQueryKey() {
  return ['v1', '/v1/oidc/userinfo'] as const
}

export function getV1OidcUserinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.userinfo.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.userinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OidcUserinfoQueryKey>
  >({
    queryKey: getV1OidcUserinfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.oidc.userinfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OidcUserinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.userinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.userinfo.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1OidcUserinfoQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OidcUserinfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ResizesMutationKey() {
  return ['v1', '/v1/resizes', 'POST'] as const
}

export function getPostV1ResizesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.resizes.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.resizes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ResizesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.resizes.$post>) {
      return parseResponse(client.v1.resizes.$post(args, options))
    },
  })
}

export function createPostV1Resizes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.resizes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.resizes.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ResizesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ResizesJobIdQueryKey(
  args: InferRequestType<(typeof client.v1.resizes)[':jobId']['$get']>,
) {
  return ['v1', '/v1/resizes/:jobId', args] as const
}

export function getV1ResizesJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.resizes)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.resizes)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.resizes)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ResizesJobIdQueryKey>
  >({
    queryKey: getV1ResizesJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.resizes[':jobId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ResizesJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.resizes)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.resizes)[':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.resizes)[':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ResizesJobIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ResizesJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1UsersMeQueryKey() {
  return ['v1', '/v1/users/me'] as const
}

export function getV1UsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1UsersMeQueryKey>
  >({
    queryKey: getV1UsersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1UsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1UsersMeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UsersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1UsersMeCapabilitiesQueryKey() {
  return ['v1', '/v1/users/me/capabilities'] as const
}

export function getV1UsersMeCapabilitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.capabilities.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.capabilities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersMeCapabilitiesQueryKey>
  >({
    queryKey: getV1UsersMeCapabilitiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users.me.capabilities.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UsersMeCapabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.capabilities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.capabilities.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1UsersMeCapabilitiesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UsersMeCapabilitiesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1UsersMeProfileQueryKey() {
  return ['v1', '/v1/users/me/profile'] as const
}

export function getV1UsersMeProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.profile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.profile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersMeProfileQueryKey>
  >({
    queryKey: getV1UsersMeProfileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users.me.profile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UsersMeProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.profile.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1UsersMeProfileQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UsersMeProfileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
