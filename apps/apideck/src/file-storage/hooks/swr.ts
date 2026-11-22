import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFileStorageKey() {
  return ['file-storage'] as const
}

export function getGetFileStorageDriveGroupsKey(
  args: InferRequestType<(typeof client)['file-storage']['drive-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/drive-groups', keyArgs] as const
}

export function useGetFileStorageDriveGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['drive-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['drive-groups']['$get']>>
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
        ? getGetFileStorageDriveGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['drive-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['file-storage']['drive-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileStorageDriveGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['drive-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['drive-groups']['$get']>>
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
        ? getGetFileStorageDriveGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['drive-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['file-storage']['drive-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFileStorageDriveGroupsKey() {
  return ['file-storage', '/file-storage/drive-groups', 'POST'] as const
}

export function usePostFileStorageDriveGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['drive-groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['drive-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileStorageDriveGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['file-storage']['drive-groups']['$post']> },
      ) => parseResponse(client['file-storage']['drive-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileStorageDriveGroupsIdKey(
  args: InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/drive-groups/:id', keyArgs] as const
}

export function useGetFileStorageDriveGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>>
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
        ? getGetFileStorageDriveGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['file-storage']['drive-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileStorageDriveGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>>
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
        ? getGetFileStorageDriveGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['file-storage']['drive-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFileStorageDriveGroupsIdKey() {
  return ['file-storage', '/file-storage/drive-groups/:id', 'DELETE'] as const
}

export function useDeleteFileStorageDriveGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFileStorageDriveGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$delete']>
        },
      ) => parseResponse(client['file-storage']['drive-groups'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFileStorageDriveGroupsIdKey() {
  return ['file-storage', '/file-storage/drive-groups/:id', 'PATCH'] as const
}

export function usePatchFileStorageDriveGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFileStorageDriveGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$patch']>
        },
      ) => parseResponse(client['file-storage']['drive-groups'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileStorageDrivesKey(
  args: InferRequestType<(typeof client)['file-storage']['drives']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/drives', keyArgs] as const
}

export function useGetFileStorageDrives<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['drives']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['drives']['$get']>>
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
        ? getGetFileStorageDrivesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['drives']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['file-storage'].drives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileStorageDrives<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['drives']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['drives']['$get']>>
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
        ? getGetFileStorageDrivesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['drives']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['file-storage'].drives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFileStorageDrivesKey() {
  return ['file-storage', '/file-storage/drives', 'POST'] as const
}

export function usePostFileStorageDrives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['drives']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['drives']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileStorageDrivesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['file-storage']['drives']['$post']> },
      ) => parseResponse(client['file-storage'].drives.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileStorageDrivesIdKey(
  args: InferRequestType<(typeof client)['file-storage']['drives'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/drives/:id', keyArgs] as const
}

export function useGetFileStorageDrivesId<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['drives'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$get']>>
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
        ? getGetFileStorageDrivesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['file-storage'].drives[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileStorageDrivesId<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['drives'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$get']>>
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
        ? getGetFileStorageDrivesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['file-storage'].drives[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFileStorageDrivesIdKey() {
  return ['file-storage', '/file-storage/drives/:id', 'DELETE'] as const
}

export function useDeleteFileStorageDrivesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['drives'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFileStorageDrivesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['file-storage']['drives'][':id']['$delete']> },
      ) => parseResponse(client['file-storage'].drives[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFileStorageDrivesIdKey() {
  return ['file-storage', '/file-storage/drives/:id', 'PATCH'] as const
}

export function usePatchFileStorageDrivesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['drives'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFileStorageDrivesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['file-storage']['drives'][':id']['$patch']> },
      ) => parseResponse(client['file-storage'].drives[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileStorageFilesKey(
  args: InferRequestType<(typeof client)['file-storage']['files']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/files', keyArgs] as const
}

export function useGetFileStorageFiles<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['files']['$get']>>
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
        ? getGetFileStorageFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['file-storage'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileStorageFiles<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['files']['$get']>>
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
        ? getGetFileStorageFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['file-storage'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFileStorageFilesKey() {
  return ['file-storage', '/file-storage/files', 'POST'] as const
}

export function usePostFileStorageFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['file-storage']['files']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['files']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileStorageFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['file-storage']['files']['$post']> },
      ) => parseResponse(client['file-storage'].files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFileStorageFilesSearchKey() {
  return ['file-storage', '/file-storage/files/search', 'POST'] as const
}

export function usePostFileStorageFilesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['files']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['files']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileStorageFilesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['file-storage']['files']['search']['$post']> },
      ) => parseResponse(client['file-storage'].files.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileStorageFilesIdKey(
  args: InferRequestType<(typeof client)['file-storage']['files'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/files/:id', keyArgs] as const
}

export function useGetFileStorageFilesId<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['files'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$get']>>
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
        ? getGetFileStorageFilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['file-storage'].files[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileStorageFilesId<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['files'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$get']>>
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
        ? getGetFileStorageFilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['file-storage'].files[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFileStorageFilesIdKey() {
  return ['file-storage', '/file-storage/files/:id', 'DELETE'] as const
}

export function useDeleteFileStorageFilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['files'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFileStorageFilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['file-storage']['files'][':id']['$delete']> },
      ) => parseResponse(client['file-storage'].files[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFileStorageFilesIdKey() {
  return ['file-storage', '/file-storage/files/:id', 'PATCH'] as const
}

export function usePatchFileStorageFilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['files'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFileStorageFilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['file-storage']['files'][':id']['$patch']> },
      ) => parseResponse(client['file-storage'].files[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileStorageFilesIdDownloadKey(
  args: InferRequestType<(typeof client)['file-storage']['files'][':id']['download']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/files/:id/download', keyArgs] as const
}

export function useGetFileStorageFilesIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['files'][':id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['download']['$get']>>
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
        ? getGetFileStorageFilesIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['file-storage'].files[':id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileStorageFilesIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['files'][':id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['download']['$get']>>
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
        ? getGetFileStorageFilesIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['file-storage'].files[':id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFileStorageFoldersKey() {
  return ['file-storage', '/file-storage/folders', 'POST'] as const
}

export function usePostFileStorageFolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['folders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['folders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileStorageFoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['file-storage']['folders']['$post']> },
      ) => parseResponse(client['file-storage'].folders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileStorageFoldersIdKey(
  args: InferRequestType<(typeof client)['file-storage']['folders'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/folders/:id', keyArgs] as const
}

export function useGetFileStorageFoldersId<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['folders'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$get']>>
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
        ? getGetFileStorageFoldersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['file-storage'].folders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileStorageFoldersId<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['folders'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$get']>>
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
        ? getGetFileStorageFoldersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['file-storage'].folders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFileStorageFoldersIdKey() {
  return ['file-storage', '/file-storage/folders/:id', 'DELETE'] as const
}

export function useDeleteFileStorageFoldersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['folders'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFileStorageFoldersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['file-storage']['folders'][':id']['$delete']> },
      ) => parseResponse(client['file-storage'].folders[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFileStorageFoldersIdKey() {
  return ['file-storage', '/file-storage/folders/:id', 'PATCH'] as const
}

export function usePatchFileStorageFoldersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['folders'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFileStorageFoldersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['file-storage']['folders'][':id']['$patch']> },
      ) => parseResponse(client['file-storage'].folders[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFileStorageFoldersIdCopyKey() {
  return ['file-storage', '/file-storage/folders/:id/copy', 'POST'] as const
}

export function usePostFileStorageFoldersIdCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['copy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['folders'][':id']['copy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileStorageFoldersIdCopyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['file-storage']['folders'][':id']['copy']['$post']>
        },
      ) => parseResponse(client['file-storage'].folders[':id'].copy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileStorageSharedLinksKey(
  args: InferRequestType<(typeof client)['file-storage']['shared-links']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/shared-links', keyArgs] as const
}

export function useGetFileStorageSharedLinks<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['shared-links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['shared-links']['$get']>>
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
        ? getGetFileStorageSharedLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['shared-links']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['file-storage']['shared-links'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileStorageSharedLinks<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['shared-links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['shared-links']['$get']>>
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
        ? getGetFileStorageSharedLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['shared-links']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['file-storage']['shared-links'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFileStorageSharedLinksKey() {
  return ['file-storage', '/file-storage/shared-links', 'POST'] as const
}

export function usePostFileStorageSharedLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['shared-links']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['shared-links']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileStorageSharedLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['file-storage']['shared-links']['$post']> },
      ) => parseResponse(client['file-storage']['shared-links'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileStorageSharedLinksIdKey(
  args: InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/shared-links/:id', keyArgs] as const
}

export function useGetFileStorageSharedLinksId<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$get']>>
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
        ? getGetFileStorageSharedLinksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['file-storage']['shared-links'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileStorageSharedLinksId<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$get']>>
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
        ? getGetFileStorageSharedLinksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['file-storage']['shared-links'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFileStorageSharedLinksIdKey() {
  return ['file-storage', '/file-storage/shared-links/:id', 'DELETE'] as const
}

export function useDeleteFileStorageSharedLinksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFileStorageSharedLinksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$delete']>
        },
      ) => parseResponse(client['file-storage']['shared-links'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFileStorageSharedLinksIdKey() {
  return ['file-storage', '/file-storage/shared-links/:id', 'PATCH'] as const
}

export function usePatchFileStorageSharedLinksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFileStorageSharedLinksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$patch']>
        },
      ) => parseResponse(client['file-storage']['shared-links'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFileStorageUploadSessionsKey() {
  return ['file-storage', '/file-storage/upload-sessions', 'POST'] as const
}

export function usePostFileStorageUploadSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['upload-sessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileStorageUploadSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['file-storage']['upload-sessions']['$post']> },
      ) => parseResponse(client['file-storage']['upload-sessions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileStorageUploadSessionsIdKey(
  args: InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/upload-sessions/:id', keyArgs] as const
}

export function useGetFileStorageUploadSessionsId<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>>
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
        ? getGetFileStorageUploadSessionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['file-storage']['upload-sessions'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileStorageUploadSessionsId<TError = unknown>(
  args: InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>>
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
        ? getGetFileStorageUploadSessionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['file-storage']['upload-sessions'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFileStorageUploadSessionsIdKey() {
  return ['file-storage', '/file-storage/upload-sessions/:id', 'PUT'] as const
}

export function usePutFileStorageUploadSessionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFileStorageUploadSessionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$put']>
        },
      ) => parseResponse(client['file-storage']['upload-sessions'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFileStorageUploadSessionsIdKey() {
  return ['file-storage', '/file-storage/upload-sessions/:id', 'DELETE'] as const
}

export function useDeleteFileStorageUploadSessionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFileStorageUploadSessionsIdKey()
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
            (typeof client)['file-storage']['upload-sessions'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client['file-storage']['upload-sessions'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFileStorageUploadSessionsIdFinishKey() {
  return ['file-storage', '/file-storage/upload-sessions/:id/finish', 'POST'] as const
}

export function usePostFileStorageUploadSessionsIdFinish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['finish']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['finish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileStorageUploadSessionsIdFinishKey()
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
            (typeof client)['file-storage']['upload-sessions'][':id']['finish']['$post']
          >
        },
      ) =>
        parseResponse(
          client['file-storage']['upload-sessions'][':id'].finish.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
