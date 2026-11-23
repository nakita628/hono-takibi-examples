import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBatchesKey() {
  return ['batches'] as const
}

export function getDumpsKey() {
  return ['dumps'] as const
}

export function getExperimentalFeaturesKey() {
  return ['experimental-features'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getIndexesKey() {
  return ['indexes'] as const
}

export function getKeysKey() {
  return ['keys'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getMultiSearchKey() {
  return ['multi-search'] as const
}

export function getNetworkKey() {
  return ['network'] as const
}

export function getSnapshotsKey() {
  return ['snapshots'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getSwapIndexesKey() {
  return ['swap-indexes'] as const
}

export function getTasksKey() {
  return ['tasks'] as const
}

export function getVersionKey() {
  return ['version'] as const
}

export function getGetBatchesKey(args: InferRequestType<typeof client.batches.$get>) {
  return ['batches', '/batches', args] as const
}

export function useGetBatches<TError = unknown>(
  args: InferRequestType<typeof client.batches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.batches.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBatches<TError = unknown>(
  args: InferRequestType<typeof client.batches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.batches.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBatchesBatchUidKey(
  args: InferRequestType<(typeof client.batches)[':batchUid']['$get']>,
) {
  return ['batches', '/batches/:batchUid', args] as const
}

export function useGetBatchesBatchUid<TError = unknown>(
  args: InferRequestType<(typeof client.batches)[':batchUid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batchUid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBatchesBatchUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batchUid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.batches[':batchUid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBatchesBatchUid<TError = unknown>(
  args: InferRequestType<(typeof client.batches)[':batchUid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batchUid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBatchesBatchUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batchUid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.batches[':batchUid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDumpsKey() {
  return ['dumps', '/dumps', 'POST'] as const
}

export function usePostDumps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dumps.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDumpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.dumps.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExperimentalFeaturesKey() {
  return ['experimental-features', '/experimental-features'] as const
}

export function useGetExperimentalFeatures<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['experimental-features']['$get']>>>
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
        ? getGetExperimentalFeaturesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['experimental-features']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['experimental-features'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExperimentalFeatures<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['experimental-features']['$get']>>>
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
        ? getGetExperimentalFeaturesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['experimental-features']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['experimental-features'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchExperimentalFeaturesKey() {
  return ['experimental-features', '/experimental-features', 'PATCH'] as const
}

export function usePatchExperimentalFeatures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['experimental-features']['$patch']>>
        >
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
  const swrKey = customKey ?? getPatchExperimentalFeaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['experimental-features'].$patch(undefined, clientOptions)),
      restMutationOptions,
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

export function getGetIndexesKey(args: InferRequestType<typeof client.indexes.$get>) {
  return ['indexes', '/indexes', args] as const
}

export function useGetIndexes<TError = unknown>(
  args: InferRequestType<typeof client.indexes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndexesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.indexes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetIndexes<TError = unknown>(
  args: InferRequestType<typeof client.indexes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndexesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.indexes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostIndexesKey() {
  return ['indexes', '/indexes', 'POST'] as const
}

export function usePostIndexes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.indexes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.indexes.$post> }) =>
        parseResponse(client.indexes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid', args] as const
}

export function useGetIndexesIndexUid<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexUid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexUid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':indexUid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUid<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexUid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexUid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':indexUid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidKey() {
  return ['indexes', '/indexes/:indexUid', 'DELETE'] as const
}

export function useDeleteIndexesIndexUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexUid']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.indexes)[':indexUid']['$delete']> },
      ) => parseResponse(client.indexes[':indexUid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIndexesIndexUidKey() {
  return ['indexes', '/indexes/:indexUid', 'PATCH'] as const
}

export function usePatchIndexesIndexUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexUid']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIndexesIndexUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.indexes)[':indexUid']['$patch']> },
      ) => parseResponse(client.indexes[':indexUid'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIndexesIndexUidDeleteBatchKey() {
  return ['indexes', '/indexes/:indexUid/delete-batch', 'POST'] as const
}

export function usePostIndexesIndexUidDeleteBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['delete-batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['delete-batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexesIndexUidDeleteBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.indexes)[':indexUid']['delete-batch']['$post']> },
      ) => parseResponse(client.indexes[':indexUid']['delete-batch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidDocumentsKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/documents', args] as const
}

export function useGetIndexesIndexUidDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexUidDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':indexUid'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexUidDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':indexUid'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidDocumentsKey() {
  return ['indexes', '/indexes/:indexUid/documents', 'PUT'] as const
}

export function usePutIndexesIndexUidDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$put']> },
      ) => parseResponse(client.indexes[':indexUid'].documents.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIndexesIndexUidDocumentsKey() {
  return ['indexes', '/indexes/:indexUid/documents', 'POST'] as const
}

export function usePostIndexesIndexUidDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexesIndexUidDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$post']> },
      ) => parseResponse(client.indexes[':indexUid'].documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidDocumentsKey() {
  return ['indexes', '/indexes/:indexUid/documents', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$delete']> },
      ) => parseResponse(client.indexes[':indexUid'].documents.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIndexesIndexUidDocumentsDeleteKey() {
  return ['indexes', '/indexes/:indexUid/documents/delete', 'POST'] as const
}

export function usePostIndexesIndexUidDocumentsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['documents']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexesIndexUidDocumentsDeleteKey()
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
            (typeof client.indexes)[':indexUid']['documents']['delete']['$post']
          >
        },
      ) => parseResponse(client.indexes[':indexUid'].documents.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIndexesIndexUidDocumentsEditKey() {
  return ['indexes', '/indexes/:indexUid/documents/edit', 'POST'] as const
}

export function usePostIndexesIndexUidDocumentsEdit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['edit']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['documents']['edit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexesIndexUidDocumentsEditKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['edit']['$post']>
        },
      ) => parseResponse(client.indexes[':indexUid'].documents.edit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIndexesIndexUidDocumentsFetchKey() {
  return ['indexes', '/indexes/:indexUid/documents/fetch', 'POST'] as const
}

export function usePostIndexesIndexUidDocumentsFetch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['fetch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['documents']['fetch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexesIndexUidDocumentsFetchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['fetch']['$post']>
        },
      ) => parseResponse(client.indexes[':indexUid'].documents.fetch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidDocumentsDocumentIdKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/documents/:documentId', args] as const
}

export function useGetIndexesIndexUidDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>
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
        ? getGetIndexesIndexUidDocumentsDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes[':indexUid'].documents[':documentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>
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
        ? getGetIndexesIndexUidDocumentsDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes[':indexUid'].documents[':documentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidDocumentsDocumentIdKey() {
  return ['indexes', '/indexes/:indexUid/documents/:documentId', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidDocumentsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidDocumentsDocumentIdKey()
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
            (typeof client.indexes)[':indexUid']['documents'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].documents[':documentId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostIndexesIndexUidFacetSearchKey() {
  return ['indexes', '/indexes/:indexUid/facet-search', 'POST'] as const
}

export function usePostIndexesIndexUidFacetSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['facet-search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['facet-search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexesIndexUidFacetSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.indexes)[':indexUid']['facet-search']['$post']> },
      ) => parseResponse(client.indexes[':indexUid']['facet-search'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSearchKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['search']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/search', args] as const
}

export function useGetIndexesIndexUidSearch<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['search']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexUidSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':indexUid'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSearch<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['search']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexUidSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':indexUid'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIndexesIndexUidSearchKey() {
  return ['indexes', '/indexes/:indexUid/search', 'POST'] as const
}

export function usePostIndexesIndexUidSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexesIndexUidSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.indexes)[':indexUid']['search']['$post']> },
      ) => parseResponse(client.indexes[':indexUid'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings', args] as const
}

export function useGetIndexesIndexUidSettings<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexUidSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':indexUid'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettings<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexUidSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':indexUid'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsKey() {
  return ['indexes', '/indexes/:indexUid/settings', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$delete']> },
      ) => parseResponse(client.indexes[':indexUid'].settings.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIndexesIndexUidSettingsKey() {
  return ['indexes', '/indexes/:indexUid/settings', 'PATCH'] as const
}

export function usePatchIndexesIndexUidSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIndexesIndexUidSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$patch']> },
      ) => parseResponse(client.indexes[':indexUid'].settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsChatKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/chat', args] as const
}

export function useGetIndexesIndexUidSettingsChat<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexUidSettingsChatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes[':indexUid'].settings.chat.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsChat<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexUidSettingsChatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes[':indexUid'].settings.chat.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsChatKey() {
  return ['indexes', '/indexes/:indexUid/settings/chat', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsChat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['chat']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$put']>
        },
      ) => parseResponse(client.indexes[':indexUid'].settings.chat.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsChatKey() {
  return ['indexes', '/indexes/:indexUid/settings/chat', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsChat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['chat']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$delete']>
        },
      ) => parseResponse(client.indexes[':indexUid'].settings.chat.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsDictionaryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/dictionary', args] as const
}

export function useGetIndexesIndexUidSettingsDictionary<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>
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
        ? getGetIndexesIndexUidSettingsDictionaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes[':indexUid'].settings.dictionary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsDictionary<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>
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
        ? getGetIndexesIndexUidSettingsDictionaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes[':indexUid'].settings.dictionary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsDictionaryKey() {
  return ['indexes', '/indexes/:indexUid/settings/dictionary', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsDictionary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsDictionaryKey()
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
            (typeof client.indexes)[':indexUid']['settings']['dictionary']['$put']
          >
        },
      ) => parseResponse(client.indexes[':indexUid'].settings.dictionary.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsDictionaryKey() {
  return ['indexes', '/indexes/:indexUid/settings/dictionary', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsDictionary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsDictionaryKey()
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
            (typeof client.indexes)[':indexUid']['settings']['dictionary']['$delete']
          >
        },
      ) =>
        parseResponse(client.indexes[':indexUid'].settings.dictionary.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsDisplayedAttributesKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/displayed-attributes', args] as const
}

export function useGetIndexesIndexUidSettingsDisplayedAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
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
        ? getGetIndexesIndexUidSettingsDisplayedAttributesKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
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
          client.indexes[':indexUid'].settings['displayed-attributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsDisplayedAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
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
        ? getGetIndexesIndexUidSettingsDisplayedAttributesKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
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
          client.indexes[':indexUid'].settings['displayed-attributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsDisplayedAttributesKey() {
  return ['indexes', '/indexes/:indexUid/settings/displayed-attributes', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsDisplayedAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsDisplayedAttributesKey()
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
            (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['displayed-attributes'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsDisplayedAttributesKey() {
  return ['indexes', '/indexes/:indexUid/settings/displayed-attributes', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsDisplayedAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsDisplayedAttributesKey()
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
            (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['displayed-attributes'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsDistinctAttributeKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/distinct-attribute', args] as const
}

export function useGetIndexesIndexUidSettingsDistinctAttribute<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']
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
        ? getGetIndexesIndexUidSettingsDistinctAttributeKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']
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
          client.indexes[':indexUid'].settings['distinct-attribute'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsDistinctAttribute<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']
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
        ? getGetIndexesIndexUidSettingsDistinctAttributeKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']
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
          client.indexes[':indexUid'].settings['distinct-attribute'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsDistinctAttributeKey() {
  return ['indexes', '/indexes/:indexUid/settings/distinct-attribute', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsDistinctAttribute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsDistinctAttributeKey()
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
            (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['distinct-attribute'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsDistinctAttributeKey() {
  return ['indexes', '/indexes/:indexUid/settings/distinct-attribute', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsDistinctAttribute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsDistinctAttributeKey()
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
            (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['distinct-attribute'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsEmbeddersKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/embedders', args] as const
}

export function useGetIndexesIndexUidSettingsEmbedders<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>
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
        ? getGetIndexesIndexUidSettingsEmbeddersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes[':indexUid'].settings.embedders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsEmbedders<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>
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
        ? getGetIndexesIndexUidSettingsEmbeddersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes[':indexUid'].settings.embedders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsEmbeddersKey() {
  return ['indexes', '/indexes/:indexUid/settings/embedders', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsEmbedders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsEmbeddersKey()
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
            (typeof client.indexes)[':indexUid']['settings']['embedders']['$delete']
          >
        },
      ) =>
        parseResponse(client.indexes[':indexUid'].settings.embedders.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIndexesIndexUidSettingsEmbeddersKey() {
  return ['indexes', '/indexes/:indexUid/settings/embedders', 'PATCH'] as const
}

export function usePatchIndexesIndexUidSettingsEmbedders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIndexesIndexUidSettingsEmbeddersKey()
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
            (typeof client.indexes)[':indexUid']['settings']['embedders']['$patch']
          >
        },
      ) => parseResponse(client.indexes[':indexUid'].settings.embedders.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsFacetSearchKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/facet-search', args] as const
}

export function useGetIndexesIndexUidSettingsFacetSearch<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>
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
        ? getGetIndexesIndexUidSettingsFacetSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes[':indexUid'].settings['facet-search'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsFacetSearch<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>
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
        ? getGetIndexesIndexUidSettingsFacetSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes[':indexUid'].settings['facet-search'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsFacetSearchKey() {
  return ['indexes', '/indexes/:indexUid/settings/facet-search', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsFacetSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsFacetSearchKey()
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
            (typeof client.indexes)[':indexUid']['settings']['facet-search']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['facet-search'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsFacetSearchKey() {
  return ['indexes', '/indexes/:indexUid/settings/facet-search', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsFacetSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsFacetSearchKey()
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
            (typeof client.indexes)[':indexUid']['settings']['facet-search']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['facet-search'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsFacetingKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/faceting', args] as const
}

export function useGetIndexesIndexUidSettingsFaceting<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>
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
        ? getGetIndexesIndexUidSettingsFacetingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes[':indexUid'].settings.faceting.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsFaceting<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>
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
        ? getGetIndexesIndexUidSettingsFacetingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes[':indexUid'].settings.faceting.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsFacetingKey() {
  return ['indexes', '/indexes/:indexUid/settings/faceting', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsFaceting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsFacetingKey()
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
            (typeof client.indexes)[':indexUid']['settings']['faceting']['$delete']
          >
        },
      ) => parseResponse(client.indexes[':indexUid'].settings.faceting.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIndexesIndexUidSettingsFacetingKey() {
  return ['indexes', '/indexes/:indexUid/settings/faceting', 'PATCH'] as const
}

export function usePatchIndexesIndexUidSettingsFaceting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIndexesIndexUidSettingsFacetingKey()
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
            (typeof client.indexes)[':indexUid']['settings']['faceting']['$patch']
          >
        },
      ) => parseResponse(client.indexes[':indexUid'].settings.faceting.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsFilterableAttributesKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/filterable-attributes', args] as const
}

export function useGetIndexesIndexUidSettingsFilterableAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
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
        ? getGetIndexesIndexUidSettingsFilterableAttributesKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
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
          client.indexes[':indexUid'].settings['filterable-attributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsFilterableAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
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
        ? getGetIndexesIndexUidSettingsFilterableAttributesKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
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
          client.indexes[':indexUid'].settings['filterable-attributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsFilterableAttributesKey() {
  return ['indexes', '/indexes/:indexUid/settings/filterable-attributes', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsFilterableAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsFilterableAttributesKey()
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
            (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['filterable-attributes'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsFilterableAttributesKey() {
  return ['indexes', '/indexes/:indexUid/settings/filterable-attributes', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsFilterableAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsFilterableAttributesKey()
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
            (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['filterable-attributes'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsLocalizedAttributesKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/localized-attributes', args] as const
}

export function useGetIndexesIndexUidSettingsLocalizedAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
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
        ? getGetIndexesIndexUidSettingsLocalizedAttributesKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
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
          client.indexes[':indexUid'].settings['localized-attributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsLocalizedAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
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
        ? getGetIndexesIndexUidSettingsLocalizedAttributesKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
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
          client.indexes[':indexUid'].settings['localized-attributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsLocalizedAttributesKey() {
  return ['indexes', '/indexes/:indexUid/settings/localized-attributes', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsLocalizedAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsLocalizedAttributesKey()
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
            (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['localized-attributes'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsLocalizedAttributesKey() {
  return ['indexes', '/indexes/:indexUid/settings/localized-attributes', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsLocalizedAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsLocalizedAttributesKey()
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
            (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['localized-attributes'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsNonSeparatorTokensKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/non-separator-tokens', args] as const
}

export function useGetIndexesIndexUidSettingsNonSeparatorTokens<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
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
        ? getGetIndexesIndexUidSettingsNonSeparatorTokensKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
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
          client.indexes[':indexUid'].settings['non-separator-tokens'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsNonSeparatorTokens<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
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
        ? getGetIndexesIndexUidSettingsNonSeparatorTokensKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
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
          client.indexes[':indexUid'].settings['non-separator-tokens'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsNonSeparatorTokensKey() {
  return ['indexes', '/indexes/:indexUid/settings/non-separator-tokens', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsNonSeparatorTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsNonSeparatorTokensKey()
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
            (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['non-separator-tokens'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsNonSeparatorTokensKey() {
  return ['indexes', '/indexes/:indexUid/settings/non-separator-tokens', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsNonSeparatorTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsNonSeparatorTokensKey()
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
            (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['non-separator-tokens'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsPaginationKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/pagination', args] as const
}

export function useGetIndexesIndexUidSettingsPagination<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>
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
        ? getGetIndexesIndexUidSettingsPaginationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes[':indexUid'].settings.pagination.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsPagination<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>
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
        ? getGetIndexesIndexUidSettingsPaginationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes[':indexUid'].settings.pagination.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsPaginationKey() {
  return ['indexes', '/indexes/:indexUid/settings/pagination', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsPagination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsPaginationKey()
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
            (typeof client.indexes)[':indexUid']['settings']['pagination']['$delete']
          >
        },
      ) =>
        parseResponse(client.indexes[':indexUid'].settings.pagination.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIndexesIndexUidSettingsPaginationKey() {
  return ['indexes', '/indexes/:indexUid/settings/pagination', 'PATCH'] as const
}

export function usePatchIndexesIndexUidSettingsPagination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIndexesIndexUidSettingsPaginationKey()
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
            (typeof client.indexes)[':indexUid']['settings']['pagination']['$patch']
          >
        },
      ) =>
        parseResponse(client.indexes[':indexUid'].settings.pagination.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsPrefixSearchKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/prefix-search', args] as const
}

export function useGetIndexesIndexUidSettingsPrefixSearch<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']>
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
        ? getGetIndexesIndexUidSettingsPrefixSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes[':indexUid'].settings['prefix-search'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsPrefixSearch<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']>
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
        ? getGetIndexesIndexUidSettingsPrefixSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes[':indexUid'].settings['prefix-search'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsPrefixSearchKey() {
  return ['indexes', '/indexes/:indexUid/settings/prefix-search', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsPrefixSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsPrefixSearchKey()
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
            (typeof client.indexes)[':indexUid']['settings']['prefix-search']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['prefix-search'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsPrefixSearchKey() {
  return ['indexes', '/indexes/:indexUid/settings/prefix-search', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsPrefixSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsPrefixSearchKey()
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
            (typeof client.indexes)[':indexUid']['settings']['prefix-search']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['prefix-search'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsProximityPrecisionKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/proximity-precision', args] as const
}

export function useGetIndexesIndexUidSettingsProximityPrecision<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
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
        ? getGetIndexesIndexUidSettingsProximityPrecisionKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
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
          client.indexes[':indexUid'].settings['proximity-precision'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsProximityPrecision<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
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
        ? getGetIndexesIndexUidSettingsProximityPrecisionKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
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
          client.indexes[':indexUid'].settings['proximity-precision'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsProximityPrecisionKey() {
  return ['indexes', '/indexes/:indexUid/settings/proximity-precision', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsProximityPrecision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsProximityPrecisionKey()
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
            (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['proximity-precision'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsProximityPrecisionKey() {
  return ['indexes', '/indexes/:indexUid/settings/proximity-precision', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsProximityPrecision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsProximityPrecisionKey()
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
            (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['proximity-precision'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsRankingRulesKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/ranking-rules', args] as const
}

export function useGetIndexesIndexUidSettingsRankingRules<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']>
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
        ? getGetIndexesIndexUidSettingsRankingRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes[':indexUid'].settings['ranking-rules'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsRankingRules<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']>
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
        ? getGetIndexesIndexUidSettingsRankingRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes[':indexUid'].settings['ranking-rules'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsRankingRulesKey() {
  return ['indexes', '/indexes/:indexUid/settings/ranking-rules', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsRankingRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsRankingRulesKey()
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
            (typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['ranking-rules'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsRankingRulesKey() {
  return ['indexes', '/indexes/:indexUid/settings/ranking-rules', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsRankingRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsRankingRulesKey()
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
            (typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['ranking-rules'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsSearchCutoffMsKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/search-cutoff-ms', args] as const
}

export function useGetIndexesIndexUidSettingsSearchCutoffMs<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']
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
        ? getGetIndexesIndexUidSettingsSearchCutoffMsKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']
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
          client.indexes[':indexUid'].settings['search-cutoff-ms'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsSearchCutoffMs<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']
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
        ? getGetIndexesIndexUidSettingsSearchCutoffMsKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']
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
          client.indexes[':indexUid'].settings['search-cutoff-ms'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsSearchCutoffMsKey() {
  return ['indexes', '/indexes/:indexUid/settings/search-cutoff-ms', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsSearchCutoffMs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsSearchCutoffMsKey()
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
            (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['search-cutoff-ms'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsSearchCutoffMsKey() {
  return ['indexes', '/indexes/:indexUid/settings/search-cutoff-ms', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsSearchCutoffMs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsSearchCutoffMsKey()
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
            (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['search-cutoff-ms'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsSearchableAttributesKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/searchable-attributes', args] as const
}

export function useGetIndexesIndexUidSettingsSearchableAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
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
        ? getGetIndexesIndexUidSettingsSearchableAttributesKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
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
          client.indexes[':indexUid'].settings['searchable-attributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsSearchableAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
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
        ? getGetIndexesIndexUidSettingsSearchableAttributesKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
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
          client.indexes[':indexUid'].settings['searchable-attributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsSearchableAttributesKey() {
  return ['indexes', '/indexes/:indexUid/settings/searchable-attributes', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsSearchableAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsSearchableAttributesKey()
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
            (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['searchable-attributes'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsSearchableAttributesKey() {
  return ['indexes', '/indexes/:indexUid/settings/searchable-attributes', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsSearchableAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsSearchableAttributesKey()
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
            (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['searchable-attributes'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsSeparatorTokensKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/separator-tokens', args] as const
}

export function useGetIndexesIndexUidSettingsSeparatorTokens<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']
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
        ? getGetIndexesIndexUidSettingsSeparatorTokensKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']
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
          client.indexes[':indexUid'].settings['separator-tokens'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsSeparatorTokens<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']
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
        ? getGetIndexesIndexUidSettingsSeparatorTokensKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']
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
          client.indexes[':indexUid'].settings['separator-tokens'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsSeparatorTokensKey() {
  return ['indexes', '/indexes/:indexUid/settings/separator-tokens', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsSeparatorTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsSeparatorTokensKey()
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
            (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['separator-tokens'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsSeparatorTokensKey() {
  return ['indexes', '/indexes/:indexUid/settings/separator-tokens', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsSeparatorTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsSeparatorTokensKey()
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
            (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['separator-tokens'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsSortableAttributesKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/sortable-attributes', args] as const
}

export function useGetIndexesIndexUidSettingsSortableAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
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
        ? getGetIndexesIndexUidSettingsSortableAttributesKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
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
          client.indexes[':indexUid'].settings['sortable-attributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsSortableAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
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
        ? getGetIndexesIndexUidSettingsSortableAttributesKey(args)
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
                (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
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
          client.indexes[':indexUid'].settings['sortable-attributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsSortableAttributesKey() {
  return ['indexes', '/indexes/:indexUid/settings/sortable-attributes', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsSortableAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsSortableAttributesKey()
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
            (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['sortable-attributes'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsSortableAttributesKey() {
  return ['indexes', '/indexes/:indexUid/settings/sortable-attributes', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsSortableAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsSortableAttributesKey()
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
            (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['sortable-attributes'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsStopWordsKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/stop-words', args] as const
}

export function useGetIndexesIndexUidSettingsStopWords<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>
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
        ? getGetIndexesIndexUidSettingsStopWordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes[':indexUid'].settings['stop-words'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsStopWords<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>
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
        ? getGetIndexesIndexUidSettingsStopWordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes[':indexUid'].settings['stop-words'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsStopWordsKey() {
  return ['indexes', '/indexes/:indexUid/settings/stop-words', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsStopWords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsStopWordsKey()
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
            (typeof client.indexes)[':indexUid']['settings']['stop-words']['$put']
          >
        },
      ) =>
        parseResponse(client.indexes[':indexUid'].settings['stop-words'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsStopWordsKey() {
  return ['indexes', '/indexes/:indexUid/settings/stop-words', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsStopWords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsStopWordsKey()
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
            (typeof client.indexes)[':indexUid']['settings']['stop-words']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['stop-words'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsSynonymsKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/synonyms', args] as const
}

export function useGetIndexesIndexUidSettingsSynonyms<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>
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
        ? getGetIndexesIndexUidSettingsSynonymsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes[':indexUid'].settings.synonyms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsSynonyms<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>
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
        ? getGetIndexesIndexUidSettingsSynonymsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes[':indexUid'].settings.synonyms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesIndexUidSettingsSynonymsKey() {
  return ['indexes', '/indexes/:indexUid/settings/synonyms', 'PUT'] as const
}

export function usePutIndexesIndexUidSettingsSynonyms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesIndexUidSettingsSynonymsKey()
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
            (typeof client.indexes)[':indexUid']['settings']['synonyms']['$put']
          >
        },
      ) => parseResponse(client.indexes[':indexUid'].settings.synonyms.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsSynonymsKey() {
  return ['indexes', '/indexes/:indexUid/settings/synonyms', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsSynonyms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsSynonymsKey()
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
            (typeof client.indexes)[':indexUid']['settings']['synonyms']['$delete']
          >
        },
      ) => parseResponse(client.indexes[':indexUid'].settings.synonyms.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSettingsTypoToleranceKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/typo-tolerance', args] as const
}

export function useGetIndexesIndexUidSettingsTypoTolerance<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']>
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
        ? getGetIndexesIndexUidSettingsTypoToleranceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes[':indexUid'].settings['typo-tolerance'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSettingsTypoTolerance<TError = unknown>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']>
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
        ? getGetIndexesIndexUidSettingsTypoToleranceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes[':indexUid'].settings['typo-tolerance'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteIndexesIndexUidSettingsTypoToleranceKey() {
  return ['indexes', '/indexes/:indexUid/settings/typo-tolerance', 'DELETE'] as const
}

export function useDeleteIndexesIndexUidSettingsTypoTolerance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexUidSettingsTypoToleranceKey()
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
            (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['typo-tolerance'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchIndexesIndexUidSettingsTypoToleranceKey() {
  return ['indexes', '/indexes/:indexUid/settings/typo-tolerance', 'PATCH'] as const
}

export function usePatchIndexesIndexUidSettingsTypoTolerance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIndexesIndexUidSettingsTypoToleranceKey()
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
            (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.indexes[':indexUid'].settings['typo-tolerance'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidSimilarKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['similar']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/similar', args] as const
}

export function useGetIndexesIndexUidSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['similar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexUidSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':indexUid'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['similar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexUidSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':indexUid'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIndexesIndexUidSimilarKey() {
  return ['indexes', '/indexes/:indexUid/similar', 'POST'] as const
}

export function usePostIndexesIndexUidSimilar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['similar']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexUid']['similar']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexesIndexUidSimilarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.indexes)[':indexUid']['similar']['$post']> },
      ) => parseResponse(client.indexes[':indexUid'].similar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexUidStatsKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['stats']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/stats', args] as const
}

export function useGetIndexesIndexUidStats<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['stats']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexUidStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':indexUid'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexUidStats<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['stats']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexUidStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':indexUid']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':indexUid'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKeysKey(args: InferRequestType<typeof client.keys.$get>) {
  return ['keys', '/keys', args] as const
}

export function useGetKeys<TError = unknown>(
  args: InferRequestType<typeof client.keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.keys.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetKeys<TError = unknown>(
  args: InferRequestType<typeof client.keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.keys.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostKeysKey() {
  return ['keys', '/keys', 'POST'] as const
}

export function usePostKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.keys.$post> }) =>
        parseResponse(client.keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKeysUidOrKeyKey(
  args: InferRequestType<(typeof client.keys)[':uidOrKey']['$get']>,
) {
  return ['keys', '/keys/:uidOrKey', args] as const
}

export function useGetKeysUidOrKey<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':uidOrKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':uidOrKey']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeysUidOrKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':uidOrKey']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':uidOrKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeysUidOrKey<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':uidOrKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':uidOrKey']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeysUidOrKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':uidOrKey']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':uidOrKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteKeysUidOrKeyKey() {
  return ['keys', '/keys/:uidOrKey', 'DELETE'] as const
}

export function useDeleteKeysUidOrKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':uidOrKey']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.keys)[':uidOrKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKeysUidOrKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.keys)[':uidOrKey']['$delete']> },
      ) => parseResponse(client.keys[':uidOrKey'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchKeysUidOrKeyKey() {
  return ['keys', '/keys/:uidOrKey', 'PATCH'] as const
}

export function usePatchKeysUidOrKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':uidOrKey']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.keys)[':uidOrKey']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchKeysUidOrKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.keys)[':uidOrKey']['$patch']> },
      ) => parseResponse(client.keys[':uidOrKey'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLogsStderrKey() {
  return ['logs', '/logs/stderr', 'POST'] as const
}

export function usePostLogsStderr<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.stderr.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.logs.stderr.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLogsStderrKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.logs.stderr.$post> }) =>
        parseResponse(client.logs.stderr.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLogsStreamKey() {
  return ['logs', '/logs/stream', 'POST'] as const
}

export function usePostLogsStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.stream.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.logs.stream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLogsStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.logs.stream.$post> }) =>
        parseResponse(client.logs.stream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLogsStreamKey() {
  return ['logs', '/logs/stream', 'DELETE'] as const
}

export function useDeleteLogsStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.stream.$delete>>>>
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
  const swrKey = customKey ?? getDeleteLogsStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.logs.stream.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetricsKey() {
  return ['metrics', '/metrics'] as const
}

export function useGetMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMultiSearchKey() {
  return ['multi-search', '/multi-search', 'POST'] as const
}

export function usePostMultiSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['multi-search']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['multi-search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMultiSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['multi-search']['$post']> },
      ) => parseResponse(client['multi-search'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkKey() {
  return ['network', '/network'] as const
}

export function useGetNetwork<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworkKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.network.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetwork<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworkKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.network.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchNetworkKey() {
  return ['network', '/network', 'PATCH'] as const
}

export function usePatchNetwork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.network.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNetworkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.network.$patch> }) =>
        parseResponse(client.network.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSnapshotsKey() {
  return ['snapshots', '/snapshots', 'POST'] as const
}

export function usePostSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSnapshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.snapshots.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatsKey() {
  return ['stats', '/stats'] as const
}

export function useGetStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSwapIndexesKey() {
  return ['swap-indexes', '/swap-indexes', 'POST'] as const
}

export function usePostSwapIndexes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['swap-indexes']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['swap-indexes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSwapIndexesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['swap-indexes']['$post']> },
      ) => parseResponse(client['swap-indexes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksKey(args: InferRequestType<typeof client.tasks.$get>) {
  return ['tasks', '/tasks', args] as const
}

export function useGetTasks<TError = unknown>(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tasks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTasks<TError = unknown>(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tasks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getDeleteTasksKey() {
  return ['tasks', '/tasks', 'DELETE'] as const
}

export function useDeleteTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tasks.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tasks.$delete> }) =>
        parseResponse(client.tasks.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksCancelKey() {
  return ['tasks', '/tasks/cancel', 'POST'] as const
}

export function usePostTasksCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.cancel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tasks.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tasks.cancel.$post> }) =>
        parseResponse(client.tasks.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskUidKey(
  args: InferRequestType<(typeof client.tasks)[':taskUid']['$get']>,
) {
  return ['tasks', '/tasks/:taskUid', args] as const
}

export function useGetTasksTaskUid<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskUid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskUid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksTaskUidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskUid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskUid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskUid<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskUid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskUid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksTaskUidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskUid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskUid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVersionKey() {
  return ['version', '/version'] as const
}

export function useGetVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
