import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmLists202609QueryKey(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['$get']>,
) {
  return ['crm', '/crm/lists/2026-09', args] as const
}

export function getCrmLists202609QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmLists202609QueryKey>
  >({
    queryKey: getCrmLists202609QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.lists['2026-09'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCrmLists202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crm.lists)['2026-09']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCrmLists202609QueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrmLists202609QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCrmLists202609MutationKey() {
  return ['crm', '/crm/lists/2026-09', 'POST'] as const
}

export function getPostCrmLists202609MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.lists)['2026-09']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmLists202609MutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.lists)['2026-09']['$post']>) {
      return parseResponse(client.crm.lists['2026-09'].$post(args, options))
    },
  })
}

export function createPostCrmLists202609<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.lists)['2026-09']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCrmLists202609MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCrmLists202609FoldersQueryKey(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['$get']>,
) {
  return ['crm', '/crm/lists/2026-09/folders', args] as const
}

export function getCrmLists202609FoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['folders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmLists202609FoldersQueryKey>
  >({
    queryKey: getCrmLists202609FoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.lists['2026-09'].folders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCrmLists202609Folders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['folders']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCrmLists202609FoldersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCrmLists202609FoldersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCrmLists202609FoldersMutationKey() {
  return ['crm', '/crm/lists/2026-09/folders', 'POST'] as const
}

export function getPostCrmLists202609FoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['folders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmLists202609FoldersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['$post']>,
    ) {
      return parseResponse(client.crm.lists['2026-09'].folders.$post(args, options))
    },
  })
}

export function createPostCrmLists202609Folders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['folders']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCrmLists202609FoldersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutCrmLists202609FoldersMoveListMutationKey() {
  return ['crm', '/crm/lists/2026-09/folders/move-list', 'PUT'] as const
}

export function getPutCrmLists202609FoldersMoveListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['move-list']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCrmLists202609FoldersMoveListMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['move-list']['$put']>,
    ) {
      return parseResponse(client.crm.lists['2026-09'].folders['move-list'].$put(args, options))
    },
  })
}

export function createPutCrmLists202609FoldersMoveList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client.crm.lists)['2026-09']['folders']['move-list']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCrmLists202609FoldersMoveListMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCrmLists202609FoldersFolderIdMutationKey() {
  return ['crm', '/crm/lists/2026-09/folders/:folderId', 'DELETE'] as const
}

export function getDeleteCrmLists202609FoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.crm.lists)['2026-09']['folders'][':folderId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmLists202609FoldersFolderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.lists)['2026-09']['folders'][':folderId']['$delete']
      >,
    ) {
      return parseResponse(client.crm.lists['2026-09'].folders[':folderId'].$delete(args, options))
    },
  })
}

export function createDeleteCrmLists202609FoldersFolderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.crm.lists)['2026-09']['folders'][':folderId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.crm.lists)['2026-09']['folders'][':folderId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCrmLists202609FoldersFolderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutCrmLists202609FoldersFolderIdMoveNewParentFolderIdMutationKey() {
  return ['crm', '/crm/lists/2026-09/folders/:folderId/move/:newParentFolderId', 'PUT'] as const
}

export function getPutCrmLists202609FoldersFolderIdMoveNewParentFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.crm.lists)['2026-09']['folders'][':folderId']['move'][':newParentFolderId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCrmLists202609FoldersFolderIdMoveNewParentFolderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.lists)['2026-09']['folders'][':folderId']['move'][':newParentFolderId']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.lists['2026-09'].folders[':folderId'].move[':newParentFolderId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutCrmLists202609FoldersFolderIdMoveNewParentFolderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.crm.lists)['2026-09']['folders'][':folderId']['move'][':newParentFolderId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCrmLists202609FoldersFolderIdMoveNewParentFolderIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutCrmLists202609FoldersFolderIdRenameMutationKey() {
  return ['crm', '/crm/lists/2026-09/folders/:folderId/rename', 'PUT'] as const
}

export function getPutCrmLists202609FoldersFolderIdRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.crm.lists)['2026-09']['folders'][':folderId']['rename']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCrmLists202609FoldersFolderIdRenameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.lists)['2026-09']['folders'][':folderId']['rename']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.lists['2026-09'].folders[':folderId'].rename.$put(args, options),
      )
    },
  })
}

export function createPutCrmLists202609FoldersFolderIdRename<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.crm.lists)['2026-09']['folders'][':folderId']['rename']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCrmLists202609FoldersFolderIdRenameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCrmLists202609IdmappingQueryKey(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['idmapping']['$get']>,
) {
  return ['crm', '/crm/lists/2026-09/idmapping', args] as const
}

export function getCrmLists202609IdmappingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['idmapping']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.lists)['2026-09']['idmapping']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['idmapping']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmLists202609IdmappingQueryKey>
  >({
    queryKey: getCrmLists202609IdmappingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.lists['2026-09'].idmapping.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCrmLists202609Idmapping<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['idmapping']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crm.lists)['2026-09']['idmapping']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['idmapping']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCrmLists202609IdmappingQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCrmLists202609IdmappingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCrmLists202609IdmappingMutationKey() {
  return ['crm', '/crm/lists/2026-09/idmapping', 'POST'] as const
}

export function getPostCrmLists202609IdmappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['idmapping']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.lists)['2026-09']['idmapping']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmLists202609IdmappingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm.lists)['2026-09']['idmapping']['$post']>,
    ) {
      return parseResponse(client.crm.lists['2026-09'].idmapping.$post(args, options))
    },
  })
}

export function createPostCrmLists202609Idmapping<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['idmapping']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.lists)['2026-09']['idmapping']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCrmLists202609IdmappingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCrmLists202609ObjectTypeIdObjectTypeIdNameListNameQueryKey(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09']['object-type-id'][':objectTypeId']['name'][':listName']['$get']
  >,
) {
  return ['crm', '/crm/lists/2026-09/object-type-id/:objectTypeId/name/:listName', args] as const
}

export function getCrmLists202609ObjectTypeIdObjectTypeIdNameListNameQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09']['object-type-id'][':objectTypeId']['name'][':listName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCrmLists202609ObjectTypeIdObjectTypeIdNameListNameQueryKey>
  >({
    queryKey: getCrmLists202609ObjectTypeIdObjectTypeIdNameListNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.lists['2026-09']['object-type-id'][':objectTypeId'].name[':listName'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCrmLists202609ObjectTypeIdObjectTypeIdNameListName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.crm.lists)['2026-09']['object-type-id'][':objectTypeId']['name'][':listName']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getCrmLists202609ObjectTypeIdObjectTypeIdNameListNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCrmLists202609ObjectTypeIdObjectTypeIdNameListNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostCrmLists202609RecordsMembershipsBatchReadMutationKey() {
  return ['crm', '/crm/lists/2026-09/records/memberships/batch/read', 'POST'] as const
}

export function getPostCrmLists202609RecordsMembershipsBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.crm.lists)['2026-09']['records']['memberships']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmLists202609RecordsMembershipsBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.lists)['2026-09']['records']['memberships']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.lists['2026-09'].records.memberships.batch.read.$post(args, options),
      )
    },
  })
}

export function createPostCrmLists202609RecordsMembershipsBatchRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.crm.lists)['2026-09']['records']['memberships']['batch']['read']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCrmLists202609RecordsMembershipsBatchReadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCrmLists202609RecordsObjectTypeIdRecordIdMembershipsQueryKey(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09']['records'][':objectTypeId'][':recordId']['memberships']['$get']
  >,
) {
  return ['crm', '/crm/lists/2026-09/records/:objectTypeId/:recordId/memberships', args] as const
}

export function getCrmLists202609RecordsObjectTypeIdRecordIdMembershipsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09']['records'][':objectTypeId'][':recordId']['memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCrmLists202609RecordsObjectTypeIdRecordIdMembershipsQueryKey>
  >({
    queryKey: getCrmLists202609RecordsObjectTypeIdRecordIdMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.lists['2026-09'].records[':objectTypeId'][':recordId'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCrmLists202609RecordsObjectTypeIdRecordIdMemberships<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.crm.lists)['2026-09']['records'][':objectTypeId'][':recordId']['memberships']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getCrmLists202609RecordsObjectTypeIdRecordIdMembershipsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCrmLists202609RecordsObjectTypeIdRecordIdMembershipsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostCrmLists202609SearchMutationKey() {
  return ['crm', '/crm/lists/2026-09/search', 'POST'] as const
}

export function getPostCrmLists202609SearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.lists)['2026-09']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmLists202609SearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm.lists)['2026-09']['search']['$post']>,
    ) {
      return parseResponse(client.crm.lists['2026-09'].search.$post(args, options))
    },
  })
}

export function createPostCrmLists202609Search<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.lists)['2026-09']['search']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.lists)['2026-09']['search']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCrmLists202609SearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCrmLists202609ListIdQueryKey(
  args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['$get']>,
) {
  return ['crm', '/crm/lists/2026-09/:listId', args] as const
}

export function getCrmLists202609ListIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmLists202609ListIdQueryKey>
  >({
    queryKey: getCrmLists202609ListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.lists['2026-09'][':listId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCrmLists202609ListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCrmLists202609ListIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCrmLists202609ListIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteCrmLists202609ListIdMutationKey() {
  return ['crm', '/crm/lists/2026-09/:listId', 'DELETE'] as const
}

export function getDeleteCrmLists202609ListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmLists202609ListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['$delete']>,
    ) {
      return parseResponse(client.crm.lists['2026-09'][':listId'].$delete(args, options))
    },
  })
}

export function createDeleteCrmLists202609ListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCrmLists202609ListIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCrmLists202609ListIdMembershipsQueryKey(
  args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$get']>,
) {
  return ['crm', '/crm/lists/2026-09/:listId/memberships', args] as const
}

export function getCrmLists202609ListIdMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmLists202609ListIdMembershipsQueryKey>
  >({
    queryKey: getCrmLists202609ListIdMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.lists['2026-09'][':listId'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCrmLists202609ListIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['memberships']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCrmLists202609ListIdMembershipsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCrmLists202609ListIdMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteCrmLists202609ListIdMembershipsMutationKey() {
  return ['crm', '/crm/lists/2026-09/:listId/memberships', 'DELETE'] as const
}

export function getDeleteCrmLists202609ListIdMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmLists202609ListIdMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.lists)['2026-09'][':listId']['memberships']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.lists['2026-09'][':listId'].memberships.$delete(args, options),
      )
    },
  })
}

export function createDeleteCrmLists202609ListIdMemberships<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.crm.lists)['2026-09'][':listId']['memberships']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.crm.lists)['2026-09'][':listId']['memberships']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCrmLists202609ListIdMembershipsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutCrmLists202609ListIdMembershipsAddMutationKey() {
  return ['crm', '/crm/lists/2026-09/:listId/memberships/add', 'PUT'] as const
}

export function getPutCrmLists202609ListIdMembershipsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['memberships']['add']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCrmLists202609ListIdMembershipsAddMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.lists['2026-09'][':listId'].memberships.add.$put(args, options),
      )
    },
  })
}

export function createPutCrmLists202609ListIdMembershipsAdd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCrmLists202609ListIdMembershipsAddMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutCrmLists202609ListIdMembershipsAddAndRemoveMutationKey() {
  return ['crm', '/crm/lists/2026-09/:listId/memberships/add-and-remove', 'PUT'] as const
}

export function getPutCrmLists202609ListIdMembershipsAddAndRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add-and-remove']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCrmLists202609ListIdMembershipsAddAndRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add-and-remove']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.lists['2026-09'][':listId'].memberships['add-and-remove'].$put(args, options),
      )
    },
  })
}

export function createPutCrmLists202609ListIdMembershipsAddAndRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add-and-remove']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCrmLists202609ListIdMembershipsAddAndRemoveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutCrmLists202609ListIdMembershipsAddFromSourceListIdMutationKey() {
  return ['crm', '/crm/lists/2026-09/:listId/memberships/add-from/:sourceListId', 'PUT'] as const
}

export function getPutCrmLists202609ListIdMembershipsAddFromSourceListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add-from'][':sourceListId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCrmLists202609ListIdMembershipsAddFromSourceListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add-from'][':sourceListId']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.lists['2026-09'][':listId'].memberships['add-from'][':sourceListId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutCrmLists202609ListIdMembershipsAddFromSourceListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.crm.lists)['2026-09'][':listId']['memberships']['add-from'][':sourceListId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCrmLists202609ListIdMembershipsAddFromSourceListIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCrmLists202609ListIdMembershipsJoinOrderQueryKey(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['memberships']['join-order']['$get']
  >,
) {
  return ['crm', '/crm/lists/2026-09/:listId/memberships/join-order', args] as const
}

export function getCrmLists202609ListIdMembershipsJoinOrderQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['memberships']['join-order']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCrmLists202609ListIdMembershipsJoinOrderQueryKey>
  >({
    queryKey: getCrmLists202609ListIdMembershipsJoinOrderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.lists['2026-09'][':listId'].memberships['join-order'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCrmLists202609ListIdMembershipsJoinOrder<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['memberships']['join-order']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getCrmLists202609ListIdMembershipsJoinOrderQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCrmLists202609ListIdMembershipsJoinOrderQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutCrmLists202609ListIdMembershipsRemoveMutationKey() {
  return ['crm', '/crm/lists/2026-09/:listId/memberships/remove', 'PUT'] as const
}

export function getPutCrmLists202609ListIdMembershipsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.crm.lists)['2026-09'][':listId']['memberships']['remove']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCrmLists202609ListIdMembershipsRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.lists)['2026-09'][':listId']['memberships']['remove']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.lists['2026-09'][':listId'].memberships.remove.$put(args, options),
      )
    },
  })
}

export function createPutCrmLists202609ListIdMembershipsRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.crm.lists)['2026-09'][':listId']['memberships']['remove']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCrmLists202609ListIdMembershipsRemoveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutCrmLists202609ListIdRestoreMutationKey() {
  return ['crm', '/crm/lists/2026-09/:listId/restore', 'PUT'] as const
}

export function getPutCrmLists202609ListIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['restore']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['restore']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCrmLists202609ListIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['restore']['$put']>,
    ) {
      return parseResponse(client.crm.lists['2026-09'][':listId'].restore.$put(args, options))
    },
  })
}

export function createPutCrmLists202609ListIdRestore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['restore']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['restore']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCrmLists202609ListIdRestoreMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCrmLists202609ListIdScheduleConversionQueryKey(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$get']
  >,
) {
  return ['crm', '/crm/lists/2026-09/:listId/schedule-conversion', args] as const
}

export function getCrmLists202609ListIdScheduleConversionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCrmLists202609ListIdScheduleConversionQueryKey>
  >({
    queryKey: getCrmLists202609ListIdScheduleConversionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.lists['2026-09'][':listId']['schedule-conversion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCrmLists202609ListIdScheduleConversion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getCrmLists202609ListIdScheduleConversionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCrmLists202609ListIdScheduleConversionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutCrmLists202609ListIdScheduleConversionMutationKey() {
  return ['crm', '/crm/lists/2026-09/:listId/schedule-conversion', 'PUT'] as const
}

export function getPutCrmLists202609ListIdScheduleConversionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCrmLists202609ListIdScheduleConversionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.lists['2026-09'][':listId']['schedule-conversion'].$put(args, options),
      )
    },
  })
}

export function createPutCrmLists202609ListIdScheduleConversion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCrmLists202609ListIdScheduleConversionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCrmLists202609ListIdScheduleConversionMutationKey() {
  return ['crm', '/crm/lists/2026-09/:listId/schedule-conversion', 'DELETE'] as const
}

export function getDeleteCrmLists202609ListIdScheduleConversionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmLists202609ListIdScheduleConversionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.lists['2026-09'][':listId']['schedule-conversion'].$delete(args, options),
      )
    },
  })
}

export function createDeleteCrmLists202609ListIdScheduleConversion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.crm.lists)['2026-09'][':listId']['schedule-conversion']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCrmLists202609ListIdScheduleConversionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCrmLists202609ListIdSizeAndEditsHistoryBetweenQueryKey(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['size-and-edits-history']['between']['$get']
  >,
) {
  return ['crm', '/crm/lists/2026-09/:listId/size-and-edits-history/between', args] as const
}

export function getCrmLists202609ListIdSizeAndEditsHistoryBetweenQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['size-and-edits-history']['between']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCrmLists202609ListIdSizeAndEditsHistoryBetweenQueryKey>
  >({
    queryKey: getCrmLists202609ListIdSizeAndEditsHistoryBetweenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.lists['2026-09'][':listId']['size-and-edits-history'].between.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCrmLists202609ListIdSizeAndEditsHistoryBetween<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.crm.lists)['2026-09'][':listId']['size-and-edits-history']['between']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getCrmLists202609ListIdSizeAndEditsHistoryBetweenQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCrmLists202609ListIdSizeAndEditsHistoryBetweenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutCrmLists202609ListIdUpdateListFiltersMutationKey() {
  return ['crm', '/crm/lists/2026-09/:listId/update-list-filters', 'PUT'] as const
}

export function getPutCrmLists202609ListIdUpdateListFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.crm.lists)['2026-09'][':listId']['update-list-filters']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCrmLists202609ListIdUpdateListFiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.lists)['2026-09'][':listId']['update-list-filters']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.lists['2026-09'][':listId']['update-list-filters'].$put(args, options),
      )
    },
  })
}

export function createPutCrmLists202609ListIdUpdateListFilters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.crm.lists)['2026-09'][':listId']['update-list-filters']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCrmLists202609ListIdUpdateListFiltersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutCrmLists202609ListIdUpdateListNameMutationKey() {
  return ['crm', '/crm/lists/2026-09/:listId/update-list-name', 'PUT'] as const
}

export function getPutCrmLists202609ListIdUpdateListNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.crm.lists)['2026-09'][':listId']['update-list-name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCrmLists202609ListIdUpdateListNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.lists)['2026-09'][':listId']['update-list-name']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.lists['2026-09'][':listId']['update-list-name'].$put(args, options),
      )
    },
  })
}

export function createPutCrmLists202609ListIdUpdateListName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.lists)['2026-09'][':listId']['update-list-name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.crm.lists)['2026-09'][':listId']['update-list-name']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCrmLists202609ListIdUpdateListNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
