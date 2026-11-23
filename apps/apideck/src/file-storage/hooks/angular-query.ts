import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFileStorageKey() {
  return ['file-storage'] as const
}

export function getFileStorageDriveGroupsQueryKey(
  args: InferRequestType<(typeof client)['file-storage']['drive-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/drive-groups', keyArgs] as const
}

export function getFileStorageDriveGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['drive-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['file-storage']['drive-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['drive-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageDriveGroupsQueryKey>
  >({
    queryKey: getFileStorageDriveGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['file-storage']['drive-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFileStorageDriveGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['drive-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['file-storage']['drive-groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['drive-groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileStorageDriveGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFileStorageDriveGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostFileStorageDriveGroupsMutationKey() {
  return ['file-storage', '/file-storage/drive-groups', 'POST'] as const
}

export function getPostFileStorageDriveGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['drive-groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['drive-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileStorageDriveGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['drive-groups']['$post']>,
    ) {
      return parseResponse(client['file-storage']['drive-groups'].$post(args, options))
    },
  })
}

export function injectPostFileStorageDriveGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['drive-groups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['drive-groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileStorageDriveGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFileStorageDriveGroupsIdQueryKey(
  args: InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/drive-groups/:id', keyArgs] as const
}

export function getFileStorageDriveGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageDriveGroupsIdQueryKey>
  >({
    queryKey: getFileStorageDriveGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['file-storage']['drive-groups'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFileStorageDriveGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileStorageDriveGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFileStorageDriveGroupsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteFileStorageDriveGroupsIdMutationKey() {
  return ['file-storage', '/file-storage/drive-groups/:id', 'DELETE'] as const
}

export function getDeleteFileStorageDriveGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFileStorageDriveGroupsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$delete']>,
    ) {
      return parseResponse(client['file-storage']['drive-groups'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteFileStorageDriveGroupsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFileStorageDriveGroupsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchFileStorageDriveGroupsIdMutationKey() {
  return ['file-storage', '/file-storage/drive-groups/:id', 'PATCH'] as const
}

export function getPatchFileStorageDriveGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFileStorageDriveGroupsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$patch']>,
    ) {
      return parseResponse(client['file-storage']['drive-groups'][':id'].$patch(args, options))
    },
  })
}

export function injectPatchFileStorageDriveGroupsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFileStorageDriveGroupsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFileStorageDrivesQueryKey(
  args: InferRequestType<(typeof client)['file-storage']['drives']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/drives', keyArgs] as const
}

export function getFileStorageDrivesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['file-storage']['drives']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['file-storage']['drives']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['file-storage']['drives']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageDrivesQueryKey>
  >({
    queryKey: getFileStorageDrivesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['file-storage'].drives.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFileStorageDrives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['file-storage']['drives']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['file-storage']['drives']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['drives']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileStorageDrivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFileStorageDrivesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostFileStorageDrivesMutationKey() {
  return ['file-storage', '/file-storage/drives', 'POST'] as const
}

export function getPostFileStorageDrivesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['drives']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['drives']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileStorageDrivesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['file-storage']['drives']['$post']>) {
      return parseResponse(client['file-storage'].drives.$post(args, options))
    },
  })
}

export function injectPostFileStorageDrives<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['drives']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['drives']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileStorageDrivesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFileStorageDrivesIdQueryKey(
  args: InferRequestType<(typeof client)['file-storage']['drives'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/drives/:id', keyArgs] as const
}

export function getFileStorageDrivesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['file-storage']['drives'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageDrivesIdQueryKey>
  >({
    queryKey: getFileStorageDrivesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['file-storage'].drives[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFileStorageDrivesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['file-storage']['drives'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileStorageDrivesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFileStorageDrivesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteFileStorageDrivesIdMutationKey() {
  return ['file-storage', '/file-storage/drives/:id', 'DELETE'] as const
}

export function getDeleteFileStorageDrivesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['drives'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFileStorageDrivesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['drives'][':id']['$delete']>,
    ) {
      return parseResponse(client['file-storage'].drives[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteFileStorageDrivesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['drives'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFileStorageDrivesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchFileStorageDrivesIdMutationKey() {
  return ['file-storage', '/file-storage/drives/:id', 'PATCH'] as const
}

export function getPatchFileStorageDrivesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['drives'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFileStorageDrivesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['drives'][':id']['$patch']>,
    ) {
      return parseResponse(client['file-storage'].drives[':id'].$patch(args, options))
    },
  })
}

export function injectPatchFileStorageDrivesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['drives'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFileStorageDrivesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFileStorageFilesQueryKey(
  args: InferRequestType<(typeof client)['file-storage']['files']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/files', keyArgs] as const
}

export function getFileStorageFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['file-storage']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['file-storage']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['file-storage']['files']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageFilesQueryKey>
  >({
    queryKey: getFileStorageFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['file-storage'].files.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFileStorageFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['file-storage']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['file-storage']['files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['files']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileStorageFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFileStorageFilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostFileStorageFilesMutationKey() {
  return ['file-storage', '/file-storage/files', 'POST'] as const
}

export function getPostFileStorageFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['file-storage']['files']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['files']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileStorageFilesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['file-storage']['files']['$post']>) {
      return parseResponse(client['file-storage'].files.$post(args, options))
    },
  })
}

export function injectPostFileStorageFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['files']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['files']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileStorageFilesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostFileStorageFilesSearchMutationKey() {
  return ['file-storage', '/file-storage/files/search', 'POST'] as const
}

export function getPostFileStorageFilesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['files']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['files']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileStorageFilesSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['files']['search']['$post']>,
    ) {
      return parseResponse(client['file-storage'].files.search.$post(args, options))
    },
  })
}

export function injectPostFileStorageFilesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['files']['search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['files']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileStorageFilesSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFileStorageFilesIdQueryKey(
  args: InferRequestType<(typeof client)['file-storage']['files'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/files/:id', keyArgs] as const
}

export function getFileStorageFilesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['file-storage']['files'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageFilesIdQueryKey>
  >({
    queryKey: getFileStorageFilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['file-storage'].files[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFileStorageFilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['file-storage']['files'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileStorageFilesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFileStorageFilesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteFileStorageFilesIdMutationKey() {
  return ['file-storage', '/file-storage/files/:id', 'DELETE'] as const
}

export function getDeleteFileStorageFilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['files'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFileStorageFilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['files'][':id']['$delete']>,
    ) {
      return parseResponse(client['file-storage'].files[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteFileStorageFilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['files'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFileStorageFilesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchFileStorageFilesIdMutationKey() {
  return ['file-storage', '/file-storage/files/:id', 'PATCH'] as const
}

export function getPatchFileStorageFilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['files'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFileStorageFilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['files'][':id']['$patch']>,
    ) {
      return parseResponse(client['file-storage'].files[':id'].$patch(args, options))
    },
  })
}

export function injectPatchFileStorageFilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['files'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFileStorageFilesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFileStorageFilesIdDownloadQueryKey(
  args: InferRequestType<(typeof client)['file-storage']['files'][':id']['download']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/files/:id/download', keyArgs] as const
}

export function getFileStorageFilesIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['file-storage']['files'][':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageFilesIdDownloadQueryKey>
  >({
    queryKey: getFileStorageFilesIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['file-storage'].files[':id'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFileStorageFilesIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['file-storage']['files'][':id']['download']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['file-storage']['files'][':id']['download']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileStorageFilesIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFileStorageFilesIdDownloadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostFileStorageFoldersMutationKey() {
  return ['file-storage', '/file-storage/folders', 'POST'] as const
}

export function getPostFileStorageFoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['folders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['folders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileStorageFoldersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['file-storage']['folders']['$post']>) {
      return parseResponse(client['file-storage'].folders.$post(args, options))
    },
  })
}

export function injectPostFileStorageFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['folders']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['folders']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileStorageFoldersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFileStorageFoldersIdQueryKey(
  args: InferRequestType<(typeof client)['file-storage']['folders'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/folders/:id', keyArgs] as const
}

export function getFileStorageFoldersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['file-storage']['folders'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageFoldersIdQueryKey>
  >({
    queryKey: getFileStorageFoldersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['file-storage'].folders[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFileStorageFoldersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['file-storage']['folders'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileStorageFoldersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFileStorageFoldersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteFileStorageFoldersIdMutationKey() {
  return ['file-storage', '/file-storage/folders/:id', 'DELETE'] as const
}

export function getDeleteFileStorageFoldersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['folders'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFileStorageFoldersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['folders'][':id']['$delete']>,
    ) {
      return parseResponse(client['file-storage'].folders[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteFileStorageFoldersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['folders'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFileStorageFoldersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchFileStorageFoldersIdMutationKey() {
  return ['file-storage', '/file-storage/folders/:id', 'PATCH'] as const
}

export function getPatchFileStorageFoldersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['folders'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFileStorageFoldersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['folders'][':id']['$patch']>,
    ) {
      return parseResponse(client['file-storage'].folders[':id'].$patch(args, options))
    },
  })
}

export function injectPatchFileStorageFoldersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['folders'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFileStorageFoldersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostFileStorageFoldersIdCopyMutationKey() {
  return ['file-storage', '/file-storage/folders/:id/copy', 'POST'] as const
}

export function getPostFileStorageFoldersIdCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['copy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['folders'][':id']['copy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileStorageFoldersIdCopyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['folders'][':id']['copy']['$post']>,
    ) {
      return parseResponse(client['file-storage'].folders[':id'].copy.$post(args, options))
    },
  })
}

export function injectPostFileStorageFoldersIdCopy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['file-storage']['folders'][':id']['copy']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['folders'][':id']['copy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileStorageFoldersIdCopyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFileStorageSharedLinksQueryKey(
  args: InferRequestType<(typeof client)['file-storage']['shared-links']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/shared-links', keyArgs] as const
}

export function getFileStorageSharedLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['shared-links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['file-storage']['shared-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['shared-links']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageSharedLinksQueryKey>
  >({
    queryKey: getFileStorageSharedLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['file-storage']['shared-links'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFileStorageSharedLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['shared-links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['file-storage']['shared-links']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['shared-links']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileStorageSharedLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFileStorageSharedLinksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostFileStorageSharedLinksMutationKey() {
  return ['file-storage', '/file-storage/shared-links', 'POST'] as const
}

export function getPostFileStorageSharedLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['shared-links']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['shared-links']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileStorageSharedLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['shared-links']['$post']>,
    ) {
      return parseResponse(client['file-storage']['shared-links'].$post(args, options))
    },
  })
}

export function injectPostFileStorageSharedLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['shared-links']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['shared-links']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileStorageSharedLinksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFileStorageSharedLinksIdQueryKey(
  args: InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/shared-links/:id', keyArgs] as const
}

export function getFileStorageSharedLinksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageSharedLinksIdQueryKey>
  >({
    queryKey: getFileStorageSharedLinksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['file-storage']['shared-links'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFileStorageSharedLinksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileStorageSharedLinksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFileStorageSharedLinksIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteFileStorageSharedLinksIdMutationKey() {
  return ['file-storage', '/file-storage/shared-links/:id', 'DELETE'] as const
}

export function getDeleteFileStorageSharedLinksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFileStorageSharedLinksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$delete']>,
    ) {
      return parseResponse(client['file-storage']['shared-links'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteFileStorageSharedLinksId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFileStorageSharedLinksIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchFileStorageSharedLinksIdMutationKey() {
  return ['file-storage', '/file-storage/shared-links/:id', 'PATCH'] as const
}

export function getPatchFileStorageSharedLinksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFileStorageSharedLinksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$patch']>,
    ) {
      return parseResponse(client['file-storage']['shared-links'][':id'].$patch(args, options))
    },
  })
}

export function injectPatchFileStorageSharedLinksId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFileStorageSharedLinksIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostFileStorageUploadSessionsMutationKey() {
  return ['file-storage', '/file-storage/upload-sessions', 'POST'] as const
}

export function getPostFileStorageUploadSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['upload-sessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileStorageUploadSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['upload-sessions']['$post']>,
    ) {
      return parseResponse(client['file-storage']['upload-sessions'].$post(args, options))
    },
  })
}

export function injectPostFileStorageUploadSessions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['upload-sessions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileStorageUploadSessionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFileStorageUploadSessionsIdQueryKey(
  args: InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-storage', '/file-storage/upload-sessions/:id', keyArgs] as const
}

export function getFileStorageUploadSessionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageUploadSessionsIdQueryKey>
  >({
    queryKey: getFileStorageUploadSessionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['file-storage']['upload-sessions'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFileStorageUploadSessionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFileStorageUploadSessionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFileStorageUploadSessionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutFileStorageUploadSessionsIdMutationKey() {
  return ['file-storage', '/file-storage/upload-sessions/:id', 'PUT'] as const
}

export function getPutFileStorageUploadSessionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFileStorageUploadSessionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$put']>,
    ) {
      return parseResponse(client['file-storage']['upload-sessions'][':id'].$put(args, options))
    },
  })
}

export function injectPutFileStorageUploadSessionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFileStorageUploadSessionsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteFileStorageUploadSessionsIdMutationKey() {
  return ['file-storage', '/file-storage/upload-sessions/:id', 'DELETE'] as const
}

export function getDeleteFileStorageUploadSessionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFileStorageUploadSessionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$delete']>,
    ) {
      return parseResponse(client['file-storage']['upload-sessions'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteFileStorageUploadSessionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFileStorageUploadSessionsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostFileStorageUploadSessionsIdFinishMutationKey() {
  return ['file-storage', '/file-storage/upload-sessions/:id/finish', 'POST'] as const
}

export function getPostFileStorageUploadSessionsIdFinishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['finish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileStorageUploadSessionsIdFinishMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['file-storage']['upload-sessions'][':id']['finish']['$post']
      >,
    ) {
      return parseResponse(
        client['file-storage']['upload-sessions'][':id'].finish.$post(args, options),
      )
    },
  })
}

export function injectPostFileStorageUploadSessionsIdFinish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['file-storage']['upload-sessions'][':id']['finish']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['file-storage']['upload-sessions'][':id']['finish']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileStorageUploadSessionsIdFinishMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
