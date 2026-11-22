import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getGetCrmLists202609Key(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['$get']>,
) {
  return ['crm', '/crm/lists/2026-09', args] as const
}

export function useGetCrmLists202609<TError = unknown>(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrmLists202609Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.lists['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmLists202609<TError = unknown>(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrmLists202609Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.lists['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmLists202609Key() {
  return ['crm', '/crm/lists/2026-09', 'POST'] as const
}

export function usePostCrmLists202609<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.lists)['2026-09']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmLists202609Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.crm.lists)['2026-09']['$post']> },
      ) => parseResponse(client.crm.lists['2026-09'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmLists202609FoldersKey(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['$get']>,
) {
  return ['crm', '/crm/lists/2026-09/folders', args] as const
}

export function useGetCrmLists202609Folders<TError = unknown>(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['folders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmLists202609FoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['folders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.lists['2026-09'].folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmLists202609Folders<TError = unknown>(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['folders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmLists202609FoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['folders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.lists['2026-09'].folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmLists202609FoldersKey() {
  return ['crm', '/crm/lists/2026-09/folders', 'POST'] as const
}

export function usePostCrmLists202609Folders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['folders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmLists202609FoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['$post']> },
      ) => parseResponse(client.crm.lists['2026-09'].folders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCrmLists202609FoldersMoveListKey() {
  return ['crm', '/crm/lists/2026-09/folders/move-list', 'PUT'] as const
}

export function usePutCrmLists202609FoldersMoveList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.lists)['2026-09']['folders']['move-list']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['move-list']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmLists202609FoldersMoveListKey()
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
            (typeof client.crm.lists)['2026-09']['folders']['move-list']['$put']
          >
        },
      ) => parseResponse(client.crm.lists['2026-09'].folders['move-list'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCrmLists202609FoldersFolderIdKey() {
  return ['crm', '/crm/lists/2026-09/folders/:folderId', 'DELETE'] as const
}

export function useDeleteCrmLists202609FoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.lists)['2026-09']['folders'][':folderId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.lists)['2026-09']['folders'][':folderId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmLists202609FoldersFolderIdKey()
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
            (typeof client.crm.lists)['2026-09']['folders'][':folderId']['$delete']
          >
        },
      ) =>
        parseResponse(client.crm.lists['2026-09'].folders[':folderId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCrmLists202609FoldersFolderIdMoveNewParentFolderIdKey() {
  return ['crm', '/crm/lists/2026-09/folders/:folderId/move/:newParentFolderId', 'PUT'] as const
}

export function usePutCrmLists202609FoldersFolderIdMoveNewParentFolderId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.lists)['2026-09']['folders'][':folderId']['move'][':newParentFolderId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.lists)['2026-09']['folders'][':folderId']['move'][':newParentFolderId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmLists202609FoldersFolderIdMoveNewParentFolderIdKey()
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
            (typeof client.crm.lists)['2026-09']['folders'][':folderId']['move'][':newParentFolderId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.lists['2026-09'].folders[':folderId'].move[':newParentFolderId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCrmLists202609FoldersFolderIdRenameKey() {
  return ['crm', '/crm/lists/2026-09/folders/:folderId/rename', 'PUT'] as const
}

export function usePutCrmLists202609FoldersFolderIdRename<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.lists)['2026-09']['folders'][':folderId']['rename']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.lists)['2026-09']['folders'][':folderId']['rename']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmLists202609FoldersFolderIdRenameKey()
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
            (typeof client.crm.lists)['2026-09']['folders'][':folderId']['rename']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.lists['2026-09'].folders[':folderId'].rename.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmLists202609IdmappingKey(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['idmapping']['$get']>,
) {
  return ['crm', '/crm/lists/2026-09/idmapping', args] as const
}

export function useGetCrmLists202609Idmapping<TError = unknown>(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['idmapping']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['idmapping']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmLists202609IdmappingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['idmapping']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.lists['2026-09'].idmapping.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmLists202609Idmapping<TError = unknown>(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['idmapping']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['idmapping']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmLists202609IdmappingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['idmapping']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.lists['2026-09'].idmapping.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmLists202609IdmappingKey() {
  return ['crm', '/crm/lists/2026-09/idmapping', 'POST'] as const
}

export function usePostCrmLists202609Idmapping<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['idmapping']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.lists)['2026-09']['idmapping']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmLists202609IdmappingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.crm.lists)['2026-09']['idmapping']['$post']> },
      ) => parseResponse(client.crm.lists['2026-09'].idmapping.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmLists202609ObjectTypeIdObjectTypeIdNameListNameKey(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09']['object-type-id'][':objectTypeId']['name'][':listName']['$get']
  >,
) {
  return ['crm', '/crm/lists/2026-09/object-type-id/:objectTypeId/name/:listName', args] as const
}

export function useGetCrmLists202609ObjectTypeIdObjectTypeIdNameListName<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09']['object-type-id'][':objectTypeId']['name'][':listName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.lists)['2026-09']['object-type-id'][':objectTypeId']['name'][':listName']['$get']
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
        ? getGetCrmLists202609ObjectTypeIdObjectTypeIdNameListNameKey(args)
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
                (typeof client.crm.lists)['2026-09']['object-type-id'][':objectTypeId']['name'][':listName']['$get']
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
          client.crm.lists['2026-09']['object-type-id'][':objectTypeId'].name[':listName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmLists202609ObjectTypeIdObjectTypeIdNameListName<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09']['object-type-id'][':objectTypeId']['name'][':listName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.lists)['2026-09']['object-type-id'][':objectTypeId']['name'][':listName']['$get']
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
        ? getGetCrmLists202609ObjectTypeIdObjectTypeIdNameListNameKey(args)
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
                (typeof client.crm.lists)['2026-09']['object-type-id'][':objectTypeId']['name'][':listName']['$get']
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
          client.crm.lists['2026-09']['object-type-id'][':objectTypeId'].name[':listName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCrmLists202609RecordsMembershipsBatchReadKey() {
  return ['crm', '/crm/lists/2026-09/records/memberships/batch/read', 'POST'] as const
}

export function usePostCrmLists202609RecordsMembershipsBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.lists)['2026-09']['records']['memberships']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.lists)['2026-09']['records']['memberships']['batch']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmLists202609RecordsMembershipsBatchReadKey()
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
            (typeof client.crm.lists)['2026-09']['records']['memberships']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.lists['2026-09'].records.memberships.batch.read.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmLists202609RecordsObjectTypeIdRecordIdMembershipsKey(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09']['records'][':objectTypeId'][':recordId']['memberships']['$get']
  >,
) {
  return ['crm', '/crm/lists/2026-09/records/:objectTypeId/:recordId/memberships', args] as const
}

export function useGetCrmLists202609RecordsObjectTypeIdRecordIdMemberships<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09']['records'][':objectTypeId'][':recordId']['memberships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.lists)['2026-09']['records'][':objectTypeId'][':recordId']['memberships']['$get']
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
        ? getGetCrmLists202609RecordsObjectTypeIdRecordIdMembershipsKey(args)
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
                (typeof client.crm.lists)['2026-09']['records'][':objectTypeId'][':recordId']['memberships']['$get']
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
          client.crm.lists['2026-09'].records[':objectTypeId'][':recordId'].memberships.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmLists202609RecordsObjectTypeIdRecordIdMemberships<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09']['records'][':objectTypeId'][':recordId']['memberships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.lists)['2026-09']['records'][':objectTypeId'][':recordId']['memberships']['$get']
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
        ? getGetCrmLists202609RecordsObjectTypeIdRecordIdMembershipsKey(args)
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
                (typeof client.crm.lists)['2026-09']['records'][':objectTypeId'][':recordId']['memberships']['$get']
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
          client.crm.lists['2026-09'].records[':objectTypeId'][':recordId'].memberships.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCrmLists202609SearchKey() {
  return ['crm', '/crm/lists/2026-09/search', 'POST'] as const
}

export function usePostCrmLists202609Search<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.lists)['2026-09']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmLists202609SearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.crm.lists)['2026-09']['search']['$post']> },
      ) => parseResponse(client.crm.lists['2026-09'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmLists202609ListIdKey(
  args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['$get']>,
) {
  return ['crm', '/crm/lists/2026-09/:listId', args] as const
}

export function useGetCrmLists202609ListId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmLists202609ListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.lists['2026-09'][':listId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmLists202609ListId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmLists202609ListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.lists['2026-09'][':listId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmLists202609ListIdKey() {
  return ['crm', '/crm/lists/2026-09/:listId', 'DELETE'] as const
}

export function useDeleteCrmLists202609ListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmLists202609ListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['$delete']> },
      ) => parseResponse(client.crm.lists['2026-09'][':listId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmLists202609ListIdMembershipsKey(
  args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$get']>,
) {
  return ['crm', '/crm/lists/2026-09/:listId/memberships', args] as const
}

export function useGetCrmLists202609ListIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$get']>
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
        ? getGetCrmLists202609ListIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.lists['2026-09'][':listId'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmLists202609ListIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$get']>
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
        ? getGetCrmLists202609ListIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.lists['2026-09'][':listId'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmLists202609ListIdMembershipsKey() {
  return ['crm', '/crm/lists/2026-09/:listId/memberships', 'DELETE'] as const
}

export function useDeleteCrmLists202609ListIdMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmLists202609ListIdMembershipsKey()
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
            (typeof client.crm.lists)['2026-09'][':listId']['memberships']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.lists['2026-09'][':listId'].memberships.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCrmLists202609ListIdMembershipsAddKey() {
  return ['crm', '/crm/lists/2026-09/:listId/memberships/add', 'PUT'] as const
}

export function usePutCrmLists202609ListIdMembershipsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['add']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmLists202609ListIdMembershipsAddKey()
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
            (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.lists['2026-09'][':listId'].memberships.add.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCrmLists202609ListIdMembershipsAddAndRemoveKey() {
  return ['crm', '/crm/lists/2026-09/:listId/memberships/add-and-remove', 'PUT'] as const
}

export function usePutCrmLists202609ListIdMembershipsAddAndRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add-and-remove']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add-and-remove']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmLists202609ListIdMembershipsAddAndRemoveKey()
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
            (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add-and-remove']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.lists['2026-09'][':listId'].memberships['add-and-remove'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCrmLists202609ListIdMembershipsAddFromSourceListIdKey() {
  return ['crm', '/crm/lists/2026-09/:listId/memberships/add-from/:sourceListId', 'PUT'] as const
}

export function usePutCrmLists202609ListIdMembershipsAddFromSourceListId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add-from'][':sourceListId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add-from'][':sourceListId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmLists202609ListIdMembershipsAddFromSourceListIdKey()
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
            (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add-from'][':sourceListId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.lists['2026-09'][':listId'].memberships['add-from'][':sourceListId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmLists202609ListIdMembershipsJoinOrderKey(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['memberships']['join-order']['$get']
  >,
) {
  return ['crm', '/crm/lists/2026-09/:listId/memberships/join-order', args] as const
}

export function useGetCrmLists202609ListIdMembershipsJoinOrder<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['memberships']['join-order']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.lists)['2026-09'][':listId']['memberships']['join-order']['$get']
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
        ? getGetCrmLists202609ListIdMembershipsJoinOrderKey(args)
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
                (typeof client.crm.lists)['2026-09'][':listId']['memberships']['join-order']['$get']
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
          client.crm.lists['2026-09'][':listId'].memberships['join-order'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmLists202609ListIdMembershipsJoinOrder<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['memberships']['join-order']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.lists)['2026-09'][':listId']['memberships']['join-order']['$get']
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
        ? getGetCrmLists202609ListIdMembershipsJoinOrderKey(args)
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
                (typeof client.crm.lists)['2026-09'][':listId']['memberships']['join-order']['$get']
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
          client.crm.lists['2026-09'][':listId'].memberships['join-order'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCrmLists202609ListIdMembershipsRemoveKey() {
  return ['crm', '/crm/lists/2026-09/:listId/memberships/remove', 'PUT'] as const
}

export function usePutCrmLists202609ListIdMembershipsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.lists)['2026-09'][':listId']['memberships']['remove']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.lists)['2026-09'][':listId']['memberships']['remove']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmLists202609ListIdMembershipsRemoveKey()
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
            (typeof client.crm.lists)['2026-09'][':listId']['memberships']['remove']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.lists['2026-09'][':listId'].memberships.remove.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCrmLists202609ListIdRestoreKey() {
  return ['crm', '/crm/lists/2026-09/:listId/restore', 'PUT'] as const
}

export function usePutCrmLists202609ListIdRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['restore']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['restore']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmLists202609ListIdRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['restore']['$put']>
        },
      ) => parseResponse(client.crm.lists['2026-09'][':listId'].restore.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmLists202609ListIdScheduleConversionKey(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$get']
  >,
) {
  return ['crm', '/crm/lists/2026-09/:listId/schedule-conversion', args] as const
}

export function useGetCrmLists202609ListIdScheduleConversion<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$get']
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
        ? getGetCrmLists202609ListIdScheduleConversionKey(args)
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
                (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$get']
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
          client.crm.lists['2026-09'][':listId']['schedule-conversion'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmLists202609ListIdScheduleConversion<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$get']
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
        ? getGetCrmLists202609ListIdScheduleConversionKey(args)
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
                (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$get']
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
          client.crm.lists['2026-09'][':listId']['schedule-conversion'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCrmLists202609ListIdScheduleConversionKey() {
  return ['crm', '/crm/lists/2026-09/:listId/schedule-conversion', 'PUT'] as const
}

export function usePutCrmLists202609ListIdScheduleConversion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmLists202609ListIdScheduleConversionKey()
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
            (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.lists['2026-09'][':listId']['schedule-conversion'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCrmLists202609ListIdScheduleConversionKey() {
  return ['crm', '/crm/lists/2026-09/:listId/schedule-conversion', 'DELETE'] as const
}

export function useDeleteCrmLists202609ListIdScheduleConversion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmLists202609ListIdScheduleConversionKey()
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
            (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.lists['2026-09'][':listId']['schedule-conversion'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmLists202609ListIdSizeAndEditsHistoryBetweenKey(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['size-and-edits-history']['between']['$get']
  >,
) {
  return ['crm', '/crm/lists/2026-09/:listId/size-and-edits-history/between', args] as const
}

export function useGetCrmLists202609ListIdSizeAndEditsHistoryBetween<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['size-and-edits-history']['between']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.lists)['2026-09'][':listId']['size-and-edits-history']['between']['$get']
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
        ? getGetCrmLists202609ListIdSizeAndEditsHistoryBetweenKey(args)
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
                (typeof client.crm.lists)['2026-09'][':listId']['size-and-edits-history']['between']['$get']
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
          client.crm.lists['2026-09'][':listId']['size-and-edits-history'].between.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmLists202609ListIdSizeAndEditsHistoryBetween<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['size-and-edits-history']['between']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.lists)['2026-09'][':listId']['size-and-edits-history']['between']['$get']
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
        ? getGetCrmLists202609ListIdSizeAndEditsHistoryBetweenKey(args)
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
                (typeof client.crm.lists)['2026-09'][':listId']['size-and-edits-history']['between']['$get']
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
          client.crm.lists['2026-09'][':listId']['size-and-edits-history'].between.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCrmLists202609ListIdUpdateListFiltersKey() {
  return ['crm', '/crm/lists/2026-09/:listId/update-list-filters', 'PUT'] as const
}

export function usePutCrmLists202609ListIdUpdateListFilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.lists)['2026-09'][':listId']['update-list-filters']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['update-list-filters']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmLists202609ListIdUpdateListFiltersKey()
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
            (typeof client.crm.lists)['2026-09'][':listId']['update-list-filters']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.lists['2026-09'][':listId']['update-list-filters'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCrmLists202609ListIdUpdateListNameKey() {
  return ['crm', '/crm/lists/2026-09/:listId/update-list-name', 'PUT'] as const
}

export function usePutCrmLists202609ListIdUpdateListName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['update-list-name']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['update-list-name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmLists202609ListIdUpdateListNameKey()
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
            (typeof client.crm.lists)['2026-09'][':listId']['update-list-name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.lists['2026-09'][':listId']['update-list-name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
