import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDumpsKey() {
  return ['dumps'] as const
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

export function getStatsKey() {
  return ['stats'] as const
}

export function getTasksKey() {
  return ['tasks'] as const
}

export function getVersionKey() {
  return ['version'] as const
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

export function getGetIndexesBooksKey() {
  return ['indexes', '/indexes/books'] as const
}

export function useGetIndexesBooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndexesBooksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes.books.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndexesBooksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes.books.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIndexesBooksKey() {
  return ['indexes', '/indexes/books', 'DELETE'] as const
}

export function useDeleteIndexesBooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesBooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.indexes.books.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIndexesBooksKey() {
  return ['indexes', '/indexes/books', 'PATCH'] as const
}

export function usePatchIndexesBooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.indexes.books.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIndexesBooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.indexes.books.$patch> }) =>
        parseResponse(client.indexes.books.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesBooksDocumentsKey(
  args: InferRequestType<typeof client.indexes.books.documents.$get>,
) {
  return ['indexes', '/indexes/books/documents', args] as const
}

export function useGetIndexesBooksDocuments<TError = unknown>(
  args: InferRequestType<typeof client.indexes.books.documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesBooksDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes.books.documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooksDocuments<TError = unknown>(
  args: InferRequestType<typeof client.indexes.books.documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesBooksDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes.books.documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesBooksDocumentsKey() {
  return ['indexes', '/indexes/books/documents', 'PUT'] as const
}

export function usePutIndexesBooksDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.indexes.books.documents.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesBooksDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.indexes.books.documents.$put> },
      ) => parseResponse(client.indexes.books.documents.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIndexesBooksDocumentsKey() {
  return ['indexes', '/indexes/books/documents', 'POST'] as const
}

export function usePostIndexesBooksDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.indexes.books.documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexesBooksDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.indexes.books.documents.$post> },
      ) => parseResponse(client.indexes.books.documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesBooksDocumentsKey() {
  return ['indexes', '/indexes/books/documents', 'DELETE'] as const
}

export function useDeleteIndexesBooksDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$delete>>>
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
  const swrKey = customKey ?? getDeleteIndexesBooksDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.indexes.books.documents.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesBooksDocuments1Key() {
  return ['indexes', '/indexes/books/documents/1', 'DELETE'] as const
}

export function useDeleteIndexesBooksDocuments1<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.documents)['1']['$delete']>>
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
  const swrKey = customKey ?? getDeleteIndexesBooksDocuments1Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.indexes.books.documents['1'].$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesBooksDocuments2Key(
  args: InferRequestType<(typeof client.indexes.books.documents)['2']['$get']>,
) {
  return ['indexes', '/indexes/books/documents/2', args] as const
}

export function useGetIndexesBooksDocuments2<TError = unknown>(
  args: InferRequestType<(typeof client.indexes.books.documents)['2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes.books.documents)['2']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesBooksDocuments2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes.books.documents)['2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes.books.documents['2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooksDocuments2<TError = unknown>(
  args: InferRequestType<(typeof client.indexes.books.documents)['2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes.books.documents)['2']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesBooksDocuments2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes.books.documents)['2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes.books.documents['2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIndexesBooksDocumentsDeleteBatchKey() {
  return ['indexes', '/indexes/books/documents/delete-batch', 'POST'] as const
}

export function usePostIndexesBooksDocumentsDeleteBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.documents)['delete-batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes.books.documents)['delete-batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexesBooksDocumentsDeleteBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.indexes.books.documents)['delete-batch']['$post']>
        },
      ) => parseResponse(client.indexes.books.documents['delete-batch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesBooksSearchKey(
  args: InferRequestType<typeof client.indexes.books.search.$get>,
) {
  return ['indexes', '/indexes/books/search', args] as const
}

export function useGetIndexesBooksSearch<TError = unknown>(
  args: InferRequestType<typeof client.indexes.books.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesBooksSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes.books.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooksSearch<TError = unknown>(
  args: InferRequestType<typeof client.indexes.books.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesBooksSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes.books.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIndexesBooksSearchKey() {
  return ['indexes', '/indexes/books/search', 'POST'] as const
}

export function usePostIndexesBooksSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.indexes.books.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexesBooksSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.indexes.books.search.$post> },
      ) => parseResponse(client.indexes.books.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesBooksSettingsKey() {
  return ['indexes', '/indexes/books/settings'] as const
}

export function useGetIndexesBooksSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$get>>>
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
        ? getGetIndexesBooksSettingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes.books.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooksSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$get>>>
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
        ? getGetIndexesBooksSettingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes.books.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIndexesBooksSettingsKey() {
  return ['indexes', '/indexes/books/settings', 'DELETE'] as const
}

export function useDeleteIndexesBooksSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$delete>>>
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
  const swrKey = customKey ?? getDeleteIndexesBooksSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.indexes.books.settings.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIndexesBooksSettingsKey() {
  return ['indexes', '/indexes/books/settings', 'PATCH'] as const
}

export function usePatchIndexesBooksSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.indexes.books.settings.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIndexesBooksSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.indexes.books.settings.$patch> },
      ) => parseResponse(client.indexes.books.settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesBooksSettingsDisplayedAttributesKey() {
  return ['indexes', '/indexes/books/settings/displayed-attributes'] as const
}

export function useGetIndexesBooksSettingsDisplayedAttributes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$get']>
          >
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
        ? getGetIndexesBooksSettingsDisplayedAttributesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['displayed-attributes'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooksSettingsDisplayedAttributes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$get']>
          >
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
        ? getGetIndexesBooksSettingsDisplayedAttributesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['displayed-attributes'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesBooksSettingsDisplayedAttributesKey() {
  return ['indexes', '/indexes/books/settings/displayed-attributes', 'PUT'] as const
}

export function usePutIndexesBooksSettingsDisplayedAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes.books.settings)['displayed-attributes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesBooksSettingsDisplayedAttributesKey()
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
            (typeof client.indexes.books.settings)['displayed-attributes']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes.books.settings['displayed-attributes'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesBooksSettingsDisplayedAttributesKey() {
  return ['indexes', '/indexes/books/settings/displayed-attributes', 'DELETE'] as const
}

export function useDeleteIndexesBooksSettingsDisplayedAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$delete']>
          >
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
  const swrKey = customKey ?? getDeleteIndexesBooksSettingsDisplayedAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['displayed-attributes'].$delete(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesBooksSettingsDistinctAttributeKey() {
  return ['indexes', '/indexes/books/settings/distinct-attribute'] as const
}

export function useGetIndexesBooksSettingsDistinctAttribute<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$get']>>
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
        ? getGetIndexesBooksSettingsDistinctAttributeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['distinct-attribute'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooksSettingsDistinctAttribute<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$get']>>
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
        ? getGetIndexesBooksSettingsDistinctAttributeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['distinct-attribute'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesBooksSettingsDistinctAttributeKey() {
  return ['indexes', '/indexes/books/settings/distinct-attribute', 'PUT'] as const
}

export function usePutIndexesBooksSettingsDistinctAttribute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$put']>>
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
  const swrKey = customKey ?? getPutIndexesBooksSettingsDistinctAttributeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['distinct-attribute'].$put(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesBooksSettingsDistinctAttributeKey() {
  return ['indexes', '/indexes/books/settings/distinct-attribute', 'DELETE'] as const
}

export function useDeleteIndexesBooksSettingsDistinctAttribute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$delete']>
          >
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
  const swrKey = customKey ?? getDeleteIndexesBooksSettingsDistinctAttributeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['distinct-attribute'].$delete(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesBooksSettingsFacetingKey() {
  return ['indexes', '/indexes/books/settings/faceting'] as const
}

export function useGetIndexesBooksSettingsFaceting<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$get>>
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
        ? getGetIndexesBooksSettingsFacetingKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes.books.settings.faceting.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooksSettingsFaceting<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$get>>
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
        ? getGetIndexesBooksSettingsFacetingKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes.books.settings.faceting.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIndexesBooksSettingsFacetingKey() {
  return ['indexes', '/indexes/books/settings/faceting', 'DELETE'] as const
}

export function useDeleteIndexesBooksSettingsFaceting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$delete>>
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
  const swrKey = customKey ?? getDeleteIndexesBooksSettingsFacetingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.indexes.books.settings.faceting.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIndexesBooksSettingsFacetingKey() {
  return ['indexes', '/indexes/books/settings/faceting', 'PATCH'] as const
}

export function usePatchIndexesBooksSettingsFaceting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.indexes.books.settings.faceting.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIndexesBooksSettingsFacetingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.indexes.books.settings.faceting.$patch> },
      ) => parseResponse(client.indexes.books.settings.faceting.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesBooksSettingsFilterableAttributesKey() {
  return ['indexes', '/indexes/books/settings/filterable-attributes'] as const
}

export function useGetIndexesBooksSettingsFilterableAttributes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['filterable-attributes']['$get']>
          >
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
        ? getGetIndexesBooksSettingsFilterableAttributesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes.books.settings)['filterable-attributes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['filterable-attributes'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooksSettingsFilterableAttributes<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['filterable-attributes']['$get']>
          >
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
        ? getGetIndexesBooksSettingsFilterableAttributesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes.books.settings)['filterable-attributes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['filterable-attributes'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesBooksSettingsFilterableAttributesKey() {
  return ['indexes', '/indexes/books/settings/filterable-attributes', 'PUT'] as const
}

export function usePutIndexesBooksSettingsFilterableAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['filterable-attributes']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes.books.settings)['filterable-attributes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesBooksSettingsFilterableAttributesKey()
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
            (typeof client.indexes.books.settings)['filterable-attributes']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes.books.settings['filterable-attributes'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesBooksSettingsFilterableAttributesKey() {
  return ['indexes', '/indexes/books/settings/filterable-attributes', 'DELETE'] as const
}

export function useDeleteIndexesBooksSettingsFilterableAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['filterable-attributes']['$delete']>
          >
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
  const swrKey = customKey ?? getDeleteIndexesBooksSettingsFilterableAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['filterable-attributes'].$delete(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesBooksSettingsPaginationKey() {
  return ['indexes', '/indexes/books/settings/pagination'] as const
}

export function useGetIndexesBooksSettingsPagination<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$get>>
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
        ? getGetIndexesBooksSettingsPaginationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes.books.settings.pagination.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooksSettingsPagination<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$get>>
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
        ? getGetIndexesBooksSettingsPaginationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes.books.settings.pagination.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIndexesBooksSettingsPaginationKey() {
  return ['indexes', '/indexes/books/settings/pagination', 'DELETE'] as const
}

export function useDeleteIndexesBooksSettingsPagination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$delete>>
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
  const swrKey = customKey ?? getDeleteIndexesBooksSettingsPaginationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.indexes.books.settings.pagination.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIndexesBooksSettingsPaginationKey() {
  return ['indexes', '/indexes/books/settings/pagination', 'PATCH'] as const
}

export function usePatchIndexesBooksSettingsPagination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.indexes.books.settings.pagination.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIndexesBooksSettingsPaginationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.indexes.books.settings.pagination.$patch> },
      ) => parseResponse(client.indexes.books.settings.pagination.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesBooksSettingsRankingRulesKey() {
  return ['indexes', '/indexes/books/settings/ranking-rules'] as const
}

export function useGetIndexesBooksSettingsRankingRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$get']>>
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
        ? getGetIndexesBooksSettingsRankingRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['ranking-rules'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooksSettingsRankingRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$get']>>
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
        ? getGetIndexesBooksSettingsRankingRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['ranking-rules'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesBooksSettingsRankingRulesKey() {
  return ['indexes', '/indexes/books/settings/ranking-rules', 'PUT'] as const
}

export function usePutIndexesBooksSettingsRankingRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes.books.settings)['ranking-rules']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesBooksSettingsRankingRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.indexes.books.settings)['ranking-rules']['$put']>
        },
      ) => parseResponse(client.indexes.books.settings['ranking-rules'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesBooksSettingsRankingRulesKey() {
  return ['indexes', '/indexes/books/settings/ranking-rules', 'DELETE'] as const
}

export function useDeleteIndexesBooksSettingsRankingRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$delete']>>
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
  const swrKey = customKey ?? getDeleteIndexesBooksSettingsRankingRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['ranking-rules'].$delete(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesBooksSettingsSearchableAttributesKey() {
  return ['indexes', '/indexes/books/settings/searchable-attributes'] as const
}

export function useGetIndexesBooksSettingsSearchableAttributes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['searchable-attributes']['$get']>
          >
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
        ? getGetIndexesBooksSettingsSearchableAttributesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes.books.settings)['searchable-attributes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['searchable-attributes'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooksSettingsSearchableAttributes<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['searchable-attributes']['$get']>
          >
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
        ? getGetIndexesBooksSettingsSearchableAttributesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes.books.settings)['searchable-attributes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['searchable-attributes'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesBooksSettingsSearchableAttributesKey() {
  return ['indexes', '/indexes/books/settings/searchable-attributes', 'PUT'] as const
}

export function usePutIndexesBooksSettingsSearchableAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['searchable-attributes']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes.books.settings)['searchable-attributes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesBooksSettingsSearchableAttributesKey()
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
            (typeof client.indexes.books.settings)['searchable-attributes']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes.books.settings['searchable-attributes'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesBooksSettingsSearchableAttributesKey() {
  return ['indexes', '/indexes/books/settings/searchable-attributes', 'DELETE'] as const
}

export function useDeleteIndexesBooksSettingsSearchableAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['searchable-attributes']['$delete']>
          >
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
  const swrKey = customKey ?? getDeleteIndexesBooksSettingsSearchableAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['searchable-attributes'].$delete(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesBooksSettingsSortableAttributesKey() {
  return ['indexes', '/indexes/books/settings/sortable-attributes'] as const
}

export function useGetIndexesBooksSettingsSortableAttributes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$get']>>
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
        ? getGetIndexesBooksSettingsSortableAttributesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['sortable-attributes'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooksSettingsSortableAttributes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$get']>>
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
        ? getGetIndexesBooksSettingsSortableAttributesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['sortable-attributes'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesBooksSettingsSortableAttributesKey() {
  return ['indexes', '/indexes/books/settings/sortable-attributes', 'PUT'] as const
}

export function usePutIndexesBooksSettingsSortableAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes.books.settings)['sortable-attributes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesBooksSettingsSortableAttributesKey()
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
            (typeof client.indexes.books.settings)['sortable-attributes']['$put']
          >
        },
      ) =>
        parseResponse(
          client.indexes.books.settings['sortable-attributes'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesBooksSettingsSortableAttributesKey() {
  return ['indexes', '/indexes/books/settings/sortable-attributes', 'DELETE'] as const
}

export function useDeleteIndexesBooksSettingsSortableAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$delete']>
          >
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
  const swrKey = customKey ?? getDeleteIndexesBooksSettingsSortableAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['sortable-attributes'].$delete(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesBooksSettingsStopWordsKey(
  args: InferRequestType<(typeof client.indexes.books.settings)['stop-words']['$get']>,
) {
  return ['indexes', '/indexes/books/settings/stop-words', args] as const
}

export function useGetIndexesBooksSettingsStopWords<TError = unknown>(
  args: InferRequestType<(typeof client.indexes.books.settings)['stop-words']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesBooksSettingsStopWordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes.books.settings['stop-words'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooksSettingsStopWords<TError = unknown>(
  args: InferRequestType<(typeof client.indexes.books.settings)['stop-words']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesBooksSettingsStopWordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes.books.settings['stop-words'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesBooksSettingsStopWordsKey() {
  return ['indexes', '/indexes/books/settings/stop-words', 'PUT'] as const
}

export function usePutIndexesBooksSettingsStopWords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes.books.settings)['stop-words']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesBooksSettingsStopWordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.indexes.books.settings)['stop-words']['$put']> },
      ) => parseResponse(client.indexes.books.settings['stop-words'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesBooksSettingsStopWordsKey() {
  return ['indexes', '/indexes/books/settings/stop-words', 'DELETE'] as const
}

export function useDeleteIndexesBooksSettingsStopWords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$delete']>>
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
  const swrKey = customKey ?? getDeleteIndexesBooksSettingsStopWordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['stop-words'].$delete(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesBooksSettingsSynonymsKey() {
  return ['indexes', '/indexes/books/settings/synonyms'] as const
}

export function useGetIndexesBooksSettingsSynonyms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$get>>
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
        ? getGetIndexesBooksSettingsSynonymsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes.books.settings.synonyms.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooksSettingsSynonyms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$get>>
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
        ? getGetIndexesBooksSettingsSynonymsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.indexes.books.settings.synonyms.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIndexesBooksSettingsSynonymsKey() {
  return ['indexes', '/indexes/books/settings/synonyms', 'PUT'] as const
}

export function usePutIndexesBooksSettingsSynonyms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.indexes.books.settings.synonyms.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIndexesBooksSettingsSynonymsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.indexes.books.settings.synonyms.$put> },
      ) => parseResponse(client.indexes.books.settings.synonyms.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexesBooksSettingsSynonymsKey() {
  return ['indexes', '/indexes/books/settings/synonyms', 'DELETE'] as const
}

export function useDeleteIndexesBooksSettingsSynonyms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$delete>>
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
  const swrKey = customKey ?? getDeleteIndexesBooksSettingsSynonymsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.indexes.books.settings.synonyms.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesBooksSettingsTypoToleranceKey() {
  return ['indexes', '/indexes/books/settings/typo-tolerance'] as const
}

export function useGetIndexesBooksSettingsTypoTolerance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$get']>>
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
        ? getGetIndexesBooksSettingsTypoToleranceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['typo-tolerance'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooksSettingsTypoTolerance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$get']>>
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
        ? getGetIndexesBooksSettingsTypoToleranceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['typo-tolerance'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteIndexesBooksSettingsTypoToleranceKey() {
  return ['indexes', '/indexes/books/settings/typo-tolerance', 'DELETE'] as const
}

export function useDeleteIndexesBooksSettingsTypoTolerance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$delete']>>
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
  const swrKey = customKey ?? getDeleteIndexesBooksSettingsTypoToleranceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.indexes.books.settings['typo-tolerance'].$delete(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchIndexesBooksSettingsTypoToleranceKey() {
  return ['indexes', '/indexes/books/settings/typo-tolerance', 'PATCH'] as const
}

export function usePatchIndexesBooksSettingsTypoTolerance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes.books.settings)['typo-tolerance']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIndexesBooksSettingsTypoToleranceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.indexes.books.settings)['typo-tolerance']['$patch']>
        },
      ) =>
        parseResponse(client.indexes.books.settings['typo-tolerance'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesBooksStatsKey() {
  return ['indexes', '/indexes/books/stats'] as const
}

export function useGetIndexesBooksStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.stats.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndexesBooksStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.stats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes.books.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesBooksStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.stats.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndexesBooksStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.stats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes.books.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIndexesSwapIndexesKey() {
  return ['indexes', '/indexes/swap-indexes', 'POST'] as const
}

export function usePostIndexesSwapIndexes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)['swap-indexes']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)['swap-indexes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexesSwapIndexesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.indexes)['swap-indexes']['$post']> },
      ) => parseResponse(client.indexes['swap-indexes'].$post(arg, clientOptions)),
      restMutationOptions,
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

export function getGetKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705Key() {
  return [
    'keys',
    '/keys/L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705',
  ] as const
}

export function useGetKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.keys.L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705.$get
            >
          >
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
        ? getGetKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705Key()
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
                typeof client.keys.L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705.$get
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
          client.keys.L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.keys.L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705.$get
            >
          >
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
        ? getGetKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705Key()
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
                typeof client.keys.L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705.$get
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
          client.keys.L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5bKey() {
  return [
    'keys',
    '/keys/kN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b',
    'DELETE',
  ] as const
}

export function useDeleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.keys.kN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b.$delete
            >
          >
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
  const swrKey =
    customKey ??
    getDeleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5bKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.keys.kN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b.$delete(
            undefined,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2ddKey() {
  return [
    'keys',
    '/keys/wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd',
    'PATCH',
  ] as const
}

export function usePatchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.keys.wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd.$patch
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      typeof client.keys.wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd.$patch
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2ddKey()
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
            typeof client.keys.wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd.$patch
          >
        },
      ) =>
        parseResponse(
          client.keys.wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd.$patch(
            arg,
            clientOptions,
          ),
        ),
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

export function getGetTasks0Key() {
  return ['tasks', '/tasks/0'] as const
}

export function useGetTasks0<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)['0']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasks0Key() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)['0']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks['0'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasks0<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)['0']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasks0Key() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)['0']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks['0'].$get(undefined, clientOptions)),
      restSwrOptions,
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
