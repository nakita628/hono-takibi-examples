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

export function getAssociationsKey() {
  return ['Associations'] as const
}

export function getFilesKey() {
  return ['Files'] as const
}

export function getFoldersKey() {
  return ['Folders'] as const
}

export function getInboxKey() {
  return ['Inbox'] as const
}

export function getFilesQueryKey(args: InferRequestType<typeof client.Files.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Files', '/Files', keyArgs] as const
}

export function getFilesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Files.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Files.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFilesQueryKey>
  >({
    queryKey: getFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Files.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Files.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Files.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Files.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostFilesMutationKey() {
  return ['Files', '/Files', 'POST'] as const
}

export function getPostFilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Files.$post>>>>>,
    TError,
    InferRequestType<typeof client.Files.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Files.$post>) {
      return parseResponse(client.Files.$post(args, options))
    },
  })
}

export function injectPostFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Files.$post>>>>>,
        TError,
        InferRequestType<typeof client.Files.$post>,
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
    const mutationDefaults = getPostFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFilesFileIdQueryKey(
  args: InferRequestType<(typeof client.Files)[':FileId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Files', '/Files/:FileId', keyArgs] as const
}

export function getFilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FileId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Files)[':FileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FileId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdQueryKey>
  >({
    queryKey: getFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Files[':FileId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFilesFileId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FileId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Files)[':FileId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FileId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesFileIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutFilesFileIdMutationKey() {
  return ['Files', '/Files/:FileId', 'PUT'] as const
}

export function getPutFilesFileIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FileId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Files)[':FileId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFilesFileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Files)[':FileId']['$put']>) {
      return parseResponse(client.Files[':FileId'].$put(args, options))
    },
  })
}

export function injectPutFilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FileId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.Files)[':FileId']['$put']>,
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
    const mutationDefaults = getPutFilesFileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteFilesFileIdMutationKey() {
  return ['Files', '/Files/:FileId', 'DELETE'] as const
}

export function getDeleteFilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FileId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Files)[':FileId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesFileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Files)[':FileId']['$delete']>) {
      return parseResponse(client.Files[':FileId'].$delete(args, options))
    },
  })
}

export function injectDeleteFilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FileId']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Files)[':FileId']['$delete']>,
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
    const mutationDefaults = getDeleteFilesFileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostFilesFolderIdMutationKey() {
  return ['Files', '/Files/:FolderId', 'POST'] as const
}

export function getPostFilesFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FolderId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Files)[':FolderId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesFolderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Files)[':FolderId']['$post']>) {
      return parseResponse(client.Files[':FolderId'].$post(args, options))
    },
  })
}

export function injectPostFilesFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FolderId']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.Files)[':FolderId']['$post']>,
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
    const mutationDefaults = getPostFilesFolderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFilesFileIdContentQueryKey(
  args: InferRequestType<(typeof client.Files)[':FileId']['Content']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Files', '/Files/:FileId/Content', keyArgs] as const
}

export function getFilesFileIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FileId']['Content']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Files)[':FileId']['Content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Files)[':FileId']['Content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdContentQueryKey>
  >({
    queryKey: getFilesFileIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Files[':FileId'].Content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFilesFileIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FileId']['Content']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Files)[':FileId']['Content']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Files)[':FileId']['Content']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdContentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesFileIdContentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFilesFileIdAssociationsQueryKey(
  args: InferRequestType<(typeof client.Files)[':FileId']['Associations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Files', '/Files/:FileId/Associations', keyArgs] as const
}

export function getFilesFileIdAssociationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Files)[':FileId']['Associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Files)[':FileId']['Associations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Files)[':FileId']['Associations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdAssociationsQueryKey>
  >({
    queryKey: getFilesFileIdAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Files[':FileId'].Associations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFilesFileIdAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Files)[':FileId']['Associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Files)[':FileId']['Associations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Files)[':FileId']['Associations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdAssociationsQueryKey>
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
      ...getFilesFileIdAssociationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostFilesFileIdAssociationsMutationKey() {
  return ['Files', '/Files/:FileId/Associations', 'POST'] as const
}

export function getPostFilesFileIdAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Files)[':FileId']['Associations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Files)[':FileId']['Associations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesFileIdAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Files)[':FileId']['Associations']['$post']>,
    ) {
      return parseResponse(client.Files[':FileId'].Associations.$post(args, options))
    },
  })
}

export function injectPostFilesFileIdAssociations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Files)[':FileId']['Associations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Files)[':FileId']['Associations']['$post']>,
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
    const mutationDefaults = getPostFilesFileIdAssociationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteFilesFileIdAssociationsObjectIdMutationKey() {
  return ['Files', '/Files/:FileId/Associations/:ObjectId', 'DELETE'] as const
}

export function getDeleteFilesFileIdAssociationsObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Files)[':FileId']['Associations'][':ObjectId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Files)[':FileId']['Associations'][':ObjectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesFileIdAssociationsObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Files)[':FileId']['Associations'][':ObjectId']['$delete']
      >,
    ) {
      return parseResponse(client.Files[':FileId'].Associations[':ObjectId'].$delete(args, options))
    },
  })
}

export function injectDeleteFilesFileIdAssociationsObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Files)[':FileId']['Associations'][':ObjectId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Files)[':FileId']['Associations'][':ObjectId']['$delete']>,
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
    const mutationDefaults = getDeleteFilesFileIdAssociationsObjectIdMutationOptions<
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

export function getAssociationsObjectIdQueryKey(
  args: InferRequestType<(typeof client.Associations)[':ObjectId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Associations', '/Associations/:ObjectId', keyArgs] as const
}

export function getAssociationsObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Associations)[':ObjectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Associations)[':ObjectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Associations)[':ObjectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsObjectIdQueryKey>
  >({
    queryKey: getAssociationsObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Associations[':ObjectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAssociationsObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Associations)[':ObjectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Associations)[':ObjectId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Associations)[':ObjectId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssociationsObjectIdQueryKey>
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
      ...getAssociationsObjectIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAssociationsCountQueryKey(
  args: InferRequestType<typeof client.Associations.Count.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Associations', '/Associations/Count', keyArgs] as const
}

export function getAssociationsCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Associations.Count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Associations.Count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Associations.Count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsCountQueryKey>
  >({
    queryKey: getAssociationsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Associations.Count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAssociationsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Associations.Count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Associations.Count.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Associations.Count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssociationsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAssociationsCountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFoldersQueryKey(args: InferRequestType<typeof client.Folders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Folders', '/Folders', keyArgs] as const
}

export function getFoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Folders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Folders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Folders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFoldersQueryKey>
  >({
    queryKey: getFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Folders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Folders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Folders.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFoldersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostFoldersMutationKey() {
  return ['Folders', '/Folders', 'POST'] as const
}

export function getPostFoldersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Folders.$post>>>>>,
    TError,
    InferRequestType<typeof client.Folders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Folders.$post>) {
      return parseResponse(client.Folders.$post(args, options))
    },
  })
}

export function injectPostFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Folders.$post>>>>>,
        TError,
        InferRequestType<typeof client.Folders.$post>,
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
    const mutationDefaults = getPostFoldersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFoldersFolderIdQueryKey(
  args: InferRequestType<(typeof client.Folders)[':FolderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Folders', '/Folders/:FolderId', keyArgs] as const
}

export function getFoldersFolderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Folders)[':FolderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Folders)[':FolderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Folders)[':FolderId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdQueryKey>
  >({
    queryKey: getFoldersFolderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Folders[':FolderId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFoldersFolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Folders)[':FolderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Folders)[':FolderId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Folders)[':FolderId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFoldersFolderIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutFoldersFolderIdMutationKey() {
  return ['Folders', '/Folders/:FolderId', 'PUT'] as const
}

export function getPutFoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Folders)[':FolderId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Folders)[':FolderId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFoldersFolderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Folders)[':FolderId']['$put']>) {
      return parseResponse(client.Folders[':FolderId'].$put(args, options))
    },
  })
}

export function injectPutFoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Folders)[':FolderId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.Folders)[':FolderId']['$put']>,
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
    const mutationDefaults = getPutFoldersFolderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteFoldersFolderIdMutationKey() {
  return ['Folders', '/Folders/:FolderId', 'DELETE'] as const
}

export function getDeleteFoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Folders)[':FolderId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Folders)[':FolderId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFoldersFolderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Folders)[':FolderId']['$delete']>) {
      return parseResponse(client.Folders[':FolderId'].$delete(args, options))
    },
  })
}

export function injectDeleteFoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Folders)[':FolderId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Folders)[':FolderId']['$delete']>,
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
    const mutationDefaults = getDeleteFoldersFolderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getInboxQueryKey(args: InferRequestType<typeof client.Inbox.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Inbox', '/Inbox', keyArgs] as const
}

export function getInboxQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Inbox.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Inbox.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Inbox.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInboxQueryKey>
  >({
    queryKey: getInboxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Inbox.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInbox<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Inbox.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Inbox.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Inbox.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInboxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInboxQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
