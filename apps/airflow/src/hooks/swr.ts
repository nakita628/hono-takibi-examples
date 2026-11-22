import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiV2AssetsKey(args: InferRequestType<typeof client.api.v2.assets.$get>) {
  return ['api', '/api/v2/assets', args] as const
}

export function useGetApiV2Assets<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2AssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Assets<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2AssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AssetsAliasesKey(
  args: InferRequestType<typeof client.api.v2.assets.aliases.$get>,
) {
  return ['api', '/api/v2/assets/aliases', args] as const
}

export function useGetApiV2AssetsAliases<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.assets.aliases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.aliases.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AssetsAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.aliases.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.assets.aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AssetsAliases<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.assets.aliases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.aliases.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AssetsAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.aliases.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.assets.aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AssetsAliasesAssetAliasIdKey(
  args: InferRequestType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>,
) {
  return ['api', '/api/v2/assets/aliases/:asset_alias_id', args] as const
}

export function useGetApiV2AssetsAliasesAssetAliasId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AssetsAliasesAssetAliasIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.assets.aliases[':asset_alias_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AssetsAliasesAssetAliasId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AssetsAliasesAssetAliasIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.assets.aliases[':asset_alias_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AssetsEventsKey(
  args: InferRequestType<typeof client.api.v2.assets.events.$get>,
) {
  return ['api', '/api/v2/assets/events', args] as const
}

export function useGetApiV2AssetsEvents<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.assets.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AssetsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.assets.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AssetsEvents<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.assets.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AssetsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.assets.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2AssetsEventsKey() {
  return ['api', '/api/v2/assets/events', 'POST'] as const
}

export function usePostApiV2AssetsEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.assets.events.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.assets.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AssetsEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.assets.events.$post> },
      ) => parseResponse(client.api.v2.assets.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2AssetsAssetIdMaterializeKey() {
  return ['api', '/api/v2/assets/:asset_id/materialize', 'POST'] as const
}

export function usePostApiV2AssetsAssetIdMaterialize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['materialize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['materialize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2AssetsAssetIdMaterializeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['materialize']['$post']>
        },
      ) => parseResponse(client.api.v2.assets[':asset_id'].materialize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AssetsAssetIdQueuedEventsKey(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>,
) {
  return ['api', '/api/v2/assets/:asset_id/queuedEvents', args] as const
}

export function useGetApiV2AssetsAssetIdQueuedEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AssetsAssetIdQueuedEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.assets[':asset_id'].queuedEvents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AssetsAssetIdQueuedEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AssetsAssetIdQueuedEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.assets[':asset_id'].queuedEvents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2AssetsAssetIdQueuedEventsKey() {
  return ['api', '/api/v2/assets/:asset_id/queuedEvents', 'DELETE'] as const
}

export function useDeleteApiV2AssetsAssetIdQueuedEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2AssetsAssetIdQueuedEventsKey()
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
            (typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$delete']
          >
        },
      ) =>
        parseResponse(client.api.v2.assets[':asset_id'].queuedEvents.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AssetsAssetIdKey(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['$get']>,
) {
  return ['api', '/api/v2/assets/:asset_id', args] as const
}

export function useGetApiV2AssetsAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AssetsAssetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.assets[':asset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AssetsAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AssetsAssetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.assets[':asset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdAssetsQueuedEventsKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id/assets/queuedEvents', args] as const
}

export function useGetApiV2DagsDagIdAssetsQueuedEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>
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
        ? getGetApiV2DagsDagIdAssetsQueuedEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.dags[':dag_id'].assets.queuedEvents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdAssetsQueuedEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>
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
        ? getGetApiV2DagsDagIdAssetsQueuedEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.dags[':dag_id'].assets.queuedEvents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2DagsDagIdAssetsQueuedEventsKey() {
  return ['api', '/api/v2/dags/:dag_id/assets/queuedEvents', 'DELETE'] as const
}

export function useDeleteApiV2DagsDagIdAssetsQueuedEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2DagsDagIdAssetsQueuedEventsKey()
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
            (typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].assets.queuedEvents.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdAssetsAssetIdQueuedEventsKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/assets/:asset_id/queuedEvents', args] as const
}

export function useGetApiV2DagsDagIdAssetsAssetIdQueuedEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
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
        ? getGetApiV2DagsDagIdAssetsAssetIdQueuedEventsKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
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
          client.api.v2.dags[':dag_id'].assets[':asset_id'].queuedEvents.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdAssetsAssetIdQueuedEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
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
        ? getGetApiV2DagsDagIdAssetsAssetIdQueuedEventsKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
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
          client.api.v2.dags[':dag_id'].assets[':asset_id'].queuedEvents.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2DagsDagIdAssetsAssetIdQueuedEventsKey() {
  return ['api', '/api/v2/dags/:dag_id/assets/:asset_id/queuedEvents', 'DELETE'] as const
}

export function useDeleteApiV2DagsDagIdAssetsAssetIdQueuedEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2DagsDagIdAssetsAssetIdQueuedEventsKey()
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
            (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].assets[':asset_id'].queuedEvents.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2BackfillsKey(
  args: InferRequestType<typeof client.api.v2.backfills.$get>,
) {
  return ['api', '/api/v2/backfills', args] as const
}

export function useGetApiV2Backfills<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.backfills.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2BackfillsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.backfills.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Backfills<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.backfills.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2BackfillsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.backfills.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2BackfillsKey() {
  return ['api', '/api/v2/backfills', 'POST'] as const
}

export function usePostApiV2Backfills<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.backfills.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2BackfillsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.backfills.$post> }) =>
        parseResponse(client.api.v2.backfills.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2BackfillsBackfillIdKey(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>,
) {
  return ['api', '/api/v2/backfills/:backfill_id', args] as const
}

export function useGetApiV2BackfillsBackfillId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2BackfillsBackfillIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.backfills[':backfill_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2BackfillsBackfillId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2BackfillsBackfillIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.backfills[':backfill_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2BackfillsBackfillIdDagRunsKey(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>,
) {
  return ['api', '/api/v2/backfills/:backfill_id/dag_runs', args] as const
}

export function useGetApiV2BackfillsBackfillIdDagRuns<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>
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
        ? getGetApiV2BackfillsBackfillIdDagRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.backfills[':backfill_id'].dag_runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2BackfillsBackfillIdDagRuns<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>
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
        ? getGetApiV2BackfillsBackfillIdDagRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.backfills[':backfill_id'].dag_runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2BackfillsBackfillIdPauseKey() {
  return ['api', '/api/v2/backfills/:backfill_id/pause', 'PUT'] as const
}

export function usePutApiV2BackfillsBackfillIdPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['pause']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['pause']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2BackfillsBackfillIdPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['pause']['$put']>
        },
      ) => parseResponse(client.api.v2.backfills[':backfill_id'].pause.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2BackfillsBackfillIdUnpauseKey() {
  return ['api', '/api/v2/backfills/:backfill_id/unpause', 'PUT'] as const
}

export function usePutApiV2BackfillsBackfillIdUnpause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['unpause']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['unpause']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2BackfillsBackfillIdUnpauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['unpause']['$put']>
        },
      ) => parseResponse(client.api.v2.backfills[':backfill_id'].unpause.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV2BackfillsBackfillIdCancelKey() {
  return ['api', '/api/v2/backfills/:backfill_id/cancel', 'PUT'] as const
}

export function usePutApiV2BackfillsBackfillIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.backfills)[':backfill_id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2BackfillsBackfillIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['cancel']['$put']>
        },
      ) => parseResponse(client.api.v2.backfills[':backfill_id'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2BackfillsDryRunKey() {
  return ['api', '/api/v2/backfills/dry_run', 'POST'] as const
}

export function usePostApiV2BackfillsDryRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.backfills.dry_run.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.backfills.dry_run.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2BackfillsDryRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.backfills.dry_run.$post> },
      ) => parseResponse(client.api.v2.backfills.dry_run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ConnectionsConnectionIdKey(
  args: InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$get']>,
) {
  return ['api', '/api/v2/connections/:connection_id', args] as const
}

export function useGetApiV2ConnectionsConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2ConnectionsConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.connections[':connection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ConnectionsConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2ConnectionsConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.connections[':connection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2ConnectionsConnectionIdKey() {
  return ['api', '/api/v2/connections/:connection_id', 'DELETE'] as const
}

export function useDeleteApiV2ConnectionsConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2ConnectionsConnectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$delete']>
        },
      ) => parseResponse(client.api.v2.connections[':connection_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ConnectionsConnectionIdKey() {
  return ['api', '/api/v2/connections/:connection_id', 'PATCH'] as const
}

export function usePatchApiV2ConnectionsConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.connections)[':connection_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ConnectionsConnectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$patch']>
        },
      ) => parseResponse(client.api.v2.connections[':connection_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ConnectionsEnqueueTestKey(
  args: InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/connections/enqueue-test', keyArgs] as const
}

export function useGetApiV2ConnectionsEnqueueTest<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.connections)['enqueue-test']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2ConnectionsEnqueueTestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.connections)['enqueue-test']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.connections['enqueue-test'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ConnectionsEnqueueTest<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.connections)['enqueue-test']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2ConnectionsEnqueueTestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.connections)['enqueue-test']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.connections['enqueue-test'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ConnectionsEnqueueTestKey() {
  return ['api', '/api/v2/connections/enqueue-test', 'POST'] as const
}

export function usePostApiV2ConnectionsEnqueueTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.connections)['enqueue-test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ConnectionsEnqueueTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$post']> },
      ) => parseResponse(client.api.v2.connections['enqueue-test'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ConnectionsKey(
  args: InferRequestType<typeof client.api.v2.connections.$get>,
) {
  return ['api', '/api/v2/connections', args] as const
}

export function useGetApiV2Connections<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2ConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Connections<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2ConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ConnectionsKey() {
  return ['api', '/api/v2/connections', 'POST'] as const
}

export function usePostApiV2Connections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.connections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.connections.$post> }) =>
        parseResponse(client.api.v2.connections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2ConnectionsKey() {
  return ['api', '/api/v2/connections', 'PATCH'] as const
}

export function usePatchApiV2Connections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.connections.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2ConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.connections.$patch> }) =>
        parseResponse(client.api.v2.connections.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ConnectionsTestKey() {
  return ['api', '/api/v2/connections/test', 'POST'] as const
}

export function usePostApiV2ConnectionsTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.test.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.connections.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ConnectionsTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.connections.test.$post> },
      ) => parseResponse(client.api.v2.connections.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2ConnectionsDefaultsKey() {
  return ['api', '/api/v2/connections/defaults', 'POST'] as const
}

export function usePostApiV2ConnectionsDefaults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.connections.defaults.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ConnectionsDefaultsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.v2.connections.defaults.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id', args] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2DagsDagIdDagRunsDagRunIdKey() {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id', 'DELETE'] as const
}

export function useDeleteApiV2DagsDagIdDagRunsDagRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2DagsDagIdDagRunsDagRunIdKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdKey() {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id', 'PATCH'] as const
}

export function usePatchApiV2DagsDagIdDagRunsDagRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2DagsDagIdDagRunsDagRunIdKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns', args] as const
}

export function useGetApiV2DagsDagIdDagRuns<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagsDagIdDagRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dags[':dag_id'].dagRuns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRuns<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagsDagIdDagRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dags[':dag_id'].dagRuns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2DagsDagIdDagRunsKey() {
  return ['api', '/api/v2/dags/:dag_id/dagRuns', 'POST'] as const
}

export function usePostApiV2DagsDagIdDagRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2DagsDagIdDagRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$post']> },
      ) => parseResponse(client.api.v2.dags[':dag_id'].dagRuns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2DagsDagIdDagRunsKey() {
  return ['api', '/api/v2/dags/:dag_id/dagRuns', 'PATCH'] as const
}

export function usePatchApiV2DagsDagIdDagRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2DagsDagIdDagRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$patch']> },
      ) => parseResponse(client.api.v2.dags[':dag_id'].dagRuns.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/upstreamAssetEvents', args] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].upstreamAssetEvents.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].upstreamAssetEvents.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2DagsDagIdDagRunsDagRunIdClearKey() {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/clear', 'POST'] as const
}

export function usePostApiV2DagsDagIdDagRunsDagRunIdClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['clear']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['clear']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2DagsDagIdDagRunsDagRunIdClearKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['clear']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].clear.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdWaitKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/wait', args] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdWait<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdWaitKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].wait.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdWait<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdWaitKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].wait.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2DagsDagIdDagRunsListKey() {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/list', 'POST'] as const
}

export function usePostApiV2DagsDagIdDagRunsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['list']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2DagsDagIdDagRunsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['list']['$post']>
        },
      ) => parseResponse(client.api.v2.dags[':dag_id'].dagRuns.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2DagsDagIdClearDagRunsKey() {
  return ['api', '/api/v2/dags/:dag_id/clearDagRuns', 'POST'] as const
}

export function usePostApiV2DagsDagIdClearDagRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['clearDagRuns']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearDagRuns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2DagsDagIdClearDagRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearDagRuns']['$post']>
        },
      ) => parseResponse(client.api.v2.dags[':dag_id'].clearDagRuns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2DagsDagIdClearPartitionsKey() {
  return ['api', '/api/v2/dags/:dag_id/clearPartitions', 'POST'] as const
}

export function usePostApiV2DagsDagIdClearPartitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['clearPartitions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearPartitions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2DagsDagIdClearPartitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearPartitions']['$post']>
        },
      ) => parseResponse(client.api.v2.dags[':dag_id'].clearPartitions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagSourcesDagIdKey(
  args: InferRequestType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/dagSources/:dag_id', keyArgs] as const
}

export function useGetApiV2DagSourcesDagId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagSourcesDagIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dagSources[':dag_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagSourcesDagId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagSourcesDagIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dagSources[':dag_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagBundlesKey(
  args: InferRequestType<typeof client.api.v2.dagBundles.$get>,
) {
  return ['api', '/api/v2/dagBundles', args] as const
}

export function useGetApiV2DagBundles<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.dagBundles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagBundles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagBundlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagBundles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dagBundles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagBundles<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.dagBundles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagBundles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagBundlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagBundles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dagBundles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagBundlesBundleNameKey(
  args: InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>,
) {
  return ['api', '/api/v2/dagBundles/:bundle_name', args] as const
}

export function useGetApiV2DagBundlesBundleName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagBundlesBundleNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dagBundles[':bundle_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagBundlesBundleName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagBundlesBundleNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dagBundles[':bundle_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagBundlesBundleNameFilesKey(
  args: InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>,
) {
  return ['api', '/api/v2/dagBundles/:bundle_name/files', args] as const
}

export function useGetApiV2DagBundlesBundleNameFiles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagBundlesBundleNameFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.dagBundles[':bundle_name'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagBundlesBundleNameFiles<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagBundlesBundleNameFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.dagBundles[':bundle_name'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagStatsKey(args: InferRequestType<typeof client.api.v2.dagStats.$get>) {
  return ['api', '/api/v2/dagStats', args] as const
}

export function useGetApiV2DagStats<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.dagStats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagStats.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2DagStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagStats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dagStats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagStats<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.dagStats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagStats.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2DagStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagStats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dagStats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ConfigKey(args: InferRequestType<typeof client.api.v2.config.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/config', keyArgs] as const
}

export function useGetApiV2Config<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.config.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2ConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.config.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Config<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.config.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2ConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.config.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ConfigSectionSectionOptionOptionKey(
  args: InferRequestType<
    (typeof client.api.v2.config.section)[':section']['option'][':option']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/config/section/:section/option/:option', keyArgs] as const
}

export function useGetApiV2ConfigSectionSectionOptionOption<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.config.section)[':section']['option'][':option']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.config.section)[':section']['option'][':option']['$get']
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
        ? getGetApiV2ConfigSectionSectionOptionOptionKey(args)
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
                (typeof client.api.v2.config.section)[':section']['option'][':option']['$get']
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
          client.api.v2.config.section[':section'].option[':option'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ConfigSectionSectionOptionOption<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.config.section)[':section']['option'][':option']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.config.section)[':section']['option'][':option']['$get']
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
        ? getGetApiV2ConfigSectionSectionOptionOptionKey(args)
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
                (typeof client.api.v2.config.section)[':section']['option'][':option']['$get']
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
          client.api.v2.config.section[':section'].option[':option'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagWarningsKey(
  args: InferRequestType<typeof client.api.v2.dagWarnings.$get>,
) {
  return ['api', '/api/v2/dagWarnings', args] as const
}

export function useGetApiV2DagWarnings<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.dagWarnings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagWarnings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagWarningsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagWarnings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dagWarnings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagWarnings<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.dagWarnings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagWarnings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagWarningsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagWarnings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dagWarnings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagsKey(args: InferRequestType<typeof client.api.v2.dags.$get>) {
  return ['api', '/api/v2/dags', args] as const
}

export function useGetApiV2Dags<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.dags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2DagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Dags<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.dags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2DagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2DagsKey() {
  return ['api', '/api/v2/dags', 'PATCH'] as const
}

export function usePatchApiV2Dags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.dags.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2DagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.dags.$patch> }) =>
        parseResponse(client.api.v2.dags.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id', args] as const
}

export function useGetApiV2DagsDagId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2DagsDagIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dags[':dag_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2DagsDagIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dags[':dag_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2DagsDagIdKey() {
  return ['api', '/api/v2/dags/:dag_id', 'DELETE'] as const
}

export function useDeleteApiV2DagsDagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2DagsDagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$delete']> },
      ) => parseResponse(client.api.v2.dags[':dag_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2DagsDagIdKey() {
  return ['api', '/api/v2/dags/:dag_id', 'PATCH'] as const
}

export function usePatchApiV2DagsDagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2DagsDagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$patch']> },
      ) => parseResponse(client.api.v2.dags[':dag_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDetailsKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id/details', args] as const
}

export function useGetApiV2DagsDagIdDetails<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagsDagIdDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dags[':dag_id'].details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDetails<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagsDagIdDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dags[':dag_id'].details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2DagsBulkKey() {
  return ['api', '/api/v2/dags/bulk', 'PATCH'] as const
}

export function usePatchApiV2DagsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dags.bulk.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.dags.bulk.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2DagsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.dags.bulk.$patch> }) =>
        parseResponse(client.api.v2.dags.bulk.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2DagsDagIdFavoriteKey() {
  return ['api', '/api/v2/dags/:dag_id/favorite', 'POST'] as const
}

export function usePostApiV2DagsDagIdFavorite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['favorite']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['favorite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2DagsDagIdFavoriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['favorite']['$post']> },
      ) => parseResponse(client.api.v2.dags[':dag_id'].favorite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2DagsDagIdUnfavoriteKey() {
  return ['api', '/api/v2/dags/:dag_id/unfavorite', 'POST'] as const
}

export function usePostApiV2DagsDagIdUnfavorite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['unfavorite']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['unfavorite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2DagsDagIdUnfavoriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['unfavorite']['$post']> },
      ) => parseResponse(client.api.v2.dags[':dag_id'].unfavorite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2EventLogsEventLogIdKey(
  args: InferRequestType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>,
) {
  return ['api', '/api/v2/eventLogs/:event_log_id', args] as const
}

export function useGetApiV2EventLogsEventLogId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2EventLogsEventLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.eventLogs[':event_log_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2EventLogsEventLogId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2EventLogsEventLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.eventLogs[':event_log_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2EventLogsKey(
  args: InferRequestType<typeof client.api.v2.eventLogs.$get>,
) {
  return ['api', '/api/v2/eventLogs', args] as const
}

export function useGetApiV2EventLogs<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.eventLogs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.eventLogs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2EventLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.eventLogs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.eventLogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2EventLogs<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.eventLogs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.eventLogs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2EventLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.eventLogs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.eventLogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/links',
    args,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinks<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].links.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinks<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].links.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ImportErrorsImportErrorIdKey(
  args: InferRequestType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>,
) {
  return ['api', '/api/v2/importErrors/:import_error_id', args] as const
}

export function useGetApiV2ImportErrorsImportErrorId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2ImportErrorsImportErrorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.importErrors[':import_error_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ImportErrorsImportErrorId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2ImportErrorsImportErrorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.importErrors[':import_error_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ImportErrorsKey(
  args: InferRequestType<typeof client.api.v2.importErrors.$get>,
) {
  return ['api', '/api/v2/importErrors', args] as const
}

export function useGetApiV2ImportErrors<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.importErrors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.importErrors.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2ImportErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.importErrors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.importErrors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ImportErrors<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.importErrors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.importErrors.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2ImportErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.importErrors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.importErrors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2JobsKey(args: InferRequestType<typeof client.api.v2.jobs.$get>) {
  return ['api', '/api/v2/jobs', args] as const
}

export function useGetApiV2Jobs<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2JobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Jobs<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2JobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2PluginsKey(args: InferRequestType<typeof client.api.v2.plugins.$get>) {
  return ['api', '/api/v2/plugins', args] as const
}

export function useGetApiV2Plugins<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.plugins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2PluginsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.plugins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Plugins<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.plugins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2PluginsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.plugins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2PluginsImportErrorsKey() {
  return ['api', '/api/v2/plugins/importErrors'] as const
}

export function useGetApiV2PluginsImportErrors<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.importErrors.$get>>>
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
        ? getGetApiV2PluginsImportErrorsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.importErrors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.plugins.importErrors.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2PluginsImportErrors<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.importErrors.$get>>>
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
        ? getGetApiV2PluginsImportErrorsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.plugins.importErrors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.plugins.importErrors.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2PoolsPoolNameKey(
  args: InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$get']>,
) {
  return ['api', '/api/v2/pools/:pool_name', args] as const
}

export function useGetApiV2PoolsPoolName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2PoolsPoolNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.pools[':pool_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2PoolsPoolName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2PoolsPoolNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.pools[':pool_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2PoolsPoolNameKey() {
  return ['api', '/api/v2/pools/:pool_name', 'DELETE'] as const
}

export function useDeleteApiV2PoolsPoolName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2PoolsPoolNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$delete']> },
      ) => parseResponse(client.api.v2.pools[':pool_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2PoolsPoolNameKey() {
  return ['api', '/api/v2/pools/:pool_name', 'PATCH'] as const
}

export function usePatchApiV2PoolsPoolName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.pools)[':pool_name']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2PoolsPoolNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$patch']> },
      ) => parseResponse(client.api.v2.pools[':pool_name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2PoolsKey(args: InferRequestType<typeof client.api.v2.pools.$get>) {
  return ['api', '/api/v2/pools', args] as const
}

export function useGetApiV2Pools<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.pools.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2PoolsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.pools.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Pools<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.pools.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2PoolsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.pools.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2PoolsKey() {
  return ['api', '/api/v2/pools', 'POST'] as const
}

export function usePostApiV2Pools<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.pools.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2PoolsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.pools.$post> }) =>
        parseResponse(client.api.v2.pools.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2PoolsKey() {
  return ['api', '/api/v2/pools', 'PATCH'] as const
}

export function usePatchApiV2Pools<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pools.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.pools.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2PoolsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.pools.$patch> }) =>
        parseResponse(client.api.v2.pools.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ProvidersKey(
  args: InferRequestType<typeof client.api.v2.providers.$get>,
) {
  return ['api', '/api/v2/providers', args] as const
}

export function useGetApiV2Providers<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.providers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2ProvidersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.providers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Providers<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.providers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2ProvidersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.providers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ProvidersProviderNameKey(
  args: InferRequestType<(typeof client.api.v2.providers)[':provider_name']['$get']>,
) {
  return ['api', '/api/v2/providers/:provider_name', args] as const
}

export function useGetApiV2ProvidersProviderName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.providers)[':provider_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.providers)[':provider_name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2ProvidersProviderNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.providers)[':provider_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.providers[':provider_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ProvidersProviderName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.providers)[':provider_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.providers)[':provider_name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2ProvidersProviderNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.providers)[':provider_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.providers[':provider_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AssetsAssetIdStateStoreKey(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>,
) {
  return ['api', '/api/v2/assets/:asset_id/state-store', args] as const
}

export function useGetApiV2AssetsAssetIdStateStore<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AssetsAssetIdStateStoreKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.assets[':asset_id']['state-store'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AssetsAssetIdStateStore<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AssetsAssetIdStateStoreKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.assets[':asset_id']['state-store'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2AssetsAssetIdStateStoreKey() {
  return ['api', '/api/v2/assets/:asset_id/state-store', 'DELETE'] as const
}

export function useDeleteApiV2AssetsAssetIdStateStore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2AssetsAssetIdStateStoreKey()
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
            (typeof client.api.v2.assets)[':asset_id']['state-store']['$delete']
          >
        },
      ) =>
        parseResponse(client.api.v2.assets[':asset_id']['state-store'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2AssetsAssetIdStateStoreKeyKey(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>,
) {
  return ['api', '/api/v2/assets/:asset_id/state-store/:key', args] as const
}

export function useGetApiV2AssetsAssetIdStateStoreKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>
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
        ? getGetApiV2AssetsAssetIdStateStoreKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.assets[':asset_id']['state-store'][':key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AssetsAssetIdStateStoreKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>
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
        ? getGetApiV2AssetsAssetIdStateStoreKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.assets[':asset_id']['state-store'][':key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2AssetsAssetIdStateStoreKeyKey() {
  return ['api', '/api/v2/assets/:asset_id/state-store/:key', 'PUT'] as const
}

export function usePutApiV2AssetsAssetIdStateStoreKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2AssetsAssetIdStateStoreKeyKey()
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
            (typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.assets[':asset_id']['state-store'][':key'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2AssetsAssetIdStateStoreKeyKey() {
  return ['api', '/api/v2/assets/:asset_id/state-store/:key', 'DELETE'] as const
}

export function useDeleteApiV2AssetsAssetIdStateStoreKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2AssetsAssetIdStateStoreKeyKey()
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
            (typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.assets[':asset_id']['state-store'][':key'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/state-store',
    args,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStore<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            'state-store'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStore<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            'state-store'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/state-store',
    'DELETE',
  ] as const
}

export function useDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            'state-store'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/state-store/:key',
    args,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            'state-store'
          ][':key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            'state-store'
          ][':key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/state-store/:key',
    'PUT',
  ] as const
}

export function usePutApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            'state-store'
          ][':key'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/state-store/:key',
    'DELETE',
  ] as const
}

export function useDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            'state-store'
          ][':key'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/state-store/:key',
    'PATCH',
  ] as const
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            'state-store'
          ][':key'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries/:xcom_key',
    args,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].xcomEntries[':xcom_key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].xcomEntries[':xcom_key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries/:xcom_key',
    'DELETE',
  ] as const
}

export function useDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].xcomEntries[':xcom_key'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries/:xcom_key',
    'PATCH',
  ] as const
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].xcomEntries[':xcom_key'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries',
    args,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntries<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].xcomEntries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].xcomEntries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries',
    'POST',
  ] as const
}

export function usePostApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntries<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].xcomEntries.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id', args] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id',
    'DELETE',
  ] as const
}

export function useDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id',
    'PATCH',
  ] as const
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/listMapped',
    args,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMapped<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].listMapped.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMapped<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].listMapped.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/dependencies',
    args,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependencies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].dependencies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependencies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].dependencies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/dependencies',
    args,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependencies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].dependencies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependencies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].dependencies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/tries',
    args,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTries<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].tries.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].tries.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/tries',
    args,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].tries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].tries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index',
    args,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index',
    'PATCH',
  ] as const
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances', args] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstances<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstances<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesKey() {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances', 'PATCH'] as const
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2DagsDagIdDagRunsDagRunIdTaskInstancesListKey() {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/list', 'POST'] as const
}

export function usePostApiV2DagsDagIdDagRunsDagRunIdTaskInstancesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['list']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['list']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2DagsDagIdDagRunsDagRunIdTaskInstancesListKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['list']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances.list.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/tries/:task_try_number',
    args,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].tries[
            ':task_try_number'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].tries[
            ':task_try_number'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/tries/:task_try_number',
    args,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].tries[':task_try_number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].tries[':task_try_number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2DagsDagIdClearTaskInstancesKey() {
  return ['api', '/api/v2/dags/:dag_id/clearTaskInstances', 'POST'] as const
}

export function usePostApiV2DagsDagIdClearTaskInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['clearTaskInstances']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearTaskInstances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2DagsDagIdClearTaskInstancesKey()
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
            (typeof client.api.v2.dags)[':dag_id']['clearTaskInstances']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v2.dags[':dag_id'].clearTaskInstances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskGroupInstances/:group_id',
    'PATCH',
  ] as const
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskGroupInstances[
            ':group_id'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRunKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskGroupInstances/:group_id/dry_run',
    'PATCH',
  ] as const
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRun<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['dry_run']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['dry_run']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRunKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['dry_run']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskGroupInstances[
            ':group_id'
          ].dry_run.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRunKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/dry_run',
    'PATCH',
  ] as const
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRun<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dry_run']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dry_run']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRunKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dry_run']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].dry_run.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRunKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/dry_run',
    'PATCH',
  ] as const
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRun<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dry_run']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dry_run']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRunKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dry_run']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].dry_run.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdTasksKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id/tasks', args] as const
}

export function useGetApiV2DagsDagIdTasks<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagsDagIdTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dags[':dag_id'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdTasks<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagsDagIdTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dags[':dag_id'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdTasksTaskIdKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id/tasks/:task_id', args] as const
}

export function useGetApiV2DagsDagIdTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagsDagIdTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.dags[':dag_id'].tasks[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagsDagIdTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.dags[':dag_id'].tasks[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2TriggersKey(args: InferRequestType<typeof client.api.v2.triggers.$get>) {
  return ['api', '/api/v2/triggers', args] as const
}

export function useGetApiV2Triggers<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.triggers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.triggers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2TriggersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.triggers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.triggers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Triggers<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.triggers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.triggers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2TriggersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.triggers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.triggers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2TriggersTriggerIdKey(
  args: InferRequestType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>,
) {
  return ['api', '/api/v2/triggers/:trigger_id', args] as const
}

export function useGetApiV2TriggersTriggerId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2TriggersTriggerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.triggers[':trigger_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2TriggersTriggerId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2TriggersTriggerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.triggers[':trigger_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2VariablesVariableKeyKey(
  args: InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$get']>,
) {
  return ['api', '/api/v2/variables/:variable_key', args] as const
}

export function useGetApiV2VariablesVariableKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2VariablesVariableKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.variables[':variable_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2VariablesVariableKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2VariablesVariableKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.variables[':variable_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2VariablesVariableKeyKey() {
  return ['api', '/api/v2/variables/:variable_key', 'DELETE'] as const
}

export function useDeleteApiV2VariablesVariableKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2VariablesVariableKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$delete']> },
      ) => parseResponse(client.api.v2.variables[':variable_key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2VariablesVariableKeyKey() {
  return ['api', '/api/v2/variables/:variable_key', 'PATCH'] as const
}

export function usePatchApiV2VariablesVariableKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.variables)[':variable_key']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2VariablesVariableKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$patch']> },
      ) => parseResponse(client.api.v2.variables[':variable_key'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2VariablesKey(
  args: InferRequestType<typeof client.api.v2.variables.$get>,
) {
  return ['api', '/api/v2/variables', args] as const
}

export function useGetApiV2Variables<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.variables.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2VariablesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Variables<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.variables.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2VariablesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2VariablesKey() {
  return ['api', '/api/v2/variables', 'POST'] as const
}

export function usePostApiV2Variables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.variables.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2VariablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.variables.$post> }) =>
        parseResponse(client.api.v2.variables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2VariablesKey() {
  return ['api', '/api/v2/variables', 'PATCH'] as const
}

export function usePatchApiV2Variables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.variables.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.variables.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2VariablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.variables.$patch> }) =>
        parseResponse(client.api.v2.variables.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/logs/:try_number',
    keyArgs,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].logs[
            ':try_number'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].logs[
            ':try_number'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/externalLogUrl/:try_number',
    args,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].externalLogUrl[':try_number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
            ':task_id'
          ].externalLogUrl[':try_number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2ParseDagFileFileTokenKey() {
  return ['api', '/api/v2/parseDagFile/:file_token', 'PUT'] as const
}

export function usePutApiV2ParseDagFileFileToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.parseDagFile)[':file_token']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.parseDagFile)[':file_token']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2ParseDagFileFileTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.parseDagFile)[':file_token']['$put']> },
      ) => parseResponse(client.api.v2.parseDagFile[':file_token'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagTagsKey(args: InferRequestType<typeof client.api.v2.dagTags.$get>) {
  return ['api', '/api/v2/dagTags', args] as const
}

export function useGetApiV2DagTags<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.dagTags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagTags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2DagTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagTags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dagTags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagTags<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.dagTags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagTags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2DagTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.dagTags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.dagTags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagVersionsDiffKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id/dagVersions/diff', args] as const
}

export function useGetApiV2DagsDagIdDagVersionsDiff<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>
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
        ? getGetApiV2DagsDagIdDagVersionsDiffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.dags[':dag_id'].dagVersions.diff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagVersionsDiff<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>
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
        ? getGetApiV2DagsDagIdDagVersionsDiffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.dags[':dag_id'].dagVersions.diff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagVersionsVersionNumberKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagVersions/:version_number', args] as const
}

export function useGetApiV2DagsDagIdDagVersionsVersionNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
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
        ? getGetApiV2DagsDagIdDagVersionsVersionNumberKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
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
          client.api.v2.dags[':dag_id'].dagVersions[':version_number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagVersionsVersionNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
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
        ? getGetApiV2DagsDagIdDagVersionsVersionNumberKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
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
          client.api.v2.dags[':dag_id'].dagVersions[':version_number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagVersionsKey(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>,
) {
  return ['api', '/api/v2/dags/:dag_id/dagVersions', args] as const
}

export function useGetApiV2DagsDagIdDagVersions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagsDagIdDagVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.dags[':dag_id'].dagVersions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagVersions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2DagsDagIdDagVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.dags[':dag_id'].dagVersions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/hitlDetails',
    args,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].hitlDetails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].hitlDetails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsKey() {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/hitlDetails',
    'PATCH',
  ] as const
}

export function usePatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsKey()
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
            (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].hitlDetails.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/hitlDetails/tries/:try_number',
    args,
  ] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberKey(
            args,
          )
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].hitlDetails.tries[':try_number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberKey(
            args,
          )
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].hitlDetails.tries[':try_number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2DagsDagIdDagRunsDagRunIdHitlDetailsKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
  >,
) {
  return ['api', '/api/v2/dags/:dag_id/dagRuns/:dag_run_id/hitlDetails', args] as const
}

export function useGetApiV2DagsDagIdDagRunsDagRunIdHitlDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdHitlDetailsKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].hitlDetails.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2DagsDagIdDagRunsDagRunIdHitlDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
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
        ? getGetApiV2DagsDagIdDagRunsDagRunIdHitlDetailsKey(args)
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
                (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
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
          client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].hitlDetails.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2MonitorHealthKey() {
  return ['api', '/api/v2/monitor/health'] as const
}

export function useGetApiV2MonitorHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.monitor.health.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2MonitorHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.monitor.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.monitor.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2MonitorHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.monitor.health.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2MonitorHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.monitor.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.monitor.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2VersionKey() {
  return ['api', '/api/v2/version'] as const
}

export function useGetApiV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AuthLoginKey(
  args: InferRequestType<typeof client.api.v2.auth.login.$get>,
) {
  return ['api', '/api/v2/auth/login', args] as const
}

export function useGetApiV2AuthLogin<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.auth.login.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.login.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2AuthLoginKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.login.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.auth.login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AuthLogin<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.auth.login.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.login.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2AuthLoginKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.login.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.auth.login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AuthCliMetadataKey() {
  return ['api', '/api/v2/auth/cli/metadata'] as const
}

export function useGetApiV2AuthCliMetadata<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.cli.metadata.$get>>>
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
        ? getGetApiV2AuthCliMetadataKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.cli.metadata.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.auth.cli.metadata.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AuthCliMetadata<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.cli.metadata.$get>>>
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
        ? getGetApiV2AuthCliMetadataKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.cli.metadata.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.auth.cli.metadata.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AuthLogoutKey() {
  return ['api', '/api/v2/auth/logout'] as const
}

export function useGetApiV2AuthLogout<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.logout.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2AuthLogoutKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.logout.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.auth.logout.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AuthLogout<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.logout.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2AuthLogoutKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.auth.logout.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.auth.logout.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
