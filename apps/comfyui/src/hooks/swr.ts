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

export function getHealthKey() {
  return ['health'] as const
}

export function getInternalKey() {
  return ['internal'] as const
}

export function getGetApiAssetsKey(args: InferRequestType<typeof client.api.assets.$get>) {
  return ['api', '/api/assets', args] as const
}

export function useGetApiAssets<TError = unknown>(
  args: InferRequestType<typeof client.api.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAssets<TError = unknown>(
  args: InferRequestType<typeof client.api.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAssetsKey() {
  return ['api', '/api/assets', 'POST'] as const
}

export function usePostApiAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.assets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAssetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.assets.$post> }) =>
        parseResponse(client.api.assets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAssetsIdKey(
  args: InferRequestType<(typeof client.api.assets)[':id']['$get']>,
) {
  return ['api', '/api/assets/:id', args] as const
}

export function useGetApiAssetsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.assets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAssetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.assets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAssetsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.assets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAssetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.assets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiAssetsIdKey() {
  return ['api', '/api/assets/:id', 'PUT'] as const
}

export function usePutApiAssetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.assets)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAssetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.assets)[':id']['$put']> },
      ) => parseResponse(client.api.assets[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAssetsIdKey() {
  return ['api', '/api/assets/:id', 'DELETE'] as const
}

export function useDeleteApiAssetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.assets)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAssetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.assets)[':id']['$delete']> },
      ) => parseResponse(client.api.assets[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAssetsIdContentKey(
  args: InferRequestType<(typeof client.api.assets)[':id']['content']['$get']>,
) {
  return ['api', '/api/assets/:id/content', args] as const
}

export function useGetApiAssetsIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.api.assets)[':id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.assets)[':id']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAssetsIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.assets)[':id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.assets[':id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAssetsIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.api.assets)[':id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.assets)[':id']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAssetsIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.assets)[':id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.assets[':id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAssetsIdTagsKey() {
  return ['api', '/api/assets/:id/tags', 'POST'] as const
}

export function usePostApiAssetsIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.assets)[':id']['tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.assets)[':id']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAssetsIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.assets)[':id']['tags']['$post']> },
      ) => parseResponse(client.api.assets[':id'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAssetsIdTagsKey() {
  return ['api', '/api/assets/:id/tags', 'DELETE'] as const
}

export function useDeleteApiAssetsIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.assets)[':id']['tags']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.assets)[':id']['tags']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAssetsIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.assets)[':id']['tags']['$delete']> },
      ) => parseResponse(client.api.assets[':id'].tags.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAssetsFromHashKey() {
  return ['api', '/api/assets/from-hash', 'POST'] as const
}

export function usePostApiAssetsFromHash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)['from-hash']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.assets)['from-hash']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAssetsFromHashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.assets)['from-hash']['$post']> },
      ) => parseResponse(client.api.assets['from-hash'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadApiAssetsHashHashKey() {
  return ['api', '/api/assets/hash/:hash', 'HEAD'] as const
}

export function useHeadApiAssetsHashHash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets.hash)[':hash']['$head']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.assets.hash)[':hash']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadApiAssetsHashHashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.assets.hash)[':hash']['$head']> },
      ) => parseResponse(client.api.assets.hash[':hash'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAssetsPruneKey() {
  return ['api', '/api/assets/prune', 'POST'] as const
}

export function usePostApiAssetsPrune<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.prune.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAssetsPruneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.assets.prune.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAssetsSeedKey() {
  return ['api', '/api/assets/seed', 'POST'] as const
}

export function usePostApiAssetsSeed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.assets.seed.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAssetsSeedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.assets.seed.$post> }) =>
        parseResponse(client.api.assets.seed.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAssetsSeedCancelKey() {
  return ['api', '/api/assets/seed/cancel', 'POST'] as const
}

export function usePostApiAssetsSeedCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.cancel.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAssetsSeedCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.assets.seed.cancel.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAssetsSeedStatusKey() {
  return ['api', '/api/assets/seed/status'] as const
}

export function useGetApiAssetsSeedStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.status.$get>>>
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
        ? getGetApiAssetsSeedStatusKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.assets.seed.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAssetsSeedStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.status.$get>>>
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
        ? getGetApiAssetsSeedStatusKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.assets.seed.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAssetsTagsRefineKey(
  args: InferRequestType<typeof client.api.assets.tags.refine.$get>,
) {
  return ['api', '/api/assets/tags/refine', args] as const
}

export function useGetApiAssetsTagsRefine<TError = unknown>(
  args: InferRequestType<typeof client.api.assets.tags.refine.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.tags.refine.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAssetsTagsRefineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.tags.refine.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.assets.tags.refine.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAssetsTagsRefine<TError = unknown>(
  args: InferRequestType<typeof client.api.assets.tags.refine.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.tags.refine.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAssetsTagsRefineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.tags.refine.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.assets.tags.refine.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiBillingChurnkeyAuthKey() {
  return ['api', '/api/billing/churnkey/auth'] as const
}

export function useGetApiBillingChurnkeyAuth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.billing.churnkey.auth.$get>>>
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
        ? getGetApiBillingChurnkeyAuthKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.billing.churnkey.auth.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.billing.churnkey.auth.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBillingChurnkeyAuth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.billing.churnkey.auth.$get>>>
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
        ? getGetApiBillingChurnkeyAuthKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.billing.churnkey.auth.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.billing.churnkey.auth.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDefaultWorkflowKey() {
  return ['api', '/api/default_workflow'] as const
}

export function useGetApiDefaultWorkflow<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.default_workflow.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDefaultWorkflowKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.default_workflow.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.default_workflow.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDefaultWorkflow<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.default_workflow.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDefaultWorkflowKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.default_workflow.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.default_workflow.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiDeployBundleKey() {
  return ['api', '/api/deploy/bundle', 'POST'] as const
}

export function usePostApiDeployBundle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.bundle.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.deploy.bundle.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDeployBundleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.deploy.bundle.$post> }) =>
        parseResponse(client.api.deploy.bundle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiDeploySummaryKey() {
  return ['api', '/api/deploy/summary'] as const
}

export function useGetApiDeploySummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.summary.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDeploySummaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.deploy.summary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDeploySummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.summary.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDeploySummaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.deploy.summary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiEmbeddingsKey() {
  return ['api', '/api/embeddings'] as const
}

export function useGetApiEmbeddings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiEmbeddingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.embeddings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEmbeddings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiEmbeddingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.embeddings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiExperimentModelsKey() {
  return ['api', '/api/experiment/models'] as const
}

export function useGetApiExperimentModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.experiment.models.$get>>>
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
        ? getGetApiExperimentModelsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.experiment.models.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.experiment.models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiExperimentModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.experiment.models.$get>>>
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
        ? getGetApiExperimentModelsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.experiment.models.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.experiment.models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiExperimentModelsFolderKey(
  args: InferRequestType<(typeof client.api.experiment.models)[':folder']['$get']>,
) {
  return ['api', '/api/experiment/models/:folder', args] as const
}

export function useGetApiExperimentModelsFolder<TError = unknown>(
  args: InferRequestType<(typeof client.api.experiment.models)[':folder']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.experiment.models)[':folder']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiExperimentModelsFolderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.experiment.models)[':folder']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.experiment.models[':folder'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiExperimentModelsFolder<TError = unknown>(
  args: InferRequestType<(typeof client.api.experiment.models)[':folder']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.experiment.models)[':folder']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiExperimentModelsFolderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.experiment.models)[':folder']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.experiment.models[':folder'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiExtensionsKey() {
  return ['api', '/api/extensions'] as const
}

export function useGetApiExtensions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.extensions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiExtensionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.extensions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.extensions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiExtensions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.extensions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiExtensionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.extensions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.extensions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFeaturesKey() {
  return ['api', '/api/features'] as const
}

export function useGetApiFeatures<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.features.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiFeaturesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.features.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.features.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFeatures<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.features.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiFeaturesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.features.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.features.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFeedbackKey() {
  return ['api', '/api/feedback', 'POST'] as const
}

export function usePostApiFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.feedback.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.feedback.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.feedback.$post> }) =>
        parseResponse(client.api.feedback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFilesMaskLayersKey(
  args: InferRequestType<(typeof client.api.files)['mask-layers']['$get']>,
) {
  return ['api', '/api/files/mask-layers', args] as const
}

export function useGetApiFilesMaskLayers<TError = unknown>(
  args: InferRequestType<(typeof client.api.files)['mask-layers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.files)['mask-layers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFilesMaskLayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.files)['mask-layers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.files['mask-layers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFilesMaskLayers<TError = unknown>(
  args: InferRequestType<(typeof client.api.files)['mask-layers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.files)['mask-layers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFilesMaskLayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.files)['mask-layers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.files['mask-layers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFreeKey() {
  return ['api', '/api/free', 'POST'] as const
}

export function usePostApiFree<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.free.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.free.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFreeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.free.$post> }) =>
        parseResponse(client.api.free.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiGlobalSubgraphsKey() {
  return ['api', '/api/global_subgraphs'] as const
}

export function useGetApiGlobalSubgraphs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.global_subgraphs.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiGlobalSubgraphsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.global_subgraphs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.global_subgraphs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGlobalSubgraphs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.global_subgraphs.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiGlobalSubgraphsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.global_subgraphs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.global_subgraphs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiGlobalSubgraphsIdKey(
  args: InferRequestType<(typeof client.api.global_subgraphs)[':id']['$get']>,
) {
  return ['api', '/api/global_subgraphs/:id', args] as const
}

export function useGetApiGlobalSubgraphsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.global_subgraphs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.global_subgraphs)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiGlobalSubgraphsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.global_subgraphs)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.global_subgraphs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGlobalSubgraphsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.global_subgraphs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.global_subgraphs)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiGlobalSubgraphsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.global_subgraphs)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.global_subgraphs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiHistoryKey() {
  return ['api', '/api/history', 'POST'] as const
}

export function usePostApiHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.history.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.history.$post> }) =>
        parseResponse(client.api.history.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiHistoryV2Key(args: InferRequestType<typeof client.api.history_v2.$get>) {
  return ['api', '/api/history_v2', args] as const
}

export function useGetApiHistoryV2<TError = unknown>(
  args: InferRequestType<typeof client.api.history_v2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history_v2.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiHistoryV2Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history_v2.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.history_v2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiHistoryV2<TError = unknown>(
  args: InferRequestType<typeof client.api.history_v2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history_v2.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiHistoryV2Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history_v2.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.history_v2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiHistoryV2PromptIdKey(
  args: InferRequestType<(typeof client.api.history_v2)[':prompt_id']['$get']>,
) {
  return ['api', '/api/history_v2/:prompt_id', args] as const
}

export function useGetApiHistoryV2PromptId<TError = unknown>(
  args: InferRequestType<(typeof client.api.history_v2)[':prompt_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.history_v2)[':prompt_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiHistoryV2PromptIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.history_v2)[':prompt_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.history_v2[':prompt_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiHistoryV2PromptId<TError = unknown>(
  args: InferRequestType<(typeof client.api.history_v2)[':prompt_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.history_v2)[':prompt_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiHistoryV2PromptIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.history_v2)[':prompt_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.history_v2[':prompt_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiI18nKey() {
  return ['api', '/api/i18n'] as const
}

export function useGetApiI18n<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.i18n.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiI18nKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.i18n.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.i18n.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiI18n<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.i18n.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiI18nKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.i18n.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.i18n.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiInterruptKey() {
  return ['api', '/api/interrupt', 'POST'] as const
}

export function usePostApiInterrupt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.interrupt.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInterruptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.interrupt.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiJobJobIdStatusKey(
  args: InferRequestType<(typeof client.api.job)[':job_id']['status']['$get']>,
) {
  return ['api', '/api/job/:job_id/status', args] as const
}

export function useGetApiJobJobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.api.job)[':job_id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.job)[':job_id']['status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiJobJobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.job)[':job_id']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.job[':job_id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJobJobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.api.job)[':job_id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.job)[':job_id']['status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiJobJobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.job)[':job_id']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.job[':job_id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiJobsKey(args: InferRequestType<typeof client.api.jobs.$get>) {
  return ['api', '/api/jobs', args] as const
}

export function useGetApiJobs<TError = unknown>(
  args: InferRequestType<typeof client.api.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.jobs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApiJobs<TError = unknown>(
  args: InferRequestType<typeof client.api.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.jobs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetApiJobsJobIdKey(
  args: InferRequestType<(typeof client.api.jobs)[':job_id']['$get']>,
) {
  return ['api', '/api/jobs/:job_id', args] as const
}

export function useGetApiJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.api.jobs)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiJobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jobs[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.api.jobs)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiJobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jobs[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiJobsJobIdAssetsKey(
  args: InferRequestType<(typeof client.api.jobs)[':job_id']['assets']['$get']>,
) {
  return ['api', '/api/jobs/:job_id/assets', args] as const
}

export function useGetApiJobsJobIdAssets<TError = unknown>(
  args: InferRequestType<(typeof client.api.jobs)[':job_id']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['assets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiJobsJobIdAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['assets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jobs[':job_id'].assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJobsJobIdAssets<TError = unknown>(
  args: InferRequestType<(typeof client.api.jobs)[':job_id']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['assets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiJobsJobIdAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['assets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jobs[':job_id'].assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiJobsJobIdCancelKey() {
  return ['api', '/api/jobs/:job_id/cancel', 'POST'] as const
}

export function usePostApiJobsJobIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.jobs)[':job_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiJobsJobIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.jobs)[':job_id']['cancel']['$post']> },
      ) => parseResponse(client.api.jobs[':job_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiJobsCancelKey() {
  return ['api', '/api/jobs/cancel', 'POST'] as const
}

export function usePostApiJobsCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.cancel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.jobs.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiJobsCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.jobs.cancel.$post> }) =>
        parseResponse(client.api.jobs.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiNodeReplacementsKey() {
  return ['api', '/api/node_replacements'] as const
}

export function useGetApiNodeReplacements<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.node_replacements.$get>>>
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
        ? getGetApiNodeReplacementsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.node_replacements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.node_replacements.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiNodeReplacements<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.node_replacements.$get>>>
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
        ? getGetApiNodeReplacementsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.node_replacements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.node_replacements.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiObjectInfoKey() {
  return ['api', '/api/object_info'] as const
}

export function useGetApiObjectInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.object_info.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiObjectInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.object_info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.object_info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiObjectInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.object_info.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiObjectInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.object_info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.object_info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPromptKey() {
  return ['api', '/api/prompt'] as const
}

export function useGetApiPrompt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPromptKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.prompt.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPrompt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPromptKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.prompt.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPromptKey() {
  return ['api', '/api/prompt', 'POST'] as const
}

export function usePostApiPrompt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.prompt.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPromptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.prompt.$post> }) =>
        parseResponse(client.api.prompt.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiQueueKey() {
  return ['api', '/api/queue'] as const
}

export function useGetApiQueue<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiQueueKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.queue.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiQueue<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiQueueKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.queue.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiQueueKey() {
  return ['api', '/api/queue', 'POST'] as const
}

export function usePostApiQueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.queue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiQueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.queue.$post> }) =>
        parseResponse(client.api.queue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSettingsKey() {
  return ['api', '/api/settings'] as const
}

export function useGetApiSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSettingsKey() {
  return ['api', '/api/settings', 'POST'] as const
}

export function usePostApiSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.settings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.settings.$post> }) =>
        parseResponse(client.api.settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSettingsIdKey(
  args: InferRequestType<(typeof client.api.settings)[':id']['$get']>,
) {
  return ['api', '/api/settings/:id', args] as const
}

export function useGetApiSettingsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.settings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.settings)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSettingsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.settings)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.settings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSettingsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.settings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.settings)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSettingsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.settings)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.settings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSettingsIdKey() {
  return ['api', '/api/settings/:id', 'POST'] as const
}

export function usePostApiSettingsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.settings)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.settings)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSettingsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.settings)[':id']['$post']> },
      ) => parseResponse(client.api.settings[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSystemStatsKey() {
  return ['api', '/api/system_stats'] as const
}

export function useGetApiSystemStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system_stats.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSystemStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system_stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.system_stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSystemStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system_stats.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSystemStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system_stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.system_stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTagsKey(args: InferRequestType<typeof client.api.tags.$get>) {
  return ['api', '/api/tags', args] as const
}

export function useGetApiTags<TError = unknown>(
  args: InferRequestType<typeof client.api.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApiTags<TError = unknown>(
  args: InferRequestType<typeof client.api.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetApiTasksKey(args: InferRequestType<typeof client.api.tasks.$get>) {
  return ['api', '/api/tasks', args] as const
}

export function useGetApiTasks<TError = unknown>(
  args: InferRequestType<typeof client.api.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTasks<TError = unknown>(
  args: InferRequestType<typeof client.api.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTasksTaskIdKey(
  args: InferRequestType<(typeof client.api.tasks)[':task_id']['$get']>,
) {
  return ['api', '/api/tasks/:task_id', args] as const
}

export function useGetApiTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.api.tasks)[':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':task_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTasksTaskIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':task_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tasks[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.api.tasks)[':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':task_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTasksTaskIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':task_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tasks[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiUploadImageKey() {
  return ['api', '/api/upload/image', 'POST'] as const
}

export function usePostApiUploadImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.upload.image.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.upload.image.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUploadImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.upload.image.$post> }) =>
        parseResponse(client.api.upload.image.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUploadMaskKey() {
  return ['api', '/api/upload/mask', 'POST'] as const
}

export function usePostApiUploadMask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.upload.mask.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.upload.mask.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUploadMaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.upload.mask.$post> }) =>
        parseResponse(client.api.upload.mask.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserKey() {
  return ['api', '/api/user'] as const
}

export function useGetApiUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUserdataKey(args: InferRequestType<typeof client.api.userdata.$get>) {
  return ['api', '/api/userdata', args] as const
}

export function useGetApiUserdata<TError = unknown>(
  args: InferRequestType<typeof client.api.userdata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.userdata.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserdataKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.userdata.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.userdata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserdata<TError = unknown>(
  args: InferRequestType<typeof client.api.userdata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.userdata.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserdataKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.userdata.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.userdata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUserdataFileKey(
  args: InferRequestType<(typeof client.api.userdata)[':file']['$get']>,
) {
  return ['api', '/api/userdata/:file', args] as const
}

export function useGetApiUserdataFile<TError = unknown>(
  args: InferRequestType<(typeof client.api.userdata)[':file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.userdata)[':file']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserdataFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.userdata)[':file']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.userdata[':file'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserdataFile<TError = unknown>(
  args: InferRequestType<(typeof client.api.userdata)[':file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.userdata)[':file']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserdataFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.userdata)[':file']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.userdata[':file'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiUserdataFileKey() {
  return ['api', '/api/userdata/:file', 'POST'] as const
}

export function usePostApiUserdataFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.userdata)[':file']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.userdata)[':file']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserdataFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.userdata)[':file']['$post']> },
      ) => parseResponse(client.api.userdata[':file'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiUserdataFileKey() {
  return ['api', '/api/userdata/:file', 'DELETE'] as const
}

export function useDeleteApiUserdataFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.userdata)[':file']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.userdata)[':file']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiUserdataFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.userdata)[':file']['$delete']> },
      ) => parseResponse(client.api.userdata[':file'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUserdataFileMoveDestKey() {
  return ['api', '/api/userdata/:file/move/:dest', 'POST'] as const
}

export function usePostApiUserdataFileMoveDest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.userdata)[':file']['move'][':dest']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.userdata)[':file']['move'][':dest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserdataFileMoveDestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.userdata)[':file']['move'][':dest']['$post']>
        },
      ) => parseResponse(client.api.userdata[':file'].move[':dest'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserdataFilePublishKey(
  args: InferRequestType<(typeof client.api.userdata)[':file']['publish']['$get']>,
) {
  return ['api', '/api/userdata/:file/publish', args] as const
}

export function useGetApiUserdataFilePublish<TError = unknown>(
  args: InferRequestType<(typeof client.api.userdata)[':file']['publish']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserdataFilePublishKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.userdata[':file'].publish.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserdataFilePublish<TError = unknown>(
  args: InferRequestType<(typeof client.api.userdata)[':file']['publish']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserdataFilePublishKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.userdata[':file'].publish.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiUserdataFilePublishKey() {
  return ['api', '/api/userdata/:file/publish', 'POST'] as const
}

export function usePostApiUserdataFilePublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.userdata)[':file']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserdataFilePublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.userdata)[':file']['publish']['$post']> },
      ) => parseResponse(client.api.userdata[':file'].publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUsersKey() {
  return ['api', '/api/users'] as const
}

export function useGetApiUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVhsQueryvideoKey(
  args: InferRequestType<typeof client.api.vhs.queryvideo.$get>,
) {
  return ['api', '/api/vhs/queryvideo', args] as const
}

export function useGetApiVhsQueryvideo<TError = unknown>(
  args: InferRequestType<typeof client.api.vhs.queryvideo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vhs.queryvideo.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiVhsQueryvideoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vhs.queryvideo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.vhs.queryvideo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVhsQueryvideo<TError = unknown>(
  args: InferRequestType<typeof client.api.vhs.queryvideo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vhs.queryvideo.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiVhsQueryvideoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vhs.queryvideo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.vhs.queryvideo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiViewKey(args: InferRequestType<typeof client.api.view.$get>) {
  return ['api', '/api/view', args] as const
}

export function useGetApiView<TError = unknown>(
  args: InferRequestType<typeof client.api.view.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.view.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiViewKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.view.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.view.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApiView<TError = unknown>(
  args: InferRequestType<typeof client.api.view.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.view.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiViewKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.view.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.view.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetApiWorkflowTemplatesKey() {
  return ['api', '/api/workflow_templates'] as const
}

export function useGetApiWorkflowTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.workflow_templates.$get>>>
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
        ? getGetApiWorkflowTemplatesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.workflow_templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.workflow_templates.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiWorkflowTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.workflow_templates.$get>>>
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
        ? getGetApiWorkflowTemplatesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.workflow_templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.workflow_templates.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiWorkflowsKey(args: InferRequestType<typeof client.api.workflows.$get>) {
  return ['api', '/api/workflows', args] as const
}

export function useGetApiWorkflows<TError = unknown>(
  args: InferRequestType<typeof client.api.workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiWorkflowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiWorkflows<TError = unknown>(
  args: InferRequestType<typeof client.api.workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiWorkflowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiWorkflowsKey() {
  return ['api', '/api/workflows', 'POST'] as const
}

export function usePostApiWorkflows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.workflows.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWorkflowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.workflows.$post> }) =>
        parseResponse(client.api.workflows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiWorkflowsWorkflowIdKey(
  args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['$get']>,
) {
  return ['api', '/api/workflows/:workflow_id', args] as const
}

export function useGetApiWorkflowsWorkflowId<TError = unknown>(
  args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiWorkflowsWorkflowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.workflows[':workflow_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiWorkflowsWorkflowId<TError = unknown>(
  args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiWorkflowsWorkflowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.workflows[':workflow_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiWorkflowsWorkflowIdKey() {
  return ['api', '/api/workflows/:workflow_id', 'DELETE'] as const
}

export function useDeleteApiWorkflowsWorkflowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.workflows)[':workflow_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiWorkflowsWorkflowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.workflows)[':workflow_id']['$delete']> },
      ) => parseResponse(client.api.workflows[':workflow_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiWorkflowsWorkflowIdKey() {
  return ['api', '/api/workflows/:workflow_id', 'PATCH'] as const
}

export function usePatchApiWorkflowsWorkflowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.workflows)[':workflow_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiWorkflowsWorkflowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.workflows)[':workflow_id']['$patch']> },
      ) => parseResponse(client.api.workflows[':workflow_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiWorkflowsWorkflowIdContentKey(
  args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>,
) {
  return ['api', '/api/workflows/:workflow_id/content', args] as const
}

export function useGetApiWorkflowsWorkflowIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiWorkflowsWorkflowIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.workflows[':workflow_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiWorkflowsWorkflowIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiWorkflowsWorkflowIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.workflows[':workflow_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiWorkflowsWorkflowIdForkKey() {
  return ['api', '/api/workflows/:workflow_id/fork', 'POST'] as const
}

export function usePostApiWorkflowsWorkflowIdFork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['fork']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.workflows)[':workflow_id']['fork']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWorkflowsWorkflowIdForkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.workflows)[':workflow_id']['fork']['$post']>
        },
      ) => parseResponse(client.api.workflows[':workflow_id'].fork.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiWorkflowsWorkflowIdVersionsKey() {
  return ['api', '/api/workflows/:workflow_id/versions', 'POST'] as const
}

export function usePostApiWorkflowsWorkflowIdVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.workflows)[':workflow_id']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWorkflowsWorkflowIdVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.workflows)[':workflow_id']['versions']['$post']>
        },
      ) => parseResponse(client.api.workflows[':workflow_id'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiWorkflowsPublishedShareIdKey(
  args: InferRequestType<(typeof client.api.workflows.published)[':share_id']['$get']>,
) {
  return ['api', '/api/workflows/published/:share_id', args] as const
}

export function useGetApiWorkflowsPublishedShareId<TError = unknown>(
  args: InferRequestType<(typeof client.api.workflows.published)[':share_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.workflows.published)[':share_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiWorkflowsPublishedShareIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.workflows.published)[':share_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.workflows.published[':share_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiWorkflowsPublishedShareId<TError = unknown>(
  args: InferRequestType<(typeof client.api.workflows.published)[':share_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.workflows.published)[':share_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiWorkflowsPublishedShareIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.workflows.published)[':share_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.workflows.published[':share_id'].$get(args, clientOptions)),
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

export function getGetInternalFolderPathsKey() {
  return ['internal', '/internal/folder_paths'] as const
}

export function useGetInternalFolderPaths<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.internal.folder_paths.$get>>>
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
        ? getGetInternalFolderPathsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.internal.folder_paths.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.internal.folder_paths.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternalFolderPaths<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.internal.folder_paths.$get>>>
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
        ? getGetInternalFolderPathsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.internal.folder_paths.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.internal.folder_paths.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInternalLogsKey() {
  return ['internal', '/internal/logs'] as const
}

export function useGetInternalLogs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInternalLogsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.internal.logs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternalLogs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInternalLogsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.internal.logs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInternalLogsRawKey() {
  return ['internal', '/internal/logs/raw'] as const
}

export function useGetInternalLogsRaw<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.raw.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInternalLogsRawKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.raw.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.internal.logs.raw.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternalLogsRaw<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.raw.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInternalLogsRawKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.raw.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.internal.logs.raw.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchInternalLogsSubscribeKey() {
  return ['internal', '/internal/logs/subscribe', 'PATCH'] as const
}

export function usePatchInternalLogsSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.subscribe.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.internal.logs.subscribe.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchInternalLogsSubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.internal.logs.subscribe.$patch> },
      ) => parseResponse(client.internal.logs.subscribe.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
