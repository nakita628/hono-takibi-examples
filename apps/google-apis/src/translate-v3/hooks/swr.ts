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

export function getPostV3DatasetExportDataKey() {
  return ['v3', '/v3/:dataset:exportData', 'POST'] as const
}

export function usePostV3DatasetExportData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':dataset:exportData']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':dataset:exportData']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3DatasetExportDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3)[':dataset:exportData']['$post']> },
      ) => parseResponse(client.v3[':dataset:exportData'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3DatasetImportDataKey() {
  return ['v3', '/v3/:dataset:importData', 'POST'] as const
}

export function usePostV3DatasetImportData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':dataset:importData']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':dataset:importData']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3DatasetImportDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3)[':dataset:importData']['$post']> },
      ) => parseResponse(client.v3[':dataset:importData'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3NameKey(args: InferRequestType<(typeof client.v3)[':name']['$get']>) {
  return ['v3', '/v3/:name', args] as const
}

export function useGetV3Name<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Name<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3NameKey() {
  return ['v3', '/v3/:name', 'DELETE'] as const
}

export function useDeleteV3Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v3)[':name']['$delete']> }) =>
        parseResponse(client.v3[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV3NameKey() {
  return ['v3', '/v3/:name', 'PATCH'] as const
}

export function usePatchV3Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV3NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v3)[':name']['$patch']> }) =>
        parseResponse(client.v3[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3NameLocationsKey(
  args: InferRequestType<(typeof client.v3)[':name']['locations']['$get']>,
) {
  return ['v3', '/v3/:name/locations', args] as const
}

export function useGetV3NameLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':name']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3NameLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':name'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3NameLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':name']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3NameLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':name'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3NameOperationsKey(
  args: InferRequestType<(typeof client.v3)[':name']['operations']['$get']>,
) {
  return ['v3', '/v3/:name/operations', args] as const
}

export function useGetV3NameOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':name']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3NameOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':name'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3NameOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':name']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3NameOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':name'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3NameCancelKey() {
  return ['v3', '/v3/:name:cancel', 'POST'] as const
}

export function usePostV3NameCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':name:cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3NameCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3)[':name:cancel']['$post']> },
      ) => parseResponse(client.v3[':name:cancel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3NameWaitKey() {
  return ['v3', '/v3/:name:wait', 'POST'] as const
}

export function usePostV3NameWait<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name:wait']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':name:wait']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3NameWaitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3)[':name:wait']['$post']> },
      ) => parseResponse(client.v3[':name:wait'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3ParentAdaptiveMtDatasetsKey(
  args: InferRequestType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$get']>,
) {
  return ['v3', '/v3/:parent/adaptiveMtDatasets', args] as const
}

export function useGetV3ParentAdaptiveMtDatasets<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ParentAdaptiveMtDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].adaptiveMtDatasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentAdaptiveMtDatasets<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ParentAdaptiveMtDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].adaptiveMtDatasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3ParentAdaptiveMtDatasetsKey() {
  return ['v3', '/v3/:parent/adaptiveMtDatasets', 'POST'] as const
}

export function usePostV3ParentAdaptiveMtDatasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentAdaptiveMtDatasetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3)[':parent']['adaptiveMtDatasets']['$post']> },
      ) => parseResponse(client.v3[':parent'].adaptiveMtDatasets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3ParentAdaptiveMtFilesKey(
  args: InferRequestType<(typeof client.v3)[':parent']['adaptiveMtFiles']['$get']>,
) {
  return ['v3', '/v3/:parent/adaptiveMtFiles', args] as const
}

export function useGetV3ParentAdaptiveMtFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['adaptiveMtFiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtFiles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ParentAdaptiveMtFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtFiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].adaptiveMtFiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentAdaptiveMtFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['adaptiveMtFiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtFiles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ParentAdaptiveMtFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtFiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].adaptiveMtFiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ParentAdaptiveMtSentencesKey(
  args: InferRequestType<(typeof client.v3)[':parent']['adaptiveMtSentences']['$get']>,
) {
  return ['v3', '/v3/:parent/adaptiveMtSentences', args] as const
}

export function useGetV3ParentAdaptiveMtSentences<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['adaptiveMtSentences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtSentences']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ParentAdaptiveMtSentencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtSentences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].adaptiveMtSentences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentAdaptiveMtSentences<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['adaptiveMtSentences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtSentences']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ParentAdaptiveMtSentencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['adaptiveMtSentences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].adaptiveMtSentences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ParentDatasetsKey(
  args: InferRequestType<(typeof client.v3)[':parent']['datasets']['$get']>,
) {
  return ['v3', '/v3/:parent/datasets', args] as const
}

export function useGetV3ParentDatasets<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['datasets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['datasets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ParentDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['datasets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentDatasets<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['datasets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['datasets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ParentDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['datasets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3ParentDatasetsKey() {
  return ['v3', '/v3/:parent/datasets', 'POST'] as const
}

export function usePostV3ParentDatasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent']['datasets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent']['datasets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentDatasetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3)[':parent']['datasets']['$post']> },
      ) => parseResponse(client.v3[':parent'].datasets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3ParentExamplesKey(
  args: InferRequestType<(typeof client.v3)[':parent']['examples']['$get']>,
) {
  return ['v3', '/v3/:parent/examples', args] as const
}

export function useGetV3ParentExamples<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['examples']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['examples']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ParentExamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['examples']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].examples.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentExamples<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['examples']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['examples']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ParentExamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['examples']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].examples.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ParentGlossariesKey(
  args: InferRequestType<(typeof client.v3)[':parent']['glossaries']['$get']>,
) {
  return ['v3', '/v3/:parent/glossaries', args] as const
}

export function useGetV3ParentGlossaries<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['glossaries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['glossaries']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ParentGlossariesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['glossaries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].glossaries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentGlossaries<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['glossaries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['glossaries']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ParentGlossariesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['glossaries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].glossaries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3ParentGlossariesKey() {
  return ['v3', '/v3/:parent/glossaries', 'POST'] as const
}

export function usePostV3ParentGlossaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent']['glossaries']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent']['glossaries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentGlossariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3)[':parent']['glossaries']['$post']> },
      ) => parseResponse(client.v3[':parent'].glossaries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3ParentGlossaryEntriesKey(
  args: InferRequestType<(typeof client.v3)[':parent']['glossaryEntries']['$get']>,
) {
  return ['v3', '/v3/:parent/glossaryEntries', args] as const
}

export function useGetV3ParentGlossaryEntries<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['glossaryEntries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['glossaryEntries']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ParentGlossaryEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['glossaryEntries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].glossaryEntries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentGlossaryEntries<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['glossaryEntries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['glossaryEntries']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ParentGlossaryEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['glossaryEntries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].glossaryEntries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3ParentGlossaryEntriesKey() {
  return ['v3', '/v3/:parent/glossaryEntries', 'POST'] as const
}

export function usePostV3ParentGlossaryEntries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent']['glossaryEntries']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent']['glossaryEntries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentGlossaryEntriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3)[':parent']['glossaryEntries']['$post']> },
      ) => parseResponse(client.v3[':parent'].glossaryEntries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3ParentModelsKey(
  args: InferRequestType<(typeof client.v3)[':parent']['models']['$get']>,
) {
  return ['v3', '/v3/:parent/models', args] as const
}

export function useGetV3ParentModels<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['models']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3ParentModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['models']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentModels<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['models']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3ParentModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['models']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3ParentModelsKey() {
  return ['v3', '/v3/:parent/models', 'POST'] as const
}

export function usePostV3ParentModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['models']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent']['models']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3)[':parent']['models']['$post']> },
      ) => parseResponse(client.v3[':parent'].models.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3ParentSupportedLanguagesKey(
  args: InferRequestType<(typeof client.v3)[':parent']['supportedLanguages']['$get']>,
) {
  return ['v3', '/v3/:parent/supportedLanguages', args] as const
}

export function useGetV3ParentSupportedLanguages<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['supportedLanguages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['supportedLanguages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ParentSupportedLanguagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['supportedLanguages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].supportedLanguages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentSupportedLanguages<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['supportedLanguages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['supportedLanguages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ParentSupportedLanguagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['supportedLanguages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].supportedLanguages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3ParentAdaptiveMtTranslateKey() {
  return ['v3', '/v3/:parent:adaptiveMtTranslate', 'POST'] as const
}

export function usePostV3ParentAdaptiveMtTranslate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent:adaptiveMtTranslate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent:adaptiveMtTranslate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentAdaptiveMtTranslateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3)[':parent:adaptiveMtTranslate']['$post']> },
      ) => parseResponse(client.v3[':parent:adaptiveMtTranslate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3ParentBatchTranslateDocumentKey() {
  return ['v3', '/v3/:parent:batchTranslateDocument', 'POST'] as const
}

export function usePostV3ParentBatchTranslateDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent:batchTranslateDocument']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent:batchTranslateDocument']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentBatchTranslateDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3)[':parent:batchTranslateDocument']['$post']> },
      ) => parseResponse(client.v3[':parent:batchTranslateDocument'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3ParentBatchTranslateTextKey() {
  return ['v3', '/v3/:parent:batchTranslateText', 'POST'] as const
}

export function usePostV3ParentBatchTranslateText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent:batchTranslateText']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent:batchTranslateText']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentBatchTranslateTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3)[':parent:batchTranslateText']['$post']> },
      ) => parseResponse(client.v3[':parent:batchTranslateText'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3ParentDetectLanguageKey() {
  return ['v3', '/v3/:parent:detectLanguage', 'POST'] as const
}

export function usePostV3ParentDetectLanguage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent:detectLanguage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent:detectLanguage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentDetectLanguageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3)[':parent:detectLanguage']['$post']> },
      ) => parseResponse(client.v3[':parent:detectLanguage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3ParentImportAdaptiveMtFileKey() {
  return ['v3', '/v3/:parent:importAdaptiveMtFile', 'POST'] as const
}

export function usePostV3ParentImportAdaptiveMtFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent:importAdaptiveMtFile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent:importAdaptiveMtFile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentImportAdaptiveMtFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3)[':parent:importAdaptiveMtFile']['$post']> },
      ) => parseResponse(client.v3[':parent:importAdaptiveMtFile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3ParentRomanizeTextKey() {
  return ['v3', '/v3/:parent:romanizeText', 'POST'] as const
}

export function usePostV3ParentRomanizeText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent:romanizeText']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent:romanizeText']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentRomanizeTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3)[':parent:romanizeText']['$post']> },
      ) => parseResponse(client.v3[':parent:romanizeText'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3ParentTranslateDocumentKey() {
  return ['v3', '/v3/:parent:translateDocument', 'POST'] as const
}

export function usePostV3ParentTranslateDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent:translateDocument']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent:translateDocument']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentTranslateDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3)[':parent:translateDocument']['$post']> },
      ) => parseResponse(client.v3[':parent:translateDocument'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3ParentTranslateTextKey() {
  return ['v3', '/v3/:parent:translateText', 'POST'] as const
}

export function usePostV3ParentTranslateText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent:translateText']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent:translateText']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentTranslateTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3)[':parent:translateText']['$post']> },
      ) => parseResponse(client.v3[':parent:translateText'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
