import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1DesignsDesignIdAnalyticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['$get']>
  >,
) {
  return ['v1', '/v1/designs/:designId/analytics', toValue(args)] as const
}

export function getV1DesignsDesignIdAnalyticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DesignsDesignIdAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.designs[':designId'].analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DesignsDesignIdAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DesignsDesignIdAnalyticsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DesignsDesignIdAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.designs[':designId'].analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DesignsDesignIdAnalyticsViewersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>
  >,
) {
  return ['v1', '/v1/designs/:designId/analytics/viewers', toValue(args)] as const
}

export function getV1DesignsDesignIdAnalyticsViewersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DesignsDesignIdAnalyticsViewersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.designs[':designId'].analytics.viewers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DesignsDesignIdAnalyticsViewers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1DesignsDesignIdAnalyticsViewersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DesignsDesignIdAnalyticsViewersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.designs[':designId'].analytics.viewers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DesignsDesignIdAnalyticsViewsOverTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.designs)[':designId']['analytics']['views-over-time']['$get']
    >
  >,
) {
  return ['v1', '/v1/designs/:designId/analytics/views-over-time', toValue(args)] as const
}

export function getV1DesignsDesignIdAnalyticsViewsOverTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.designs)[':designId']['analytics']['views-over-time']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DesignsDesignIdAnalyticsViewsOverTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.designs[':designId'].analytics['views-over-time'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DesignsDesignIdAnalyticsViewsOverTime<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.designs)[':designId']['analytics']['views-over-time']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1DesignsDesignIdAnalyticsViewsOverTimeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DesignsDesignIdAnalyticsViewsOverTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.designs[':designId'].analytics['views-over-time'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1DesignsDesignIdAnalyticsPageViews<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DesignsDesignIdAnalyticsPageViewsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1DesignsDesignIdAnalyticsLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>
  >,
) {
  return ['v1', '/v1/designs/:designId/analytics/links', toValue(args)] as const
}

export function getV1DesignsDesignIdAnalyticsLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DesignsDesignIdAnalyticsLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.designs[':designId'].analytics.links.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DesignsDesignIdAnalyticsLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1DesignsDesignIdAnalyticsLinksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DesignsDesignIdAnalyticsLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.designs[':designId'].analytics.links.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsAppIdJwksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':appId']['jwks']['$get']>>,
) {
  return ['v1', '/v1/apps/:appId/jwks', toValue(args)] as const
}

export function getV1AppsAppIdJwksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':appId']['jwks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsAppIdJwksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':appId'].jwks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsAppIdJwks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':appId']['jwks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':appId']['jwks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':appId']['jwks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':appId']['jwks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsAppIdJwksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':appId']['jwks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsAppIdJwksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsAppIdJwksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':appId'].jwks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AssetsAssetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.assets)[':assetId']['$get']>>,
) {
  return ['v1', '/v1/assets/:assetId', toValue(args)] as const
}

export function getV1AssetsAssetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.assets)[':assetId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AssetsAssetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.assets[':assetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AssetsAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.assets)[':assetId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AssetsAssetIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AssetsAssetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AssetsAssetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.assets[':assetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1AssetsAssetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AssetsAssetIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchV1AssetsAssetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1AssetsAssetIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV1AssetUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AssetUploadsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AssetUploadsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>>,
) {
  return ['v1', '/v1/asset-uploads/:jobId', toValue(args)] as const
}

export function getV1AssetUploadsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AssetUploadsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['asset-uploads'][':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AssetUploadsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AssetUploadsJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AssetUploadsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['asset-uploads'][':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1UrlAssetUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1UrlAssetUploadsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1UrlAssetUploadsJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>
  >,
) {
  return ['v1', '/v1/url-asset-uploads/:jobId', toValue(args)] as const
}

export function getV1UrlAssetUploadsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UrlAssetUploadsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['url-asset-uploads'][':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UrlAssetUploadsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1UrlAssetUploadsJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UrlAssetUploadsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['url-asset-uploads'][':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Autofills<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.autofills.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.autofills.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AutofillsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AutofillsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.autofills)[':jobId']['$get']>>,
) {
  return ['v1', '/v1/autofills/:jobId', toValue(args)] as const
}

export function getV1AutofillsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.autofills)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AutofillsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.autofills[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AutofillsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.autofills)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.autofills)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.autofills)[':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.autofills)[':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AutofillsJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.autofills)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AutofillsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AutofillsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.autofills[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BrandTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['brand-templates']['$get']>>,
) {
  return ['v1', '/v1/brand-templates', toValue(args)] as const
}

export function getV1BrandTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['brand-templates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BrandTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['brand-templates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BrandTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['brand-templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['brand-templates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['brand-templates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['brand-templates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BrandTemplatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['brand-templates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BrandTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BrandTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['brand-templates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1BrandTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BrandTemplatesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1BrandTemplatesBrandTemplateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>
  >,
) {
  return ['v1', '/v1/brand-templates/:brandTemplateId', toValue(args)] as const
}

export function getV1BrandTemplatesBrandTemplateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BrandTemplatesBrandTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['brand-templates'][':brandTemplateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BrandTemplatesBrandTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1BrandTemplatesBrandTemplateIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BrandTemplatesBrandTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['brand-templates'][':brandTemplateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BrandTemplatesBrandTemplateIdDatasetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['brand-templates'][':brandTemplateId']['dataset']['$get']>
  >,
) {
  return ['v1', '/v1/brand-templates/:brandTemplateId/dataset', toValue(args)] as const
}

export function getV1BrandTemplatesBrandTemplateIdDatasetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['brand-templates'][':brandTemplateId']['dataset']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BrandTemplatesBrandTemplateIdDatasetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['brand-templates'][':brandTemplateId'].dataset.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BrandTemplatesBrandTemplateIdDataset<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['brand-templates'][':brandTemplateId']['dataset']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1BrandTemplatesBrandTemplateIdDatasetQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BrandTemplatesBrandTemplateIdDatasetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['brand-templates'][':brandTemplateId'].dataset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Comments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.comments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.comments.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CommentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1DesignsDesignIdCommentsThreadIdRepliesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$get']
    >
  >,
) {
  return ['v1', '/v1/designs/:designId/comments/:threadId/replies', toValue(args)] as const
}

export function getV1DesignsDesignIdCommentsThreadIdRepliesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DesignsDesignIdCommentsThreadIdRepliesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.designs[':designId'].comments[':threadId'].replies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DesignsDesignIdCommentsThreadIdReplies<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1DesignsDesignIdCommentsThreadIdRepliesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DesignsDesignIdCommentsThreadIdRepliesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.designs[':designId'].comments[':threadId'].replies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1DesignsDesignIdCommentsThreadIdReplies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DesignsDesignIdCommentsThreadIdRepliesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1DesignsDesignIdCommentsThreadIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']>
  >,
) {
  return ['v1', '/v1/designs/:designId/comments/:threadId', toValue(args)] as const
}

export function getV1DesignsDesignIdCommentsThreadIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DesignsDesignIdCommentsThreadIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.designs[':designId'].comments[':threadId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DesignsDesignIdCommentsThreadId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1DesignsDesignIdCommentsThreadIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DesignsDesignIdCommentsThreadIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.designs[':designId'].comments[':threadId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies'][':replyId']['$get']
    >
  >,
) {
  return ['v1', '/v1/designs/:designId/comments/:threadId/replies/:replyId', toValue(args)] as const
}

export function getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies'][':replyId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.designs[':designId'].comments[':threadId'].replies[':replyId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1DesignsDesignIdCommentsThreadIdRepliesReplyId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies'][':replyId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.designs[':designId'].comments[':threadId'].replies[':replyId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1DesignsDesignIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DesignsDesignIdCommentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ConnectKeysQueryKey() {
  return ['v1', '/v1/connect/keys'] as const
}

export function getV1ConnectKeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ConnectKeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.connect.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1ConnectKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.keys.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.keys.$get>>>
            >
          >,
          ReturnType<typeof getV1ConnectKeysQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.keys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ConnectKeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.connect.keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DesignsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.designs.$get>>,
) {
  return ['v1', '/v1/designs', toValue(args)] as const
}

export function getV1DesignsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.designs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DesignsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.designs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Designs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.designs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.designs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.designs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.designs.$get>>>>
          >,
          ReturnType<typeof getV1DesignsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.designs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1DesignsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DesignsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.designs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Designs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.designs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.designs.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DesignsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1DesignsDesignIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.designs)[':designId']['$get']>>,
) {
  return ['v1', '/v1/designs/:designId', toValue(args)] as const
}

export function getV1DesignsDesignIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.designs)[':designId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DesignsDesignIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.designs[':designId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DesignsDesignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.designs)[':designId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.designs)[':designId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.designs)[':designId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.designs)[':designId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DesignsDesignIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.designs)[':designId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DesignsDesignIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DesignsDesignIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.designs[':designId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DesignsDesignIdPagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['pages']['$get']>
  >,
) {
  return ['v1', '/v1/designs/:designId/pages', toValue(args)] as const
}

export function getV1DesignsDesignIdPagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['pages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DesignsDesignIdPagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.designs[':designId'].pages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DesignsDesignIdPages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['pages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.designs)[':designId']['pages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.designs)[':designId']['pages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DesignsDesignIdPagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DesignsDesignIdPagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.designs[':designId'].pages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DesignsDesignIdExportFormatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>
  >,
) {
  return ['v1', '/v1/designs/:designId/export-formats', toValue(args)] as const
}

export function getV1DesignsDesignIdExportFormatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DesignsDesignIdExportFormatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.designs[':designId']['export-formats'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DesignsDesignIdExportFormats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1DesignsDesignIdExportFormatsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DesignsDesignIdExportFormatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.designs[':designId']['export-formats'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DesignsDesignIdDatasetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['dataset']['$get']>
  >,
) {
  return ['v1', '/v1/designs/:designId/dataset', toValue(args)] as const
}

export function getV1DesignsDesignIdDatasetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['dataset']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DesignsDesignIdDatasetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.designs[':designId'].dataset.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DesignsDesignIdDataset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.designs)[':designId']['dataset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.designs)[':designId']['dataset']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.designs)[':designId']['dataset']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.designs)[':designId']['dataset']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DesignsDesignIdDatasetQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DesignsDesignIdDatasetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.designs[':designId'].dataset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1PrintPartnerDesigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PrintPartnerDesignsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1PrintPartnerDesignsDesignIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>
  >,
) {
  return ['v1', '/v1/print-partner/designs/:designId', toValue(args)] as const
}

export function getV1PrintPartnerDesignsDesignIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrintPartnerDesignsDesignIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['print-partner'].designs[':designId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrintPartnerDesignsDesignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PrintPartnerDesignsDesignIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrintPartnerDesignsDesignIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['print-partner'].designs[':designId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Generations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.generations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.generations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1GenerationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1GenerationsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.generations)[':jobId']['$get']>>,
) {
  return ['v1', '/v1/generations/:jobId', toValue(args)] as const
}

export function getV1GenerationsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.generations)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1GenerationsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.generations[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1GenerationsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.generations)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.generations)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.generations)[':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.generations)[':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1GenerationsJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.generations)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GenerationsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1GenerationsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.generations[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Imports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.imports.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.imports.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ImportsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ImportsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.imports)[':jobId']['$get']>>,
) {
  return ['v1', '/v1/imports/:jobId', toValue(args)] as const
}

export function getV1ImportsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.imports)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ImportsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.imports[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ImportsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.imports)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.imports)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.imports)[':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.imports)[':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ImportsJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.imports)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ImportsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ImportsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.imports[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1UrlImports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['url-imports']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['url-imports']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1UrlImportsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1UrlImportsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['url-imports'][':jobId']['$get']>>,
) {
  return ['v1', '/v1/url-imports/:jobId', toValue(args)] as const
}

export function getV1UrlImportsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['url-imports'][':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UrlImportsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['url-imports'][':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UrlImportsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['url-imports'][':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['url-imports'][':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['url-imports'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['url-imports'][':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1UrlImportsJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UrlImportsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['url-imports'][':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1ImageToDesignImports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ImageToDesignImportsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ImageToDesignImportsJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>
  >,
) {
  return ['v1', '/v1/image-to-design-imports/:jobId', toValue(args)] as const
}

export function getV1ImageToDesignImportsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ImageToDesignImportsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['image-to-design-imports'][':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ImageToDesignImportsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ImageToDesignImportsJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ImageToDesignImportsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['image-to-design-imports'][':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Exports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.exports.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.exports.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ExportsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV1PrintPartnerExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PrintPartnerExportsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ExportsExportIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.exports)[':exportId']['$get']>>,
) {
  return ['v1', '/v1/exports/:exportId', toValue(args)] as const
}

export function getV1ExportsExportIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.exports)[':exportId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ExportsExportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.exports[':exportId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ExportsExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.exports)[':exportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.exports)[':exportId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.exports)[':exportId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.exports)[':exportId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ExportsExportIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.exports)[':exportId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ExportsExportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ExportsExportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.exports[':exportId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FoldersFolderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.folders)[':folderId']['$get']>>,
) {
  return ['v1', '/v1/folders/:folderId', toValue(args)] as const
}

export function getV1FoldersFolderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.folders)[':folderId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FoldersFolderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.folders[':folderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FoldersFolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.folders)[':folderId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FoldersFolderIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FoldersFolderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FoldersFolderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.folders[':folderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1FoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1FoldersFolderIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchV1FoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1FoldersFolderIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1FoldersFolderIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.folders)[':folderId']['items']['$get']>
  >,
) {
  return ['v1', '/v1/folders/:folderId/items', toValue(args)] as const
}

export function getV1FoldersFolderIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.folders)[':folderId']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FoldersFolderIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.folders[':folderId'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FoldersFolderIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.folders)[':folderId']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FoldersFolderIdItemsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FoldersFolderIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.folders[':folderId'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1FoldersMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.move.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.folders.move.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1FoldersMoveMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV1Folders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.folders.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1FoldersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV1ImageGenerations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ImageGenerationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ImageGenerationsJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['image-generations'][':jobId']['$get']>
  >,
) {
  return ['v1', '/v1/image-generations/:jobId', toValue(args)] as const
}

export function getV1ImageGenerationsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['image-generations'][':jobId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ImageGenerationsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['image-generations'][':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ImageGenerationsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['image-generations'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['image-generations'][':jobId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['image-generations'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['image-generations'][':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ImageGenerationsJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ImageGenerationsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['image-generations'][':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1ImageTransformations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ImageTransformationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ImageTransformationsJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['image-transformations'][':jobId']['$get']>
  >,
) {
  return ['v1', '/v1/image-transformations/:jobId', toValue(args)] as const
}

export function getV1ImageTransformationsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['image-transformations'][':jobId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ImageTransformationsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['image-transformations'][':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ImageTransformationsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['image-transformations'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['image-transformations'][':jobId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['image-transformations'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['image-transformations'][':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ImageTransformationsJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ImageTransformationsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['image-transformations'][':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Merges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.merges.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.merges.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1MergesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1MergesJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.merges)[':jobId']['$get']>>,
) {
  return ['v1', '/v1/merges/:jobId', toValue(args)] as const
}

export function getV1MergesJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.merges)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MergesJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.merges[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MergesJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.merges)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.merges)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.merges)[':jobId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.merges)[':jobId']['$get']>>>
            >
          >,
          ReturnType<typeof getV1MergesJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.merges)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MergesJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MergesJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.merges[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1OauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.oauth.token.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OauthTokenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV1OauthIntrospect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.introspect.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.oauth.introspect.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OauthIntrospectMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV1OauthRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.revoke.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.oauth.revoke.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OauthRevokeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1OidcJwksQueryKey() {
  return ['v1', '/v1/oidc/jwks'] as const
}

export function getV1OidcJwksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1OidcJwksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.oidc.jwks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OidcJwks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.jwks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.jwks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.jwks.$get>>>>
          >,
          ReturnType<typeof getV1OidcJwksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.jwks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1OidcJwksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1OidcJwksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.oidc.jwks.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OidcUserinfoQueryKey() {
  return ['v1', '/v1/oidc/userinfo'] as const
}

export function getV1OidcUserinfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1OidcUserinfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.oidc.userinfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OidcUserinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.userinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.userinfo.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.userinfo.$get>>>
            >
          >,
          ReturnType<typeof getV1OidcUserinfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.userinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OidcUserinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1OidcUserinfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.oidc.userinfo.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Resizes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.resizes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.resizes.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ResizesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ResizesJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.resizes)[':jobId']['$get']>>,
) {
  return ['v1', '/v1/resizes/:jobId', toValue(args)] as const
}

export function getV1ResizesJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.resizes)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ResizesJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.resizes[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ResizesJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.resizes)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.resizes)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.resizes)[':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.resizes)[':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ResizesJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.resizes)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ResizesJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ResizesJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.resizes[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersMeQueryKey() {
  return ['v1', '/v1/users/me'] as const
}

export function getV1UsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1UsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1UsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>
          >,
          ReturnType<typeof getV1UsersMeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1UsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1UsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersMeCapabilitiesQueryKey() {
  return ['v1', '/v1/users/me/capabilities'] as const
}

export function getV1UsersMeCapabilitiesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1UsersMeCapabilitiesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users.me.capabilities.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersMeCapabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.capabilities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.capabilities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.capabilities.$get>>>
            >
          >,
          ReturnType<typeof getV1UsersMeCapabilitiesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.capabilities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersMeCapabilitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1UsersMeCapabilitiesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users.me.capabilities.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersMeProfileQueryKey() {
  return ['v1', '/v1/users/me/profile'] as const
}

export function getV1UsersMeProfileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1UsersMeProfileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users.me.profile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersMeProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.profile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.profile.$get>>>
            >
          >,
          ReturnType<typeof getV1UsersMeProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.profile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersMeProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1UsersMeProfileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users.me.profile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
