import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBackupsKey() {
  return ['backups'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getIndexesKey() {
  return ['indexes'] as const
}

export function getRestoreJobsKey() {
  return ['restore-jobs'] as const
}

export function getGetIndexesKey() {
  return ['indexes', '/indexes'] as const
}

export function useGetIndexes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndexesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndexesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
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

export function getGetIndexesIndexNameKey(
  args: InferRequestType<(typeof client.indexes)[':index_name']['$get']>,
) {
  return ['indexes', '/indexes/:index_name', args] as const
}

export function useGetIndexesIndexName<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':index_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':index_name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':index_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':index_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexName<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':index_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':index_name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':index_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':index_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIndexesIndexNameKey() {
  return ['indexes', '/indexes/:index_name', 'DELETE'] as const
}

export function useDeleteIndexesIndexName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':index_name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':index_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.indexes)[':index_name']['$delete']> },
      ) => parseResponse(client.indexes[':index_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIndexesIndexNameKey() {
  return ['indexes', '/indexes/:index_name', 'PATCH'] as const
}

export function usePatchIndexesIndexName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':index_name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':index_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIndexesIndexNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.indexes)[':index_name']['$patch']> },
      ) => parseResponse(client.indexes[':index_name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexNameBackupsKey(
  args: InferRequestType<(typeof client.indexes)[':index_name']['backups']['$get']>,
) {
  return ['indexes', '/indexes/:index_name/backups', args] as const
}

export function useGetIndexesIndexNameBackups<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':index_name']['backups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':index_name']['backups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexNameBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':index_name']['backups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':index_name'].backups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexNameBackups<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':index_name']['backups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':index_name']['backups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexesIndexNameBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.indexes)[':index_name']['backups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':index_name'].backups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIndexesIndexNameBackupsKey() {
  return ['indexes', '/indexes/:index_name/backups', 'POST'] as const
}

export function usePostIndexesIndexNameBackups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':index_name']['backups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':index_name']['backups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexesIndexNameBackupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.indexes)[':index_name']['backups']['$post']> },
      ) => parseResponse(client.indexes[':index_name'].backups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsKey() {
  return ['collections', '/collections'] as const
}

export function useGetCollections<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollections<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsKey() {
  return ['collections', '/collections', 'POST'] as const
}

export function usePostCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.collections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.collections.$post> }) =>
        parseResponse(client.collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIndexesCreateForModelKey() {
  return ['indexes', '/indexes/create-for-model', 'POST'] as const
}

export function usePostIndexesCreateForModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)['create-for-model']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)['create-for-model']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexesCreateForModelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.indexes)['create-for-model']['$post']> },
      ) => parseResponse(client.indexes['create-for-model'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBackupsKey(args: InferRequestType<typeof client.backups.$get>) {
  return ['backups', '/backups', args] as const
}

export function useGetBackups<TError = unknown>(
  args: InferRequestType<typeof client.backups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBackupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.backups.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBackups<TError = unknown>(
  args: InferRequestType<typeof client.backups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBackupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.backups.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBackupsBackupIdKey(
  args: InferRequestType<(typeof client.backups)[':backup_id']['$get']>,
) {
  return ['backups', '/backups/:backup_id', args] as const
}

export function useGetBackupsBackupId<TError = unknown>(
  args: InferRequestType<(typeof client.backups)[':backup_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backup_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBackupsBackupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backup_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backups[':backup_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupsBackupId<TError = unknown>(
  args: InferRequestType<(typeof client.backups)[':backup_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backup_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBackupsBackupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backup_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backups[':backup_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBackupsBackupIdKey() {
  return ['backups', '/backups/:backup_id', 'DELETE'] as const
}

export function useDeleteBackupsBackupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backup_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.backups)[':backup_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBackupsBackupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.backups)[':backup_id']['$delete']> },
      ) => parseResponse(client.backups[':backup_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBackupsBackupIdCreateIndexKey() {
  return ['backups', '/backups/:backup_id/create-index', 'POST'] as const
}

export function usePostBackupsBackupIdCreateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backups)[':backup_id']['create-index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.backups)[':backup_id']['create-index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackupsBackupIdCreateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.backups)[':backup_id']['create-index']['$post']>
        },
      ) => parseResponse(client.backups[':backup_id']['create-index'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestoreJobsKey(
  args: InferRequestType<(typeof client)['restore-jobs']['$get']>,
) {
  return ['restore-jobs', '/restore-jobs', args] as const
}

export function useGetRestoreJobs<TError = unknown>(
  args: InferRequestType<(typeof client)['restore-jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestoreJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['restore-jobs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestoreJobs<TError = unknown>(
  args: InferRequestType<(typeof client)['restore-jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestoreJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['restore-jobs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestoreJobsJobIdKey(
  args: InferRequestType<(typeof client)['restore-jobs'][':job_id']['$get']>,
) {
  return ['restore-jobs', '/restore-jobs/:job_id', args] as const
}

export function useGetRestoreJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client)['restore-jobs'][':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['restore-jobs'][':job_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestoreJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['restore-jobs'][':job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['restore-jobs'][':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestoreJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client)['restore-jobs'][':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['restore-jobs'][':job_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestoreJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['restore-jobs'][':job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['restore-jobs'][':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionsCollectionNameKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$get']>,
) {
  return ['collections', '/collections/:collection_name', args] as const
}

export function useGetCollectionsCollectionName<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollectionsCollectionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections[':collection_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionName<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollectionsCollectionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections[':collection_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionNameKey() {
  return ['collections', '/collections/:collection_name', 'DELETE'] as const
}

export function useDeleteCollectionsCollectionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollectionsCollectionNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.collections)[':collection_name']['$delete']> },
      ) => parseResponse(client.collections[':collection_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
