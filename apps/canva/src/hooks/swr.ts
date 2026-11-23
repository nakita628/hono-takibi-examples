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

export function getGetV1DesignsDesignIdAnalyticsKey(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['$get']>,
) {
  return ['v1', '/v1/designs/:designId/analytics', args] as const
}

export function useGetV1DesignsDesignIdAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DesignsDesignIdAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.designs[':designId'].analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DesignsDesignIdAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DesignsDesignIdAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.designs)[':designId']['analytics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.designs[':designId'].analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DesignsDesignIdAnalyticsViewersKey(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>,
) {
  return ['v1', '/v1/designs/:designId/analytics/viewers', args] as const
}

export function useGetV1DesignsDesignIdAnalyticsViewers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>
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
        ? getGetV1DesignsDesignIdAnalyticsViewersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.designs[':designId'].analytics.viewers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DesignsDesignIdAnalyticsViewers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>
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
        ? getGetV1DesignsDesignIdAnalyticsViewersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.designs)[':designId']['analytics']['viewers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.designs[':designId'].analytics.viewers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DesignsDesignIdAnalyticsViewsOverTimeKey(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['analytics']['views-over-time']['$get']
  >,
) {
  return ['v1', '/v1/designs/:designId/analytics/views-over-time', args] as const
}

export function useGetV1DesignsDesignIdAnalyticsViewsOverTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['analytics']['views-over-time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DesignsDesignIdAnalyticsViewsOverTimeKey(args)
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
                (typeof client.v1.designs)[':designId']['analytics']['views-over-time']['$get']
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
          client.v1.designs[':designId'].analytics['views-over-time'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DesignsDesignIdAnalyticsViewsOverTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['analytics']['views-over-time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DesignsDesignIdAnalyticsViewsOverTimeKey(args)
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
                (typeof client.v1.designs)[':designId']['analytics']['views-over-time']['$get']
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
          client.v1.designs[':designId'].analytics['views-over-time'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1DesignsDesignIdAnalyticsPageViewsKey() {
  return ['v1', '/v1/designs/:designId/analytics/page-views', 'POST'] as const
}

export function usePostV1DesignsDesignIdAnalyticsPageViews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['page-views']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DesignsDesignIdAnalyticsPageViewsKey()
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
            (typeof client.v1.designs)[':designId']['analytics']['page-views']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.designs[':designId'].analytics['page-views'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1DesignsDesignIdAnalyticsLinksKey(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>,
) {
  return ['v1', '/v1/designs/:designId/analytics/links', args] as const
}

export function useGetV1DesignsDesignIdAnalyticsLinks<TError = unknown>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>
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
        ? getGetV1DesignsDesignIdAnalyticsLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.designs[':designId'].analytics.links.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DesignsDesignIdAnalyticsLinks<TError = unknown>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>
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
        ? getGetV1DesignsDesignIdAnalyticsLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.designs)[':designId']['analytics']['links']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.designs[':designId'].analytics.links.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsAppIdJwksKey(
  args: InferRequestType<(typeof client.v1.apps)[':appId']['jwks']['$get']>,
) {
  return ['v1', '/v1/apps/:appId/jwks', args] as const
}

export function useGetV1AppsAppIdJwks<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':appId']['jwks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':appId']['jwks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AppsAppIdJwksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':appId']['jwks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':appId'].jwks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsAppIdJwks<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':appId']['jwks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':appId']['jwks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AppsAppIdJwksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':appId']['jwks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':appId'].jwks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AssetsAssetIdKey(
  args: InferRequestType<(typeof client.v1.assets)[':assetId']['$get']>,
) {
  return ['v1', '/v1/assets/:assetId', args] as const
}

export function useGetV1AssetsAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.assets)[':assetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AssetsAssetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.assets[':assetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AssetsAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.assets)[':assetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AssetsAssetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.assets[':assetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AssetsAssetIdKey() {
  return ['v1', '/v1/assets/:assetId', 'DELETE'] as const
}

export function useDeleteV1AssetsAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.assets)[':assetId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AssetsAssetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.assets)[':assetId']['$delete']> },
      ) => parseResponse(client.v1.assets[':assetId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AssetsAssetIdKey() {
  return ['v1', '/v1/assets/:assetId', 'PATCH'] as const
}

export function usePatchV1AssetsAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.assets)[':assetId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.assets)[':assetId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AssetsAssetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.assets)[':assetId']['$patch']> },
      ) => parseResponse(client.v1.assets[':assetId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AssetUploadsKey() {
  return ['v1', '/v1/asset-uploads', 'POST'] as const
}

export function usePostV1AssetUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['asset-uploads']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['asset-uploads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AssetUploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['asset-uploads']['$post']> },
      ) => parseResponse(client.v1['asset-uploads'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AssetUploadsJobIdKey(
  args: InferRequestType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>,
) {
  return ['v1', '/v1/asset-uploads/:jobId', args] as const
}

export function useGetV1AssetUploadsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AssetUploadsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['asset-uploads'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AssetUploadsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AssetUploadsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['asset-uploads'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['asset-uploads'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1UrlAssetUploadsKey() {
  return ['v1', '/v1/url-asset-uploads', 'POST'] as const
}

export function usePostV1UrlAssetUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['url-asset-uploads']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['url-asset-uploads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UrlAssetUploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['url-asset-uploads']['$post']> },
      ) => parseResponse(client.v1['url-asset-uploads'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UrlAssetUploadsJobIdKey(
  args: InferRequestType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>,
) {
  return ['v1', '/v1/url-asset-uploads/:jobId', args] as const
}

export function useGetV1UrlAssetUploadsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UrlAssetUploadsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['url-asset-uploads'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UrlAssetUploadsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UrlAssetUploadsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['url-asset-uploads'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['url-asset-uploads'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AutofillsKey() {
  return ['v1', '/v1/autofills', 'POST'] as const
}

export function usePostV1Autofills<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.autofills.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.autofills.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AutofillsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.autofills.$post> }) =>
        parseResponse(client.v1.autofills.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AutofillsJobIdKey(
  args: InferRequestType<(typeof client.v1.autofills)[':jobId']['$get']>,
) {
  return ['v1', '/v1/autofills/:jobId', args] as const
}

export function useGetV1AutofillsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.autofills)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.autofills)[':jobId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AutofillsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.autofills)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.autofills[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AutofillsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.autofills)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.autofills)[':jobId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AutofillsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.autofills)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.autofills[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BrandTemplatesKey(
  args: InferRequestType<(typeof client.v1)['brand-templates']['$get']>,
) {
  return ['v1', '/v1/brand-templates', args] as const
}

export function useGetV1BrandTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['brand-templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['brand-templates']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BrandTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['brand-templates']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['brand-templates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BrandTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['brand-templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['brand-templates']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BrandTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['brand-templates']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['brand-templates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BrandTemplatesKey() {
  return ['v1', '/v1/brand-templates', 'POST'] as const
}

export function usePostV1BrandTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['brand-templates']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['brand-templates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BrandTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['brand-templates']['$post']> },
      ) => parseResponse(client.v1['brand-templates'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BrandTemplatesBrandTemplateIdKey(
  args: InferRequestType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>,
) {
  return ['v1', '/v1/brand-templates/:brandTemplateId', args] as const
}

export function useGetV1BrandTemplatesBrandTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BrandTemplatesBrandTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['brand-templates'][':brandTemplateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BrandTemplatesBrandTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BrandTemplatesBrandTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['brand-templates'][':brandTemplateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['brand-templates'][':brandTemplateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BrandTemplatesBrandTemplateIdDatasetKey(
  args: InferRequestType<
    (typeof client.v1)['brand-templates'][':brandTemplateId']['dataset']['$get']
  >,
) {
  return ['v1', '/v1/brand-templates/:brandTemplateId/dataset', args] as const
}

export function useGetV1BrandTemplatesBrandTemplateIdDataset<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['brand-templates'][':brandTemplateId']['dataset']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BrandTemplatesBrandTemplateIdDatasetKey(args)
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
                (typeof client.v1)['brand-templates'][':brandTemplateId']['dataset']['$get']
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
          client.v1['brand-templates'][':brandTemplateId'].dataset.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BrandTemplatesBrandTemplateIdDataset<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['brand-templates'][':brandTemplateId']['dataset']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BrandTemplatesBrandTemplateIdDatasetKey(args)
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
                (typeof client.v1)['brand-templates'][':brandTemplateId']['dataset']['$get']
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
          client.v1['brand-templates'][':brandTemplateId'].dataset.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1CommentsKey() {
  return ['v1', '/v1/comments', 'POST'] as const
}

export function usePostV1Comments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.comments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.comments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.comments.$post> }) =>
        parseResponse(client.v1.comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DesignsDesignIdCommentsThreadIdRepliesKey(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$get']
  >,
) {
  return ['v1', '/v1/designs/:designId/comments/:threadId/replies', args] as const
}

export function useGetV1DesignsDesignIdCommentsThreadIdReplies<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DesignsDesignIdCommentsThreadIdRepliesKey(args)
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
                (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$get']
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
          client.v1.designs[':designId'].comments[':threadId'].replies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DesignsDesignIdCommentsThreadIdReplies<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DesignsDesignIdCommentsThreadIdRepliesKey(args)
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
                (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$get']
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
          client.v1.designs[':designId'].comments[':threadId'].replies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1DesignsDesignIdCommentsThreadIdRepliesKey() {
  return ['v1', '/v1/designs/:designId/comments/:threadId/replies', 'POST'] as const
}

export function usePostV1DesignsDesignIdCommentsThreadIdReplies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DesignsDesignIdCommentsThreadIdRepliesKey()
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
            (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.designs[':designId'].comments[':threadId'].replies.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1DesignsDesignIdCommentsThreadIdKey(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']>,
) {
  return ['v1', '/v1/designs/:designId/comments/:threadId', args] as const
}

export function useGetV1DesignsDesignIdCommentsThreadId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']>
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
        ? getGetV1DesignsDesignIdCommentsThreadIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.designs[':designId'].comments[':threadId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DesignsDesignIdCommentsThreadId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']>
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
        ? getGetV1DesignsDesignIdCommentsThreadIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.designs)[':designId']['comments'][':threadId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.designs[':designId'].comments[':threadId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1DesignsDesignIdCommentsThreadIdRepliesReplyIdKey(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies'][':replyId']['$get']
  >,
) {
  return ['v1', '/v1/designs/:designId/comments/:threadId/replies/:replyId', args] as const
}

export function useGetV1DesignsDesignIdCommentsThreadIdRepliesReplyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies'][':replyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DesignsDesignIdCommentsThreadIdRepliesReplyIdKey(args)
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
                (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies'][':replyId']['$get']
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
          client.v1.designs[':designId'].comments[':threadId'].replies[':replyId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DesignsDesignIdCommentsThreadIdRepliesReplyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies'][':replyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DesignsDesignIdCommentsThreadIdRepliesReplyIdKey(args)
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
                (typeof client.v1.designs)[':designId']['comments'][':threadId']['replies'][':replyId']['$get']
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
          client.v1.designs[':designId'].comments[':threadId'].replies[':replyId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1DesignsDesignIdCommentsKey() {
  return ['v1', '/v1/designs/:designId/comments', 'POST'] as const
}

export function usePostV1DesignsDesignIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.designs)[':designId']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.designs)[':designId']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DesignsDesignIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.designs)[':designId']['comments']['$post']> },
      ) => parseResponse(client.v1.designs[':designId'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConnectKeysKey() {
  return ['v1', '/v1/connect/keys'] as const
}

export function useGetV1ConnectKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.keys.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ConnectKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.connect.keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConnectKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.keys.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ConnectKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.connect.keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DesignsKey(args: InferRequestType<typeof client.v1.designs.$get>) {
  return ['v1', '/v1/designs', args] as const
}

export function useGetV1Designs<TError = unknown>(
  args: InferRequestType<typeof client.v1.designs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.designs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DesignsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.designs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.designs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Designs<TError = unknown>(
  args: InferRequestType<typeof client.v1.designs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.designs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DesignsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.designs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.designs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DesignsKey() {
  return ['v1', '/v1/designs', 'POST'] as const
}

export function usePostV1Designs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.designs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.designs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DesignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.designs.$post> }) =>
        parseResponse(client.v1.designs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DesignsDesignIdKey(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['$get']>,
) {
  return ['v1', '/v1/designs/:designId', args] as const
}

export function useGetV1DesignsDesignId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.designs)[':designId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DesignsDesignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.designs)[':designId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.designs[':designId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DesignsDesignId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.designs)[':designId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DesignsDesignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.designs)[':designId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.designs[':designId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DesignsDesignIdPagesKey(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['pages']['$get']>,
) {
  return ['v1', '/v1/designs/:designId/pages', args] as const
}

export function useGetV1DesignsDesignIdPages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['pages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.designs)[':designId']['pages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DesignsDesignIdPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.designs)[':designId']['pages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.designs[':designId'].pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DesignsDesignIdPages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['pages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.designs)[':designId']['pages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DesignsDesignIdPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.designs)[':designId']['pages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.designs[':designId'].pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DesignsDesignIdExportFormatsKey(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>,
) {
  return ['v1', '/v1/designs/:designId/export-formats', args] as const
}

export function useGetV1DesignsDesignIdExportFormats<TError = unknown>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DesignsDesignIdExportFormatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.designs[':designId']['export-formats'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DesignsDesignIdExportFormats<TError = unknown>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DesignsDesignIdExportFormatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.designs)[':designId']['export-formats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.designs[':designId']['export-formats'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DesignsDesignIdDatasetKey(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['dataset']['$get']>,
) {
  return ['v1', '/v1/designs/:designId/dataset', args] as const
}

export function useGetV1DesignsDesignIdDataset<TError = unknown>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['dataset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.designs)[':designId']['dataset']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DesignsDesignIdDatasetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.designs)[':designId']['dataset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.designs[':designId'].dataset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DesignsDesignIdDataset<TError = unknown>(
  args: InferRequestType<(typeof client.v1.designs)[':designId']['dataset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.designs)[':designId']['dataset']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DesignsDesignIdDatasetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.designs)[':designId']['dataset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.designs[':designId'].dataset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrintPartnerDesignsKey() {
  return ['v1', '/v1/print-partner/designs', 'POST'] as const
}

export function usePostV1PrintPartnerDesigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['print-partner']['designs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['print-partner']['designs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrintPartnerDesignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['print-partner']['designs']['$post']> },
      ) => parseResponse(client.v1['print-partner'].designs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrintPartnerDesignsDesignIdKey(
  args: InferRequestType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>,
) {
  return ['v1', '/v1/print-partner/designs/:designId', args] as const
}

export function useGetV1PrintPartnerDesignsDesignId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrintPartnerDesignsDesignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['print-partner'].designs[':designId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrintPartnerDesignsDesignId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrintPartnerDesignsDesignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['print-partner']['designs'][':designId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['print-partner'].designs[':designId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1GenerationsKey() {
  return ['v1', '/v1/generations', 'POST'] as const
}

export function usePostV1Generations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.generations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.generations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GenerationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.generations.$post> }) =>
        parseResponse(client.v1.generations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1GenerationsJobIdKey(
  args: InferRequestType<(typeof client.v1.generations)[':jobId']['$get']>,
) {
  return ['v1', '/v1/generations/:jobId', args] as const
}

export function useGetV1GenerationsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.generations)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.generations)[':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GenerationsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.generations)[':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.generations[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GenerationsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.generations)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.generations)[':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1GenerationsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.generations)[':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.generations[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ImportsKey() {
  return ['v1', '/v1/imports', 'POST'] as const
}

export function usePostV1Imports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.imports.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.imports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ImportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.imports.$post> }) =>
        parseResponse(client.v1.imports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ImportsJobIdKey(
  args: InferRequestType<(typeof client.v1.imports)[':jobId']['$get']>,
) {
  return ['v1', '/v1/imports/:jobId', args] as const
}

export function useGetV1ImportsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.imports)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.imports)[':jobId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ImportsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.imports)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.imports[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ImportsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.imports)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.imports)[':jobId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ImportsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.imports)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.imports[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1UrlImportsKey() {
  return ['v1', '/v1/url-imports', 'POST'] as const
}

export function usePostV1UrlImports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['url-imports']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['url-imports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UrlImportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['url-imports']['$post']> },
      ) => parseResponse(client.v1['url-imports'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UrlImportsJobIdKey(
  args: InferRequestType<(typeof client.v1)['url-imports'][':jobId']['$get']>,
) {
  return ['v1', '/v1/url-imports/:jobId', args] as const
}

export function useGetV1UrlImportsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['url-imports'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['url-imports'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UrlImportsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['url-imports'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['url-imports'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UrlImportsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['url-imports'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['url-imports'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UrlImportsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['url-imports'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['url-imports'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ImageToDesignImportsKey() {
  return ['v1', '/v1/image-to-design-imports', 'POST'] as const
}

export function usePostV1ImageToDesignImports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['image-to-design-imports']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['image-to-design-imports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ImageToDesignImportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['image-to-design-imports']['$post']> },
      ) => parseResponse(client.v1['image-to-design-imports'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ImageToDesignImportsJobIdKey(
  args: InferRequestType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>,
) {
  return ['v1', '/v1/image-to-design-imports/:jobId', args] as const
}

export function useGetV1ImageToDesignImportsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ImageToDesignImportsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['image-to-design-imports'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ImageToDesignImportsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ImageToDesignImportsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['image-to-design-imports'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['image-to-design-imports'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ExportsKey() {
  return ['v1', '/v1/exports', 'POST'] as const
}

export function usePostV1Exports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.exports.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.exports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.exports.$post> }) =>
        parseResponse(client.v1.exports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrintPartnerExportsKey() {
  return ['v1', '/v1/print-partner/exports', 'POST'] as const
}

export function usePostV1PrintPartnerExports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['print-partner']['exports']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['print-partner']['exports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrintPartnerExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['print-partner']['exports']['$post']> },
      ) => parseResponse(client.v1['print-partner'].exports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ExportsExportIdKey(
  args: InferRequestType<(typeof client.v1.exports)[':exportId']['$get']>,
) {
  return ['v1', '/v1/exports/:exportId', args] as const
}

export function useGetV1ExportsExportId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.exports)[':exportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.exports)[':exportId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ExportsExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.exports)[':exportId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.exports[':exportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExportsExportId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.exports)[':exportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.exports)[':exportId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ExportsExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.exports)[':exportId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.exports[':exportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FoldersFolderIdKey(
  args: InferRequestType<(typeof client.v1.folders)[':folderId']['$get']>,
) {
  return ['v1', '/v1/folders/:folderId', args] as const
}

export function useGetV1FoldersFolderId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.folders)[':folderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FoldersFolderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.folders[':folderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FoldersFolderId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.folders)[':folderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FoldersFolderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.folders[':folderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1FoldersFolderIdKey() {
  return ['v1', '/v1/folders/:folderId', 'DELETE'] as const
}

export function useDeleteV1FoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.folders)[':folderId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.folders)[':folderId']['$delete']> },
      ) => parseResponse(client.v1.folders[':folderId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1FoldersFolderIdKey() {
  return ['v1', '/v1/folders/:folderId', 'PATCH'] as const
}

export function usePatchV1FoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.folders)[':folderId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1FoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.folders)[':folderId']['$patch']> },
      ) => parseResponse(client.v1.folders[':folderId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FoldersFolderIdItemsKey(
  args: InferRequestType<(typeof client.v1.folders)[':folderId']['items']['$get']>,
) {
  return ['v1', '/v1/folders/:folderId/items', args] as const
}

export function useGetV1FoldersFolderIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1.folders)[':folderId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FoldersFolderIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.folders[':folderId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FoldersFolderIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1.folders)[':folderId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FoldersFolderIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.folders)[':folderId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.folders[':folderId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FoldersMoveKey() {
  return ['v1', '/v1/folders/move', 'POST'] as const
}

export function usePostV1FoldersMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.move.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.folders.move.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FoldersMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.folders.move.$post> }) =>
        parseResponse(client.v1.folders.move.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1FoldersKey() {
  return ['v1', '/v1/folders', 'POST'] as const
}

export function usePostV1Folders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.folders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.folders.$post> }) =>
        parseResponse(client.v1.folders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ImageGenerationsKey() {
  return ['v1', '/v1/image-generations', 'POST'] as const
}

export function usePostV1ImageGenerations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['image-generations']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['image-generations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ImageGenerationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['image-generations']['$post']> },
      ) => parseResponse(client.v1['image-generations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ImageGenerationsJobIdKey(
  args: InferRequestType<(typeof client.v1)['image-generations'][':jobId']['$get']>,
) {
  return ['v1', '/v1/image-generations/:jobId', args] as const
}

export function useGetV1ImageGenerationsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['image-generations'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['image-generations'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ImageGenerationsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['image-generations'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['image-generations'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ImageGenerationsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['image-generations'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['image-generations'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ImageGenerationsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['image-generations'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['image-generations'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ImageTransformationsKey() {
  return ['v1', '/v1/image-transformations', 'POST'] as const
}

export function usePostV1ImageTransformations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['image-transformations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['image-transformations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ImageTransformationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['image-transformations']['$post']> },
      ) => parseResponse(client.v1['image-transformations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ImageTransformationsJobIdKey(
  args: InferRequestType<(typeof client.v1)['image-transformations'][':jobId']['$get']>,
) {
  return ['v1', '/v1/image-transformations/:jobId', args] as const
}

export function useGetV1ImageTransformationsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['image-transformations'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['image-transformations'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ImageTransformationsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['image-transformations'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['image-transformations'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ImageTransformationsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['image-transformations'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['image-transformations'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ImageTransformationsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['image-transformations'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['image-transformations'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1MergesKey() {
  return ['v1', '/v1/merges', 'POST'] as const
}

export function usePostV1Merges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.merges.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.merges.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MergesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.merges.$post> }) =>
        parseResponse(client.v1.merges.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MergesJobIdKey(
  args: InferRequestType<(typeof client.v1.merges)[':jobId']['$get']>,
) {
  return ['v1', '/v1/merges/:jobId', args] as const
}

export function useGetV1MergesJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.merges)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.merges)[':jobId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MergesJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.merges)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.merges[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MergesJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.merges)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.merges)[':jobId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MergesJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.merges)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.merges[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OauthTokenKey() {
  return ['v1', '/v1/oauth/token', 'POST'] as const
}

export function usePostV1OauthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.oauth.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OauthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.oauth.token.$post> }) =>
        parseResponse(client.v1.oauth.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OauthIntrospectKey() {
  return ['v1', '/v1/oauth/introspect', 'POST'] as const
}

export function usePostV1OauthIntrospect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.introspect.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.oauth.introspect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OauthIntrospectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.oauth.introspect.$post> }) =>
        parseResponse(client.v1.oauth.introspect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OauthRevokeKey() {
  return ['v1', '/v1/oauth/revoke', 'POST'] as const
}

export function usePostV1OauthRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.revoke.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.oauth.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OauthRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.oauth.revoke.$post> }) =>
        parseResponse(client.v1.oauth.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OidcJwksKey() {
  return ['v1', '/v1/oidc/jwks'] as const
}

export function useGetV1OidcJwks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.jwks.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OidcJwksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.jwks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.oidc.jwks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OidcJwks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.jwks.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OidcJwksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.jwks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.oidc.jwks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OidcUserinfoKey() {
  return ['v1', '/v1/oidc/userinfo'] as const
}

export function useGetV1OidcUserinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.userinfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OidcUserinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.userinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.oidc.userinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OidcUserinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.userinfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OidcUserinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oidc.userinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.oidc.userinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ResizesKey() {
  return ['v1', '/v1/resizes', 'POST'] as const
}

export function usePostV1Resizes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.resizes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.resizes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ResizesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.resizes.$post> }) =>
        parseResponse(client.v1.resizes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ResizesJobIdKey(
  args: InferRequestType<(typeof client.v1.resizes)[':jobId']['$get']>,
) {
  return ['v1', '/v1/resizes/:jobId', args] as const
}

export function useGetV1ResizesJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.resizes)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.resizes)[':jobId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ResizesJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.resizes)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.resizes[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ResizesJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.resizes)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.resizes)[':jobId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ResizesJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.resizes)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.resizes[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UsersMeKey() {
  return ['v1', '/v1/users/me'] as const
}

export function useGetV1UsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UsersMeCapabilitiesKey() {
  return ['v1', '/v1/users/me/capabilities'] as const
}

export function useGetV1UsersMeCapabilities<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.capabilities.$get>>>
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
        ? getGetV1UsersMeCapabilitiesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.capabilities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users.me.capabilities.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersMeCapabilities<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.capabilities.$get>>>
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
        ? getGetV1UsersMeCapabilitiesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.capabilities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users.me.capabilities.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UsersMeProfileKey() {
  return ['v1', '/v1/users/me/profile'] as const
}

export function useGetV1UsersMeProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.profile.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsersMeProfileKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.profile.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users.me.profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersMeProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.profile.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsersMeProfileKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.profile.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users.me.profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
